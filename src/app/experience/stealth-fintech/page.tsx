import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LightboxImage from "@/components/LightboxImage";

export default function StealthFintechPage() {
    return (
        <div className="bg-white min-h-screen">
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/#experience" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-16">
                <div className="space-y-10">
                    {/* Header */}
                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 text-xs font-mono bg-teal-100 text-teal-700 rounded-full">
                            Co-Founder - Product | June 2025 - Present
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Stealth Fintech
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl">
                            An early-stage algorithmic trading platform for Pakistan's Stock Market — an MVP that enables retail investors to backtest, paper-trade, and explore quantitative strategies on the Pakistan Stock Exchange.
                        </p>
                    </div>

                    {/* Screenshot with Lightbox */}
                    <LightboxImage
                        src="/pypsx-dashboard.png"
                        alt="pyPSX Backtesting Dashboard"
                    />

                    {/* Problem Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">The Problem</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Pakistani retail investors face critical infrastructure gaps. Unlike global markets (Alpaca, QuantConnect), PSX lacks APIs for algo-trading. Investors cannot validate trading strategies before risking real capital. Historical and real-time PSX data is fragmented and difficult to access programmatically.
                        </p>
                        <p className="text-slate-700 font-medium">
                            Result: Retail investors are locked out of systematic, data-driven investing — forced to rely on intuition or expensive advisory services.
                        </p>
                    </section>

                    {/* Solution Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">The Solution</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">Python Trading SDK (MVP)</h3>
                                <p className="text-sm text-slate-600">Alpaca-style API prototype for custom trading algorithms. 6+ built-in strategies (SMA, RSI, MACD). Early backtesting engine with configurable slippage.</p>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">PSX Data Wrapper</h3>
                                <p className="text-sm text-slate-600">Direct access to PSX Data Portal System with coverage across hundreds of PSX-listed stocks and indices, supporting historical and live market data for MVP experimentation.</p>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">REST API Backend (MVP)</h3>
                                <p className="text-sm text-slate-600">Implemented secure authentication and role-based access for the MVP. Aggregated analytics across multiple trading bots. Async backtest execution with result persistence for early testing.</p>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">React Dashboard</h3>
                                <p className="text-sm text-slate-600">Real-time equity curves, TradingView charts, bot management. Manual trading interface with live price updates.</p>
                            </div>
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">Technical Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "FastAPI", "Pandas", "SQLAlchemy", "PostgreSQL", "React", "TypeScript", "Vite", "Tailwind CSS", "WebSockets", "Render", "Vercel"].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-slate-900 text-white text-sm font-mono rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* My Role */}
                    <section className="space-y-4 bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-2xl font-bold text-slate-900">My Role & Impact</h2>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-2">
                                <span className="text-teal-600 font-bold">→</span>
                                Built and iterated on an early-stage algorithmic trading platform for Pakistan's retail market.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-teal-600 font-bold">→</span>
                                Worked across Python backend, React frontend, and data pipeline to deliver a functional MVP.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-teal-600 font-bold">→</span>
                                Built backtesting engine with 60+ days of historical data validation.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-teal-600 font-bold">→</span>
                                Helped reduce strategy testing time from days to minutes during early experiments via programmatic SDK execution.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-teal-600 font-bold">→</span>
                                Participated in IBA CED’s incubation program and secured an initial waitlist of interested quant traders.
                            </li>
                        </ul>
                    </section>

                </div>
            </main>
        </div>
    );
}
