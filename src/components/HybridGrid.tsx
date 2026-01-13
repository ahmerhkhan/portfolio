import { Component, Terminal } from "lucide-react";

export default function HybridGrid() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-6 items-stretch">

                {/* Product Strategy Card */}
                <div className="p-8 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Component className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Product Strategy</h3>
                    </div>

                    <ul className="space-y-6 flex-grow">
                        {[
                            "Market Validation & User Research",
                            "MVP Architecture & Roadmap Planning",
                            "Pricing & Unit Economics",
                            "Go-to-Market Strategy",
                            "Business Intelligence (Power BI, SQL)"
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium leading-relaxed">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Technical Execution Card */}
                <div className="p-8 border border-slate-200 rounded-xl bg-slate-900 text-white shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-teal-900/50 rounded-lg">
                            <Terminal className="w-6 h-6 text-teal-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Technical Execution</h3>
                    </div>

                    <div className="space-y-6 flex-grow">
                        <div className="space-y-2">
                            <div className="font-mono text-sm text-slate-400 uppercase tracking-wider">Frontend</div>
                            <p className="text-slate-200 font-medium">Next.js, Tailwind CSS, TypeScript</p>
                        </div>

                        <div className="space-y-2">
                            <div className="font-mono text-sm text-slate-400 uppercase tracking-wider">Backend</div>
                            <p className="text-slate-200 font-medium">Python (FastAPI), Supabase, PostgreSQL</p>
                        </div>

                        <div className="space-y-2">
                            <div className="font-mono text-sm text-slate-400 uppercase tracking-wider">Mobile</div>
                            <p className="text-slate-200 font-medium">Ionic, Capacitor, React</p>
                        </div>

                        <div className="space-y-2">
                            <div className="font-mono text-sm text-slate-400 uppercase tracking-wider">AI-Native Workflow</div>
                            <p className="text-slate-200 font-medium">Prompt Engineering, Cursor-Assisted Build, LLM Integration</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
