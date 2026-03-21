function TechnologyPage() {
  return (
    <>
      <div id="page-technology" className="page-section hidden fade-in bg-white">
        <div id="section-panels" className="min-h-screen border-b border-gray-100 py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Panel Types &amp; Specs
              </span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">방풍패널의 종류 및 특징</h2>
              <p className="mt-4 text-gray-500">
                레거시의 제품 및 기술 콘텐츠를 현재 기술력 메뉴 구조에 맞게 이관했습니다.
              </p>
            </div>

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
                <div className="wind-interact rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="icon-react mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-slate-100 text-sm font-bold text-slate-700">
                    GI
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">아연도강판</h4>
                  <p className="text-sm font-light leading-relaxed text-gray-600">
                    기본 재질로 가장 널리 사용되며, 강도와 경제성이 우수합니다.
                    일반 도로 및 교량 구간에 적용하기 적합합니다.
                  </p>
                </div>

                <div className="wind-interact rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
                  <div className="icon-react mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900 text-sm font-bold text-white">
                    FRP
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">섬유 강화 플라스틱</h4>
                  <p className="text-sm font-light leading-relaxed text-gray-600">
                    내식성이 뛰어나 해안가, 염분 환경, 제설제 노출 구간에 유리합니다.
                    장기 유지관리 비용 절감에도 효과적입니다.
                  </p>
                </div>

                <div className="wind-interact rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="icon-react mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-sm font-bold text-white">
                    AL/STS
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">알루미늄 / 스테인리스</h4>
                  <p className="text-sm font-light leading-relaxed text-gray-600">
                    경량성과 내식성을 동시에 요구하는 현장에 적합하며, 유지보수
                    부담을 줄여 장수명 설계에 유리합니다.
                  </p>
                </div>
              </div>

              <div className="wind-interact rounded-xl border-l-4 border-blue-500 bg-blue-50/50 p-5 text-sm leading-relaxed text-gray-700">
                <strong className="mb-1 flex items-center text-blue-900">
                  <i data-lucide="puzzle" className="mr-1 h-4 w-4" />
                  재질의 최적 조합
                </strong>
                일반 구간에는 아연도강판을, 부식 위험이 큰 구간에는 FRP 또는
                알루미늄·스테인리스를 조합해 적용하면 경제성과 내구성을 함께 확보할
                수 있습니다.
              </div>
            </div>

            <div className="mb-16">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
                  <i data-lucide="bar-chart" className="mr-2 h-6 w-6 text-blue-600" />
                  공극률과 풍속 변화
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-700">
                  공극률은 방풍벽을 통과하는 개구부 비율로, 풍속 저감과 후류 난류
                  제어를 좌우하는 핵심 변수입니다. 지나치게 낮으면 난류가 커지고,
                  지나치게 높으면 차폐 효과가 줄어듭니다.
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="wind-interact rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 flex items-center text-lg font-bold text-blue-900">
                      <span className="mr-3 h-3 w-3 rounded-full bg-blue-500" />
                      공극률 22~33%
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      풍속을 원래의 약 15~25% 수준까지 낮춰 차량 주행 안정성을 크게
                      개선합니다. 교량과 개방형 고속도로 구간에 특히 효과적입니다.
                    </p>
                  </div>

                  <div className="wind-interact rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 flex items-center text-lg font-bold text-gray-800">
                      <span className="mr-3 h-3 w-3 rounded-full bg-gray-500" />
                      공극률 45%
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      풍속을 30~45% 수준으로 유지하며 바람을 일부 통과시켜 과도한
                      흔들림과 난류를 함께 제어합니다. 해안가 및 산악 지역에 적합합니다.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-l-4 border-blue-500 bg-blue-50/50 p-4 text-sm leading-relaxed text-gray-700">
                  <strong className="text-blue-900">결론:</strong> 공극률은 일반적으로
                  20~45% 범위에서 현장 환경과 요구 성능을 고려해 조정하는 것이
                  바람직합니다.
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-xl font-bold text-gray-900">거리별 풍속 감소 데이터</h4>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
                  방풍벽 높이 3m 기준
                </span>
              </div>
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full whitespace-nowrap text-center text-sm text-gray-700">
                    <thead className="border-b border-gray-200 bg-gray-100 text-xs font-bold uppercase text-gray-600">
                      <tr>
                        <th className="border-r border-gray-200 px-4 py-3">벽체로부터 거리</th>
                        <th className="border-r border-gray-200 px-4 py-3">3m</th>
                        <th className="border-r border-gray-200 px-4 py-3">6m</th>
                        <th className="border-r border-gray-200 bg-blue-50/50 px-4 py-3">9m</th>
                        <th className="border-r border-gray-200 px-4 py-3">12m</th>
                        <th className="border-r border-gray-200 bg-blue-50/50 px-4 py-3">15m</th>
                        <th className="border-r border-gray-200 px-4 py-3">18m</th>
                        <th className="border-r border-gray-200 bg-blue-50/50 px-4 py-3">21m</th>
                        <th className="px-4 py-3">24m</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="transition hover:bg-gray-50">
                        <td className="border-r border-gray-200 bg-gray-50 px-4 py-3 font-bold text-blue-900">공극률 40%</td>
                        <td className="border-r border-gray-100 px-4 py-3">0.48</td>
                        <td className="border-r border-gray-100 px-4 py-3">0.29</td>
                        <td className="border-r border-gray-100 bg-blue-50/30 px-4 py-3">0.25</td>
                        <td className="border-r border-gray-100 px-4 py-3">0.20</td>
                        <td className="border-r border-gray-100 bg-blue-50/30 px-4 py-3">0.22</td>
                        <td className="border-r border-gray-100 px-4 py-3">0.24</td>
                        <td className="border-r border-gray-100 bg-blue-50/30 px-4 py-3">0.24</td>
                        <td className="px-4 py-3">0.24</td>
                      </tr>
                      <tr className="transition hover:bg-gray-50">
                        <td className="border-r border-gray-200 bg-gray-50 px-4 py-3 font-bold text-gray-700">공극률 30%</td>
                        <td className="border-r border-gray-100 px-4 py-3">0.18</td>
                        <td className="border-r border-gray-100 px-4 py-3 font-bold text-blue-600">0.16</td>
                        <td className="border-r border-gray-100 bg-blue-50/30 px-4 py-3">0.19</td>
                        <td className="border-r border-gray-100 px-4 py-3">0.20</td>
                        <td className="border-r border-gray-100 bg-blue-50/30 px-4 py-3">0.20</td>
                        <td className="border-r border-gray-100 px-4 py-3">0.20</td>
                        <td className="border-r border-gray-100 bg-blue-50/30 px-4 py-3">0.19</td>
                        <td className="px-4 py-3 font-bold text-blue-600">0.17</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mb-16 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-50 px-8 py-5">
                <i data-lucide="pen-tool" className="h-5 w-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">제품 도면 (Blueprint)</h3>
              </div>
              <div className="blueprint-bg grid grid-cols-1 gap-16 p-10 lg:grid-cols-2">
                <div className="space-y-12">
                  <div className="relative">
                    <div className="absolute -top-6 left-0 right-0 flex items-center justify-between text-[10px] text-gray-500">
                      <div className="h-3 w-px bg-gray-400" />
                      <div className="mx-2 flex-grow border-t border-gray-400" />
                      <span>1960 ~ 3960</span>
                      <div className="mx-2 flex-grow border-t border-gray-400" />
                      <div className="h-3 w-px bg-gray-400" />
                    </div>
                    <div className="pattern-holes-30 relative flex h-16 items-center justify-center rounded bg-blue-500 text-white shadow-inner">
                      <span className="rounded bg-blue-600/80 px-3 py-1 font-bold backdrop-blur-sm">(FRP 3.0T)</span>
                    </div>
                    <p className="mt-3 text-sm font-bold text-gray-700">- FRONT VIEW</p>
                  </div>

                  <div className="pattern-holes-40 relative h-32 overflow-hidden rounded border-y-4 border-blue-600 bg-blue-500 shadow-inner">
                    <div className="flex h-full flex-col justify-evenly">
                      <div className="h-px w-full bg-white/30" />
                      <div className="z-10 flex w-full justify-center">
                        <span className="rounded bg-blue-600/80 px-3 py-1 font-bold text-white backdrop-blur-sm">
                          (STEEL 1.2~1.6T)
                        </span>
                      </div>
                      <div className="h-px w-full bg-black/20" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-12">
                  <div>
                    <div className="flex items-center justify-center gap-8">
                      <div className="flex items-center gap-2">
                        <div className="pattern-holes-30 h-20 w-32 rounded border-2 border-blue-600 bg-blue-500" />
                        <span className="text-xl font-bold text-blue-500">30%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="pattern-holes-40 h-20 w-32 rounded border-2 border-blue-600 bg-blue-500" />
                        <span className="text-xl font-bold text-blue-500">40%</span>
                      </div>
                    </div>
                    <p className="mt-4 text-center text-sm font-bold text-gray-700">- DETAIL (공극률)</p>
                  </div>

                  <div>
                    <div className="mx-auto w-full max-w-sm">
                      <svg viewBox="0 0 450 150" className="h-auto w-full drop-shadow-md">
                        <line x1="20" y1="20" x2="430" y2="20" stroke="#94a3b8" strokeWidth="1" />
                        <polyline
                          points="20,110 55,110 100,55 150,55 195,110 275,110 320,55 370,55 415,110 430,110"
                          fill="none"
                          stroke="#1e293b"
                          strokeWidth="3"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="mt-2 text-center text-sm font-bold text-gray-700">- 500 SIDE VIEW</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="mb-4 flex items-center gap-3">
                <i data-lucide="table" className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">사양 (Specifications)</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full whitespace-nowrap text-center text-sm text-gray-800">
                    <thead className="border-b-2 border-blue-500 bg-gray-100 text-xs font-bold uppercase tracking-wider text-gray-700">
                      <tr>
                        <th className="border-r border-gray-200 px-6 py-5">재질</th>
                        <th className="border-r border-gray-200 px-6 py-5">제품명</th>
                        <th className="border-r border-gray-200 px-6 py-5">규격 (mm / T)</th>
                        <th className="border-r border-gray-200 px-6 py-5">공극률</th>
                        <th className="border-r border-gray-200 px-6 py-5">항력계수</th>
                        <th className="px-6 py-5">풍속저감비 (1~6H)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="transition hover:bg-blue-50/50">
                        <td rowSpan="2" className="border-r border-gray-200 bg-white px-6 py-4 align-middle font-bold text-blue-600">금속재</td>
                        <td className="border-r border-gray-200 px-6 py-4 font-medium">M-WB-S-40</td>
                        <td className="border-r border-gray-200 px-6 py-4 font-mono text-xs">(250~500) x (1960~3960) x 1.2~1.6T</td>
                        <td className="border-r border-gray-200 px-6 py-4 font-bold text-gray-700">40%</td>
                        <td className="border-r border-gray-200 px-6 py-4 text-gray-700">0.666</td>
                        <td className="px-6 py-4 text-gray-700">0.20~0.48</td>
                      </tr>
                      <tr className="bg-gray-50/50 transition hover:bg-blue-50/50">
                        <td className="border-r border-gray-200 px-6 py-4 font-medium">M-WB-S-30</td>
                        <td className="border-r border-gray-200 px-6 py-4 font-mono text-xs">(250~500) x (1960~3960) x 1.2~1.6T</td>
                        <td className="border-r border-gray-200 px-6 py-4 font-bold text-gray-700">30%</td>
                        <td className="border-r border-gray-200 px-6 py-4 font-medium text-gray-900">0.752</td>
                        <td className="px-6 py-4 text-gray-700">0.16~0.20</td>
                      </tr>
                      <tr className="transition hover:bg-blue-50/50">
                        <td rowSpan="2" className="border-r border-gray-200 border-t border-gray-300 bg-white px-6 py-4 align-middle font-bold text-cyan-600">FRP</td>
                        <td className="border-r border-gray-200 border-t border-gray-300 px-6 py-4 font-medium">M-WB-F-30</td>
                        <td className="border-r border-gray-200 border-t border-gray-300 px-6 py-4 font-mono text-xs">(250~500) x (1960~3960) x 3.0T</td>
                        <td className="border-r border-gray-200 border-t border-gray-300 px-6 py-4 font-bold text-gray-700">30%</td>
                        <td className="border-r border-gray-200 border-t border-gray-300 px-6 py-4 text-gray-700">0.666</td>
                        <td className="border-t border-gray-300 px-6 py-4 text-gray-700">0.20~0.48</td>
                      </tr>
                      <tr className="bg-gray-50/50 transition hover:bg-blue-50/50">
                        <td className="border-r border-gray-200 px-6 py-4 font-medium">M-WB-F-20</td>
                        <td className="border-r border-gray-200 px-6 py-4 font-mono text-xs">(250~500) x (1960~3960) x 3.0T</td>
                        <td className="border-r border-gray-200 px-6 py-4 font-bold text-gray-700">20%</td>
                        <td className="border-r border-gray-200 px-6 py-4 font-medium text-gray-900">0.752</td>
                        <td className="px-6 py-4 text-gray-700">0.16~0.20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="section-vortex" className="min-h-screen bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Vortex Reduction System
              </span>
              <h2 className="mb-4 mt-2 text-3xl font-bold text-gray-900">와류저감장치 핵심 기술</h2>
              <p className="text-gray-600">
                구조물 후류에서 발생하는 카르만 와류를 제어하는 레거시 기술 설명을
                현재 메뉴에 맞춰 이관했습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="space-y-8 lg:col-span-5">
                <div className="wind-interact rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="mb-4 flex items-center text-xl font-bold text-blue-900">
                    <i data-lucide="info" className="icon-react mr-2 h-6 w-6 text-blue-600" />
                    와류저감장치란?
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    구조물 후류에서 발생하는 카르만 와류를 제어해 공진(VIV), 피로누적,
                    소음, 볼트 이완 등의 문제를 줄이는 공력학적 제어 기술입니다.
                  </p>
                </div>

                <div className="wind-interact rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="mb-4 flex items-center text-xl font-bold text-gray-900">
                    <i data-lucide="check-square" className="icon-react mr-2 h-6 w-6 text-green-600" />
                    적용 분야
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-sm text-gray-700"><i data-lucide="anchor" className="mr-3 h-5 w-5 text-gray-400" />항만 방풍벽</li>
                    <li className="flex items-center text-sm text-gray-700"><i data-lucide="cloud-off" className="mr-3 h-5 w-5 text-gray-400" />비산먼지 차단벽</li>
                    <li className="flex items-center text-sm text-gray-700"><i data-lucide="arrow-up-circle" className="mr-3 h-5 w-5 text-gray-400" />고속도로 방음벽 상부 증설 구간</li>
                    <li className="flex items-center text-sm text-gray-700"><i data-lucide="factory" className="mr-3 h-5 w-5 text-gray-400" />산업시설 방진·방풍 설비</li>
                  </ul>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-10 text-white shadow-xl lg:col-span-7">
                <div className="pattern-dots absolute inset-0 opacity-5" />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-900/50 px-3 py-1 text-xs font-bold text-blue-200">
                    <i data-lucide="cpu" className="mr-1.5 h-3.5 w-3.5" />
                    Engineering Principle
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">와류저감장치 설계 원리</h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-slate-300">
                    구조물 후류에서 형성되는 와류의 발생 주파수와 구조물의 고유진동수가
                    일치하면 공진이 발생합니다. 이를 줄이기 위해 Strouhal 관계식을
                    기반으로 형상과 부속 장치를 설계합니다.
                  </p>

                  <div className="mb-6 flex items-center justify-center rounded-xl border border-slate-700 bg-black/40 px-4 py-8">
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                      <mi>f</mi>
                      <mo>=</mo>
                      <mfrac>
                        <mrow>
                          <mi>St</mi>
                          <mo>&middot;</mo>
                          <mi>V</mi>
                        </mrow>
                        <mi>D</mi>
                      </mfrac>
                    </math>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-6 flex items-center text-xl font-bold text-gray-900">
                <i data-lucide="bar-chart-2" className="icon-react mr-2 h-6 w-6 text-blue-600" />
                적용 효과 분석
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full whitespace-nowrap text-center text-sm text-gray-800">
                  <thead className="border-b-2 border-blue-500 bg-gray-100 text-xs font-bold uppercase tracking-wider text-gray-700">
                    <tr>
                      <th className="w-1/3 border-r border-gray-200 px-6 py-5">구분</th>
                      <th className="w-1/3 border-r border-gray-200 px-6 py-5 text-gray-500">일반 방풍벽</th>
                      <th className="w-1/3 px-6 py-5 text-blue-600">와류저감 적용</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="transition hover:bg-blue-50/50">
                      <td className="border-r border-gray-200 bg-gray-50/50 px-6 py-4 font-bold text-gray-700">항력계수</td>
                      <td className="border-r border-gray-200 px-6 py-4 text-gray-500">1.3 ~ 1.5</td>
                      <td className="bg-blue-50 px-6 py-4 font-bold text-blue-600">0.8 ~ 1.0</td>
                    </tr>
                    <tr className="transition hover:bg-blue-50/50">
                      <td className="border-r border-gray-200 bg-gray-50/50 px-6 py-4 font-bold text-gray-700">피로누적도</td>
                      <td className="border-r border-gray-200 px-6 py-4 font-medium text-red-500">높음</td>
                      <td className="bg-blue-50 px-6 py-4 font-bold text-blue-600">20~35% 감소</td>
                    </tr>
                    <tr className="transition hover:bg-blue-50/50">
                      <td className="border-r border-gray-200 bg-gray-50/50 px-6 py-4 font-bold text-gray-700">진동발생</td>
                      <td className="border-r border-gray-200 px-6 py-4 font-medium text-red-500">주기적 발생</td>
                      <td className="bg-blue-50 px-6 py-4 font-bold text-blue-600">현저히 감소</td>
                    </tr>
                    <tr className="transition hover:bg-blue-50/50">
                      <td className="border-r border-gray-200 bg-gray-50/50 px-6 py-4 font-bold text-gray-700">유지관리비</td>
                      <td className="border-r border-gray-200 px-6 py-4 font-medium text-red-500">높음</td>
                      <td className="bg-blue-50 px-6 py-4 font-bold text-blue-600">절감</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="wind-interact rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-800">일반 방풍벽</h3>
                  <span className="rounded-full border border-red-200 bg-red-100 px-3 py-1 text-xs font-bold text-red-600">진동 발생</span>
                </div>
                <div className="mb-6 flex h-56 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-slate-50">
                  <svg viewBox="0 0 400 200" className="h-full w-full">
                    <line x1="0" y1="180" x2="400" y2="180" stroke="#cbd5e1" strokeWidth="2" />
                    <rect x="150" y="80" width="10" height="100" fill="#94a3b8" />
                    <path d="M20 120 L140 120" stroke="#94a3b8" strokeWidth="2" />
                    <path d="M170 180 Q200 100 230 150 T280 160" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="4">
                      <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
                    </path>
                  </svg>
                </div>
              </div>

              <div className="wind-interact relative overflow-hidden rounded-2xl border border-blue-100 bg-blue-50 p-8 shadow-md">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-200 opacity-50 blur-3xl" />
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="flex items-center text-lg font-bold text-blue-900">
                      <i data-lucide="check-circle" className="mr-2 h-5 w-5 text-blue-600" />
                      와류저감장치 적용
                    </h3>
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-sm">안정화</span>
                  </div>
                  <div className="mb-6 flex h-56 items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-white">
                    <svg viewBox="0 0 400 200" className="h-full w-full">
                      <line x1="0" y1="180" x2="400" y2="180" stroke="#cbd5e1" strokeWidth="2" />
                      <line x1="155" y1="80" x2="155" y2="180" stroke="#3b82f6" strokeWidth="8" strokeDasharray="6 4" />
                      <path d="M20 120 L140 120" stroke="#3b82f6" strokeWidth="2">
                        <animate attributeName="stroke-dashoffset" from="20" to="0" dur="0.8s" repeatCount="indefinite" />
                      </path>
                      <path d="M170 120 L380 120" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 2">
                        <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
                      </path>
                    </svg>
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

export default TechnologyPage
