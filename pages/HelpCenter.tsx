"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const HelpCenterPage = () => (
    <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
            <Card className="bg-white shadow-md border border-gray-200">
                <CardContent className="p-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold mb-6 mt-5 text-gray-900">
                            Hirementis Help Center
                        </h1>
                        <p className="text-sm text-gray-600 mb-8">
                            Welcome to the Hirementis Help Center! We're here to
                            support you every step of the way. Below you'll find
                            answers to common questions, guides, and resources
                            to help you get the most out of our platform.
                        </p>

                        <div className="space-y-8">
                            <section>
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                    🔐 Getting Started
                                </h2>
                                <div className="space-y-6 text-gray-700">
                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            How do I create an account?
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                Click on the{" "}
                                                <strong>Sign Up</strong> button
                                                on the homepage
                                            </li>
                                            <li>
                                                Enter your name, email, and
                                                password
                                            </li>
                                            <li>
                                                Confirm your email address and
                                                log in
                                            </li>
                                            <li>
                                                We also support <b>Google</b>{" "}
                                                login
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            How do I log in?
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                Click on <strong>Login</strong>{" "}
                                                at the top right corner
                                            </li>
                                            <li>
                                                Enter your registered email and
                                                password
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                    💼 Jobs & Applications(Comming Soon)
                                </h2>
                                <div className="space-y-6 text-gray-700">
                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            How can I view available jobs?
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                Go to the <strong>Jobs</strong>{" "}
                                                section from the top menu
                                            </li>
                                            <li>
                                                Browse through the listings and
                                                click on a job to see more
                                                details
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            How do I apply for a job?
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Login to your account</li>
                                            <li>
                                                Open a job listing and click on{" "}
                                                <strong>Start Interview</strong>
                                            </li>
                                            <li>
                                                (If required) Enter the secret
                                                key
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                    🎤 Mock Interviews
                                </h2>
                                <div className="space-y-6 text-gray-700">
                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            What is a mock interview?
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                A simulated interview experience
                                                powered by AI
                                            </li>
                                            <li>
                                                Helps you practice questions
                                                related to your selected job
                                                role
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            How do I start a mock interview?
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Visit a job detail page</li>
                                            <li>
                                                Click on{" "}
                                                <strong>Start Interview</strong>
                                            </li>
                                            <li>
                                                Enter the secret key (temporary
                                                phase only)
                                            </li>
                                            <li>
                                                Read instructions and begin the
                                                interview
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            When will the secret key be removed?
                                        </h3>
                                        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                                            <p>
                                                Due to credit limitations, the
                                                key is required for the first
                                                10–15 days. After that,
                                                interviews will be freely
                                                accessible to all users.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
);

export default HelpCenterPage;
