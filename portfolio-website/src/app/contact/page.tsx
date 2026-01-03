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
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
                    <p className="text-xl text-[#9CA3AF]">
                        Direct channels only. No forms.
                    </p>
                </div>

                <div className="grid gap-6">
                    {/* Email Card */}
                    <div className="bg-[#141922] border border-[#1F2937] p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#F59E0B]/50 transition-colors group">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-[#F59E0B]/10 text-[#F59E0B] rounded-xl group-hover:bg-[#F59E0B] group-hover:text-white transition-colors">
                                <Mail size={32} />
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-[#6B7280] uppercase font-semibold tracking-wider mb-1">Email</div>
                                <div className="text-xl md:text-2xl font-bold text-white break-all">{email}</div>
                            </div>
                        </div>

                        <button
                            onClick={handleCopy}
                            className="px-6 py-3 bg-[#1F2937] hover:bg-[#374151] text-white font-semibold rounded-lg transition-all flex items-center min-w-[140px] justify-center"
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

                    {/* LinkedIn Card */}
                    <a
                        href="https://www.linkedin.com/in/samuel-m-049988249"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#141922] border border-[#1F2937] p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#F59E0B]/50 transition-colors group"
                    >
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-[#1F2937] text-[#9CA3AF] rounded-xl group-hover:bg-[#F59E0B] group-hover:text-white transition-colors">
                                <Linkedin size={32} />
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-[#6B7280] uppercase font-semibold tracking-wider mb-1">LinkedIn</div>
                                <div className="text-xl md:text-2xl font-bold text-white">Connect on LinkedIn</div>
                            </div>
                        </div>
                        <div className="px-6 py-3 text-[#9CA3AF] group-hover:text-white transition-colors">
                            <ExternalLink size={24} />
                        </div>
                    </a>

                    {/* GitHub Card */}
                    <a
                        href="https://github.com/Samuelm018"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#141922] border border-[#1F2937] p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#F59E0B]/50 transition-colors group"
                    >
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-[#1F2937] text-[#9CA3AF] rounded-xl group-hover:bg-[#F59E0B] group-hover:text-white transition-colors">
                                <Github size={32} />
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-[#6B7280] uppercase font-semibold tracking-wider mb-1">GitHub</div>
                                <div className="text-xl md:text-2xl font-bold text-white">Check out my Repos</div>
                            </div>
                        </div>
                        <div className="px-6 py-3 text-[#9CA3AF] group-hover:text-white transition-colors">
                            <ExternalLink size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
