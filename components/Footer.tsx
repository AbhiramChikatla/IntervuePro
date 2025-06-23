"use client";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                                H
                            </div>
                            <span className="text-lg font-bold">
                                HireMentis
                            </span>
                        </div>
                        <p className="text-gray-500 mb-6">
                            Helping job seekers land their dream roles through
                            AI-powered interview preparation.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://x.com/HireMentis"
                                target="_blank"
                                className="text-gray-400 hover:text-emerald-500"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/hirementis/"
                                target="_blank"
                                className="text-gray-400 hover:text-emerald-500"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/#features"
                                    className="text-gray-600 hover:text-emerald-600"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#pricing"
                                    className="text-gray-600 hover:text-emerald-600"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#testimonials"
                                    className="text-gray-600 hover:text-emerald-600"
                                >
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/enterprise"
                                    className="text-gray-600 hover:text-emerald-600"
                                >
                                    Enterprise
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/helpcenter"
                                    className="text-gray-600 hover:text-emerald-600"
                                >
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/documentation"
                                    className="text-gray-600 hover:text-emerald-600"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:suprabhat.work@gmail.com"
                                    className="text-gray-600 hover:text-emerald-600"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-emerald-600"
                                >
                                    Status
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/documentation"
                                    className="text-gray-600 hover:text-emerald-600"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/founders"
                                    className="text-gray-600 hover:text-emerald-600"
                                >
                                    Meet the Founders
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-emerald-600"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-emerald-600"
                                >
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-500 text-sm">
                            © 2025 HireMentis. All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <a
                            href="/privacy"
                            className="text-gray-500 text-sm hover:text-emerald-600"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/terms"
                            className="text-gray-500 text-sm hover:text-emerald-600"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
