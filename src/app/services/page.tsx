import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      id: "sports",
      title: "3nd Sports",
      description: "열정과 에너지, 스포츠의 모든 것을 경험하세요.",
      image: "/sports.png",
      url: "https://sports.3nd.co.kr"
    },
    {
      id: "recruit",
      title: "3nd Recruit",
      description: "당신의 가능성을 펼칠 수 있는 새로운 기회.",
      image: "/recruit.png",
      url: "https://recruit.3nd.co.kr"
    },
    {
      id: "life",
      title: "3nd Life",
      description: "더 나은 라이프스타일을 위한 스마트한 선택.",
      image: "/life.png",
      url: "https://life.3nd.co.kr"
    }
  ];

  return (
    <main className="relative flex-1 flex flex-col justify-center px-4 py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/service_background.png" 
          alt="Service Background" 
          fill 
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" /> {/* 오버레이 및 블러 */}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4 text-shadow-md">우리의 서비스</h1>
          <p className="text-slate-100 text-lg">3nd가 제공하는 다양한 혁신적인 서비스를 만나보세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <a 
              key={service.id}
              href={service.url}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center p-6 border border-slate-100"
            >
              <div className="w-full relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-slate-100 flex items-center justify-center">
                <Image 
                  src={service.image} 
                  alt={`${service.title} Image`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
