import { ArrowDown, FileText } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center max-w-5xl mx-auto px-6 py-20">
            <div className="space-y-6 max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                    Building products at the intersection of <span className="text-blue-600">business</span> and <span className="text-teal-600">code</span>.
                </h1>

                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Technical Product Manager architecting fintech infrastructure and B2B SaaS solutions.
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <Link
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
                    >
                        View Projects
                        <ArrowDown className="w-4 h-4" />
                    </Link>

                    <Link
                        href="https://drive.google.com/file/d/1D5-1uC1ha2b6pLpRFGLOeVqaKrPN1xQM/view"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                    >
                        Download CV
                        <FileText className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
