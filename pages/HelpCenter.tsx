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

                        <div className="space-y-8"></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
);

export default HelpCenterPage;
