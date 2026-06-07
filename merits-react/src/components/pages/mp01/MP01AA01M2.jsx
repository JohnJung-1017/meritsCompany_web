import { useEffect, useRef, useState } from "react";
import { useMP01store } from "./useMP01store";

// 성과(Achievements). 섹션이 보이면 숫자 카운트업 애니메이션을 1회 재생한다.
function MP01AA01M2() {
  const achievementRef = useRef(null);
  const { achievements } = useMP01store();
  const [achievementCounts, setAchievementCounts] = useState(
    achievements.map(() => 0),
  );

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
          achievements.map((item) => Math.round(item.value * easedProgress)),
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
  }, [achievements]);

  return (
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
          {achievements.map((item, index) => (
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
  );
}

export default MP01AA01M2;
