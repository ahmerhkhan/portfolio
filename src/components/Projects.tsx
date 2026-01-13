import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            title: "Offline Payments Innovation Fintech Challenge (Karandaaz)",
            tag: "Fintech",
            period: "October 2025",
            problem: "Digital payments fail without internet access in remote areas.",
            solution: "Built a 'Local-First' PWA that enables transactions without internet, syncing to the ledger when online.",
            architecture: [
                { label: "Cross-Platform Mobile", text: "Built with Ionic + React and deployed as an Android APK via Capacitor." },
                { label: "Offline Logic", text: "Utilized local registry storage for duplicate checking." },
                { label: "Hardware", text: "Integrated HTML5-QRCode for device-native camera scanning." }
            ],
            link: "https://karandaaz.vercel.app/",
            linkType: "demo"
        }
    ];

    return (
        <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Featured Projects</h2>

            <div className="grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="group border border-slate-200 rounded-xl overflow-hidden hover:border-blue-400 transition-colors bg-white">
                        <div className="p-8 space-y-6">
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-2xl font-bold text-slate-900 leading-tight">{project.title}</h3>
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
                                {project.link && (
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
                                    >
                                        {project.linkType === 'github' ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                                    </Link>
                                )}
                            </div>

                            <div className="space-y-3">
                                {/* Visual Hierarchy: Problem Text Lighter, Solution Text Darker */}
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

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
