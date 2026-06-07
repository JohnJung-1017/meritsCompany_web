// 제품 도면 (Blueprint) — Front/Side/Detail 뷰
function TE01AA01M4() {
  return (
    <div className="mb-16 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="border-b border-gray-200 bg-gray-50 px-8 py-5">
        <h3 className="flex items-center text-xl font-bold text-gray-900">
          <i data-lucide="ruler" className="mr-2 h-5 w-5 text-blue-600" />
          제품 도면 (Blueprint)
        </h3>
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
              <span className="rounded bg-blue-600/80 px-3 py-1 font-bold backdrop-blur-sm">
                (FRP 3.0T)
              </span>
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
            <p className="mt-4 text-center text-sm font-bold text-gray-700">
              - DETAIL (공극률)
            </p>
          </div>

          <div>
            <div className="mx-auto w-full max-w-sm">
              <svg
                viewBox="0 0 450 150"
                className="h-auto w-full drop-shadow-md"
              >
                <line
                  x1="20"
                  y1="20"
                  x2="430"
                  y2="20"
                  stroke="#94a3b8"
                  strokeWidth="1"
                />
                <polyline
                  points="20,110 55,110 100,55 150,55 195,110 275,110 320,55 370,55 415,110 430,110"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="mt-2 text-center text-sm font-bold text-gray-700">
              - 500 SIDE VIEW
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TE01AA01M4;
