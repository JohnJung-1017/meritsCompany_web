import { useEffect, useRef } from "react";
import { useMP01store } from "./useMP01store";

// 메인 비주얼(Hero). 화면에 보이는지 IntersectionObserver 로 감지해 상위로 보고한다.
function MP01AA01M1({ onHeroVisibilityChange, onScrollToContent }) {
  const heroRef = useRef(null);
  const { hero } = useMP01store();

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement || typeof onHeroVisibilityChange !== "function") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        onHeroVisibilityChange(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, [onHeroVisibilityChange]);

  return (
    <section
      ref={heroRef}
      className="relative -mt-20 flex min-h-screen items-end overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src={hero.videoEmbedUrl}
          title={hero.title}
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
              {hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white sm:text-base">
              {hero.subtitle}
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={onScrollToContent}
              className="group flex flex-col items-center gap-3 text-white/80 transition hover:text-white"
              aria-label="Scroll to home content"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.35em]">
                {hero.ctaLabel}
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition group-hover:translate-y-1 group-hover:bg-white/15">
                <span className="text-2xl leading-none">v</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MP01AA01M1;
