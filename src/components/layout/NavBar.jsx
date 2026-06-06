import { useState } from "react";
import teamMeritsLogo from "../../assets/team-merits-logo.svg";
import teamMeritsLogoWhiteText from "../../assets/team-merits-logo-white-text.svg";

const menuGroups = [
  {
    title: "회사소개",
    page: "about",
    items: [
      { label: "기업 이념", page: "about" },
      { label: "기업연혁", page: "about" },
      { label: "오시는길", page: "about" },
    ],
  },
  {
    title: "방풍벽이란?",
    page: "features",
    items: [
      { label: "방풍벽 효과", page: "features", section: "section-effects" },
      { label: "설계 및 검토", page: "features", section: "section-design" },
    ],
  },
  {
    title: "기술력",
    page: "technology",
    items: [
      {
        label: "방풍패널 종류 및 특징",
        page: "technology",
        section: "section-panels",
      },
      { label: "와류저감장치", page: "technology", section: "section-vortex" },
    ],
  },
  {
    title: "자료실",
    page: "resources",
    items: [
      { label: "회사소개서", page: "resources" },
      { label: "특허현황", page: "resources" },
      { label: "동영상자료", page: "resources" },
    ],
  },
];

const topNavGridClassName =
  "grid min-h-[3.5rem] grid-cols-[minmax(12rem,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] items-stretch gap-x-10";
const submenuGridClassName =
  "grid grid-cols-[minmax(12rem,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] gap-x-10 py-8";
const logoWrapperClassName =
  "relative flex h-full items-center justify-start pr-6 lg:pr-8";
const logoImageClassName =
  "h-[5.2rem] w-auto max-w-none object-contain lg:h-[5.8rem]";
const topMenuButtonClassName =
  "relative flex h-full w-full items-center justify-center px-2 text-center whitespace-nowrap";
const submenuColumnClassName = "flex min-w-0 justify-center px-2";

