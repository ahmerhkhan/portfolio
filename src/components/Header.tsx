import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 py-6 px-6 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-slate-900 tracking-tight">
                    Ahmer Habib Khan
                </Link>
            </div>
        </header>
    );
}
