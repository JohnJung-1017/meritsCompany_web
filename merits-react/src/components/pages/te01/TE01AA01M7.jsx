import { useTE01store } from "./useTE01store";

// 적용 효과 분석 표 (일반 방풍벽 vs 와류저감 적용)
function TE01AA01M7() {
  const { effectRows } = useTE01store();

  return (
    <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h3 className="mb-6 flex items-center text-xl font-bold text-gray-900">
        <i
          data-lucide="bar-chart-2"
          className="icon-react mr-2 h-6 w-6 text-blue-600"
        />
        적용 효과 분석
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap text-center text-sm text-gray-800">
          <thead className="border-b-2 border-blue-500 bg-gray-100 text-xs font-bold uppercase tracking-wider text-gray-700">
            <tr>
              <th className="w-1/3 border-r border-gray-200 px-6 py-5">구분</th>
              <th className="w-1/3 border-r border-gray-200 px-6 py-5 text-gray-500">
                일반 방풍벽
              </th>
              <th className="w-1/3 px-6 py-5 text-blue-600">와류저감 적용</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {effectRows.map((row) => (
              <tr key={row.label} className="transition hover:bg-blue-50/50">
                <td className="border-r border-gray-200 bg-gray-50/50 px-6 py-4 font-bold text-gray-700">
                  {row.label}
                </td>
                <td
                  className={`border-r border-gray-200 px-6 py-4 ${row.normalClassName}`}
                >
                  {row.normal}
                </td>
                <td className="bg-blue-50 px-6 py-4 font-bold text-blue-600">
                  {row.applied}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TE01AA01M7;
