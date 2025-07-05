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
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
);

export default HelpCenterPage;
