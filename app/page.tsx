'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function BuildClubMemory() {

  // 👇 Prevent double-render visual issues in Next.js dev mode
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Gallery images
  const gallery = [
    { id: 1, src: '/images/a11.png' },
    { id: 2, src: '/images/a15.png' },
    { id: 3, src: '/images/a3.png' },
    { id: 4, src: '/images/a1.png' },
    { id: 5, src: '/images/a12.png' },
    { id: 6, src: '/images/a13.png' },
    { id: 7, src: '/images/a2.png' },
    { id: 8, src: '/images/a4.png' },
    { id: 9, src: '/images/a5.png' },
    { id: 10, src: '/images/a6.png' },
    { id: 11, src: '/images/a7.png' },
    { id: 12, src: '/images/a8.png' },
    { id: 13, src: '/images/a9.png' },
    { id: 14, src: '/images/a10.png' },
  ];

  return (
    <div className="min-h-screen bg-[#FFFBF7] text-[#4A4A4A] selection:bg-rose-200 font-sans pb-20">

      {/* Header */}
      <header className="pt-12 pb-8 px-6 text-center">
        <h1 className="text-4xl font-serif font-bold text-[#2D2D2D] tracking-tight mb-2">
          Build Club
        </h1>
        <p className="text-rose-400 font-medium tracking-widest uppercase text-sm">
          Chapter of 2025 - 2026
        </p>
      </header>

      {/* Video Section */}
      <section className="px-4 mb-12 relative w-full max-w-md mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-[6px] border-white bg-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover aspect-[4/5] bg-gray-100"
          >
            <source src="/build-club-intro.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm italic text-gray-400">Where it all started 🚀</p>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center items-center gap-4 mb-12 opacity-50">
        <div className="h-[1px] w-16 bg-rose-300 rounded-full"></div>
        <span className="text-rose-300 text-xl">✦</span>
        <div className="h-[1px] w-16 bg-rose-300 rounded-full"></div>
      </div>

      {/* Gallery */}
      <section className="px-6 max-w-md mx-auto">
        <h2 className="text-2xl font-serif font-semibold text-center mb-8 text-[#2D2D2D]">
          Build Club wasn’t just a club, it was home… because of you seniors and the memories we built together.
        </h2>

        <div className="flex flex-col gap-8">
          {gallery.map((item, index) => {
            const rotationClass = index % 2 === 0 ? '-rotate-2' : 'rotate-2';

            return (
              <div
                key={item.id}
                className={`bg-white p-3 pb-12 rounded-lg shadow-lg ${rotationClass} transition-transform duration-300 hover:rotate-0 hover:scale-105 hover:shadow-xl hover:z-10`}
              >
                <div className="w-full aspect-square overflow-hidden rounded bg-gray-100 mb-4">
                  <img
                    src={item.src}
                    alt="Build club memory"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 px-6 text-center">
        <p className="text-gray-400 text-sm">
          Made with ❤️ for the memories. <br />
          Build Club © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}