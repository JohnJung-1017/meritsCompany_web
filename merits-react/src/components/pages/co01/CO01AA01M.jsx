import SectionHeading from "../../common/SectionHeading";
import { useCO01store } from "./useCO01store";

// 회사소개 페이지 (about)
export function CO01AA01M() {
  const { checklist } = useCO01store();

  return (
    <>
      {/* PAGE: ABOUT */}
      <div id="page-about" className="page-section hidden fade-in bg-white">
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <SectionHeading
              eyebrow="Company Profile"
              title="회사 소개"
              titleClassName="md:text-4xl"
              underline
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="relative rounded-2xl shadow-lg overflow-hidden h-[500px] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Windproof Wall Structure"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <h2
                      className="text-6xl md:text-7xl font-bold tracking-widest text-white drop-shadow-lg"
                      style={{ fontFamily: '"Arial", sans-serif' }}
                    >
                      MERITS
                    </h2>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-900 p-6 rounded-xl shadow-xl z-20">
                  <div className="flex items-center gap-4 text-white">
                    <i data-lucide="shield" className="w-8 h-8" />
                    <div>
                      <p className="text-2xl font-bold">2000</p>
                      <p className="text-xs text-blue-200 tracking-wider">
                        ESTABLISHED
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900 leading-tight">
                  도로 위의 역학,
                  <br />
                  <span className="text-blue-600">안전을 설계하는 기업</span>
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                  (주)메리츠컴퍼니는 2000년 설립 이래{" "}
                  <strong>방풍벽 제조·설치</strong> 분야에서 독보적인 기술력을
                  쌓아왔습니다. <br />
                  <br />
                  거친 태풍이 부는 교량 위, 예측 불가능한 돌풍이 잦은 고속도로.
                  가장 혹독한 환경에서 저희의 기술은 그 진가를 발휘하며 고객의
                  생명과 안전을 지켜냅니다.
                </p>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <ul className="space-y-5">
                    {checklist.map((item) => (
                      <li key={item} className="flex items-start">
                        <i
                          data-lucide="check"
                          className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        />
                        <span className="ml-3 font-medium text-gray-800">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CO01AA01M;
