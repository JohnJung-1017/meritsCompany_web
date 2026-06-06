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
                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  방풍벽 필요성
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-gray-600">
                  강풍은 도로와 교량에서 큰 위험 요소로 작용하여 안전을
                  위협합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                  <div className="border-l-4 border-red-500 pl-5">
                    <h4 className="mb-2 flex items-center text-lg font-bold text-gray-800">
                      <i
                        data-lucide="wind"
                        className="mr-2 h-5 w-5 text-red-500"
                      />
                      강풍의 위협
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      강풍은 도로와 교량에서 큰 위험 요소로 작용하여 안전을
                      위협합니다. 특히 교량 위에서는 차량 전복 사고가 발생할 수
                      있으며, 도로 주변 구조물이 파손될 위험도 큽니다. 강풍으로
                      인해 차량 주행 안정성이 떨어지며 제어력을 잃은 차량이
                      사고를 일으킬 가능성이 매우 높아집니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-400 pl-5">
                    <h4 className="mb-2 flex items-center text-lg font-bold text-gray-800">
                      <i
                        data-lucide="globe-2"
                        className="mr-2 h-5 w-5 text-orange-500"
                      />
                      전세계적 현상
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      기후 변화로 해수 온도가 상승하며 태풍과 허리케인이
                      강력해져 전 세계적으로 강풍 피해가 늘고 있습니다. 미국,
                      일본, 필리핀 등에서는 강풍과 폭우로 인한 피해가 꾸준히
                      증가하며, 재난 경보 발령 빈도도 높아지고 있습니다. 또한,
                      도시화로 고층 건물과 교통 인프라가 늘면서 강풍에 의한
                      사고와 2차 피해 가능성도 커지고 있습니다.
                      세계기상기구(WMO), 유엔 재난위험경감사무국(UNDRR), 미국
                      해양대기청(NOAA) 등 보고서를 인용하면, 강풍에 의한 경제적
                      손실은 점진적으로 증가하는 추세이며 기후 변화로 인한
                      자연재해의 빈도 증가와 관련하여, 강풍 피해는 앞으로도
                      계속해서 증가할 것으로 예측됩니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-5">
                    <h4 className="mb-2 flex items-center text-lg font-bold text-gray-800">
                      <i
                        data-lucide="alert-circle"
                        className="mr-2 h-5 w-5 text-yellow-500"
                      />
                      차량 사고 사례 (대한민국도 예외없는 강풍 사고 지역)
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      강풍으로 인한 사고는 대한민국에서도 점차 심각한 문제로
                      대두되고 있습니다. 특히, 고속도로와 교량, 산악 지역과 같은
                      강풍 취약 지역에서 차량 전복, 충돌 사고가 빈번하게
                      발생하고 있습니다. 예를 들어, 2023년 강원도 동해안
                      고속도로에서는 강풍으로 인해 대형 트럭이 전복되는 사고가
                      발생하여 도로가 한동안 폐쇄되었고, 차량 운전자들이 큰
                      불편을 겪은 사례가 있었습니다. 국토교통부와 한국도로공사
                      보고에 따르면, 강풍으로 인한 차량 사고 비율은 최근 5년간
                      꾸준히 증가하고 있으며, 이는 기후 변화와 바람의 강도
                      증가와 밀접한 관련이 있는 것으로 분석되고 있습니다.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-6">
                  <div className="wind-interact relative overflow-hidden rounded-2xl border border-blue-500 bg-blue-600 p-8 text-white shadow-xl">
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white opacity-10 blur-3xl" />
                    <div className="relative z-10">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm">
                        <i
                          data-lucide="shield-check"
                          className="icon-react h-6 w-6"
                        />
                      </div>
                      <h3 className="mb-3 text-xl font-bold">
                        방풍벽의 필요성
                      </h3>
                      <p className="text-sm leading-relaxed text-blue-100">
                        주행 안정성을 확보하고 강풍에 의한 사고를 줄이기 위해,
                        도로와 교량에 방풍벽을 설치하는 것이 필요합니다.
                        방풍벽은 차량이 강풍의 영향을 덜 받도록 도와주어 주행
                        안정성을 높이고, 눈이나 먼지와 같은 부유물질의 쌓임을
                        방지하여 도로 환경을 더욱 안전하게 만듭니다.
                      </p>
                    </div>
                  </div>

                  <div className="wind-interact relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 p-8 text-white shadow-xl">
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-400 opacity-10 blur-3xl" />
                    <div className="relative z-10">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
                        <i data-lucide="map" className="icon-react h-6 w-6" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold">
                        도로 및 교량에서의 방풍벽의 중요성
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-300">
                        도로, 교량, 개방된 지역에서 강풍으로 인해 발생할 수 있는
                        위험을 줄이기 위해 방풍벽이 필수적입니다. 강풍은 차량의
                        주행 안정성을 저해하고, 사고를 유발할 수 있습니다. 특히,
                        고도가 높고 바람의 영향을 더 많이 받는 교량에서는
                        방풍벽이 안전을 보장하는 중요한 역할을 합니다. 교량 위의
                        강풍은 차량의 방향을 바꾸거나 전복을 유발할 수 있습니다.
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
                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  방풍벽 도입 효과 요약
                </h2>
                <p className="mt-4 text-gray-500">
                  메리츠컴퍼니의 다공성 방풍벽이 제공하는 3가지 핵심 가치입니다.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="wind-interact rounded-2xl border border-gray-100 bg-white p-8 shadow-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/50 bg-blue-50">
                    <i
                      data-lucide="shield-check"
                      className="icon-react h-6 w-6 text-blue-500"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    주행 안전성 확보
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    25m/s 이상의 횡풍을 완화해 대형 차량의 차선 이탈 및 전복을
                    선제적으로 방지합니다.
                  </p>
                </div>

                <div className="wind-interact rounded-2xl border border-gray-100 bg-white p-8 shadow-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/50 bg-blue-50">
                    <i
                      data-lucide="wind"
                      className="icon-react h-6 w-6 text-blue-500"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    탁월한 풍속 감쇄
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    바람을 완전히 막지 않고 타공 패널을 통해 분산시켜 후방
                    풍속을 효과적으로 낮춥니다.
                  </p>
                </div>

                <div className="wind-interact rounded-2xl border border-gray-100 bg-white p-8 shadow-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/50 bg-blue-50">
                    <i
                      data-lucide="layers"
                      className="icon-react h-6 w-6 text-blue-500"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    구조적 안정성 유지
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    바람의 하중을 통과시켜 분산하므로, 기존 교량 및 도로
                    구조물에 무리 없이 설치 가능합니다.
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
                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  설치 위치에 따른 효과
                </h2>
                <p className="mt-4 text-gray-600">
                  각 구간의 특성에 따라 방풍벽의 높이와 공극률을 조정하여
                  안전성을 극대화합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="wind-interact rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <i
                    data-lucide="waves"
                    className="icon-react mb-4 h-8 w-8 text-blue-500"
                  />
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    교량 구간
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    바람을 직접적으로 받는 구간입니다. 방풍벽 설치 시 5,
                    6차선으로 이동할수록 풍속이 확연히 감소하여 주행 방향 상실을
                    막고 안전한 주행 환경을 제공합니다.
                  </p>
                </div>

                <div className="wind-interact rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <i
                    data-lucide="sun"
                    className="icon-react mb-4 h-8 w-8 text-orange-500"
                  />
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    개방된 고속도로
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    다양한 각도에서 강한 횡풍이 불면 차량이 옆으로 밀릴 위험이
                    큽니다. 방풍벽은 이러한 바람의 세기를 줄여 안정적인 주행을
                    유지하게 합니다.
                  </p>
                </div>

                <div className="wind-interact rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <i
                    data-lucide="mountain"
                    className="icon-react mb-4 h-8 w-8 text-green-600"
                  />
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    산악 및 해안가
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    지형적 돌풍과 해안가의 습기/염분을 제어합니다. 다공성
                    방풍벽을 통해 바람을 줄이면서도 염분이 벽을 통과하도록
                    설계해 인프라 부식을 줄일 수 있습니다.
                  </p>
                </div>

                <div className="wind-interact rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <i
                    data-lucide="disc"
                    className="icon-react mb-4 h-8 w-8 text-purple-500"
                  />
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    터널 출구 및 고가
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    터널을 나올 때 압력 차이로 발생하는 강한 돌풍과, 고가도로
                    가장자리에서 차량이 외부로 밀려나는 경로 이탈 현상을
                    방지합니다.
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
                레거시 설계 기준 내용을 현재 React 페이지 구조에 맞춰
                이관했습니다.
              </p>
            </div>

            <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <i data-lucide="ruler" className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    방풍벽 높이
                  </h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  방풍벽의 높이는 도로를 주행하는 차량의 안전에 매우 중요하며,
                  도로공사 기준에서는 방풍벽의 높이를 도로 폭의 최소 1/8 이상,
                  일반적으로는 4미터로 제안합니다.
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  이 기준은 대형 차량을 포함해 강풍에 취약한 차량들이 옆
                  차선으로 밀리는 위험을 줄이는 데 적합합니다. 계산상으로 한
                  차로가 약 2.53미터 이상이라면, 6차선 고속도로(전체 폭 15m
                  이상)에서는 최소 2미터 이상의 방풍벽이 요구됩니다.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <i data-lucide="layout-grid" className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    공극률과 차폐율
                  </h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  차폐율은 공극률의 반대 개념으로, 전체 면적 중 바람을 막는
                  부분의 비율입니다. 차폐율이 높을수록 바람을 더 많이 막지만,
                  지나치게 높으면 강한 난류가 발생해 바람이 뒷면으로 몰립니다.
                </p>
                <div className="mb-4 rounded-lg border border-gray-100 bg-gray-50 p-4 text-center font-mono text-sm font-bold text-gray-700">
                  공극률 30% = 차폐율 70%
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  무공극 방풍벽은 바람을 완전히 차단하지만 벽 뒤에 먼지가 쌓이는
                  무풍지대를 생성합니다. 다공성 방풍벽은 적정한 바람 통과를
                  허용하여 차량 보호와 도로 환경 개선 밸런스를 맞춥니다.
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
                    항력계수(CD)는 방풍벽이 바람을 받았을 때의 저항 정도를
                    나타내는 값으로, 방풍벽 설계에서 구조적 안전성과 성능을
                    평가하는 중요한 요소입니다. 공극률이 높아질수록 통과하는
                    바람이 많아져 저항력이 줄어들고 항력계수가 낮아집니다.
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
                        최적의 항력계수 적용: 공극률 40%일 때 CD는 약 0.75로
                        풍속 저감과 구조적 안전성 간의 균형이 가장 우수합니다.
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
                  <div className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <span className="font-bold text-slate-200">공극률 50%</span>
                    <span className="text-2xl font-black text-cyan-300">
                      CD = 0.58
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <span className="font-bold text-slate-200">공극률 60%</span>
                    <span className="text-2xl font-black text-cyan-300">
                      CD = 0.49
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <span className="font-bold text-slate-200">공극률 70%</span>
                    <span className="text-2xl font-black text-cyan-300">
                      CD = 0.41
                    </span>
                  </div>
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
                        "고속도로 강풍구간 주행안전성 확보를 위한 방풍벽
                        설치지역 선정지침 (도로교통연구원)"
                      </strong>
                      에 의거하여, 토공부와 교량부 모두 일괄적으로{" "}
                      <strong>0.8</strong>을 적용해 설계의 안전성을 극대화합니다.{" "}
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
                      <th
                        colSpan="2"
                        className="border-b border-blue-100 px-4 py-3"
                      >
                        표준 풍하중 q (KN/m²)
                      </th>
                    </tr>
                    <tr>
                      <th className="border-r border-blue-100 px-4 py-2">
                        토공부 (지표조도 II)
                      </th>
                      <th className="px-4 py-2">
                        교량부 (지표조도 II + 고도 20m)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="transition hover:bg-gray-50">
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-gray-900">
                        30
                      </td>
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-blue-600">
                        0.8
                      </td>
                      <td className="border-r border-gray-100 px-4 py-3">
                        0.45
                      </td>
                      <td className="px-4 py-3 font-medium">0.60</td>
                    </tr>
                    <tr className="transition hover:bg-gray-50">
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-gray-900">
                        35
                      </td>
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-blue-600">
                        0.8
                      </td>
                      <td className="border-r border-gray-100 px-4 py-3">
                        0.65
                      </td>
                      <td className="px-4 py-3 font-medium">0.80</td>
                    </tr>
                    <tr className="transition hover:bg-gray-50">
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-gray-900">
                        40
                      </td>
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-blue-600">
                        0.8
                      </td>
                      <td className="border-r border-gray-100 px-4 py-3">
                        0.80
                      </td>
                      <td className="px-4 py-3 font-medium">1.00</td>
                    </tr>
                    <tr className="transition hover:bg-gray-50">
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-gray-900">
                        45
                      </td>
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-blue-600">
                        0.8
                      </td>
                      <td className="border-r border-gray-100 px-4 py-3 font-bold text-red-600">
                        1.05
                      </td>
                      <td className="px-4 py-3 font-bold text-red-600">1.30</td>
                    </tr>
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
                    <strong>풍환경 프로그램 검토</strong>를 통해 방풍벽 설치
                    전후의 대상지역 풍속을 평가하고, 풍속의 공간적 분포 및
                    대상구역에서의 풍속저감비율을 명확하게 확인할 수 있습니다.
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
                          설치 지역의 지형과 구조물을 3D 모델링하여 국지적 돌풍
                          및 난류의 흐름을 시각적으로 분석합니다.
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
                          방풍벽 통과 전후의 풍압과 풍속 데이터를 비교하여
                          목표하는 감쇄율(%)을 달성하는지 사전에 검증합니다.
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
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesPage;
