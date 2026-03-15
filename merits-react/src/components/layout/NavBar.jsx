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

function NavBar({ isTransparent = false }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMenuOpen = hoveredIndex !== null;
  const isGlobalHover = hoveredIndex === -1;

  const wrapperClassName = `fixed inset-x-0 top-0 z-50 ${
    isTransparent && !isMenuOpen
      ? "bg-transparent"
      : "bg-white/95 backdrop-blur-md"
  }`;
  const navClassName = `border-b transition-all duration-200 ${
    isTransparent && !isMenuOpen
      ? "border-transparent shadow-none"
      : "border-gray-100 shadow-sm"
  }`;
  const topMenuTextClassName =
    isTransparent && !isMenuOpen
      ? "text-white hover:text-white"
      : "text-gray-700 hover:text-blue-900";
  const mobileToggleClassName =
    isTransparent && !isMenuOpen
      ? "text-white hover:text-white/80"
      : "text-gray-700 hover:text-blue-900";

  const navColumnsClassName =
    "grid grid-cols-[220px_repeat(4,minmax(0,1fr))_minmax(0,0.8fr)_auto_auto] gap-x-8";
  const submenuColumnsClassName =
    "grid grid-cols-[220px_repeat(4,minmax(0,1fr))_minmax(0,0.8fr)] gap-x-8";

  return (
    <>
      <div
        className={wrapperClassName}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <nav className={navClassName}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`${navColumnsClassName} h-20 items-center`}>
              <a
                href="#"
                data-nav-page="home"
                className="relative flex h-full items-center"
              >
                <img
                  src={teamMeritsLogoWhiteText}
                  alt="팀메리츠 로고"
                  className={`block h-[4.25rem] w-auto transition-opacity duration-200 sm:h-[4.5rem] ${
                    isTransparent && !isMenuOpen ? "opacity-100" : "opacity-0"
                  }`}
                />
                <img
                  src={teamMeritsLogo}
                  alt="팀메리츠 로고"
                  className={`absolute left-0 top-1/2 block h-[4.25rem] w-auto -translate-y-1/2 transition-opacity duration-200 sm:h-[4.5rem] ${
                    isTransparent && !isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
              </a>

              {menuGroups.map((group, index) => (
                <button
                  key={group.title}
                  data-nav-page={group.page}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`relative h-full text-left text-[18px] font-medium transition-colors ${topMenuTextClassName}`}
                >
                  <span className="flex h-full items-center justify-start">
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
                onMouseEnter={() => setHoveredIndex(-1)}
                className={`h-full text-left text-[18px] font-medium transition-colors ${topMenuTextClassName}`}
              >
                <span className="flex h-full items-center justify-start">
                  시공사진
                </span>
              </button>

              <button
                data-nav-page="contact"
                onMouseEnter={() => setHoveredIndex(-1)}
                className="self-center rounded-full bg-blue-900 px-6 py-2.5 font-bold text-white transition hover:bg-blue-800"
              >
                문의하기
              </button>
              <a
                href="https://merits.co.kr/"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHoveredIndex(-1)}
                className="self-center rounded-full border border-gray-300 px-5 py-2.5 font-semibold text-gray-700 transition hover:border-blue-900 hover:text-blue-900"
              >
                <span className="flex items-center gap-2">
                  merits 본사
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </div>
          </div>
        </nav>

        {isMenuOpen ? (
          <div className="border-b border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="border-t border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`${submenuColumnsClassName} py-8`}>
                  <div />
                  {menuGroups.map((group, index) => (
                    <div key={group.title} className="min-w-0">
                      <div className="space-y-2">
                        {group.items.map((item) => (
                          <button
                            key={`${group.title}-${item.label}`}
                            data-nav-page={item.page}
                            data-nav-section={item.section}
                            className={`block w-full text-left text-[16px] transition ${
                              hoveredIndex === index || isGlobalHover
                                ? "text-gray-700 hover:text-blue-900"
                                : "text-gray-400 hover:text-gray-600"
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div
        id="mobile-menu"
        className="hidden md:hidden bg-white border-t border-gray-100 fixed top-20 left-0 w-full shadow-lg z-40 overflow-y-auto max-h-[80vh]"
      >
        <div className="border-b border-gray-50">
          <button
            data-nav-page="about"
            data-close-mobile="true"
            className="block w-full text-left px-4 py-4 text-[18px] text-gray-700 hover:bg-gray-50 font-medium"
          >
            회사소개
          </button>
        </div>
        <div className="border-b border-gray-50">
          <button
            data-nav-page="features"
            data-nav-section="section-effects"
            data-close-mobile="true"
            className="block w-full text-left px-4 py-4 text-[18px] text-gray-700 hover:bg-gray-50 font-medium"
          >
            방풍벽이란? (효과/설계)
          </button>
        </div>
        <div className="border-b border-gray-50">
          <button
            data-nav-page="technology"
            data-nav-section="section-panels"
            data-close-mobile="true"
            className="block w-full text-left px-4 py-4 text-[18px] text-gray-700 hover:bg-gray-50 font-medium"
          >
            기술력 (종류/와류저감)
          </button>
        </div>
        <div className="border-b border-gray-50">
          <button
            data-nav-page="resources"
            data-close-mobile="true"
            className="block w-full text-left px-4 py-4 text-[18px] text-gray-700 hover:bg-gray-50 font-medium"
          >
            자료실
          </button>
        </div>
        <button
          data-nav-page="gallery"
          data-close-mobile="true"
          className="block w-full text-left px-4 py-4 text-[18px] text-gray-700 hover:bg-gray-50 border-b border-gray-50 font-medium"
        >
          시공사진
        </button>
        <button
          data-nav-page="contact"
          data-close-mobile="true"
          className="block w-full text-left px-4 py-4 text-[18px] text-blue-900 font-bold hover:bg-gray-50"
        >
          문의하기
        </button>
      </div>
    </>
  );
}

export default NavBar;
