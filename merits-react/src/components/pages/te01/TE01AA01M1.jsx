import { useTE01store } from "./useTE01store";

// 방풍벽 재질 (재질 3카드 + 최적 조합 안내)
function TE01AA01M1() {
  const { materials } = useTE01store();

  return (
    <div className="mb-16">
      <h3 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
        <i data-lucide="layers" className="mr-2 h-6 w-6 text-blue-600" />
        방풍벽 재질
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-700">
        방풍벽 재질은 설치 장소, 유지관리 편의성, 내구성과 내식성을 고려해
        선정합니다. 레거시 기준에서 사용된 대표 재질은 다음과 같습니다.
      </p>

      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {materials.map((material) => (
          <div
            key={material.code}
            className={`wind-interact rounded-xl border bg-white p-6 shadow-sm ${material.cardBorder}`}
          >
            <div
              className={`icon-react mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold ${material.badge}`}
            >
              {material.code}
            </div>
            <h4 className="mb-2 text-lg font-bold text-gray-900">
              {material.title}
            </h4>
            <p className="text-sm font-light leading-relaxed text-gray-600">
              {material.description}
            </p>
          </div>
        ))}
      </div>

      <div className="wind-interact rounded-xl border-l-4 border-blue-500 bg-blue-50/50 p-5 text-sm leading-relaxed text-gray-700">
        <strong className="mb-1 flex items-center text-blue-900">
          <i data-lucide="puzzle" className="mr-1 h-4 w-4" />
          재질의 최적 조합
        </strong>
        도로 환경에 따라 아연도강판을 기본 재질로 사용하면서, 부식 위험이 큰
        지역이나 관리가 어려운 지역에서는 FRP나 알루미늄, 스테인레스 강판을
        혼합하여 사용하면 경제성과 내구성을 동시에 확보할 수 있습니다.
      </div>
    </div>
  );
}

export default TE01AA01M1;
