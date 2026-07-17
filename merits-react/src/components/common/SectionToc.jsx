import { useEffect, useState } from "react";

// 노션 스타일 우측 플로팅 목차.
// 평소에는 섹션 수만큼의 짧은 선만 보이다가, 호버하면 섹션 이름 목록으로 펼쳐진다.
// 레이아웃 공간을 차지하지 않아 as-is 의 좌측 고정 사이드바를 대체한다.
//
// position:fixed 를 쓰지 않는 이유: 부모 .page-section 에 걸린 .fade-in 이
// animation-fill-mode:forwards 로 transform 을 남기는데, transform 이 none 이 아닌
// 조상은 fixed 자손의 기준(containing block)이 되어 화면 고정이 깨진다.
// sticky 는 이 영향을 받지 않으므로 전체 높이 레일 + sticky 조합으로 구현한다.
// 부모 요소에 position:relative 가 필요하다.
//
// 좁은 화면에서는 숨기고(SectionSubNav 가 대신 담당), 클릭 이동은 App.jsx 의
// data-nav-page/data-nav-section 위임 핸들러가 처리한다.
function SectionToc({ page, items }) {
  const [activeSection, setActiveSection] = useState(items[0]?.section);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.section))
      .filter(Boolean);

    if (targets.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [items]);

  return (
    // 레일: 페이지 전체 높이를 차지하되 폭이 없어 본문 클릭을 막지 않는다.
    <div className="pointer-events-none absolute inset-y-0 right-6 z-30 hidden w-6 lg:block">
      <div
        className="pointer-events-auto sticky top-1/2 -translate-y-1/2"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* 접힌 상태: 섹션당 짧은 선 하나. 현재 섹션만 길고 진하게 표시 */}
        <div
          aria-hidden="true"
          className={`flex flex-col items-end gap-3 py-2 transition-opacity duration-200 ${
            isExpanded ? "opacity-0" : "opacity-100"
          }`}
        >
          {items.map((item) => (
            <span
              key={item.section}
              className={`h-0.5 rounded-full transition-all duration-200 ${
                activeSection === item.section
                  ? "w-6 bg-blue-700"
                  : "w-4 bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* 펼친 상태: 접힌 선 위에 겹쳐 띄운다. 컨테이너의 자식이므로 패널로
            마우스를 옮겨도 onMouseLeave 가 발생하지 않는다. */}
        <nav
          aria-label="페이지 목차"
          className={`absolute right-0 top-1/2 min-w-[11rem] -translate-y-1/2 rounded-xl border border-slate-200 bg-white/95 py-2 shadow-[0_12px_40px_rgba(15,23,42,0.12)] backdrop-blur-md transition-all duration-200 ${
            isExpanded
              ? "pointer-events-auto translate-x-0 opacity-100"
              : "pointer-events-none translate-x-2 opacity-0"
          }`}
        >
          {items.map((item) => (
            <button
              key={item.section}
              data-nav-page={page}
              data-nav-section={item.section}
              className={`block w-full whitespace-nowrap px-4 py-2 text-left text-sm transition ${
                activeSection === item.section
                  ? "font-semibold text-blue-700"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default SectionToc;
