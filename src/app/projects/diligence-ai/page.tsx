import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function DiligenceAIPage() {
    return (
        <div className="bg-white min-h-screen">
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/#projects" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>
                    <Link
                        href="https://diligence-ai-rho.vercel.app/"
                        target="_blank"
                        className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                    >
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-16">
                <div className="space-y-10">
                    {/* Header */}
                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 text-xs font-mono bg-orange-100 text-orange-700 rounded-full">
                            AI-Native Venture Capital Tool
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Diligence AI
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl">
                            Automating the first 80% of venture capital deal screening by turning a startup's landing page into a structured, YC-style investment memo.
                        </p>
                    </div>

                    {/* Problem Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">The Problem</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Venture capitalists and angel investors are often overwhelmed by the volume of inbound startup pitches. Manually reviewing every landing page to understand the core value proposition, market fit, and technical moat is time-consuming and often leads to decision fatigue or missed opportunities.
                        </p>
                    </section>

                    {/* Solution Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">The Solution</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">Automated Analysis</h3>
                                <p className="text-sm text-slate-600">Transforms any startup landing page into a comprehensive investment memo using advanced LLM reasoning.</p>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">YC Partner Persona</h3>
                                <p className="text-sm text-slate-600">Few-shot prompted AI that thinks like Paul Graham—skeptical, analytical, and focused on "hair on fire" problems.</p>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">Detailed Scoring</h3>
                                <p className="text-sm text-slate-600">Weighted scores for Problem Intensity (40%), Technical Moat (30%), Market Potential (20%), and Clarity (10%).</p>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">Jargon Detection</h3>
                                <p className="text-sm text-slate-600">Automatically flags "Obscure Marketing Speak" that often hides a lack of product substance.</p>
                            </div>
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">Technical Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Groq API", "Llama 3.3 70B", "Jina Reader API", "Vercel"].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-slate-900 text-white text-sm font-mono rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Impact & Design */}
                    <section className="space-y-4 bg-orange-50 p-6 rounded-xl border border-orange-100">
                        <h2 className="text-2xl font-bold text-slate-900">Design Philosophy</h2>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-2">
                                <span className="text-orange-600 font-bold">→</span>
                                Minimalist YC-inspired aesthetic focusing on pure information density.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-orange-600 font-bold">→</span>
                                Terminal-style processing animations for visual feedback during AI inference.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-orange-600 font-bold">→</span>
                                Privacy-first architecture using LocalStorage for memo history.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-orange-600 font-bold">→</span>
                                Robust scraping pipeline that cleans web noise to focus LLM attention on core content.
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
}
