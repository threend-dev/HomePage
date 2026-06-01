import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8 text-white min-h-screen md:min-h-[1000px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/main.png" 
            alt="Hero Background" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60" /> {/* 가독성을 위한 어두운 오버레이 */}
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4 md:gap-8">
          <div className="mb-4 md:mb-10">
            <Image 
              src="/logo_w.png" 
              alt="3nd Logo White" 
              width={300} 
              height={100} 
              className="w-32 md:w-80 h-auto object-contain drop-shadow-xl"
              priority
            />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
            연결의 끝에서 새로운 시작을 만나다
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-slate-300 mb-6 md:mb-8 max-w-2xl text-shadow px-2">
            세상의 모든 연결이 닿는 그 지점에서, 3ND는 새로운 가능성을 엽니다.<br/>
            기술과 사람, 데이터와 경험이 만나는 순간, 미래는 그곳에서 시작됩니다.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {/* <a href="https://sports.3nd.co.kr" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full border border-white/20 transition-colors backdrop-blur-md"> */}
            <a href="https://sports.3nd.co.kr" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 md:py-3 md:px-8 text-sm md:text-base rounded-full border border-white/20 transition-colors backdrop-blur-md">
              Sports
            </a>
            <a href="https://recruit.3nd.co.kr" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 md:py-3 md:px-8 text-sm md:text-base rounded-full border border-white/20 transition-colors backdrop-blur-md">
              Recruit
            </a>
            <a href="https://life.3nd.co.kr" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 md:py-3 md:px-8 text-sm md:text-base rounded-full border border-white/20 transition-colors backdrop-blur-md">
              Life
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
