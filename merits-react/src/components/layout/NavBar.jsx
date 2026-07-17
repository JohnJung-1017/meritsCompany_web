import { useState } from "react";
import teamMeritsLogo from "../../assets/team-merits-logo.svg";
import teamMeritsLogoWhiteText from "../../assets/team-merits-logo-white-text.svg";

const menuGroups = [
  {
    title: "회사소개",
    page: "about",
    items: [
      { label: "CEO 인사말", page: "about", section: "section-ceo" },
      { label: "경영목표", page: "about", section: "section-goals" },
      { label: "기업연혁", page: "about", section: "section-history" },
      { label: "오시는길", page: "about", section: "section-location" },
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

// [1] 공유 Grid 컬럼 정의 — inline style로 적용해 Tailwind JIT 스캔 문제 방지
// (템플릿 리터럴 보간 시 Tailwind가 grid-cols-[...] 클래스를 인식하지 못하므로
//  gridTemplateColumns를 style prop으로 분리하고 Tailwind 클래스는 리터럴로 유지)
const GRID_TEMPLATE_COLS =
  "minmax(12rem,2fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr)";

// [2] menuGroups 길이 기반 computed 컬럼 위치 — 항목 추가/삭제 시 자동 반영
const GALLERY_COL = menuGroups.length + 2;
// 본사 버튼은 grid 8번 칸에만 배치 — 7·9번 칸은 비워 여백으로 둔다
const HEAD_OFFICE_COL = menuGroups.length + 4;

// grid-cols-* 는 style로 주입하므로 여기선 gap/padding/display만 선언
const topNavCls = "grid min-h-[3.5rem] items-stretch gap-x-10";
const submenuCls = "grid gap-x-10 py-8";
const logoWrapCls = "relative flex h-full items-center justify-start pr-6 lg:pr-8";
const logoImgCls = "h-[5.2rem] w-auto max-w-none object-contain lg:h-[5.8rem]";
const topBtnCls =
  "relative flex h-full w-full items-center justify-center px-2 text-center whitespace-nowrap";
const subColCls = "flex min-w-0 justify-center px-2";

function NavBar({ isTransparent = false, mobileMenuOpen = false }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isSubmenuVisible = hoveredIndex !== null;
  const isTransparentIdle = isTransparent && !isSubmenuVisible;

  // 배경은 네비 바(<nav>)에만 적용 — wrapCls에 두면 접힌(투명) 서브메뉴 패널
  // 영역까지 흰 배경이 덮여 메가 메뉴가 열린 것처럼 보이는 문제 방지
  const wrapCls = "fixed inset-x-0 top-0 z-50";
  const navBorderCls = `border-b transition-all duration-200 ${
    isTransparentIdle
      ? "border-transparent bg-transparent shadow-none"
      : "border-gray-100 bg-white/95 shadow-sm backdrop-blur-md"
  }`;
  const menuTextCls = isTransparentIdle
    ? "text-white hover:text-white"
    : "text-gray-700 hover:text-blue-900";
  const iconColorCls = isTransparentIdle ? "text-white" : "text-gray-700";
  const headOfficeCls = isTransparentIdle
    ? "border-white/40 bg-transparent text-white hover:border-blue-900 hover:bg-white hover:text-blue-900"
    : "border-2 border-gray-300 bg-transparent text-gray-700 hover:border-blue-900 hover:text-blue-900";

  // 두 로고를 opacity 교차로 전환 — 항상 DOM에 존재, 투명 모드에 따라 표시 전환
  const logoImages = (
    <>
      <img
        src={teamMeritsLogoWhiteText}
        alt="팀메리츠 로고"
        className={`block transition-opacity duration-200 ${logoImgCls} ${
          isTransparentIdle ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src={teamMeritsLogo}
        alt="팀메리츠 로고"
        className={`absolute left-0 top-1/2 block -translate-y-1/2 transition-opacity duration-200 ${logoImgCls} ${
          isTransparentIdle ? "opacity-0" : "opacity-100"
        }`}
      />
    </>
  );

  return (
    <>
      {/* 네비 영역 클릭(대메뉴·서브메뉴·로고·본사 링크) 시 메가 메뉴 닫기.
          같은 페이지 내 섹션 이동도 확실히 닫히도록 currentPage가 아닌 클릭에 반응. */}
      <div
        className={wrapCls}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => setHoveredIndex(null)}
      >
        <nav className={navBorderCls}>
          <div className="mx-auto max-w-7xl">

            {/* [4] 모바일 전용 상단 바 — flex 레이아웃으로 logo + 햄버거만 표시 */}
            <div className="flex min-h-[3.5rem] items-center justify-between px-4 md:hidden">
              <a href="#" data-nav-page="home" className="relative flex items-center">
                {logoImages}
              </a>
              <button
                data-toggle-mobile="true"
                aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
                className={`p-1 transition-colors ${iconColorCls}`}
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* 데스크톱 전용 9컬럼 grid nav */}
            <div className={`hidden md:grid ${topNavCls}`} style={{ gridTemplateColumns: GRID_TEMPLATE_COLS }}>
              <a href="#" data-nav-page="home" className={logoWrapCls}>
                {logoImages}
              </a>

              {menuGroups.map((group, index) => (
                <button
                  key={group.title}
                  data-nav-page={group.page}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`${topBtnCls} text-[17px] font-medium transition-colors ${menuTextCls}`}
                  style={{ gridColumn: index + 2 }}
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
                className={`${topBtnCls} text-[17px] font-medium transition-colors ${menuTextCls}`}
                style={{ gridColumn: GALLERY_COL }}
              >
                <span className="flex items-center justify-center">시공사진</span>
              </button>

              <div
                className="flex items-center"
                style={{ gridColumn: HEAD_OFFICE_COL }}
              >
                <a
                  href="https://merits.co.kr/"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setHoveredIndex(null)}
                  className={`flex min-w-[10rem] w-full items-center justify-center rounded-full border px-5 py-2.5 font-semibold transition ${headOfficeCls}`}
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

        {/* [1,3] 서브메뉴 — 항상 마운트, opacity+translate로 부드럽게 전환 */}
        <div
          className={`hidden border-b border-gray-100 bg-white/95 backdrop-blur-md transition-all duration-150 md:block ${
            isSubmenuVisible
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-1 opacity-0 pointer-events-none"
          }`}
        >
          <div className="border-t border-gray-200">
            <div className="mx-auto max-w-7xl">
              <div className={submenuCls} style={{ gridTemplateColumns: GRID_TEMPLATE_COLS }}>
                <div />
                {/* [5] 메가 메뉴 — 모든 그룹 컬럼을 각 부모 메뉴 아래에 정렬해 함께 렌더링.
                    호버된 컬럼은 진하게, 나머지는 살짝 흐리게 표시해 초점을 준다. */}
                {menuGroups.map((group, index) => (
                  <div
                    key={group.title}
                    className={`${subColCls} transition-opacity duration-150 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-60"
                    }`}
                    style={{ gridColumn: index + 2 }}
                  >
                    <div className="w-fit space-y-2">
                      {group.items.map((item) => (
                        <button
                          key={`${group.title}-${item.label}`}
                          data-nav-page={item.page}
                          data-nav-section={item.section}
                          className="block w-full whitespace-nowrap text-left text-[15px] leading-6 text-gray-700 transition hover:text-blue-900"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* [4] 모바일 메뉴 패널 — prop 기반 opacity 제어 (DOM 직접 조작 제거) */}
      <div
        className={`fixed left-0 top-20 z-40 max-h-[80vh] w-full overflow-y-auto border-t border-gray-100 bg-white shadow-lg transition-all duration-200 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
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
