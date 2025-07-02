"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const DocumentationPage = () => (
    <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
            <Card className="bg-white shadow-md border border-gray-200">
                <CardContent className="p-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold mb-6 mt-5 text-gray-900">
                            Hirementis: AI Mock Interview Platform
                        </h1>
                        <p className="text-sm text-gray-600 mb-8">
                            Platform Overview & Features
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
);
export default DocumentationPage;
