function Footer() {
  return (
    <>
  {/* Common Footer */}
  <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        {/* Company Info */}
        <div className="md:col-span-4">
          <div className="text-2xl font-black text-white tracking-tight leading-none mb-4 flex items-center">
            MERITS<span className="text-blue-500">.</span>
          </div>
          <p className="text-sm text-gray-300 mb-2 font-medium">상호 : (주)메리츠컴퍼니 <span className="mx-2 text-gray-600">|</span> 대표 : 김태진</p>
          <p className="text-sm text-gray-400 flex items-center mt-3"><i data-lucide="mail" className="w-4 h-4 mr-2" /> merits@merits.co.kr</p>
        </div>
        {/* Head Office */}
        <div className="md:col-span-4">
          <h4 className="text-white font-bold mb-4 flex items-center"><i data-lucide="building-2" className="w-4 h-4 mr-2 text-blue-500" /> 본사</h4>
          <p className="text-sm leading-relaxed mb-3 text-gray-400">
            경기도 용인시 기흥구 흥덕중앙로 55,<br />
            흥덕리써밋 309~310호 (영덕동, 리써밋타워)
          </p>
          <p className="text-sm font-mono text-gray-400">
            <span className="text-gray-500">TEL.</span> 1544-3341 <span className="mx-2 text-gray-700">|</span> <span className="text-gray-500">FAX.</span> 031-211-6366
          </p>
        </div>
        {/* Factory */}
        <div className="md:col-span-4">
          <h4 className="text-white font-bold mb-4 flex items-center"><i data-lucide="factory" className="w-4 h-4 mr-2 text-blue-500" /> 공장</h4>
          <p className="text-sm leading-relaxed mb-3 text-gray-400">
            경기도 화성시 서신면 전곡산단13길 7<br />
            (전곡리)
          </p>
          <p className="text-sm font-mono text-gray-400">
            <span className="text-gray-500">TEL.</span> 031-366-7993 <span className="mx-2 text-gray-700">|</span> <span className="text-gray-500">FAX.</span> 031-366-7994
          </p>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <div>© 2000-2026 MERITS COMPANY. ALL RIGHTS RESERVED.</div>
        <div className="mt-4 md:mt-0">
          <button
            type="button"
            data-nav-page="contact"
            className="hover:text-white transition font-bold tracking-widest"
          >
            문의하기
          </button>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer
