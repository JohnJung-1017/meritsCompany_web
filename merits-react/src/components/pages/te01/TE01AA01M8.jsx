// 일반 방풍벽(문제점) vs 와류저감장치 적용(해결책) 비교 다이어그램
function TE01AA01M8() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
      <div className="wind-interact rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800">
            일반 방풍벽 (문제점)
          </h3>
          <span className="rounded-full border border-red-200 bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
            교번 와류 발생
          </span>
        </div>
        <div className="relative mb-6 flex h-56 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-slate-50">
          <div className="blueprint-bg absolute inset-0 opacity-50" />
          <svg viewBox="0 0 400 250" className="relative z-10 h-full w-full">
            <defs>
              <marker
                id="arrow-red"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="4"
                markerHeight="4"
                orient="auto"
              >
                <path d="M0,0 L10,5 L0,10 z" fill="#ef4444" opacity="0.8" />
              </marker>
            </defs>

            <line
              x1="0"
              y1="200"
              x2="400"
              y2="200"
              stroke="#94a3b8"
              strokeWidth="4"
            />
            <path d="M0 200 L400 200 L400 250 L0 250 Z" fill="#e2e8f0" />

            <rect x="140" y="80" width="20" height="120" fill="#64748b" />
            <rect x="135" y="80" width="30" height="5" fill="#475569" />

            <path
              d="M -20 120 L 130 120"
              stroke="#94a3b8"
              strokeWidth="3"
              fill="none"
              opacity="0.5"
              strokeDasharray="10 10"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="150"
                to="0"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </path>

            <path
              d="M 160 80 C 200 60, 240 180, 280 120 C 320 60, 360 180, 400 120"
              stroke="#ef4444"
              strokeWidth="4"
              fill="none"
              opacity="0.8"
              markerEnd="url(#arrow-red)"
              strokeDasharray="15 15"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="300"
                to="0"
                dur="2.1s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 150 140 C 180 140, 220 190, 260 150 C 300 110, 340 190, 380 150"
              stroke="#f87171"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
              strokeDasharray="12 12"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="250"
                to="0"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </path>

            <path
              d="M 180 100 A 30 30 0 1 1 170 120"
              stroke="#ef4444"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 180 100"
                to="360 180 100"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 230 140 A 25 25 0 1 0 240 160"
              stroke="#ef4444"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="360 230 140"
                to="0 230 140"
                dur="2.1s"
                repeatCount="indefinite"
              />
            </path>

            <path
              d="M 125 90 L 135 80 M 125 100 L 135 90 M 175 90 L 165 80 M 175 100 L 165 90"
              stroke="#ef4444"
              strokeWidth="2"
              fill="none"
            >
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
        <h3 className="text-sm font-medium leading-relaxed text-gray-500">
          벽을 넘어가는 바람이 후방에서 강한 교번 와류를 형성합니다. 이는
          방풍벽 자체에 공진 현상과 진동을 유발하여 볼트 풀림 및 피로 파괴의
          원인이 됩니다.
        </h3>
      </div>

      <div className="wind-interact relative overflow-hidden rounded-2xl border border-blue-100 bg-blue-50 p-8 shadow-md">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-200 opacity-50 blur-3xl" />
        <div className="relative z-10">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="flex items-center text-lg font-bold text-blue-900">
              <i
                data-lucide="check-circle"
                className="mr-2 h-5 w-5 text-blue-600"
              />
              와류저감장치 적용 (해결책)
            </h3>
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
              공진(VIV) 원천 차단
            </span>
          </div>
          <div className="relative z-10 mb-6 flex h-56 items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-white shadow-inner">
            <div className="blueprint-bg absolute inset-0 opacity-30" />
            <svg viewBox="0 0 400 250" className="relative z-10 h-full w-full">
              <defs>
                <marker
                  id="arrow-blue"
                  markerWidth="10"
                  markerHeight="10"
                  refX="6"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L6,3 z" fill="#3b82f6" />
                </marker>
              </defs>

              <line
                x1="0"
                y1="200"
                x2="400"
                y2="200"
                stroke="#94a3b8"
                strokeWidth="4"
              />
              <path d="M0 200 L400 200 L400 250 L0 250 Z" fill="#f8fafc" />

              <rect x="140" y="80" width="20" height="120" fill="#3b82f6" />

              <path
                d="M 135 80 L 140 65 L 145 80 L 150 65 L 155 80 L 160 65 L 165 80"
                fill="#1e40af"
              />

              <path
                d="M -20 120 L 130 120"
                stroke="#93c5fd"
                strokeWidth="3"
                fill="none"
                opacity="0.7"
                strokeDasharray="10 10"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="150"
                  to="0"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </path>

              <path
                d="M 160 65 Q 200 60 240 80 T 320 100 T 400 110"
                stroke="#3b82f6"
                strokeWidth="3"
                fill="none"
                opacity="0.8"
                markerEnd="url(#arrow-blue)"
                strokeDasharray="15 15"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="250"
                  to="0"
                  dur="2.3s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M 160 85 Q 220 100 280 130 T 400 140"
                stroke="#60a5fa"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
                strokeDasharray="12 12"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="250"
                  to="0"
                  dur="2.7s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M 150 140 Q 200 160 280 170 T 400 175"
                stroke="#93c5fd"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
                strokeDasharray="10 10"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="250"
                  to="0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>

              <path
                d="M 180 90 A 10 10 0 1 1 175 100"
                stroke="#60a5fa"
                strokeWidth="1.5"
                fill="none"
                opacity="0.4"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 180 90"
                  to="360 180 90"
                  dur="3.1s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M 210 110 A 15 15 0 1 1 200 120"
                stroke="#93c5fd"
                strokeWidth="1.5"
                fill="none"
                opacity="0.3"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 210 110"
                  to="360 210 110"
                  dur="3.6s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
          <h3 className="text-sm font-medium leading-relaxed text-blue-700/80">
            와류저감장치 설계를 통해 주파수(f)를 분산시켜 바람이 원활하게
            통과하도록 유도합니다. 진동 및 소음 발생이 현저히 감소하며, 구조물의
            수명이 극대화됩니다.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default TE01AA01M8;
