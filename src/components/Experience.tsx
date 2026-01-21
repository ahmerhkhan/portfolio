import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";

export default function Experience() {
    const roles = [
        {
            company: "Stealth Fintech",
            role: "Co-Founder",
            period: "June 2025 - Present",
            description: "Architecting algorithmic trading infrastructure for the Pakistan Stock Exchange.",
            details: [
                { label: "The Build", text: "Engineered a full-stack trading MVP with a Python/Pandas backtesting engine and FastAPI layer." },
                { label: "The Strategy", text: "Conducted user research with 15+ stakeholders to identify gaps in PSX infrastructure." },
                { label: "The Outcome", text: "Led incubation at IBA CED and secured an initial waitlist of quant traders." }
            ],
            href: "/experience/stealth-fintech"
        }
    ];

    return (
        <section className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Experience</h2>

            <div className="space-y-6">
                {roles.map((role, index) => (
                    <Link
                        key={index}
                        href={role.href}
                        className="block group border border-slate-200 rounded-xl p-6 bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-slate-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                                <Briefcase className="w-6 h-6 text-slate-500 group-hover:text-blue-600 transition-colors" />
                            </div>

                            <div className="flex-1 space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                    <h3 className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors">{role.role}</h3>
                                    <span className="font-mono text-sm text-slate-500">{role.period}</span>
                                </div>

                                <div className="inline-flex items-center gap-2 text-blue-600 font-bold">
                                    {role.company}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>

                                <p className="text-slate-700 italic">{role.description}</p>

                                <div className="pt-2 space-y-2">
                                    {role.details.map((detail, i) => (
                                        <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-2 text-slate-600 text-sm">
                                            <span className="font-bold text-slate-500 shrink-0 uppercase tracking-wide">{detail.label}:</span>
                                            <span>{detail.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
