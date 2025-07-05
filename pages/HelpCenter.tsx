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
                            <section>
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                    🧠 Interview Feedback
                                </h2>
                                <div className="space-y-6 text-gray-700">
                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            Where can I view my feedback?
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                Go to your{" "}
                                                <strong>Profile</strong> by
                                                clicking the icon at the top
                                                right
                                            </li>
                                            <li>
                                                View your list of completed
                                                interviews
                                            </li>
                                            <li>
                                                Click on any interview to view
                                                the detailed feedback
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                    👤 Profile & Settings
                                </h2>
                                <div className="space-y-6 text-gray-700">
                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            How do I update my profile?
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Click on your profile icon</li>
                                            <li>
                                                Basic Information: Name, profile
                                                image, detailed bio (up to 500
                                                characters)
                                            </li>
                                            <li>
                                                Location & Pronouns: Choose your
                                                city and preferred pronouns
                                            </li>
                                            <li>
                                                Links: Personal website and
                                                calendar booking link
                                            </li>
                                            <li>
                                                Skills and Tags: Add up to 10
                                                relevant skills, tools, or roles
                                                (e.g. ReactJS, Fullstack
                                                Developer)
                                            </li>
                                            <li>
                                                Suggested Skills: Easily add
                                                popular skills from our
                                                recommendation list
                                            </li>
                                            <li>
                                                Social Media Links: Add Twitter,
                                                LinkedIn, Instagram, and GitHub
                                                handles
                                            </li>
                                            <li>
                                                Make sure to Save Profile after
                                                making updates!
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                    🏢 Enterprise Support(Comming Soon)
                                </h2>
                                <div className="space-y-6 text-gray-700">
                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            I'm an organization. How do I post a
                                            job?
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                Subscribe to the{" "}
                                                <strong>Enterprise Plan</strong>
                                            </li>
                                            <li>
                                                Use the dashboard to post jobs
                                                and view applications
                                            </li>
                                            <li>
                                                Approve profiles of candidates
                                                that match your requirements
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            How much does it cost?
                                        </h3>
                                        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                                            <p>
                                                <strong>
                                                    Enterprise Job Posting
                                                    Package:
                                                </strong>{" "}
                                                $99 for 50 interviews
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                    🛠 Troubleshooting
                                </h2>
                                <div className="space-y-6 text-gray-700">
                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            I'm not receiving the confirmation
                                            email
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                Check your spam or promotions
                                                folder
                                            </li>
                                            <li>
                                                If it's still missing, contact
                                                us at{" "}
                                                <strong>
                                                    suprabhat.work@gmail.com
                                                </strong>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            My interview didn't start properly
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                Refresh the page or clear your
                                                browser cache
                                            </li>
                                            <li>
                                                Ensure you have a stable
                                                internet connection
                                            </li>
                                            <li>
                                                Contact support if the issue
                                                persists
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            Interview feedback is not loading
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                Wait a few minutes after
                                                completing the interview for
                                                feedback to process
                                            </li>
                                            <li>Refresh your profile page</li>
                                            <li>
                                                If the issue continues, reach
                                                out to our support team
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-3 text-gray-800">
                                            Audio/Video issues during interview
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                Check your microphone and camera
                                                permissions in browser settings
                                            </li>
                                            <li>
                                                Ensure you're using a supported
                                                browser (Chrome, Firefox,
                                                Safari)
                                            </li>
                                            <li>
                                                Test your audio/video before
                                                starting the interview
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
