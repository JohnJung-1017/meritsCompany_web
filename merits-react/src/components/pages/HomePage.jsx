function HomePage() {
  return (
    <>
    {/* PAGE: HOME */}
    <div id="page-home" className="page-section fade-in">
      <section className="hero-bg min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="wind-streak top-[25%] h-[3px] w-[300px]" style={{animationDuration: '2.5s', animationDelay: '0s'}} />
          <div className="wind-streak top-[45%] h-[4px] w-[400px] opacity-70" style={{animationDuration: '3s', animationDelay: '1.2s'}} />
          <div className="wind-streak top-[65%] h-[3px] w-[200px]" style={{animationDuration: '2s', animationDelay: '0.5s'}} />
          <div className="wind-streak top-[85%] h-[4px] w-[250px]" style={{animationDuration: '3.5s', animationDelay: '2s'}} />
          <div className="barrier-line right-[10%] lg:right-[30%]" />
          <div className="absolute right-0 lg:right-[15%] top-0 bottom-0 w-[20%] opacity-30">
            <div className="wind-streak top-[30%] h-[2px] w-[50px] bg-white" style={{animation: 'blow 4s infinite 1s'}} />
            <div className="wind-streak top-[55%] h-[2px] w-[30px] bg-white" style={{animation: 'blow 4s infinite 2.5s'}} />
            <div className="wind-streak top-[75%] h-[2px] w-[70px] bg-white" style={{animation: 'blow 4s infinite 0.5s'}} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto w-full px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-1 lg:col-span-10 xl:col-span-8 text-white text-center lg:text-left pt-10 pb-20 lg:pb-0">
            <div className="inline-flex items-center px-4 py-1.5 mb-8 border border-white/20 rounded-full bg-white/10 backdrop-blur-sm cursor-default">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-3" />
              <span className="text-white text-sm font-medium tracking-wide">SINCE 2000, 방풍 솔루션의 리더</span>
            </div>
            <h1 className="font-bold mb-6 leading-tight tracking-tight">
              <span className="block text-4xl md:text-5xl lg:text-6xl mb-3 text-white">
                WIND BARRIER,
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl text-blue-300 font-light">
                더 안전한 내일을 위한 준비
              </span>
            </h1>
            {/* 강조 문구 (크기 축소 및 전체 그라데이션 적용) */}
            <div className="mb-10 max-w-3xl mx-auto lg:mx-0 border-l-4 border-blue-500 pl-5 py-2 bg-slate-900/40 backdrop-blur-sm rounded-r-2xl">
              <p className="text-lg text-gray-200 font-light leading-relaxed tracking-tight">
                메리츠컴퍼니의 방풍벽은 <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">바람을 차단하는 구조물이 아니라,</strong><br />
                <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">자연의 힘을 계산해 인프라의 안전을 설계하는 기술 솔루션</strong> 입니다.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button data-nav-page="features" data-nav-section="section-effects" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center gap-3 group">
                방풍 기술 자세히 보기 
                <i data-lucide="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default HomePage
