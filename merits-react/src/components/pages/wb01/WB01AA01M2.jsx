import SectionHeading from "../../common/SectionHeading";
import { useWB01store } from "./useWB01store";

// 방풍벽 도입 효과 요약 (3가지 핵심 가치 카드)
function WB01AA01M2() {
  const { benefits } = useWB01store();

  return (
    <section className="border-b border-gray-100 bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Benefits"
          title="방풍벽 도입 효과 요약"
          description="메리츠컴퍼니의 다공성 방풍벽이 제공하는 3가지 핵심 가치입니다."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="wind-interact rounded-2xl border border-gray-100 bg-white p-8 shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/50 bg-blue-50">
                <i
                  data-lucide={benefit.icon}
                  className="icon-react h-6 w-6 text-blue-500"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WB01AA01M2;
