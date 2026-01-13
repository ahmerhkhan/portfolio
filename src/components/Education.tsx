import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section className="bg-slate-50 py-12 border-t border-slate-100">
            <div className="max-w-5xl mx-auto px-6 flex items-center gap-4">
                <div className="p-3 bg-white border border-slate-200 rounded-full">
                    <GraduationCap className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Institute of Business Administration (IBA)</h3>
                    <p className="text-slate-600">Bachelors in Business Administration (Marketing) • Aug 2021 – May 2025</p>
                </div>
            </div>
        </section>
    );
}
