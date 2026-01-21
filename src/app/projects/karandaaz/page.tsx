import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function KarandaazPage() {
    return (
        <div className="bg-white min-h-screen">
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/#projects" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>
                    <Link
                        href="https://karandaaz.vercel.app/"
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
                        <span className="inline-block px-3 py-1 text-xs font-mono bg-blue-100 text-blue-700 rounded-full">
                            Fintech Innovation | October 2025
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Offline Payments Innovation (Karandaaz)
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl">
                            A 'Local-First' digital payment architecture designed for financial inclusion in areas with limited or zero internet connectivity.
                        </p>
                    </div>

                    {/* Problem Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">The Problem</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Digital payments in Pakistan are heavily reliant on stable internet connections. In remote areas or crowded marketplaces, network congestion or lack of coverage makes digital transactions unreliable. This excludes a significant portion of the population from the digital economy, forcing a reliance on cash.
                        </p>
                    </section>

                    {/* Solution Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">The Solution</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">Local-First Architecture</h3>
                                <p className="text-sm text-slate-600">A completely offline-capable PWA that uses LocalStorage for profile registries and transaction history, requiring no backend infrastructure.</p>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">QR Interoperability</h3>
                                <p className="text-sm text-slate-600">Integrated `html5-qrcode` for device-native camera scanning and `qrcode.react` for generating dynamic payment requests with amounts.</p>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">Dual-Mode Ledger</h3>
                                <p className="text-sm text-slate-600">Features an Online/Offline toggle. Online mode enables 'Add Tokens' to simulate funding, while offline mode handles peer-to-peer transfers locally.</p>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">Duplicate Prevention</h3>
                                <p className="text-sm text-slate-600">Implements client-side checks against the local user registry to prevent duplicate profile creation during setup.</p>
                            </div>
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">Technical Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {["Ionic", "React", "TypeScript", "Capacitor", "LocalStorage", "html5-qrcode", "qrcode.react", "Vercel"].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-slate-900 text-white text-sm font-mono rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Impact Section */}
                    <section className="space-y-4 bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h2 className="text-2xl font-bold text-slate-900">My Role & Impact</h2>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-2">
                                <span className="text-blue-600 font-bold">→</span>
                                Engineered a backend-less payment prototype to demonstrate the viability of client-side ledgers in low-trust environments.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-600 font-bold">→</span>
                                Implemented a seamless QR scanning flow using `html5-qrcode`, handling camera permissions and error states gracefully.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-600 font-bold">→</span>
                                Packaged the web application into a native Android APK using Capacitor for field testing.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-600 font-bold">→</span>
                                Designed a cryptographic-lite verification system for offline transfers using unique transaction IDs.
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
}
// End of component
