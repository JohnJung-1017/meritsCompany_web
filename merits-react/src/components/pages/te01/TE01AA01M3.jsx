// 설치 위치(거리)에 따른 상세 풍속 감쇄 데이터 표
function TE01AA01M3() {
  return (
    <div className="mb-16">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-xl font-bold text-gray-900">
          설치 위치(거리)에 따른 상세 풍속 감쇄 데이터
        </h4>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
          일본 건축 종합시험소 실시 기준 (방풍벽 높이 3m)
        </span>
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap text-center text-sm text-gray-700">
            <thead className="border-b border-gray-200 bg-gray-100 text-xs font-bold uppercase text-gray-600">
              <tr>
                <th className="border-r border-gray-200 px-4 py-3">
                  벽체로부터 거리
                </th>
                <th className="border-r border-gray-200 px-4 py-3">3m</th>
                <th className="border-r border-gray-200 px-4 py-3">6m</th>
                <th className="border-r border-gray-200 bg-blue-50/50 px-4 py-3">
                  9m
                </th>
                <th className="border-r border-gray-200 px-4 py-3">12m</th>
                <th className="border-r border-gray-200 bg-blue-50/50 px-4 py-3">
                  15m
                </th>
                <th className="border-r border-gray-200 px-4 py-3">18m</th>
                <th className="border-r border-gray-200 bg-blue-50/50 px-4 py-3">
                  21m
                </th>
                <th className="px-4 py-3">24m</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="transition hover:bg-gray-50">
                <td className="border-r border-gray-200 bg-gray-50 px-4 py-3 font-bold text-blue-900">
                  공극률 40% (풍속비)
                </td>
                <td className="border-r border-gray-100 px-4 py-3">0.48</td>
                <td className="border-r border-gray-100 px-4 py-3">0.29</td>
                <td className="border-r border-gray-100 bg-blue-50/30 px-4 py-3">
                  0.25
                </td>
                <td className="border-r border-gray-100 px-4 py-3">0.20</td>
                <td className="border-r border-gray-100 bg-blue-50/30 px-4 py-3">
                  0.22
                </td>
                <td className="border-r border-gray-100 px-4 py-3">0.24</td>
                <td className="border-r border-gray-100 bg-blue-50/30 px-4 py-3">
                  0.24
                </td>
                <td className="px-4 py-3">0.24</td>
              </tr>
              <tr className="transition hover:bg-gray-50">
                <td className="border-r border-gray-200 bg-gray-50 px-4 py-3 font-bold text-gray-700">
                  공극률 30% (풍속비)
                </td>
                <td className="border-r border-gray-100 px-4 py-3">0.18</td>
                <td className="border-r border-gray-100 px-4 py-3 font-bold text-blue-600">
                  0.16
                </td>
                <td className="border-r border-gray-100 bg-blue-50/30 px-4 py-3">
                  0.19
                </td>
                <td className="border-r border-gray-100 px-4 py-3">0.20</td>
                <td className="border-r border-gray-100 bg-blue-50/30 px-4 py-3">
                  0.20
                </td>
                <td className="border-r border-gray-100 px-4 py-3">0.20</td>
                <td className="border-r border-gray-100 bg-blue-50/30 px-4 py-3">
                  0.19
                </td>
                <td className="px-4 py-3 font-bold text-blue-600">0.17</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h3 className="mt-3 text-sm font-medium leading-relaxed text-gray-500">
        위 표에 따르면, 다공 패널 설치 위치로부터 광범위하게 풍속비가 0.5 이하로
        억제되어 있으며, 매우 우수한 풍속저감 효과가 입증되었습니다. 공극률 30%의
        경우 6m 지점에서 가장 큰 감소(0.16)를 보입니다.
      </h3>
    </div>
  );
}

export default TE01AA01M3;
