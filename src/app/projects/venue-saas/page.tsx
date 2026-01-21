import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VenueSaasPage() {
    return (
        <div className="bg-white min-h-screen">
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/#projects" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-16">
                <div className="space-y-10">
                    {/* Header */}
                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 text-xs font-mono bg-blue-100 text-blue-700 rounded-full">
                            Product Lead | Jan 2026 - Present
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Venue Management SaaS
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl">
                            The 'Toast POS' for Pakistan's $15B Wedding & Event Industry — A mobile-first B2B SaaS application that digitizes the entire venue management lifecycle.
                        </p>
                    </div>

                    {/* Problem Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">The Problem</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Pakistan's wedding halls and banquet venues typically operate on fragile paper-based diaries. This archaic system leads to:
                        </p>
                        <ul className="space-y-2 text-slate-700">
                            <li className="flex gap-2">
                                <span className="text-red-500 font-bold">•</span>
                                <strong>Revenue Loss:</strong> Frequent double-bookings and lost advance payments.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-red-500 font-bold">•</span>
                                <strong>Operational Chaos:</strong> No real-time visibility into slot availability or pending balances.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-red-500 font-bold">•</span>
                                <strong>Poor Customer Experience:</strong> Manual, handwritten receipts and lack of automated communication.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-red-500 font-bold">•</span>
                                <strong>Data Insecurity:</strong> Critical business data exists in a physical notebook, prone to loss or damage.
                            </li>
                        </ul>
                    </section>

                    {/* Solution Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">The Solution</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">Digital Command Center</h3>
                                <p className="text-sm text-slate-600">Interactive, drag-and-drop calendar dashboard designed for high-volume venues, supporting multiple shifts per day.</p>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">Conflict Guard</h3>
                                <p className="text-sm text-slate-600">Smart conflict detection algorithms that prevent double-booking incidents at the source.</p>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">Financial Intelligence</h3>
                                <p className="text-sm text-slate-600">Real-time tracking of total revenue, advance payments, and outstanding balances with one-tap filters.</p>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">Automated Touchpoints</h3>
                                <p className="text-sm text-slate-600">Instant, professional WhatsApp receipts and branded PDF invoices sent automatically to guests.</p>
                            </div>
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">Technical Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Radix UI", "Supabase", "PostgreSQL", "Row Level Security", "Resend", "jsPDF"].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-slate-900 text-white text-sm font-mono rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* My Role */}
                    <section className="space-y-4 bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h2 className="text-2xl font-bold text-slate-900">My Role & Impact</h2>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-2">
                                <span className="text-blue-600 font-bold">→</span>
                                Architected a scalable multi-tenant database schema using PostgreSQL with Row Level Security.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-600 font-bold">→</span>
                                Built a custom "Conflict Guard" system that reduced booking errors to 0%.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-600 font-bold">→</span>
                                Designed a "Thumb-Friendly" mobile UI, leading to 40% faster booking entry time.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-600 font-bold">→</span>
                                Implemented automated financial reconciliation features for recovering lost revenue.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-600 font-bold">→</span>
                                Deployed a comprehensive notification system via WhatsApp, increasing customer trust.
                            </li>
                        </ul>
                    </section>

                </div>
            </main>
        </div>
    );
}
