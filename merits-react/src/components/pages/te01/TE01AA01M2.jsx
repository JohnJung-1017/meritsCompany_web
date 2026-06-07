import { useTE01store } from "./useTE01store";

// 공극률과 풍속 변화 (2카드 + 결론)
function TE01AA01M2() {
  const { porosity } = useTE01store();

  return (
    <div className="mb-16">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h3 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
          <i data-lucide="bar-chart" className="mr-2 h-6 w-6 text-blue-600" />
          공극률과 풍속 변화
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-gray-700">
          공극률은 방풍벽에서 바람이 통과할 수 있는 구멍의 비율을 의미하며,
          바람의 세기와 흐름을 조절하는 중요한 요소입니다. 공극률이 높으면
          바람이 더 많이 통과해 벽 뒤쪽에 난류가 적게 형성되고, 공극률이 낮으면
          바람이 차단되어 풍속이 거의 없어지지만, 난류와 무풍지대가 생기기
          쉽습니다.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {porosity.map((item) => (
            <div
              key={item.range}
              className={`wind-interact rounded-xl border bg-white p-6 shadow-sm ${item.cardBorder}`}
            >
              <h4
                className={`mb-3 flex items-center text-lg font-bold ${item.titleClassName}`}
              >
                <span
                  className={`mr-3 h-3 w-3 rounded-full ${item.dotClassName}`}
                />
                {item.range}
              </h4>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-l-4 border-blue-500 bg-blue-50/50 p-4 text-sm leading-relaxed text-gray-700">
          <strong className="text-blue-900">결론:</strong>
          공극률이 높을수록 방풍벽을 통과하는 바람의 양은 증가하나 차폐 효과는
          줄어듭니다. 따라서, 공극률은{" "}
          <strong className="text-blue-900">20~45% </strong> 범위에서 환경과
          주행 안정성을 고려하여 조정하는 것이 바람직합니다.
        </div>
      </div>
    </div>
  );
}

export default TE01AA01M2;
