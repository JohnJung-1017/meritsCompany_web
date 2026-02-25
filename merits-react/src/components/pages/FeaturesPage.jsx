function FeaturesPage() {
  return (
    <>
    {/* PAGE: FEATURES (방풍벽이란?) */}
    <div id="page-features" className="page-section hidden fade-in bg-white">
      {/* 서브 카테고리 1: 방풍벽 효과 */}
      <div id="section-effects" className="min-h-[calc(100vh-5rem)]">
        {/* 1. 방풍벽 도입 효과 (기존 메인화면 요약본) */}
        <section className="py-24 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Core Benefits</span>
              <h2 className="text-3xl font-bold mt-2 text-gray-900">방풍벽 도입 효과</h2>
              <p className="text-gray-500 mt-4">메리츠컴퍼니의 다공성 방풍벽이 제공하는 3가지 핵심 가치입니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md wind-interact">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 border border-blue-100/50">
                  <i data-lucide="shield-check" className="w-6 h-6 text-blue-500 icon-react" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">주행 안전성 확보</h3>
                <p className="text-gray-600 text-sm leading-relaxed">25m/s 이상의 횡풍을 완화하여 대형 차량의 차선 이탈 및 전복을 선제적으로 방지합니다.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md wind-interact">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 border border-blue-100/50">
                  <i data-lucide="wind" className="w-6 h-6 text-blue-500 icon-react" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">탁월한 풍속 감쇄</h3>
                <p className="text-gray-600 text-sm leading-relaxed">바람을 완전히 차단하지 않고 타공 패널로 잘게 부수어 후방 풍속을 획기적으로 낮춥니다.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md wind-interact">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 border border-blue-100/50">
                  <i data-lucide="layers" className="w-6 h-6 text-blue-500 icon-react" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">구조적 안정성 유지</h3>
                <p className="text-gray-600 text-sm leading-relaxed">바람의 하중을 통과시켜 분산하므로, 기존 교량 및 도로 구조물에 무리 없이 설치 가능합니다.</p>
              </div>
            </div>
          </div>
        </section>
        {/* 2. 강풍의 위협 및 필요성 (자료 반영) */}
        <section className="py-24 pattern-dots border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-red-500 font-bold tracking-widest uppercase text-sm flex justify-center items-center gap-2"><i data-lucide="alert-triangle" className="w-4 h-4" /> The Threat</span>
              <h2 className="text-3xl font-bold mt-2 text-gray-900">강풍의 위협과 방풍벽의 필요성</h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">강풍은 주행 안정성을 크게 떨어뜨려 제어력을 잃은 차량의 전복 및 충돌 사고를 유발합니다.<br />특히 고도가 높은 교량과 개방된 지역에서는 방풍벽 설치가 필수적입니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="border-l-4 border-orange-400 pl-5">
                  <h4 className="text-lg font-bold text-gray-800">전세계적 현상과 기후 변화</h4>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed font-light">
                    기후 변화로 해수 온도가 상승하며 태풍과 허리케인이 강력해져 전 세계적으로 강풍 피해가 늘고 있습니다. 세계기상기구(WMO), 유엔 재난위험경감사무국(UNDRR), 미국 해양대기청(NOAA) 등 각종 보고서에 따르면 이러한 경제적 손실과 자연재해 빈도는 앞으로도 계속 증가할 것으로 예측됩니다.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-5">
                  <h4 className="text-lg font-bold text-gray-800">차량 사고 사례 (대한민국)</h4>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed font-light">
                    국내에서도 고속도로와 교량 등 강풍 취약 지역에서 대형 사고가 빈번합니다. 2023년 강원도 동해안 고속도로에서는 강풍으로 인해 대형 트럭이 전복되는 사고가 발생하여 도로가 마비되었습니다. 국토교통부와 한국도로공사 보고에 따르면 강풍 사고 비율은 최근 5년간 꾸준히 증가하고 있습니다.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                <div className="relative rounded-xl overflow-hidden bg-slate-100 h-72 flex flex-col items-center justify-center border border-gray-200 text-center px-6">
                  <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4">
                    <i data-lucide="wind" className="w-8 h-8" />
                  </div>
                  <h3 className="text-slate-800 font-bold text-lg mb-2">도로 환경의 안전 확보</h3>
                  <p className="text-slate-500 text-sm">방풍벽은 차량이 강풍의 영향을 덜 받도록 도와주어 주행 안정성을 높이고, 눈이나 먼지와 같은 부유물질이 도로에 쌓이는 것을 방지하여 도로 환경을 더욱 안전하게 만듭니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 3. 설치 위치에 따른 효과 (자료 반영) */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Installation</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">설치 위치에 따른 최적화 효과</h2>
              <p className="text-gray-600 mt-4">각 구간의 특성에 따라 방풍벽의 높이와 공극률을 조정하여 안전성을 극대화합니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 wind-interact">
                <i data-lucide="waves" className="w-8 h-8 text-blue-500 mb-4 icon-react" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">교량 구간</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">바람을 직접적으로 받는 구간입니다. 방풍벽 설치 시 5, 6차선으로 이동할수록 풍속이 확연히 감소하여 주행 방향 상실을 막고 안전한 주행 환경을 제공합니다.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 wind-interact">
                <i data-lucide="sun" className="w-8 h-8 text-orange-500 mb-4 icon-react" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">개방된 고속도로</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">다양한 각도에서 강한 횡풍이 불면 차량이 옆으로 밀릴 위험이 큽니다. 방풍벽은 이러한 바람의 세기를 줄여 안정적인 주행을 유지하게 합니다.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 wind-interact">
                <i data-lucide="mountain" className="w-8 h-8 text-green-600 mb-4 icon-react" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">산악 및 해안가</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">지형적 돌풍과 해안가의 습기/염분을 제어합니다. 다공성 방풍벽을 통해 바람을 줄이면서도 염분이 벽을 통과하도록 설계해 인프라 부식을 줄일 수 있습니다.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 wind-interact">
                <i data-lucide="disc" className="w-8 h-8 text-purple-500 mb-4 icon-react" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">터널 출구 및 고가</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">터널을 나올 때 압력 차이로 발생하는 강한 돌풍과, 고가도로 가장자리에서 차량이 외부로 밀려나는 경로 이탈 현상을 방지합니다.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* 서브 카테고리 2: 설계 및 검토 */}
      <div id="section-design" className="min-h-screen bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Engineering Standard</span>
            <h2 className="text-3xl font-bold mt-2 text-gray-900">방풍벽 설계 및 검토 요소</h2>
            <p className="text-gray-500 mt-4">한국도로공사 기준 및 과학적 역학을 바탕으로 한 설계의 핵심 (높이 및 차폐율)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i data-lucide="ruler" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">방풍벽 높이 (Height)</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                방풍벽의 높이는 도로를 주행하는 차량의 안전에 매우 중요하며, <strong>도로공사 기준에서는 방풍벽의 높이를 도로 폭의 최소 1/8 이상, 일반적으로는 4미터로 제안</strong>합니다.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                이 기준은 대형 차량을 포함해 강풍에 취약한 차량들이 옆 차선으로 밀리는 위험을 줄이는 데 적합합니다. 계산상으로 한 차로가 약 2.53미터 이상이라면, 6차선 고속도로(전체 폭 15m 이상)에서는 최소 2미터 이상의 방풍벽이 요구됩니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i data-lucide="layout-grid" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">차폐율 (Blockage Ratio)</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                차폐율은 공극률의 반대 개념으로, 방풍벽 전체 면적 중 바람을 막는 부분의 비율입니다. <strong>차폐율이 높을수록 바람을 더 많이 막지만, 지나치게 높으면 난류가 발생해 바람이 뒷면으로 몰리게 됩니다.</strong>
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm text-gray-700 font-mono">
                예) 공극률이 30%라면, 차폐율은 70%
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                적정한 바람 통과를 허용하면서 차량이 지나치게 강한 바람에 노출되지 않도록 보호하는 밸런스가 핵심 설계 요소입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FeaturesPage
