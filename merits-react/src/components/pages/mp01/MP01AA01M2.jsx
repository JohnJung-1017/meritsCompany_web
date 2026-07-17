import { useEffect, useRef, useState } from "react";
import { useMP01store } from "./useMP01store";

// 성과(Achievements). 섹션이 보이면 숫자 카운트업 애니메이션을 1회 재생한다.
// value 가 null 인 항목은 수치 미확정이므로 카운트업 대상에서 제외하고 "-" 로 표기한다.
function MP01AA01M2() {
  const achievementRef = useRef(null);
  const { achievements } = useMP01store();
  const [achievementCounts, setAchievementCounts] = useState(
    achievements.map((item) => (item.value === null ? null : 0)),
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
          achievements.map((item) =>
            item.value === null ? null : Math.round(item.value * easedProgress),
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
  }, [achievements]);

  return (
    <section
      ref={achievementRef}
      className="bg-white"
      aria-label="Home achievements"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.38em] text-blue-700">
            Achievements
          </p>
          <h2 className="mt-5 text-3xl font-light tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            메리츠의 성과를 숫자로 확인해보세요
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {achievements.map((item, index) => (
            <article
              key={item.label.join(" ")}
              className="flex flex-col items-center"
            >
              {/* 라벨 + 아이콘: 레퍼런스처럼 라벨을 좌측 상단, 아이콘을 우측에 배치 */}
              <div className="flex w-full items-start justify-center gap-3">
                <p className="pt-1 text-left text-xs font-semibold leading-5 text-blue-700 sm:text-sm">
                  {item.label.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                {/* stroke-width: lucide 가 DOM attribute 를 그대로 SVG 로 옮기므로
                    camelCase 가 아닌 실제 attribute 이름으로 지정한다. */}
                <i
                  data-lucide={item.icon}
                  className="h-16 w-16 flex-shrink-0 text-slate-800"
                  stroke-width="1"
                />
              </div>

              {/* 수치: 단위는 작게, value 는 크게 */}
              <div className="mt-8 flex items-baseline justify-center gap-1 text-slate-900">
                <span className="text-5xl font-light tracking-tight sm:text-6xl">
                  {achievementCounts[index] === null
                    ? "-"
                    : achievementCounts[index]}
                </span>
                {item.suffix ? (
                  <span className="text-base font-normal text-slate-600">
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
