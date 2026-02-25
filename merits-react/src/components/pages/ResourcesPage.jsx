function ResourcesPage() {
  return (
    <>
    {/* PAGE: RESOURCES (자료실) */}
    <div id="page-resources" className="page-section hidden fade-in bg-white">
      <section className="py-24 relative min-h-[calc(100vh-5rem)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Resources &amp; Downloads</span>
            <h2 className="text-3xl font-bold mt-2 text-gray-900">자료실</h2>
            <p className="text-gray-500 mt-4">메리츠컴퍼니의 제품 카탈로그, 설계 도면, 각종 인증서를 다운로드하실 수 있습니다.</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Resource Card 1: 회사소개서 */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 wind-interact group cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition duration-300 icon-react">
                  <i data-lucide="book-open" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition">제품 및 회사소개서</h3>
                  <p className="text-xs text-gray-500">PDF Document / 5.2 MB</p>
                </div>
              </div>
              <div className="text-gray-300 group-hover:text-blue-600 transition">
                <i data-lucide="download-cloud" className="w-6 h-6" />
              </div>
            </div>
            {/* Resource Card 2: 도면 */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 wind-interact group cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition duration-300 icon-react">
                  <i data-lucide="pen-tool" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition">표준 설계 도면 (DWG)</h3>
                  <p className="text-xs text-gray-500">ZIP Archive / 12.4 MB</p>
                </div>
              </div>
              <div className="text-gray-300 group-hover:text-blue-600 transition">
                <i data-lucide="download-cloud" className="w-6 h-6" />
              </div>
            </div>
            {/* Resource Card 3: 특허 및 성적서 */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 wind-interact group cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition duration-300 icon-react">
                  <i data-lucide="award" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition">특허현황 및 시험성적서</h3>
                  <p className="text-xs text-gray-500">PDF Document / 4.1 MB</p>
                </div>
              </div>
              <div className="text-gray-300 group-hover:text-blue-600 transition">
                <i data-lucide="download-cloud" className="w-6 h-6" />
              </div>
            </div>
            {/* Resource Card 4: 동영상 */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 wind-interact group cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition duration-300 icon-react">
                  <i data-lucide="play-circle" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition">풍동 시험 동영상자료</h3>
                  <p className="text-xs text-gray-500">MP4 Video / Link</p>
                </div>
              </div>
              <div className="text-gray-300 group-hover:text-blue-600 transition">
                <i data-lucide="external-link" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default ResourcesPage
