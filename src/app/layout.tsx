import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "3nd - 새로운 미래를 여는 3nd",
  description: "최고의 기술과 혁신으로 더 나은 세상을 만들어갑니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-slate-50 flex flex-col">
        {/* Shared Header */}
        <header className="w-full relative shadow-sm z-50 border-b border-white/20">
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Original Background Image */}
            <Image src="/menu_background.png" fill className="object-cover" alt="Menu Background" />
            
            {/* Tone Difference: Glassmorphism effect to lighten the dark image naturally */}
            <div className="absolute inset-100 bg-white/10 backdrop-blur-md"></div>
            
            {/* Pattern Contrast: Subtle overlay matrix pattern */}
            {/* <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div> */}
            
            {/* Depth Contrast */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
          </div>
          <div className="relative z-10 w-full h-16 md:h-28 flex items-center justify-between px-4 md:px-8">
            <div className="flex items-center md:-my-8 flex-shrink-0">
              <Link href="/">
                <Image 
                  src="/logo_n.png" 
                  alt="3nd Logo Navy" 
                  width={100} 
                  height={50} 
                  className="w-20 md:w-48 h-auto object-contain drop-shadow-md"
                  priority
                />
              </Link>
            </div>
            <nav className="flex-shrink-0">
              {/* <ul className="flex gap-6 text-slate-900 font-extrabold tracking-wide"> */}
              <ul className="flex gap-3 md:gap-12 text-white font-semibold md:font-bold text-xs md:text-base">
                <li><Link href="/services" className="whitespace-nowrap hover:text-blue-300 transition-colors drop-shadow-sm">서비스</Link></li>
                <li><Link href="/about" className="whitespace-nowrap hover:text-blue-300 transition-colors drop-shadow-sm">회사소개</Link></li>
                <li><Link href="/support" className="whitespace-nowrap hover:text-blue-300 transition-colors drop-shadow-sm">고객지원</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {children}
        </div>

        {/* Shared Footer */}
        <footer className="bg-slate-950 py-8 text-center text-slate-500 text-sm">
          <p>© 2026 3nd. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
