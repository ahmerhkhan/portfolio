"use client";
import { useState } from "react";
import Image from "next/image";

interface LightboxImageProps {
    src: string;
    alt: string;
}

export default function LightboxImage({ src, alt }: LightboxImageProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Clickable Thumbnail */}
            <div
                className="rounded-xl overflow-hidden border border-slate-200 shadow-lg cursor-zoom-in hover:shadow-xl transition-shadow"
                onClick={() => setIsOpen(true)}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                />
                <div className="text-center py-2 text-xs text-slate-500 bg-slate-50 border-t border-slate-100">
                    Click to enlarge
                </div>
            </div>

            {/* Lightbox Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setIsOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 text-white text-3xl hover:text-slate-300 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        ✕
                    </button>
                    <Image
                        src={src}
                        alt={alt}
                        width={1920}
                        height={1080}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg"
                    />
                </div>
            )}
        </>
    );
}
