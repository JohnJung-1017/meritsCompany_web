function FeaturesPage() {
  return (
    <>
      <div id="page-features" className="page-section hidden fade-in bg-white">
        <div id="section-effects" className="min-h-[calc(100vh-5rem)]">
          <section className="pattern-dots overflow-hidden border-b border-gray-100 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-16 text-center">
                <span className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-red-500">
                  <i data-lucide="alert-triangle" className="h-4 w-4" />
                  Necessity
                </span>
                <h2 className="mt-2 text-3xl font-bold text-gray-900">방풍벽 필요성</h2>
                <p className="mx-auto mt-4 max-w-3xl text-gray-600">
                  강풍은 도로와 교량에서 큰 위험 요소로 작용하며 차량의 주행 안전성과
                  구조물의 안정성 모두를 위협합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                  <div className="border-l-4 border-red-500 pl-5">
                    <h4 className="mb-2 flex items-center text-lg font-bold text-gray-800">
                      <i data-lucide="wind" className="mr-2 h-5 w-5 text-red-500" />
                      강풍의 위협
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      강풍은 도로와 교량에서 직접적인 위험 요소로 작용합니다. 특히
                      교량 위에서는 차량 전복 사고가 발생하기 쉽고, 도로 주변 구조물의
                      파손 위험도 커집니다. 차량 주행 안정성이 급격히 떨어지면 운전자가
                      제어력을 잃어 대형 사고로 이어질 가능성이 높아집니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-400 pl-5">
                    <h4 className="mb-2 flex items-center text-lg font-bold text-gray-800">
                      <i data-lucide="globe-2" className="mr-2 h-5 w-5 text-orange-500" />
                      전세계적 현상
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      기후 변화로 해수 온도가 상승하면서 태풍과 허리케인이 강력해지고
                      강풍 피해도 전 세계적으로 증가하고 있습니다. WMO, UNDRR, NOAA
                      등 주요 기관의 보고에서도 경제적 손실과 재해 빈도의 증가 추세가
                      지속될 것으로 전망합니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-5">
                    <h4 className="mb-2 flex items-center text-lg font-bold text-gray-800">
                      <i data-lucide="alert-circle" className="mr-2 h-5 w-5 text-yellow-500" />
                      차량 사고 사례
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      국내에서도 고속도로, 교량, 해안 및 산악 구간을 중심으로 강풍
                      사고가 반복되고 있습니다. 2023년 강원도 동해안 고속도로에서
                      발생한 대형 트럭 전복 사고처럼 실제 위험은 이미 현실화되어
                      있으며, 최근 5년간 강풍 관련 차량 사고 비율도 증가 추세입니다.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-6">
                  <div className="wind-interact relative overflow-hidden rounded-2xl border border-blue-500 bg-blue-600 p-8 text-white shadow-xl">
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white opacity-10 blur-3xl" />
                    <div className="relative z-10">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm">
                        <i data-lucide="shield-check" className="icon-react h-6 w-6" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold">방풍벽의 필요성</h3>
                      <p className="text-sm leading-relaxed text-blue-100">
                        주행 안정성을 확보하고 강풍으로 인한 사고를 줄이기 위해
                        도로와 교량에 방풍벽을 설치해야 합니다. 방풍벽은 차량이 받는
                        횡풍을 줄이고 눈, 먼지 같은 부유물의 유입도 억제해 도로 환경을
                        보다 안전하게 만듭니다.
                      </p>
                    </div>
                  </div>

                  <div className="wind-interact relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 p-8 text-white shadow-xl">
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-400 opacity-10 blur-3xl" />
                    <div className="relative z-10">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
                        <i data-lucide="map" className="icon-react h-6 w-6" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold">도로와 교량에서의 중요성</h3>
                      <p className="text-sm leading-relaxed text-slate-300">
                        도로, 교량, 개방된 지형에서는 강풍이 직접 차량에 작용합니다.
                        특히 고도가 높고 바람 영향을 많이 받는 교량에서는 방풍벽이
                        차량의 경로 이탈과 전복 위험을 줄이는 핵심 안전 설비 역할을
                        합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-gray-100 bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-16 text-center">
                <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                  Core Benefits
                </span>
                <h2 className="mt-2 text-3xl font-bold text-gray-900">방풍벽 도입 효과 요약</h2>
                <p className="mt-4 text-gray-500">
                  방풍벽이 제공하는 핵심 가치를 레거시 기준으로 재구성했습니다.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="wind-interact rounded-2xl border border-gray-100 bg-white p-8 shadow-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/50 bg-blue-50">
                    <i data-lucide="shield-check" className="icon-react h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">주행 안전성 확보</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    25m/s 이상의 횡풍을 완화해 대형 차량의 차선 이탈 및 전복을
                    선제적으로 방지합니다.
                  </p>
                </div>

                <div className="wind-interact rounded-2xl border border-gray-100 bg-white p-8 shadow-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/50 bg-blue-50">
                    <i data-lucide="wind" className="icon-react h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">탁월한 풍속 감쇄</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    바람을 완전히 막지 않고 타공 패널을 통해 분산시켜 후방 풍속을
                    효과적으로 낮춥니다.
                  </p>
                </div>

                <div className="wind-interact rounded-2xl border border-gray-100 bg-white p-8 shadow-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/50 bg-blue-50">
                    <i data-lucide="layers" className="icon-react h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">구조적 안정성 유지</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    바람 하중을 적절히 분산시켜 기존 교량 및 도로 구조물에 무리 없이
                    적용할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-gray-100 bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-16 text-center">
                <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                  Installation
                </span>
                <h2 className="mt-2 text-3xl font-bold text-gray-900">설치 위치에 따른 효과</h2>
                <p className="mt-4 text-gray-600">
                  구간 특성에 맞게 높이와 공극률을 조정해 안전성과 효율을 최적화합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="wind-interact rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <i data-lucide="waves" className="icon-react mb-4 h-8 w-8 text-blue-500" />
                  <h3 className="mb-2 text-lg font-bold text-gray-900">교량 구간</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    바람을 직접 받는 구간으로, 방풍벽 설치 시 차로 후방으로 갈수록
                    풍속이 뚜렷하게 감소해 안전한 주행 환경을 제공합니다.
                  </p>
                </div>

                <div className="wind-interact rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <i data-lucide="sun" className="icon-react mb-4 h-8 w-8 text-orange-500" />
                  <h3 className="mb-2 text-lg font-bold text-gray-900">개방된 고속도로</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    다양한 각도에서 들어오는 횡풍에 의한 차량 흔들림을 줄여 안정적인
                    차선 유지에 도움을 줍니다.
                  </p>
                </div>

                <div className="wind-interact rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <i data-lucide="mountain" className="icon-react mb-4 h-8 w-8 text-green-600" />
                  <h3 className="mb-2 text-lg font-bold text-gray-900">산악 및 해안가</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    지형성 돌풍과 염분 환경에 대응할 수 있도록 공극률과 소재를 조정해
                    부식과 풍하중 문제를 함께 다룹니다.
                  </p>
                </div>

                <div className="wind-interact rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <i data-lucide="disc" className="icon-react mb-4 h-8 w-8 text-purple-500" />
                  <h3 className="mb-2 text-lg font-bold text-gray-900">터널 출구 및 고가</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    압력 차이로 인한 돌풍과 외곽 차로의 경로 이탈 위험을 줄여
                    돌발상황 대응성을 높입니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div id="section-design" className="min-h-screen bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Engineering Standard
              </span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                방풍벽 설계 요소 및 구조 안전 기준
              </h2>
              <p className="mt-4 text-gray-500">
                레거시 설계 기준 내용을 현재 React 페이지 구조에 맞춰 이관했습니다.
              </p>
            </div>

            <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <i data-lucide="ruler" className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">방풍벽 높이</h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  방풍벽 높이는 차량 안전과 직결됩니다. 도로공사 기준에서는 도로 폭의
                  최소 1/8 이상, 일반적으로 4m 수준을 제안하며 대형 차량을 포함한
                  취약 차종의 차선 이탈 위험을 줄이는 기준으로 활용됩니다.
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  예를 들어 6차선 고속도로처럼 전체 폭이 큰 구간에서는 최소 2m
                  이상의 방풍벽이 필요하며, 현장 조건에 따라 추가 검토가 이뤄져야
                  합니다.
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
                  차폐율은 공극률의 반대 개념으로, 전체 면적 중 바람을 막는 비율입니다.
                  차폐율이 지나치게 높으면 후류 난류가 커지고, 반대로 낮으면 차폐
                  효과가 떨어집니다.
                </p>
                <div className="mb-4 rounded-lg border border-gray-100 bg-gray-50 p-4 text-center font-mono text-sm font-bold text-gray-700">
                  공극률 30% = 차폐율 70%
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  다공성 방풍벽은 적절한 바람 통과를 허용해 차량 보호와 도로 환경
                  개선의 균형을 맞추는 것이 핵심입니다.
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
                    항력계수(Drag Coefficient, CD)와 구조 안전성
                  </h3>
                  <p className="mb-4 text-sm font-light leading-relaxed text-slate-300">
                    항력계수는 방풍벽이 바람을 받을 때 작용하는 저항 정도를 의미하며,
                    구조 안전성 검토의 핵심 변수입니다. 공극률이 높아질수록 통과
                    바람이 늘고 저항은 감소해 항력계수도 낮아집니다.
                  </p>
                  <div className="mb-6 flex items-center justify-center rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-lg text-cyan-300">
                    항력계수(CD) = -0.00860 × 공극률(%) + 1.01
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:col-span-4">
                  <div className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <span className="font-bold text-slate-200">공극률 50%</span>
                    <span className="text-2xl font-black text-cyan-300">CD = 0.58</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <span className="font-bold text-slate-200">공극률 60%</span>
                    <span className="text-2xl font-black text-cyan-300">CD = 0.49</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <span className="font-bold text-slate-200">공극률 70%</span>
                    <span className="text-2xl font-black text-cyan-300">CD = 0.41</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-gray-900">방풍벽 구조 안전성 및 설계 하중 기준</h3>
              <div className="mt-4 space-y-4 rounded-r-xl border-l-4 border-blue-600 bg-slate-50 p-5">
                <p className="text-sm leading-relaxed text-slate-600">
                  기존 설계 기준과 도로·교량 조건을 함께 반영해 설계풍속을 산정하고,
                  공극률과 설치 높이를 고려해 보수적으로 CD 0.8 수준을 적용합니다.
                </p>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-center text-sm text-gray-700">
                  <thead className="border-b border-blue-100 bg-blue-50 text-xs font-bold uppercase text-blue-900">
                    <tr>
                      <th rowSpan="2" className="border-r border-blue-100 px-4 py-3 align-middle">기본풍속 (m/sec)</th>
                      <th rowSpan="2" className="border-r border-blue-100 px-4 py-3 align-middle">적용 항력계수</th>
                      <th colSpan="2" className="px-4 py-3">설계 하중 q (kN/m²)</th>
                    </tr>
                    <tr>
                      <th className="border-r border-blue-100 px-4 py-2">일반부</th>
                      <th className="px-4 py-2">교량부</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="transition hover:bg-gray-50">
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-gray-900">30</td>
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-blue-600">0.8</td>
                      <td className="border-r border-gray-100 px-4 py-3">0.45</td>
                      <td className="px-4 py-3 font-medium">0.60</td>
                    </tr>
                    <tr className="transition hover:bg-gray-50">
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-gray-900">35</td>
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-blue-600">0.8</td>
                      <td className="border-r border-gray-100 px-4 py-3">0.65</td>
                      <td className="px-4 py-3 font-medium">0.80</td>
                    </tr>
                    <tr className="transition hover:bg-gray-50">
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-gray-900">40</td>
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-blue-600">0.8</td>
                      <td className="border-r border-gray-100 px-4 py-3">0.80</td>
                      <td className="px-4 py-3 font-medium">1.00</td>
                    </tr>
                    <tr className="transition hover:bg-gray-50">
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-gray-900">45</td>
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-blue-600">0.8</td>
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-red-600">1.05</td>
                      <td className="px-4 py-3 font-bold text-red-600">1.30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                <i data-lucide="monitor-play" className="mr-1.5 h-3.5 w-3.5" />
                Simulation
              </div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">방풍벽 설계 검토 요소: CFD 해석</h3>
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                <div className="space-y-6">
                  <p className="text-lg font-light leading-relaxed text-gray-700">
                    수치해석 기반 CFD 검토를 통해 설치 전후의 풍속 변화와 난류 분포를
                    확인하고, 목표 저감 성능이 확보되는지 검증합니다.
                  </p>
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
                    <div className="relative h-8">
                      <i data-lucide="move-right" className="animate-cfd-1 absolute left-0 h-8 w-8 text-white" />
                    </div>
                    <div className="relative h-8">
                      <i data-lucide="move-right" className="animate-cfd-2 absolute left-0 h-8 w-8 text-white" />
                    </div>
                    <div className="relative h-8">
                      <i data-lucide="move-right" className="animate-cfd-3 absolute left-0 h-8 w-8 text-white" />
                    </div>
                    <div className="relative h-8">
                      <i data-lucide="move-right" className="animate-cfd-4 absolute left-0 h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute left-[45%] top-1/2 z-20 flex h-4/5 w-4 -translate-x-1/2 -translate-y-1/2 flex-col justify-evenly rounded border border-slate-700 bg-slate-900 shadow-2xl">
                    <div className="h-1 w-full bg-white/30" />
                    <div className="h-1 w-full bg-white/30" />
                    <div className="h-1 w-full bg-white/30" />
                    <div className="h-1 w-full bg-white/30" />
                    <div className="h-1 w-full bg-white/30" />
                    <div className="h-1 w-full bg-white/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturesPage
