import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { jobs } from "@/data/jobs";

const Jobs = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-24">
                <div className="w-full bg-green-50 border-b border-green-200 text-neutral-500 py-3 mb-4">
                    <div className="container mx-auto px-4">
                        <p className="text-black-800 text-sm font-medium">
                            Note :- These are the dummy jobs created by Team
                            HireMentis for Your Practice.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
