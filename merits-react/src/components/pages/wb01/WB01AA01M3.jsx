import SectionHeading from "../../common/SectionHeading";
import { useWB01store } from "./useWB01store";

// 설치 위치에 따른 효과 (4개 구간 카드)
function WB01AA01M3() {
  const { installations } = useWB01store();

  return (
    <section className="border-b border-gray-100 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Installation"
          title="설치 위치에 따른 효과"
          description="각 구간의 특성에 따라 방풍벽의 높이와 공극률을 조정하여 안전성을 극대화합니다."
          descriptionClassName="text-gray-600"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {installations.map((item) => (
            <div
              key={item.title}
              className="wind-interact rounded-xl border border-gray-200 bg-gray-50 p-6"
            >
              <i
                data-lucide={item.icon}
                className={`icon-react mb-4 h-8 w-8 ${item.iconColor}`}
              />
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WB01AA01M3;
