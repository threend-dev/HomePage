import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="flex-1 relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/about_background.png" fill className="object-cover" alt="About Background" />
        <div className="absolute inset-0 bg-slate-200/50 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto bg-white/95 rounded-2xl shadow-lg p-8 md:p-12 space-y-16">
        
        {/* Intro */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">회사 소개 <span className="text-blue-900 text-2xl md:text-4xl">About 3ND</span></h1>
          <p className="text-xl md:text-2xl font-semibold text-slate-700 pt-4">
            3ND 연결의 끝에서 새로운 시작을 만나다.
          </p>
          <div className="text-slate-600 space-y-2 text-lg">
            <p>세상의 모든 연결이 닿는 그 지점에서, 3ND는 새로운 가능성을 엽니다.</p>
            <p>기술과 사람, 데이터와 경험이 만나는 순간, 미래는 그곳에서 시작됩니다.</p>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* What We Do */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3 text-slate-800">
            우리가 하는 일 <span className="text-xl text-slate-500 font-normal">What We Do</span>
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            3ND는 <strong>end-point and end-point</strong>라는 철학을 기반으로<br/>
            세상의 다양한 끝점들을 연결하고, 그 사이에서 새로운 가치를 만들어내는 기술 기업입니다.<br/>
            우리는 다음과 같은 영역에서 혁신을 만들어갑니다.
          </p>
          <ul className="space-y-4 bg-slate-50 p-6 rounded-xl">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-slate-700"><strong>Sports</strong> — 데이터 기반 스포츠 경험 혁신</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-slate-700"><strong>Recruit</strong> — 사람과 기회를 연결하는 지능형 매칭 기술</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-slate-700"><strong>Life</strong> — 일상 속 다양한 서비스와의 연결을 확장하는 플랫폼</span>
            </li>
          </ul>
          <p className="text-slate-700 text-lg leading-relaxed bg-blue-50/50 p-4 border-l-4 border-blue-600 rounded-r-xl">
            각 서비스는 서로 다른 분야를 다루지만,<br />
            모두 <strong>“끝과 끝을 연결해 새로운 시작을 만든다”</strong>는 하나의 철학으로 이어져 있습니다.
          </p>
        </section>

        <hr className="border-slate-100" />

        {/* Our Vision */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3 text-slate-800">
            우리의 비전 <span className="text-xl text-slate-500 font-normal">Our Vision</span>
          </h2>
          <p className="text-slate-700 text-lg">
            3ND는 단순한 기술 제공자가 아닙니다.<br/>
            우리는 연결을 통해 세상을 확장시키는 기업입니다.
          </p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-center gap-3 text-lg text-slate-700 font-bold">
              {/* <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> */}
              기술은 사람을 향해야 한다
            </li>
            <li className="flex items-center gap-3 text-lg text-slate-700 font-bold">
              {/* <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> */}
              연결은 새로운 가치를 만든다
            </li>
            <li className="flex items-center gap-3 text-lg text-slate-700 font-bold">
              {/* <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> */}
              데이터는 더 나은 미래를 설계한다
            </li>
          </ul>
          <p className="text-slate-700 text-lg pt-2">
            이 세 가지 원칙을 바탕으로,<br/>
            3ND는 더 넓은 세상과 더 깊은 경험을 연결하는 기술을 만들어갑니다.
          </p>
        </section>

        <hr className="border-slate-100" />

        {/* Our Technology */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3 text-slate-800">
            우리의 기술 <span className="text-xl text-slate-500 font-normal">Our Technology</span>
          </h2>
          <p className="text-slate-700 text-lg">
            3ND의 기술은 다음을 중심으로 발전합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-300 flex items-center gap-3">
              {/* <span className="text-2xl">📊</span> */}
              <span className="text-slate-700 font-medium">데이터 기반 의사결정 시스템</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-300 flex items-center gap-3">
              {/* <span className="text-2xl">🤖</span> */}
              <span className="text-slate-700 font-medium">AI 매칭 및 예측 모델</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-300 flex items-center gap-3">
              {/* <span className="text-2xl">📱</span> */}
              <span className="text-slate-700 font-medium">사용자 경험 중심의 인터페이스 설계</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-300 flex items-center gap-3">
              {/* <span className="text-2xl">🏗️</span> */}
              <span className="text-slate-700 font-medium">확장 가능한 서비스 아키텍처</span>
            </div>
          </div>
          <p className="text-slate-700 text-lg pt-2">
            우리는 기술을 통해 사람과 서비스, 서비스와 서비스, 그리고 사람과 미래를 연결합니다.
          </p>
        </section>

        <hr className="border-slate-100" />

        {/* The Future We Build */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3 text-slate-800">
            3ND가 만들어갈 미래 <span className="text-xl text-slate-500 font-normal">The Future We Build</span>
          </h2>
          <div className="text-slate-700 text-lg space-y-2">
            <p>우리는 더 많은 끝점들을 연결하고,</p>
            <p>그 연결이 만들어내는 새로운 세계를 확장해 나갈 것입니다.</p>
            <p className="pt-2 font-semibold">3ND는 기술을 통해</p>
            <p className="text-blue-600 font-bold text-xl">더 나은 경험, 더 넓은 기회, 더 큰 가능성을 만들어갑니다.</p>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* Join Us */}
        <section className="space-y-6 bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              함께하고 싶다면 <span className="text-xl text-slate-400 font-normal">Join Us</span>
            </h2>
            <p className="text-slate-300 text-lg mt-4">
              3ND와 함께 새로운 연결을 만들고 싶다면,<br/>
              언제든 우리의 문은 열려 있습니다.
            </p>
            <div className="pt-6">
              <a 
                href="mailto:3nd@3nd.co.kr"
                className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full border border-white/20 select-none hover:bg-white/20 transition-colors cursor-pointer text-white no-underline"
              >
                <span>채용문의 · 파트너십 제안 · 서비스 협력</span><br/>
                <span className="text-blue-300 font-medium ml-2">3nd@3nd.co.kr</span>
              </a>
            </div>
            <p className="pt-8 text-xl font-medium text-blue-400">
              당신의 연결이 또 다른 시작이 됩니다.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