function NavBar({ isTransparent = false }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isSubmenuVisible = hoveredIndex !== null && hoveredIndex >= 0;
  const isTransparentIdle = isTransparent && !isSubmenuVisible;

  const wrapperClassName = `fixed inset-x-0 top-0 z-50 ${
    isTransparentIdle ? "bg-transparent" : "bg-white/95 backdrop-blur-md"
  }`;
  const navClassName = `border-b transition-all duration-200 ${
    isTransparentIdle
      ? "border-transparent shadow-none"
      : "border-gray-100 shadow-sm"
  }`;
  const topMenuTextClassName = isTransparentIdle
    ? "text-white hover:text-white"
    : "text-gray-700 hover:text-blue-900";
  const headOfficeLinkClassName = isTransparentIdle
    ? "border-white/40 bg-transparent text-white hover:border-blue-900 hover:bg-white hover:text-blue-900"
    : "border-2 border-gray-300 bg-transparent text-gray-700 hover:border-blue-900 hover:text-blue-900";

  return (
    <>
      <div
        className={wrapperClassName}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <nav className={navClassName}>
          <div className="mx-auto max-w-7xl">
            <div className={topNavGridClassName}>
              <a href="#" data-nav-page="home" className={logoWrapperClassName}>
                <img
                  src={teamMeritsLogoWhiteText}
                  alt="팀메리츠 로고"
                  className={`block transition-opacity duration-200 ${logoImageClassName} ${
                    isTransparentIdle ? "opacity-100" : "opacity-0"
                  }`}
                />
                <img
                  src={teamMeritsLogo}
                  alt="팀메리츠 로고"
                  className={`absolute left-0 top-1/2 block -translate-y-1/2 transition-opacity duration-200 ${logoImageClassName} ${
                    isTransparentIdle ? "opacity-0" : "opacity-100"
                  }`}
                />
              </a>

              {menuGroups.map((group, index) => (
                <button
                  key={group.title}
                  data-nav-page={group.page}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`${topMenuButtonClassName} text-[17px] font-medium transition-colors ${topMenuTextClassName}`}
                  style={{ gridColumn: `${index + 2}` }}
                >
                  <span className="flex items-center justify-center">
                    {group.title}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full transition-opacity duration-200 ${
                      hoveredIndex === index
                        ? "bg-blue-700 opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </button>
              ))}

              <button
                data-nav-page="gallery"
                onMouseEnter={() => setHoveredIndex(null)}
                className={`${topMenuButtonClassName} text-[17px] font-medium transition-colors ${topMenuTextClassName}`}
                style={{ gridColumn: "6" }}
              >
                <span className="flex items-center justify-center">
                  시공사진
                </span>
              </button>

              <div
                className="col-span-3 grid grid-cols-3 items-center"
                style={{ gridColumn: "7 / span 3" }}
              >
                <a
                  href="https://merits.co.kr/"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setHoveredIndex(null)}
                  className={`col-start-1 flex min-w-[10rem] w-full items-center justify-center rounded-full border px-5 py-2.5 font-semibold transition ${headOfficeLinkClassName}`}
                >
                  <span className="flex whitespace-nowrap items-center gap-2">
                    merits 본사
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {isSubmenuVisible ? (
          <div className="border-b border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="border-t border-gray-200">
              <div className="mx-auto max-w-7xl">
                <div className={submenuGridClassName}>
                  <div />
                  {menuGroups.map((group, index) => (
                    <div
                      key={group.title}
                      className={submenuColumnClassName}
                      style={{ gridColumn: `${index + 2}` }}
                    >
                      <div className="w-fit space-y-2">
                        {group.items.map((item) => (
                          <button
                            key={`${group.title}-${item.label}`}
                            data-nav-page={item.page}
                            data-nav-section={item.section}
                            className={`block w-full whitespace-nowrap text-left text-[15px] leading-6 transition ${
                              hoveredIndex === index
                                ? "text-gray-700 hover:text-blue-900"
                                : "text-gray-400"
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div style={{ gridColumn: "6" }} />
                  <div style={{ gridColumn: "7 / span 3" }} />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div
        id="mobile-menu"
        className="fixed left-0 top-20 z-40 hidden max-h-[80vh] w-full overflow-y-auto border-t border-gray-100 bg-white shadow-lg md:hidden"
      >
        <div className="border-b border-gray-50">
          <button
            data-nav-page="about"
            data-close-mobile="true"
            className="block w-full px-4 py-4 text-left text-[18px] font-medium text-gray-700 hover:bg-gray-50"
          >
            회사소개
          </button>
        </div>
        <div className="border-b border-gray-50">
          <button
            data-nav-page="features"
            data-nav-section="section-effects"
            data-close-mobile="true"
            className="block w-full px-4 py-4 text-left text-[18px] font-medium text-gray-700 hover:bg-gray-50"
          >
            방풍벽이란? (효과/설계)
          </button>
        </div>
        <div className="border-b border-gray-50">
          <button
            data-nav-page="technology"
            data-nav-section="section-panels"
            data-close-mobile="true"
            className="block w-full px-4 py-4 text-left text-[18px] font-medium text-gray-700 hover:bg-gray-50"
          >
            기술력 (종류/와류저감)
          </button>
        </div>
        <div className="border-b border-gray-50">
          <button
            data-nav-page="resources"
            data-close-mobile="true"
            className="block w-full px-4 py-4 text-left text-[18px] font-medium text-gray-700 hover:bg-gray-50"
          >
            자료실
          </button>
        </div>
        <button
          data-nav-page="gallery"
          data-close-mobile="true"
          className="block w-full border-b border-gray-50 px-4 py-4 text-left text-[18px] font-medium text-gray-700 hover:bg-gray-50"
        >
          시공사진
        </button>
      </div>
    </>
  );
}

export default NavBar;
