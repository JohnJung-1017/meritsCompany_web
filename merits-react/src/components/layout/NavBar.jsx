import teamMeritsLogo from "../../assets/team-merits-logo.svg";
import teamMeritsLogoWhiteText from "../../assets/team-merits-logo-white-text.svg";

function NavBar({ isTransparent = false }) {
  const navClassName = isTransparent
    ? "bg-transparent border-transparent shadow-none"
    : "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100";

  const textClassName = isTransparent
    ? "text-white hover:text-white focus:text-white"
    : "text-gray-600 hover:text-blue-900 focus:text-blue-900";

  const iconClassName = isTransparent ? "text-white/80" : "text-gray-400";
  const logoWrapClassName = isTransparent ? "bg-white/92" : "bg-transparent";
  const mobileToggleClassName = isTransparent
    ? "text-white hover:text-white/80"
    : "text-gray-600 hover:text-blue-900";
  const menuTextSizeClassName = "text-[18px]";
  const dropdownPanelClassName =
    "absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50";
  const logoSrc = isTransparent ? teamMeritsLogoWhiteText : teamMeritsLogo;

  return (
    <>
      <nav
        className={`${navClassName} fixed w-full z-50 transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <a
                href="#"
                data-nav-page="home"
                className="flex-shrink-0 flex items-center rounded-xl"
              >
                <div className={`flex items-center ${logoWrapClassName}`}>
                  <img
                    src={logoSrc}
                    alt="팀메리츠 로고"
                    className="block h-[4.25rem] w-auto sm:h-[10rem]"
                  />
                </div>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button
                  data-nav-page="about"
                  className={`nav-btn ${menuTextSizeClassName} font-medium py-2 border-b-2 border-transparent flex items-center gap-1 ${textClassName}`}
                >
                  회사소개
                  <i
                    data-lucide="chevron-down"
                    className={`w-4 h-4 ${iconClassName}`}
                  />
                </button>
                <div className={`${dropdownPanelClassName} w-40`}>
                  <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden py-1">
                    <button
                      data-nav-page="about"
                      className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition"
                    >
                      기업 이념
                    </button>
                    <button
                      data-nav-page="about"
                      className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition"
                    >
                      기업연혁
                    </button>
                    <button
                      data-nav-page="about"
                      className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition"
                    >
                      오시는길
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button
                  data-nav-page="features"
                  className={`nav-btn ${menuTextSizeClassName} font-medium py-2 border-b-2 border-transparent flex items-center gap-1 ${textClassName}`}
                >
                  방풍벽이란?
                  <i
                    data-lucide="chevron-down"
                    className={`w-4 h-4 ${iconClassName}`}
                  />
                </button>
                <div className={`${dropdownPanelClassName} w-40`}>
                  <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden py-1">
                    <button
                      data-nav-page="features"
                      data-nav-section="section-effects"
                      className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition"
                    >
                      방풍벽 효과
                    </button>
                    <button
                      data-nav-page="features"
                      data-nav-section="section-design"
                      className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition"
                    >
                      설계 및 검토
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button
                  data-nav-page="technology"
                  className={`nav-btn ${menuTextSizeClassName} font-medium py-2 border-b-2 border-transparent flex items-center gap-1 ${textClassName}`}
                >
                  기술력
                  <i
                    data-lucide="chevron-down"
                    className={`w-4 h-4 ${iconClassName}`}
                  />
                </button>
                <div className={`${dropdownPanelClassName} w-48`}>
                  <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden py-1">
                    <button
                      data-nav-page="technology"
                      data-nav-section="section-panels"
                      className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition"
                    >
                      방풍패널 종류 및 특징
                    </button>
                    <button
                      data-nav-page="technology"
                      data-nav-section="section-vortex"
                      className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition"
                    >
                      와류저감장치
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button
                  data-nav-page="resources"
                  className={`nav-btn ${menuTextSizeClassName} font-medium py-2 border-b-2 border-transparent flex items-center gap-1 ${textClassName}`}
                >
                  자료실
                  <i
                    data-lucide="chevron-down"
                    className={`w-4 h-4 ${iconClassName}`}
                  />
                </button>
                <div className={`${dropdownPanelClassName} w-40`}>
                  <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden py-1">
                    <button
                      data-nav-page="resources"
                      className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition"
                    >
                      회사소개서
                    </button>
                    <button
                      data-nav-page="resources"
                      className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition"
                    >
                      특허현황
                    </button>
                    <button
                      data-nav-page="resources"
                      className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition"
                    >
                      동영상자료
                    </button>
                  </div>
                </div>
              </div>

              <button
                data-nav-page="gallery"
                className={`nav-btn ${menuTextSizeClassName} font-medium py-2 border-b-2 border-transparent ${textClassName}`}
              >
                시공사진
              </button>
              <button
                data-nav-page="contact"
                className="px-6 py-2.5 rounded-full bg-blue-900 text-white font-bold hover:bg-blue-800 transition shadow-md"
              >
                문의하기
              </button>
            </div>

            <div className="flex items-center md:hidden">
              <button
                data-toggle-mobile="true"
                className={`${mobileToggleClassName} focus:outline-none transition-colors`}
              >
                <i data-lucide="menu" className="w-8 h-8" />
              </button>
            </div>
          </div>
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
      </nav>
    </>
  );
}

export default NavBar;
