"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function SupportPage() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const closeModal = () => setModalType(null);

  return (
    <main className="flex-1 bg-slate-50 flex flex-col">
      {/* Intro Section */}
      <section className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden">
        {/* Abstract navy background pattern using gradients */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/about_background.png')] mix-blend-overlay opacity-30 bg-cover bg-center"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
            3ND 고객지원 — 연결의 끝에서 도움을 드립니다.
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-medium">
            당신의 문의가 새로운 해결의 시작이 됩니다.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto w-full px-4 -mt-8 relative z-20 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
          
          {/* Inquiry Form Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-4">
              문의 및 지원
            </h2>
            
            <form action="mailto:3nd@3nd.co.kr" method="post" encType="text/plain" className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">문의 유형 선택</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['기술 지원', '서비스 이용 문의', '제휴 및 협력 제안', '기타 문의'].map((type) => (
                    <label key={type} className="cursor-pointer">
                      <input type="radio" name="inquiry_type" value={type} className="peer sr-only" required />
                      <div className="text-center px-4 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-medium peer-checked:border-navy-900 peer-checked:bg-slate-900 peer-checked:text-white transition-all hover:bg-slate-50">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">제목</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-shadow"
                  placeholder="문의 제목을 입력해주세요"
                  required
                />
              </div>

              <div>
                <label htmlFor="body" className="block text-sm font-semibold text-slate-700 mb-2">내용</label>
                <textarea 
                  name="body" 
                  id="body"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-shadow resize-none"
                  placeholder="문의 내용을 상세히 작성해주세요"
                  required
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-colors shadow-md"
                >
                  이메일로 전송하기 (3nd@3nd.co.kr)
                </button>
              </div>
            </form>
          </div>

          <hr className="border-slate-100" />

          {/* Real-time Support / Channels */}
          <div className="bg-slate-50 rounded-2xl p-8 space-y-4">
            <h3 className="text-xl font-bold text-slate-800 mb-6">실시간 지원 및 채널 안내</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col space-y-2">
                <span className="text-slate-500 text-sm font-semibold">연락처 / 채널</span>
                <span className="text-slate-900 font-bold text-lg">3nd@3nd.co.kr</span>
                <span className="text-slate-600 text-sm">이메일 전용</span>
              </div>
              <div className="flex flex-col space-y-2 md:col-span-2">
                <span className="text-slate-500 text-sm font-semibold">운영 시간</span>
                <span className="text-slate-900 font-bold text-lg">평일 09:00 – 18:00</span>
                <span className="text-slate-600 text-sm">주말 및 공휴일 휴무</span>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="pt-8 text-center space-y-6">
            <div className="flex items-center justify-center gap-6 text-sm font-medium text-slate-500">
              <button onClick={() => setModalType('privacy')} className="hover:text-slate-900 transition-colors underline underline-offset-4">개인정보 처리방침</button>
              <button onClick={() => setModalType('terms')} className="hover:text-slate-900 transition-colors underline underline-offset-4">이용약관</button>
            </div>
            <p className="text-xl font-bold text-blue-900">
              3ND와의 연결을 계속 이어가세요.
            </p>
          </div>

        </div>
      </section>

      {/* Modal */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900">
                {modalType === 'privacy' ? '개인정보 처리방침' : '이용약관'}
              </h3>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-600 transition-colors p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto text-slate-600 text-sm leading-relaxed space-y-4">
              {modalType === 'privacy' ? (
                <>
                  <p><strong>1. 수집하는 개인정보 항목</strong></p>
                  <p>3ND는 고객 문의 응답 및 서비스 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.<br/>- 수집항목: 이메일 주소, 문의 내용 (필요 시 이름, 연락처)</p>
                  <p><strong>2. 개인정보의 수집 및 이용 목적</strong></p>
                  <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br/>- 고객 문의에 대한 정확한 답변 및 지원 서비스 제공, 제휴 제안 확인</p>
                  <p><strong>3. 개인정보의 보유 및 이용 기간</strong></p>
                  <p>원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>
                  <p><strong>4. 개인정보의 제3자 제공</strong></p>
                  <p>회사는 고객의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 법령에 의거하거나, 고객이 사전에 동의한 경우에는 예외로 합니다.</p>
                </>
              ) : (
                <>
                  <p><strong>제1조 (목적)</strong></p>
                  <p>본 약관은 3ND가 제공하는 서비스의 이용조건 및 절차, 이용자와 회사의 권리, 의무, 책임사항 등 기본적인 사항을 규정함을 목적으로 합니다.</p>
                  <p><strong>제2조 (약관의 효력 및 변경)</strong></p>
                  <p>1. 본 약관은 회사 홈페이지에 게시함으로써 효력이 발생합니다.<br/>2. 회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</p>
                  <p><strong>제3조 (회사의 의무)</strong></p>
                  <p>회사는 지속적이고 안정적으로 서비스를 제공하기 위해 최선을 다하며, 이용자의 개인정보 보호를 위한 보안 시스템을 갖추어야 합니다.</p>
                  <p><strong>제4조 (이용자의 의무)</strong></p>
                  <p>이용자는 서비스 이용 시 관련 법령 및 본 약관의 규정을 준수해야 하며, 회사의 정상적인 운영을 방해하는 행위를 해서는 안 됩니다.</p>
                  <p><strong>제5조 (지적재산권)</strong></p>
                  <p>회사가 제공하는 서비스와 관련된 모든 지적재산권은 회사에 귀속됩니다. 이용자는 이를 무단으로 복제, 배포, 전송, 출판, 방송, 기타 방법으로 이용할 수 없습니다.</p>
                  <p><strong>제6조 (면책사항)</strong></p>
                  <p>회사는 천재지변, 불가항력적 사유 등으로 인한 서비스 중단에 대해 책임을 지지 않습니다.</p>
                  <p><strong>제7조 (분쟁 해결)</strong></p>
                  <p>본 약관과 관련하여 발생하는 분쟁은 회사의 본사 소재지를 관할하는 법원을 제1심 법원으로 합니다.</p>
                </>
              )}
            </div>
            <div className="px-6 py-4 border-t border-slate-100 flex justify-end">
              <button onClick={closeModal} className="px-6 py-2 bg-slate-900 border border-slate-200 text-white rounded-xl hover:bg-slate-800 transition-colors font-medium">
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}