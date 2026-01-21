import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            title: "Diligence AI",
            tag: "AI & Venture Capital",
            period: "",
            problem: "VCs spend too much time screening high volumes of startup decks and landing pages.",
            solution: "Automated the first 80% of venture deal screening by turning startup landing pages into structured investment memos with weighted scoring.",
            architecture: [
                { label: "Frontend", text: "React 19 & Next.js 15 (App Router)" },
                { label: "AI Engine", text: "Groq (Llama 3.3 70B) with custom YC-Partner persona." },
                { label: "Pipeline", text: "Jina Reader API for clean Markdown extraction from web content." }
            ],
            link: "https://diligence-ai-rho.vercel.app/",
            linkType: "demo",
            localLink: "/projects/diligence-ai"
        },
        {
            title: "Conflict Guard (Venue Management SaaS)",
            tag: "B2B SaaS",
            period: "",
            problem: "Event venues in Pakistan use paper-based systems, leading to double-bookings and financial leakage.",
            solution: "Built a mobile-first digital command center with 'Conflict Guard' technology to eliminate booking errors and automate receipts.",
            architecture: [
                { label: "Core", text: "Next.js, TypeScript, Tailwind CSS" },
                { label: "Backend", text: "Supabase & PostgreSQL with Row Level Security." },
                { label: "Features", text: "WhatsApp automated receipts & Financial Intelligence Dashboard." }
            ],
            link: "",
            linkType: "demo",
            localLink: "/projects/venue-saas"
        },
        {
            title: "Offline Payments Innovation Fintech Challenge (Karandaaz)",
            tag: "Fintech",
            period: "October 2025",
            problem: "Digital payments fail without internet access in remote areas.",
            solution: "Built a 'Local-First' PWA that enables peer-to-peer QR transactions without internet, using client-side ledgers.",
            architecture: [
                { label: "Mobile", text: "Ionic + React (Deployed as Android APK via Capacitor)" },
                { label: "Offline", text: "LocalStorage registry with dual-mode (Online/Offline) toggle." },
                { label: "Scanning", text: "html5-qrcode for device-native camera integration." }
            ],
            link: "https://karandaaz.vercel.app/",
            linkType: "demo",
            localLink: "/projects/karandaaz"
        }
    ];

    return (
        <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Featured Projects</h2>

            <div className="grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="group border border-slate-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all duration-300 bg-white cursor-pointer relative">
                        {/* Overlay link for the entire card to the detail page */}
                        <Link href={project.localLink} className="absolute inset-0 z-10">
                            <span className="sr-only">View details for {project.title}</span>
                        </Link>

                        <div className="p-8 space-y-6">
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="inline-block px-2 py-0.5 text-xs font-mono bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                                            {project.tag}
                                        </span>
                                        {project.period && (
                                            <span className="font-mono text-sm text-slate-500">{project.period}</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex flex-col gap-1 text-base">
                                    <span className="font-bold text-slate-500">Problem:</span>
                                    <span className="text-slate-500">{project.problem}</span>
                                </div>
                                <div className="flex flex-col gap-1 text-base">
                                    <span className="font-bold text-slate-900">Solution:</span>
                                    <span className="text-slate-900">{project.solution}</span>
                                </div>
                            </div>

                            <div className="space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <h4 className="font-mono text-sm uppercase tracking-wider text-slate-500 font-semibold">Architecture</h4>
                                <ul className="space-y-2">
                                    {project.architecture.map((item, i) => (
                                        <li key={i} className="text-sm">
                                            <span className="font-bold text-slate-800">{item.label}:</span> <span className="text-slate-600">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Prominent CTA Button - z-20 to stay above card link */}
                            {project.link && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="relative z-20 inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors group/btn"
                                >
                                    {project.linkType === 'github' ? (
                                        <>
                                            <Github className="w-5 h-5" />
                                            View on GitHub
                                        </>
                                    ) : (
                                        <>
                                            View Live Demo
                                            <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </>
                                    )}
                                </Link>
                            )}

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
