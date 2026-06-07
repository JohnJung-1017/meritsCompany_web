// 사양 (Specifications) 표
function TE01AA01M5() {
  return (
    <div className="mb-16">
      <div className="mb-4 flex items-center gap-3">
        <i data-lucide="table" className="h-6 w-6 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-900">
          사양 (Specifications)
        </h3>
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap text-center text-sm text-gray-800">
            <thead className="border-b-2 border-blue-500 bg-gray-100 text-xs font-bold uppercase tracking-wider text-gray-700">
              <tr>
                <th className="border-r border-gray-200 px-6 py-5">재질</th>
                <th className="border-r border-gray-200 px-6 py-5">제품명</th>
                <th className="border-r border-gray-200 px-6 py-5">
                  규격 (mm / T)
                </th>
                <th className="border-r border-gray-200 px-6 py-5">공극률</th>
                <th className="border-r border-gray-200 px-6 py-5">항력계수</th>
                <th className="px-6 py-5">풍속저감비 (1~6H)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="transition hover:bg-blue-50/50">
                <td
                  rowSpan="2"
                  className="border-r border-gray-200 bg-white px-6 py-4 align-middle font-bold text-blue-600"
                >
                  금속재
                </td>
                <td className="border-r border-gray-200 px-6 py-4 font-medium">
                  M-WB-S-40
                </td>
                <td className="border-r border-gray-200 px-6 py-4 font-mono text-xs">
                  (250~500) x (1960~3960) x 1.2~1.6T
                </td>
                <td className="border-r border-gray-200 px-6 py-4 font-bold text-gray-700">
                  40%
                </td>
                <td className="border-r border-gray-200 px-6 py-4 text-gray-700">
                  0.666
                </td>
                <td className="px-6 py-4 text-gray-700">0.20~0.48</td>
              </tr>
              <tr className="bg-gray-50/50 transition hover:bg-blue-50/50">
                <td className="border-r border-gray-200 px-6 py-4 font-medium">
                  M-WB-S-30
                </td>
                <td className="border-r border-gray-200 px-6 py-4 font-mono text-xs">
                  (250~500) x (1960~3960) x 1.2~1.6T
                </td>
                <td className="border-r border-gray-200 px-6 py-4 font-bold text-gray-700">
                  30%
                </td>
                <td className="border-r border-gray-200 px-6 py-4 font-medium text-gray-900">
                  0.752
                </td>
                <td className="px-6 py-4 text-gray-700">0.16~0.20</td>
              </tr>
              <tr className="transition hover:bg-blue-50/50">
                <td
                  rowSpan="2"
                  className="border-r border-gray-200 border-t border-gray-300 bg-white px-6 py-4 align-middle font-bold text-cyan-600"
                >
                  FRP
                </td>
                <td className="border-r border-gray-200 border-t border-gray-300 px-6 py-4 font-medium">
                  M-WB-F-30
                </td>
                <td className="border-r border-gray-200 border-t border-gray-300 px-6 py-4 font-mono text-xs">
                  (250~500) x (1960~3960) x 3.0T
                </td>
                <td className="border-r border-gray-200 border-t border-gray-300 px-6 py-4 font-bold text-gray-700">
                  30%
                </td>
                <td className="border-r border-gray-200 border-t border-gray-300 px-6 py-4 text-gray-700">
                  0.666
                </td>
                <td className="border-t border-gray-300 px-6 py-4 text-gray-700">
                  0.20~0.48
                </td>
              </tr>
              <tr className="bg-gray-50/50 transition hover:bg-blue-50/50">
                <td className="border-r border-gray-200 px-6 py-4 font-medium">
                  M-WB-F-20
                </td>
                <td className="border-r border-gray-200 px-6 py-4 font-mono text-xs">
                  (250~500) x (1960~3960) x 3.0T
                </td>
                <td className="border-r border-gray-200 px-6 py-4 font-bold text-gray-700">
                  20%
                </td>
                <td className="border-r border-gray-200 px-6 py-4 font-medium text-gray-900">
                  0.752
                </td>
                <td className="px-6 py-4 text-gray-700">0.16~0.20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TE01AA01M5;
