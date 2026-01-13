import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-50 py-12 border-t border-slate-200">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <div>
                    © 2026 Ahmer Habib Khan. All rights reserved.
                </div>
                <div className="flex items-center gap-6">
                    <span className="cursor-default">Karachi, Pakistan</span>
                    <Link
                        href="https://github.com/ahmerhkhan"
                        target="_blank"
                        className="text-slate-400 hover:text-slate-900 transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
