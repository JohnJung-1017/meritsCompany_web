import { useEffect, useRef, useState } from "react";
import yjOffice004 from "../../assets/images/yj_004.jpg";
import { galleryHero } from "./gallery.meta";

const homeResourceHighlights = [
  {
    title: "제품 및 회사소개서",
    meta: "PDF Document / 5.2 MB",
    icon: "book-open",
    actionIcon: "download-cloud",
  },
  {
    title: "표준 설계 도면 (DWG)",
    meta: "ZIP Archive / 12.4 MB",
    icon: "pen-tool",
    actionIcon: "download-cloud",
  },
  {
    title: "특허현황 및 시험성적서",
    meta: "PDF Document / 4.1 MB",
    icon: "award",
    actionIcon: "download-cloud",
  },
  {
    title: "풍동 시험 동영상자료",
    meta: "MP4 Video / Link",
    icon: "play-circle",
    actionIcon: "external-link",
  },
];

const homeSocialLinks = [
  {
    title: "YouTube",
    description: "회사 유튜브 채널 바로가기",
    icon: "youtube",
    accentClassName: "from-rose-500 to-red-500",
    href: "#",
  },
  {
    title: "Instagram",
    description: "회사 인스타그램 바로가기",
    icon: "instagram",
    accentClassName: "from-fuchsia-500 via-pink-500 to-amber-400",
    href: "#",
  },
  {
    title: "Facebook",
    description: "회사 페이스북 바로가기",
    icon: "facebook",
    accentClassName: "from-blue-500 to-indigo-500",
    href: "#",
  },
];

const homeAchievementStats = [
  { label: "merits 업적1", value: 100, suffix: "" , icon: "scroll-text" },
  { label: "merits 업적2", value: 200, suffix: "" , icon: "map" },
  { label: "merits 업적3", value: 300, suffix: "" , icon: "building-2" },
  { label: "merits 업적4", value: 400, suffix: "" , icon: "globe-2" },
];

function HomePage({ onHeroVisibilityChange }) {
  const heroRef = useRef(null);
  const achievementRef = useRef(null);
  const contentRef = useRef(null);
  const [achievementCounts, setAchievementCounts] = useState(
    homeAchievementStats.map(() => 0),
  );

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

  useEffect(() => {
    const sectionElement = achievementRef.current;
    if (!sectionElement) {
      return undefined;
    }

    let animationFrameId = null;
    let hasAnimated = false;

    const animateCounts = () => {
      const duration = 1600;
      const startTime = performance.now();

      const step = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - (1 - progress) ** 3;

        setAchievementCounts(
          homeAchievementStats.map((item) =>
            Math.round(item.value * easedProgress),
          ),
        );

        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step);
        }
      };

      animationFrameId = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animateCounts();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

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
                <p className="mt-5 max-w-2xl text-sm leading-6 text-white sm:text-base">
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
          ref={achievementRef}
          className="bg-white"
          aria-label="Home achievements"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.38em] text-emerald-500">
                Achievements
              </p>
              <h2 className="mt-5 text-3xl font-light tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                메리츠의 성과를 숫자로 확인해보세요
              </h2>
              <p className="mt-5 text-sm leading-6 text-slate-500 sm:text-base">
                실제 데이터가 전달되면 이 영역의 문구와 수치를 그대로 교체할 수
                있도록 구성해두었습니다.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
              {homeAchievementStats.map((item, index) => (
                <article
                  key={item.label}
                  className="flex min-h-[20rem] flex-col items-center justify-between rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-500">
                      <i data-lucide={item.icon} className="h-11 w-11" />
                    </div>
                    <p className="mt-6 text-lg font-medium tracking-tight text-slate-800">
                      {item.label}
                    </p>
                  </div>

                  <div className="mt-10 flex items-end justify-center gap-1 text-slate-900">
                    <span className="text-5xl font-light tracking-tight sm:text-6xl">
                      {achievementCounts[index]}
                    </span>
                    {item.suffix ? (
                      <span className="pb-2 text-lg font-medium text-slate-500">
                        {item.suffix}
                      </span>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={contentRef}
          className="relative overflow-hidden bg-slate-950"
          aria-label="Home resources highlight"
        >
          <div className="absolute inset-0">
            <img
              src={yjOffice004}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/55" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.54)_38%,rgba(2,6,23,0.65)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%)]" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
            <div className="w-full">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.38em] text-emerald-300/90">
                  Resources & Downloads
                </p>
                <p className="mt-5 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
                  제품 및 회사소개서, 표준 설계 도면, 시험성적서, 풍동 시험
                  동영상자료까지 프로젝트 검토에 필요한 핵심 자료를 빠르게
                  확인할 수 있습니다.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
                {homeResourceHighlights.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    data-nav-page="resources"
                    className="group flex min-h-[9.5rem] w-full items-center justify-between border border-emerald-400/50 bg-white px-6 py-5 text-left shadow-[0_18px_50px_rgba(2,6,23,0.18)] transition duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-[0_24px_60px_rgba(2,6,23,0.26)]"
                  >
                    <div className="flex items-center gap-5">
                      <div className="flex h-16 w-16 items-center justify-center border border-slate-200 bg-white text-slate-950 transition duration-300 group-hover:border-emerald-400 group-hover:text-emerald-500">
                        <i data-lucide={item.icon} className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-[13px] font-medium tracking-tight text-slate-800 transition group-hover:text-slate-950 sm:text-sm">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">
                          Download
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {item.meta}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100" aria-label="Home social links">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                  Social Links
                </p>
                <h2 className="mt-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
                  메리츠의 공식 채널을 확인해보세요
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-500">
                유튜브, 인스타그램, 페이스북 채널로 연결되는 영역입니다.
                실제 링크는 각 카드의 주석 위치에서 바로 수정하실 수 있습니다.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {homeSocialLinks.map((item) => (
                <a
                  key={item.title}
                  // TODO: 여기에 실제 SNS 링크를 넣어주세요.
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[1.75rem] border border-white/70 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.12)]"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accentClassName} text-white shadow-lg shadow-slate-200/70`}
                    >
                      <i data-lucide={item.icon} className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-medium text-slate-500 transition group-hover:text-slate-900">
                    <span>채널 바로가기</span>
                    <i data-lucide="arrow-up-right" className="h-5 w-5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
