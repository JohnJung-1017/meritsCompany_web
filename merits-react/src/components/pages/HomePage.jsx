import { useEffect, useRef } from "react";
import { galleryHero } from "./gallery.meta";

function HomePage({ onHeroVisibilityChange }) {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement || typeof onHeroVisibilityChange !== "function") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        onHeroVisibilityChange(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, [onHeroVisibilityChange]);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* PAGE: HOME */}
      <div id="page-home" className="page-section fade-in">
        <section
          ref={heroRef}
          className="relative -mt-20 flex min-h-screen items-end overflow-hidden bg-slate-950"
        >
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src={galleryHero.videoEmbedUrl}
              title={galleryHero.title}
              className="absolute left-1/2 top-1/2 h-[136vh] w-[264vh] min-w-[172%] max-w-none -translate-x-1/2 -translate-y-1/2 border-0 md:h-[126vh] md:w-[242vh] md:min-w-[158%]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-slate-950/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_34%)]" />
          </div>

          <div className="relative z-10 w-full">
            <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-12 pt-32 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-white/70">
                  Main Visual
                </p>
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {galleryHero.title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
                  {galleryHero.subtitle}
                </p>
              </div>

              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={scrollToContent}
                  className="group flex flex-col items-center gap-3 text-white/80 transition hover:text-white"
                  aria-label="Scroll to home content"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.35em]">
                    {galleryHero.ctaLabel}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition group-hover:translate-y-1 group-hover:bg-white/15">
                    <span className="text-2xl leading-none">v</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={contentRef}
          className="hero-bg min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="wind-streak top-[25%] h-[3px] w-[300px]" style={{ animationDuration: "2.5s", animationDelay: "0s" }} />
            <div className="wind-streak top-[45%] h-[4px] w-[400px] opacity-70" style={{ animationDuration: "3s", animationDelay: "1.2s" }} />
            <div className="wind-streak top-[65%] h-[3px] w-[200px]" style={{ animationDuration: "2s", animationDelay: "0.5s" }} />
            <div className="wind-streak top-[85%] h-[4px] w-[250px]" style={{ animationDuration: "3.5s", animationDelay: "2s" }} />
            <div className="barrier-line right-[10%] lg:right-[30%]" />
            <div className="absolute right-0 lg:right-[15%] top-0 bottom-0 w-[20%] opacity-30">
              <div className="wind-streak top-[30%] h-[2px] w-[50px] bg-white" style={{ animation: "blow 4s infinite 1s" }} />
              <div className="wind-streak top-[55%] h-[2px] w-[30px] bg-white" style={{ animation: "blow 4s infinite 2.5s" }} />
              <div className="wind-streak top-[75%] h-[2px] w-[70px] bg-white" style={{ animation: "blow 4s infinite 0.5s" }} />
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
  );
}

export default HomePage;
