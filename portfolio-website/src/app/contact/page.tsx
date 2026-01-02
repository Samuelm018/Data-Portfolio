"use client";

import { Mail, Linkedin, Github, Check, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [copied, setCopied] = useState(false);
    const email = "samuelm99729.work@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="py-20 flex items-center min-h-[calc(100vh-theme(spacing.16))]">
            <div className="container-custom max-w-3xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Connect</h1>
                    <p className="text-xl text-gray-400">
                        I&apos;m currently looking for Data Analyst opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                </div>

                <div className="grid gap-6">
                    <div className="bg-card border border-gray-800 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-primary/50 transition-colors group">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                <Mail size={32} />
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-gray-500 uppercase font-semibold tracking-wider mb-1">Email</div>
                                <div className="text-xl md:text-2xl font-bold text-white break-all">{email}</div>
                            </div>
                        </div>

                        <button
                            onClick={handleCopy}
                            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all flex items-center min-w-[140px] justify-center"
                        >
                            {copied ? (
                                <>
                                    <Check className="mr-2" size={20} /> Copied
                                </>
                            ) : (
                                <>
                                    <Copy className="mr-2" size={20} /> Copy
                                </>
                            )}
                        </button>
                    </div>

                    <a
                        href="https://www.linkedin.com/in/samuel-m-049988249"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-card border border-gray-800 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#0077b5]/50 transition-colors group"
                    >
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-[#0077b5]/10 text-[#0077b5] rounded-xl group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                                <Linkedin size={32} />
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-gray-500 uppercase font-semibold tracking-wider mb-1">LinkedIn</div>
                                <div className="text-xl md:text-2xl font-bold text-white">Connect on LinkedIn</div>
                            </div>
                        </div>
                        <div className="px-6 py-3 text-gray-400 group-hover:text-white transition-colors">
                            <ExternalLink size={24} />
                        </div>
                    </a>

                    <a
                        href="https://github.com/Samuelm018"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-card border border-gray-800 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-gray-500 transition-colors group"
                    >
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-gray-700/10 text-gray-300 rounded-xl group-hover:bg-white group-hover:text-black transition-colors">
                                <Github size={32} />
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-gray-500 uppercase font-semibold tracking-wider mb-1">GitHub</div>
                                <div className="text-xl md:text-2xl font-bold text-white">Check out my Repos</div>
                            </div>
                        </div>
                        <div className="px-6 py-3 text-gray-400 group-hover:text-white transition-colors">
                            <ExternalLink size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
