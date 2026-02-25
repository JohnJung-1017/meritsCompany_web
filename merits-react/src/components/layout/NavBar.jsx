function NavBar() {
  return (
    <>
  {/* Navigation */}
  <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 fixed w-full z-50 transition-all duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20">
        <div className="flex items-center">
          <a href="#" data-nav-page="home" className="flex-shrink-0 flex items-center group wind-interact px-3 py-2 -ml-3 rounded-xl hover:bg-blue-50/50">
            <div className="relative flex items-center justify-center w-10 h-10 bg-blue-900 rounded-lg mr-3 group-hover:bg-blue-700 transition duration-300">
              <i data-lucide="wind" className="text-white w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
            </div>
            <div>
              <div className="text-2xl font-black text-blue-900 tracking-tight leading-none group-hover:text-blue-700 transition-colors">
                MERITS<span className="text-blue-500">.</span>
              </div>
              <span className="text-xs text-gray-500 font-medium tracking-wider">
                (주)메리츠컴퍼니
              </span>
            </div>
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* 회사소개 Dropdown */}
          <div className="relative group">
            <button data-nav-page="about" className="nav-btn text-gray-600 hover:text-blue-900 font-medium transition py-2 border-b-2 border-transparent hover:border-blue-900 flex items-center gap-1">
              회사소개 <i data-lucide="chevron-down" className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition duration-300" />
            </button>
            <div className="absolute left-0 top-full pt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden py-1">
                <button data-nav-page="about" className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">기업 이념</button>
                <button data-nav-page="about" className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">기업연혁</button>
                <button data-nav-page="about" className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">오시는길</button>
              </div>
            </div>
          </div>
          {/* 방풍벽이란? Dropdown */}
          <div className="relative group">
            <button data-nav-page="features" className="nav-btn text-gray-600 hover:text-blue-900 font-medium transition py-2 border-b-2 border-transparent hover:border-blue-900 flex items-center gap-1">
              방풍벽이란? <i data-lucide="chevron-down" className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition duration-300" />
            </button>
            <div className="absolute left-0 top-full pt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden py-1">
                <button data-nav-page="features" data-nav-section="section-effects" className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">방풍벽 효과</button>
                <button data-nav-page="features" data-nav-section="section-design" className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">설계 및 검토</button>
              </div>
            </div>
          </div>
          {/* 기술력 Dropdown */}
          <div className="relative group">
            <button data-nav-page="technology" className="nav-btn text-gray-600 hover:text-blue-900 font-medium transition py-2 border-b-2 border-transparent hover:border-blue-900 flex items-center gap-1">
              기술력 <i data-lucide="chevron-down" className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition duration-300" />
            </button>
            <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden py-1">
                <button data-nav-page="technology" data-nav-section="section-panels" className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">방풍패널 종류 및 특징</button>
                <button data-nav-page="technology" data-nav-section="section-vortex" className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">와류저감장치</button>
              </div>
            </div>
          </div>
          {/* 자료실 Dropdown */}
          <div className="relative group">
            <button data-nav-page="resources" className="nav-btn text-gray-600 hover:text-blue-900 font-medium transition py-2 border-b-2 border-transparent hover:border-blue-900 flex items-center gap-1">
              자료실 <i data-lucide="chevron-down" className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition duration-300" />
            </button>
            <div className="absolute left-0 top-full pt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden py-1">
                <button data-nav-page="resources" className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">회사소개서</button>
                <button data-nav-page="resources" className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">특허현황</button>
                <button data-nav-page="resources" className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">동영상자료</button>
              </div>
            </div>
          </div>
          <button data-nav-page="gallery" className="nav-btn text-gray-600 hover:text-blue-900 font-medium transition py-2 border-b-2 border-transparent hover:border-blue-900">시공사진</button>
          <button data-nav-page="contact" className="px-6 py-2.5 rounded-full bg-blue-900 text-white font-bold hover:bg-blue-800 transition shadow-md">문의하기</button>
        </div>
        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button data-toggle-mobile="true" className="text-gray-600 hover:text-blue-900 focus:outline-none">
            <i data-lucide="menu" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
    {/* Mobile Menu */}
    <div id="mobile-menu" className="hidden md:hidden bg-white border-t border-gray-100 fixed top-20 left-0 w-full shadow-lg z-40 overflow-y-auto max-h-[80vh]">
      <div className="border-b border-gray-50">
        <button data-nav-page="about" data-close-mobile="true" className="block w-full text-left px-4 py-4 text-gray-700 hover:bg-gray-50 font-medium">회사소개</button>
      </div>
      <div className="border-b border-gray-50">
        <button data-nav-page="features" data-nav-section="section-effects" data-close-mobile="true" className="block w-full text-left px-4 py-4 text-gray-700 hover:bg-gray-50 font-medium">방풍벽이란? (효과/설계)</button>
      </div>
      <div className="border-b border-gray-50">
        <button data-nav-page="technology" data-nav-section="section-panels" data-close-mobile="true" className="block w-full text-left px-4 py-4 text-gray-700 hover:bg-gray-50 font-medium">기술력 (종류/와류저감)</button>
      </div>
      <div className="border-b border-gray-50">
        <button data-nav-page="resources" data-close-mobile="true" className="block w-full text-left px-4 py-4 text-gray-700 hover:bg-gray-50 font-medium">자료실</button>
      </div>
      <button data-nav-page="gallery" data-close-mobile="true" className="block w-full text-left px-4 py-4 text-gray-700 hover:bg-gray-50 border-b border-gray-50 font-medium">시공사진</button>
      <button data-nav-page="contact" data-close-mobile="true" className="block w-full text-left px-4 py-4 text-blue-900 font-bold hover:bg-gray-50">문의하기</button>
    </div>
  </nav>
    </>
  )
}

export default NavBar
