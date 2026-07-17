import { useEffect, useState } from "react";

// 페이지 내부 섹션 이동용 sticky 탭 바.
// 좌측 고정 사이드바 없이도 "지금 보고 있는 섹션"을 알려주고 클릭 한 번에 이동시키는
// 역할을 대신한다. data-nav-page/data-nav-section은 App.jsx의 기존 위임 클릭 핸들러가 처리한다.
// 데스크톱(lg 이상)에서는 우측 플로팅 목차(SectionToc)가 같은 역할을 하므로 숨긴다.
function SectionSubNav({ page, items }) {
  const [activeSection, setActiveSection] = useState(items[0]?.section);

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
    <div className="sticky top-20 z-30 border-b border-gray-100 bg-white/90 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {items.map((item) => (
          <button
            key={item.section}
            data-nav-page={page}
            data-nav-section={item.section}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
              activeSection === item.section
                ? "bg-blue-700 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SectionSubNav;
