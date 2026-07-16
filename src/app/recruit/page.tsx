export default function RecruitPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-20 bg-slate-50">
      <section className="max-w-2xl w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">3nd Recruit</h1>
        <p className="text-lg text-slate-700 mb-2">현재 서비스 준비 중입니다.</p>
        <p className="text-slate-500 mb-8">더 나은 모습으로 곧 찾아뵙겠습니다.</p>

        <div className="flex items-center justify-center gap-3">
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white font-semibold hover:bg-slate-800 transition-colors"
          >
            서비스 목록으로
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 font-semibold hover:bg-slate-100 transition-colors"
          >
            홈으로
          </a>
        </div>
      </section>
    </main>
  );
}
