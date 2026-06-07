import { useWB01store } from "./useWB01store";

// 설계 요소 본문: 높이/공극률 카드 + 항력계수 + 풍하중 표 + CFD 검토
function WB01AA01M4() {
  const { dragValues, windLoadRows } = useWB01store();

  return (
    <>
      <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <i data-lucide="ruler" className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">방풍벽 높이</h3>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            방풍벽의 높이는 도로를 주행하는 차량의 안전에 매우 중요하며,
            도로공사 기준에서는 방풍벽의 높이를 도로 폭의 최소 1/8 이상,
            일반적으로는 4미터로 제안합니다.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            이 기준은 대형 차량을 포함해 강풍에 취약한 차량들이 옆 차선으로
            밀리는 위험을 줄이는 데 적합합니다. 계산상으로 한 차로가 약 2.53미터
            이상이라면, 6차선 고속도로(전체 폭 15m 이상)에서는 최소 2미터 이상의
            방풍벽이 요구됩니다.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <i data-lucide="layout-grid" className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">공극률과 차폐율</h3>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            차폐율은 공극률의 반대 개념으로, 전체 면적 중 바람을 막는 부분의
            비율입니다. 차폐율이 높을수록 바람을 더 많이 막지만, 지나치게
            높으면 강한 난류가 발생해 바람이 뒷면으로 몰립니다.
          </p>
          <div className="mb-4 rounded-lg border border-gray-100 bg-gray-50 p-4 text-center font-mono text-sm font-bold text-gray-700">
            공극률 30% = 차폐율 70%
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            무공극 방풍벽은 바람을 완전히 차단하지만 벽 뒤에 먼지가 쌓이는
            무풍지대를 생성합니다. 다공성 방풍벽은 적정한 바람 통과를 허용하여
            차량 보호와 도로 환경 개선 밸런스를 맞춥니다.
          </p>
        </div>
      </div>

      <div className="relative mb-12 overflow-hidden rounded-3xl bg-slate-900 p-10 text-white shadow-xl">
        <div className="pattern-dots absolute inset-0 opacity-5" />
        <div className="relative z-10 grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-900/50 px-3 py-1 text-xs font-bold text-blue-200">
              <i data-lucide="wind" className="mr-1.5 h-3.5 w-3.5" />
              역학 분석
            </div>
            <h3 className="mb-4 text-2xl font-bold">
              방풍벽의 항력계수 (Drag Coefficient, CD)와 구조적 안전성
            </h3>
            <p className="mb-4 text-sm font-light leading-relaxed text-slate-300">
              항력계수(CD)는 방풍벽이 바람을 받았을 때의 저항 정도를 나타내는
              값으로, 방풍벽 설계에서 구조적 안전성과 성능을 평가하는 중요한
              요소입니다. 공극률이 높아질수록 통과하는 바람이 많아져 저항력이
              줄어들고 항력계수가 낮아집니다.
            </p>
            <div className="mb-6 flex items-center justify-center rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-lg text-cyan-300">
              항력계수(CD) = -0.00860 × 공극률(%) + 1.01
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p className="flex items-start gap-2">
                <i
                  data-lucide="badge-check"
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-300"
                />
                <span>
                  최적의 항력계수 적용: 공극률 40%일 때 CD는 약 0.75로 풍속
                  저감과 구조적 안전성 간의 균형이 가장 우수합니다.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <i
                  data-lucide="alert-circle"
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-300"
                />
                <span>
                  무공극 방풍벽과의 비교: 무공극벽의 항력계수는 약 1.6으로
                  다공성(0.8 이하)보다 훨씬 높아 구조적 부담이 큽니다.
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:col-span-4">
            {dragValues.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md"
              >
                <span className="font-bold text-slate-200">{item.label}</span>
                <span className="text-2xl font-black text-cyan-300">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="reveal rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-6">
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            방풍벽 구조적 안전성 및 설계풍하중 기준
          </h3>

          <div className="mt-4 space-y-4 rounded-r-xl border-l-4 border-blue-600 bg-slate-50 p-5">
            <div>
              <h4 className="mb-1 flex items-center text-sm font-bold text-slate-800">
                <i
                  data-lucide="shield-check"
                  className="mr-2 h-4 w-4 text-blue-600"
                />
                표준설계풍속 산정 기준
              </h4>
              <p className="pl-6 text-sm leading-relaxed text-slate-600">
                방풍벽의 구조적 안전성 확보를 위해{" "}
                <strong>
                  "방음벽 설계풍하중 검토 [설계구10202-30086 ('2002.3.7.)]"
                </strong>
                에 따라 지역별 기본풍속을 사용합니다.
                <br />
                <span className="mt-2 inline-block rounded border border-blue-200 bg-blue-100/50 px-2.5 py-1 text-xs font-bold text-blue-700">
                  토공부 : 지표조도 II
                </span>{" "}
                &nbsp;
                <span className="mt-2 inline-block rounded border border-blue-200 bg-blue-100/50 px-2.5 py-1 text-xs font-bold text-blue-700">
                  교량부 : 지표조도 II + 고도 20m
                </span>{" "}
                기준으로 산정됩니다.
              </p>
            </div>
            <div className="my-2 h-px w-full bg-slate-200/60" />
            <div>
              <h4 className="mb-1 flex items-center text-sm font-bold text-slate-800">
                <i
                  data-lucide="file-text"
                  className="mr-2 h-4 w-4 text-blue-600"
                />
                항력계수 (CD) 적용 지침
              </h4>
              <p className="pl-6 text-sm leading-relaxed text-slate-600">
                항력계수(CD)는{" "}
                <strong>
                  "고속도로 강풍구간 주행안전성 확보를 위한 방풍벽 설치지역
                  선정지침 (도로교통연구원)"
                </strong>
                에 의거하여, 토공부와 교량부 모두 일괄적으로 <strong>0.8</strong>
                을 적용해 설계의 안전성을 극대화합니다.{" "}
                <span className="ml-1 text-xs text-gray-400">
                  ※ 설치높이 4m (방풍벽 3m + 방호벽 1m) 기준
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-center text-sm text-gray-700">
            <thead className="border-b border-blue-100 bg-blue-50 text-xs font-bold uppercase text-blue-900">
              <tr>
                <th
                  rowSpan="2"
                  className="border-r border-blue-100 px-4 py-3 align-middle"
                >
                  기본풍속 (m/sec)
                </th>
                <th
                  rowSpan="2"
                  className="border-r border-blue-100 px-4 py-3 align-middle"
                >
                  적용 항력계수
                </th>
                <th colSpan="2" className="border-b border-blue-100 px-4 py-3">
                  표준 풍하중 q (KN/m²)
                </th>
              </tr>
              <tr>
                <th className="border-r border-blue-100 px-4 py-2">
                  토공부 (지표조도 II)
                </th>
                <th className="px-4 py-2">교량부 (지표조도 II + 고도 20m)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {windLoadRows.map((row) => (
                <tr
                  key={row.windSpeed}
                  className="transition hover:bg-gray-50"
                >
                  <td className="border-r border-gray-100 px-4 py-3 font-bold text-gray-900">
                    {row.windSpeed}
                  </td>
                  <td className="border-r border-gray-100 px-4 py-3 font-bold text-blue-600">
                    {row.dragCoef}
                  </td>
                  <td
                    className={
                      row.highlight
                        ? "border-r border-gray-100 px-4 py-3 font-bold text-red-600"
                        : "border-r border-gray-100 px-4 py-3"
                    }
                  >
                    {row.earthwork}
                  </td>
                  <td
                    className={
                      row.highlight
                        ? "px-4 py-3 font-bold text-red-600"
                        : "px-4 py-3 font-medium"
                    }
                  >
                    {row.bridge}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="reveal mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
          <i data-lucide="monitor-play" className="mr-1.5 h-3.5 w-3.5" />
          Simulation
        </div>
        <h3 className="mb-6 text-2xl font-bold text-gray-900">
          방풍벽 설계 검토 요소: CFD(전산유체역학) 검토
        </h3>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg font-light leading-relaxed text-gray-700">
              <strong>풍환경 프로그램 검토</strong>를 통해 방풍벽 설치 전후의
              대상지역 풍속을 평가하고, 풍속의 공간적 분포 및 대상구역에서의
              풍속저감비율을 명확하게 확인할 수 있습니다.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start rounded-xl border border-gray-100 bg-gray-50 p-4">
                <i
                  data-lucide="bar-chart-2"
                  className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-blue-600"
                />
                <div>
                  <strong className="mb-1 block text-gray-900">
                    풍속의 공간적 분포 확인
                  </strong>
                  <span className="text-sm text-gray-600">
                    설치 지역의 지형과 구조물을 3D 모델링하여 국지적 돌풍 및
                    난류의 흐름을 시각적으로 분석합니다.
                  </span>
                </div>
              </li>
              <li className="flex items-start rounded-xl border border-gray-100 bg-gray-50 p-4">
                <i
                  data-lucide="trending-down"
                  className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-blue-600"
                />
                <div>
                  <strong className="mb-1 block text-gray-900">
                    정량적 풍속저감비율 산출
                  </strong>
                  <span className="text-sm text-gray-600">
                    방풍벽 통과 전후의 풍압과 풍속 데이터를 비교하여 목표하는
                    감쇄율(%)을 달성하는지 사전에 검증합니다.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative h-72 overflow-hidden rounded-2xl border-2 border-gray-200 bg-slate-100 shadow-inner">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(239,68,68,0.9) 0%, rgba(245,158,11,0.9) 30%, rgba(34,197,94,0.7) 50%, rgba(59,130,246,0.8) 70%, rgba(30,58,138,0.9) 100%)",
              }}
            />

            <div className="absolute inset-0 z-10 flex flex-col justify-between px-4 py-8 opacity-80">
              <div className="relative h-8 w-full">
                <i
                  data-lucide="move-right"
                  className="animate-cfd-1 absolute left-0 h-8 w-8 text-white"
                />
              </div>
              <div className="relative h-8 w-full">
                <i
                  data-lucide="move-right"
                  className="animate-cfd-2 absolute left-0 h-8 w-8 text-white"
                />
              </div>
              <div className="relative h-8 w-full">
                <i
                  data-lucide="move-right"
                  className="animate-cfd-3 absolute left-0 h-8 w-8 text-white"
                />
              </div>
              <div className="relative h-8 w-full">
                <i
                  data-lucide="move-right"
                  className="animate-cfd-4 absolute left-0 h-8 w-8 text-white"
                />
              </div>
            </div>

            <div className="absolute left-[45%] top-1/2 z-20 flex h-4/5 w-4 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-evenly rounded border border-slate-700 bg-slate-900 shadow-2xl">
              <div className="h-1 w-full bg-white/30" />
              <div className="h-1 w-full bg-white/30" />
              <div className="h-1 w-full bg-white/30" />
              <div className="h-1 w-full bg-white/30" />
              <div className="h-1 w-full bg-white/30" />
              <div className="h-1 w-full bg-white/30" />
            </div>

            <div className="absolute left-3 top-3 z-30 flex items-center gap-1.5 rounded bg-white/90 px-2 py-1 shadow-sm">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <span className="text-[11px] font-bold text-gray-800">
                High Velocity
              </span>
            </div>
            <div className="absolute right-3 top-3 z-30 flex items-center gap-1.5 rounded bg-white/90 px-2 py-1 shadow-sm">
              <div className="h-3 w-3 rounded-full bg-blue-800" />
              <span className="text-[11px] font-bold text-gray-800">
                Low Velocity
              </span>
            </div>
            <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/20 bg-slate-900/80 px-4 py-1.5 text-xs text-white shadow-lg backdrop-blur-md">
              방풍벽 적용 풍환경 시뮬레이션
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WB01AA01M4;
