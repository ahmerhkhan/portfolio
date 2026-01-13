import { Briefcase } from "lucide-react";
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
        },
        {
            company: "Venue Management SaaS",
            role: "Product Lead",
            period: "Jan 2026 - Present",
            description: "Building 'Conflict Guard' technology for B2B event venues.",
            details: [
                { label: "The Build", text: "Shipped a responsive Admin Dashboard using Next.js and Tailwind CSS." },
                { label: "The Strategy", text: "Mapped user journeys to design logic that eliminates double-bookings." },
                { label: "The Outcome", text: "Automated financial tracking and receipts, increasing operational transparency." }
            ],
            href: "/experience/venue-saas"
        }
    ];

    return (
        <section className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Experience</h2>

            <div className="space-y-12 relative before:content-[''] before:absolute before:left-[19px] before:top-[26px] before:bottom-[26px] before:w-[2px] before:bg-slate-200">
                {roles.map((role, index) => (
                    <div key={index} className="relative pl-12">
                        <div className="absolute left-0 top-1.5 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center z-10">
                            <Briefcase className="w-5 h-5 text-slate-500" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                <h3 className="text-xl font-bold text-black">{role.role}</h3>
                                <span className="font-mono text-sm text-slate-500">{role.period}</span>
                            </div>
                            {/* Clickable Company Name */}
                            <Link
                                href={role.href}
                                className="text-lg text-slate-900 font-bold hover:text-blue-600 transition-colors inline-block"
                            >
                                {role.company} →
                            </Link>
                            <p className="text-slate-700 italic">{role.description}</p>

                            <div className="pt-2 space-y-3">
                                {role.details.map((detail, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-2 text-slate-600">
                                        <span className="font-bold text-slate-500 shrink-0 uppercase text-sm tracking-wide">{detail.label}:</span>
                                        <span>{detail.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
