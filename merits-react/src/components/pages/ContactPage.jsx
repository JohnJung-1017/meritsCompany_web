function ContactPage() {
  return (
    <>
    {/* PAGE: CONTACT (Main View) */}
    <div id="page-contact" className="page-section hidden fade-in">
      <section className="bg-blue-900 text-white min-h-[calc(100vh-5rem)] flex items-center relative">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-8 wind-interact w-max px-4 py-3 -ml-4 rounded-xl hover:bg-white/5 cursor-default">
                <div className="bg-white p-2 rounded-lg mr-3"><i data-lucide="wind" className="text-blue-900 w-6 h-6 icon-react" /></div>
                <div className="text-3xl font-black text-white tracking-tight">MERITS<span className="text-blue-400">.</span></div>
              </div>
              <p className="text-blue-200 font-bold mb-4 tracking-wider text-sm">CEO 김태진</p>
              <p className="mb-8 leading-relaxed text-blue-100 font-light">
                대한민국의 도로는 메리츠컴퍼니의 기술로 더욱 안전해집니다.<br />제품 및 시공에 대한 문의는 언제든 환영합니다.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition"><i data-lucide="facebook" className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition"><i data-lucide="instagram" className="w-5 h-5" /></a>
              </div>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-2xl text-gray-800">
              <h3 className="font-bold text-2xl mb-8 flex items-center text-gray-900">
                Contact Info
              </h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4 mt-1">
                    <i data-lucide="map-pin" className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold block mb-1">본사 (Head Office)</span>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2 font-light">경기도 용인시 기흥구 흥덕중앙로 55,<br />흥덕리써밋 309~310호</p>
                    <p className="text-blue-700 text-sm font-medium">T. 1544-3341 / F. 031-211-6366</p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-100" />
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4 mt-1">
                    <i data-lucide="factory" className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold block mb-1">공장 (Factory)</span>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2 font-light">경기도 화성시 서신면 전곡산단13길 7</p>
                    <p className="text-blue-700 text-sm font-medium">T. 031-366-7993 / F. 031-366-7994</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default ContactPage
