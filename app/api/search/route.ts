/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from "next/server";

import { gemini } from "@/components/ai/gemini/client";
import systemPrompt from "@/components/ai/prompt/system.prompt";
import { portfolioTools } from "@/components/ai/tools/portfolio.tools";
import toolRegistry from "@/components/ai/tools/toolRegistry";

export async function POST(req: NextRequest) {
    try {
        const { question, history = [] } = await req.json();

        const conversation: any[] = [
            ...history,
            {
                role: "user",
                parts: [
                    {
                        text: question,
                    },
                ],
            },
        ];

        const toolsUsed: string[] = [];

        while (true) {
            const response = await gemini.models.generateContent({
                model: "gemini-3.5-flash-lite",
                contents: conversation,
                config: {
                    systemInstruction: systemPrompt,
                    tools: portfolioTools,
                },
            });

            const parts =
                response.candidates?.[0]?.content?.parts ?? [];

            const functionCalls = parts
                .filter((part) => part.functionCall)
                .map((part) => part.functionCall!);

            /**
             * No tool calls.
             * Gemini has enough information.
             */
            if (functionCalls.length === 0) {

                console.log("\n========== FINAL AI RESPONSE ==========\n");

                console.log(response.text);

                console.log("\n=======================================\n");
                return NextResponse.json({
                    answer: response.text,
                    toolsUsed,
                });
            }

            /**
             * Preserve Gemini's response
             */
            conversation.push({
                role: "model",
                parts,
            });

            /**
             * Execute EVERY tool Gemini requested
             */
            for (const functionCall of functionCalls) {
                if (!functionCall.name) {
                    continue;
                }

                const tool =
                    toolRegistry[
                    functionCall.name as keyof typeof toolRegistry
                    ];

                if (!tool) {
                    console.warn(
                        `Unknown tool: ${functionCall.name}`
                    );
                    continue;
                }

                toolsUsed.push(functionCall.name);

                const result = await tool(
                    functionCall.args ?? {}
                );

                conversation.push({
                    role: "user",
                    parts: [
                        {
                            functionResponse: {
                                name: functionCall.name,
                                response: {
                                    result,
                                },
                            },
                        },
                    ],
                });
            }

            console.log(
                "Conversation:",
                JSON.stringify(conversation, null, 2),
                parts
            );
        }
    } catch (error) {
        console.error("AI ERROR:", error);

        return NextResponse.json(
            {
                answer: "Sorry, something went wrong.",
            },
            {
                status: 500,
            }
        );
    }
}