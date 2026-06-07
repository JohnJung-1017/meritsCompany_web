import SectionHeading from "../../common/SectionHeading";
import { useCommonStore } from "../../common/useCommonStore";

// 자료실 페이지 (resources) — 다운로드 카드는 공통 데이터(useCommonStore) 사용
export function RS01AA01M() {
  const { downloads } = useCommonStore();

  return (
    <>
      {/* PAGE: RESOURCES (자료실) */}
      <div id="page-resources" className="page-section hidden fade-in bg-white">
        <section className="py-24 relative min-h-[calc(100vh-5rem)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <SectionHeading
              eyebrow="Resources & Downloads"
              title="자료실"
              description="메리츠컴퍼니의 제품 카탈로그, 설계 도면, 각종 인증서를 다운로드하실 수 있습니다."
            />
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {downloads.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200 wind-interact group cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition duration-300 icon-react">
                      <i data-lucide={item.icon} className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500">{item.meta}</p>
                    </div>
                  </div>
                  <div className="text-gray-300 group-hover:text-blue-600 transition">
                    <i
                      data-lucide={item.actionIcon}
                      className={item.actionIconClassName}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default RS01AA01M;
