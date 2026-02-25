function TechnologyPage() {
  return (
    <>
    {/* PAGE: TECHNOLOGY (기술력) */}
    <div id="page-technology" className="page-section hidden fade-in bg-white">
      {/* 서브 카테고리 1: 방풍패널 종류 및 특징 */}
      <div id="section-panels" className="min-h-screen py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Panel Types &amp; Specs</span>
            <h2 className="text-3xl font-bold mt-2 text-gray-900">방풍패널의 종류 및 특징 (공극률)</h2>
            <p className="text-gray-500 mt-4">공극률에 따른 환경별 맞춤형 제어 효과와 소재별 특징입니다.</p>
          </div>
          {/* 공극률 효과 설명 (자료 반영) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 wind-interact">
              <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center"><span className="w-3 h-3 rounded-full bg-blue-500 mr-3" />공극률 22~33%</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                바람의 속도가 원래 바람의 약 15~25%로 감소하여 차량의 주행 안정성이 획기적으로 높아집니다. 이 공극률 범위는 바람을 적절히 차단하면서도 난류를 줄이기 위한 용도로, <strong>교량이나 개방된 고속도로 구간</strong>에 가장 효과적입니다.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 wind-interact">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center"><span className="w-3 h-3 rounded-full bg-gray-500 mr-3" />공극률 45%</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                바람 속도가 원래 바람의 30~45%로 유지되며, 바람을 완전히 막지 않고 일정 부분 통과시켜 차량이 지나치게 흔들리지 않도록 유도합니다. 이 설계는 지속적으로 강한 바람이 부는 <strong>해안가나 산악 지역</strong>에 적합합니다.
              </p>
            </div>
          </div>
          {/* 풍속 감소 효과 데이터 표 (기존) */}
          <div className="mb-16">
            <h4 className="text-xl font-bold text-gray-900 mb-4">공극률과 풍속 감소 효과의 관계 (높이 3m 기준)</h4>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-700">
                  <thead className="text-xs uppercase bg-gray-50 border-b border-gray-200 text-gray-500">
                    <tr>
                      <th rowSpan={2} className="px-6 py-5 border-r border-gray-200 align-middle font-bold">거리 (Distance)</th>
                      <th colSpan={2} className="px-4 py-3 text-center border-r border-gray-200 bg-blue-50/50 text-blue-700">공극률 40% (Type A)</th>
                      <th colSpan={2} className="px-4 py-3 text-center border-r border-gray-200 bg-gray-50 text-gray-700">공극률 30% (Type B)</th>
                      <th rowSpan={2} className="px-6 py-5 text-center align-middle font-medium">비고</th>
                    </tr>
                    <tr className="bg-white">
                      <th className="px-2 py-2 text-center border-r border-gray-200 text-[10px]">풍속비</th>
                      <th className="px-2 py-2 text-center border-r border-gray-200 text-[10px] text-blue-600">감쇄율</th>
                      <th className="px-2 py-2 text-center border-r border-gray-200 text-[10px]">풍속비</th>
                      <th className="px-2 py-2 text-center border-r border-gray-200 text-[10px] text-gray-600">감쇄율</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-bold border-r border-gray-100 text-gray-900">3m</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100">0.48</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 font-bold text-blue-600">52%</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100">0.18</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 font-bold text-gray-700">82%</td>
                      <td className="px-6 py-4 text-center text-xs text-gray-500">초기 제어</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition bg-blue-50/10">
                      <td className="px-6 py-4 font-bold border-r border-gray-100 text-blue-700">6m</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100">0.29</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 font-bold text-blue-600">71%</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100">0.16</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 font-bold text-blue-700">84%</td>
                      <td className="px-6 py-4 text-center text-xs text-blue-600 font-bold">최대 효율</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-bold border-r border-gray-100 text-gray-900">12m</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100">0.20</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 font-bold text-blue-600">80%</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100">0.20</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 font-bold text-gray-700">80%</td>
                      <td className="px-6 py-4 text-center text-xs text-gray-500">-</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-bold border-r border-gray-100 text-gray-900">24m</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100">0.24</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 font-bold text-blue-600">76%</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100">0.17</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 font-bold text-gray-700">83%</td>
                      <td className="px-6 py-4 text-center text-xs text-gray-500">원거리 유지</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-right text-xs text-gray-500 mt-2">* 일본 건축 종합시험소 기준 / 공극률이 높을수록 통과 바람은 증가하나 차폐 효과는 줄어들어 20~45% 범위가 권장됩니다.</p>
          </div>
          {/* Material Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm wind-interact">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl icon-react">GI</div>
                  <div><h4 className="text-lg font-bold text-gray-900">아연도강판</h4></div>
                </div>
                <div className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">KS D 3506</div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-light">용융 아연 도금 강판으로 높은 강도와 우수한 경제성을 지닌 산업용 방풍벽의 표준 소재입니다. (내륙 및 일반 교량 최적화)</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm wind-interact">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-lg flex items-center justify-center font-bold text-xl icon-react">FRP</div>
                  <div><h4 className="text-lg font-bold text-gray-900">섬유 강화 플라스틱</h4></div>
                </div>
                <div className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">내부식성 우수</div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-light">부식에 절대적인 저항성을 지닌 첨단 소재로, 염분이 많은 해안가 및 제설제 살포 구간 완벽 대응이 가능합니다.</p>
            </div>
          </div>
        </div>
      </div>
      {/* 서브 카테고리 2: 와류저감장치 (기존 방풍벽 페이지에서 이동 및 내용 추가) */}
      <div id="section-vortex" className="min-h-screen bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Vortex Reduction System</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">와류저감장치 핵심 원리</h2>
            <p className="text-gray-600">공극률이 확보된 다공성 패널이 어떻게 난류(와류)를 없애고 주행 안정성을 지키는지 보여줍니다.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Solid Wall (문제점) */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm wind-interact">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-800 text-lg">무공극 방풍벽 (문제점)</h3>
                <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">난류(와류) 발생</span>
              </div>
              <div className="bg-gray-50 rounded-xl h-48 relative overflow-hidden flex items-center justify-center border border-gray-200 mb-6">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <line x1={0} y1={180} x2={400} y2={180} stroke="#cbd5e1" strokeWidth={2} />
                  <rect x={150} y={80} width={10} height={100} fill="#94a3b8" />
                  <path d="M20 120 L140 120" stroke="#94a3b8" strokeWidth={2} />
                  <path d="M170 180 Q200 100 230 150 T280 160" stroke="#ef4444" strokeWidth={2} fill="none" strokeDasharray={4}>
                    <animate attributeName="stroke-dashoffset" from={20} to={0} dur="1s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
              <p className="text-gray-600 text-sm font-light">
                공극이 없는 꽉 막힌 방풍벽은 정면의 바람은 완전히 차단하지만, 벽을 넘어가는 바람이 후방에서 <strong>강한 와류(소용돌이 치는 난류)</strong>를 형성합니다. 이로 인해 겨울철 눈이 쌓이거나 먼지가 비산되는 무풍지대 문제가 발생하기 쉽습니다.
              </p>
            </div>
            {/* Porous Wall (해결책) */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-md relative overflow-hidden wind-interact">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50" />
              <div className="flex items-center justify-between mb-6 relative z-10">
                <h3 className="font-bold text-blue-900 text-lg flex items-center"><i data-lucide="check-circle" className="w-5 h-5 mr-2 text-blue-600" /> 다공성 방풍벽 (해결책)</h3>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-sm">와류 저감 적용</span>
              </div>
              <div className="bg-white rounded-xl h-48 relative overflow-hidden flex items-center justify-center border border-blue-100 mb-6 z-10">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <line x1={0} y1={180} x2={400} y2={180} stroke="#cbd5e1" strokeWidth={2} />
                  {/* 타공 패널 표현 */}
                  <line x1={155} y1={80} x2={155} y2={180} stroke="#3b82f6" strokeWidth={8} strokeDasharray="6 4" />
                  <path d="M20 120 L140 120" stroke="#3b82f6" strokeWidth={2}>
                    <animate attributeName="stroke-dashoffset" from={20} to={0} dur="0.8s" repeatCount="indefinite" />
                  </path>
                  {/* 부드럽게 통과하는 바람 */}
                  <path d="M170 120 L380 120" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 2">
                    <animate attributeName="stroke-dashoffset" from={20} to={0} dur="1.5s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
              <p className="text-gray-700 text-sm font-light relative z-10">
                공극률이 있는 다공성 방풍벽은 일정 비율의 바람을 통과시켜 <strong>난류와 무풍지대를 획기적으로 줄이는 효과</strong>를 기대할 수 있습니다. 바람의 흐름이 원활해져 차량 흔들림을 막고, 눈이나 먼지가 쌓이는 도로 결빙 현상을 방지합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TechnologyPage
