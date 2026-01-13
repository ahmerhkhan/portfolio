import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section className="bg-white py-24 border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Looking for a Product Manager who executes?</h2>
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                    I bridge the gap between business strategy and technical delivery.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <Link
                        href="mailto:ahmerhkhan17@gmail.com"
                        className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-800 transition-colors"
                    >
                        Let's Work Together
                    </Link>

                    <div className="flex gap-4">
                        <Link
                            href="https://github.com/ahmerhkhan"
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-lg text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-colors font-medium"
                            aria-label="GitHub Profile"
                        >
                            <Github className="w-5 h-5" />
                            GitHub
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/ahmerhkhan/"
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-lg text-slate-600 hover:border-blue-700 hover:text-blue-700 transition-colors font-medium"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="w-5 h-5" />
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
