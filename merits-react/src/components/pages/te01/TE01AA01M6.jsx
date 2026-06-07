import { useTE01store } from "./useTE01store";

// 와류저감장치 정의 + 적용 분야 + 설계 원리(공식/변수)
function VariableItem({ symbol, desc }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-slate-700/70 bg-slate-900/40 px-5 py-4">
      <span className="min-w-[2rem] text-lg font-bold text-cyan-300">
        {symbol}
      </span>
      <p className="text-sm leading-relaxed text-slate-100">
        <span className="mr-2 font-semibold text-white">:</span>
        {desc}
      </p>
    </div>
  );
}

function TE01AA01M6() {
  const { applications, formulaVars } = useTE01store();
  const leftVars = formulaVars.slice(0, 2);
  const rightVars = formulaVars.slice(2);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
      <div className="space-y-8 lg:col-span-5">
        <div className="wind-interact rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-4 flex items-center text-xl font-bold text-blue-900">
            <i
              data-lucide="info"
              className="icon-react mr-2 h-6 w-6 text-blue-600"
            />
            와류저감장치란?
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            풍하중 작용 시 구조물 후류에 발생하는 교번 와류(Kármán Vortex)를
            제어하여 구조물의 공진(VIV), 피로파괴, 소음 및 볼트 이완을 방지하는
            공력학적 제어 기술입니다.
          </p>
        </div>

        <div className="wind-interact rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-4 flex items-center text-xl font-bold text-gray-900">
            <i
              data-lucide="check-square"
              className="icon-react mr-2 h-6 w-6 text-green-600"
            />
            적용 분야
          </h3>
          <ul className="space-y-4">
            {applications.map((item) => (
              <li
                key={item.label}
                className="flex items-center text-sm text-gray-700"
              >
                <i
                  data-lucide={item.icon}
                  className="mr-3 h-5 w-5 text-gray-400"
                />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-10 text-white shadow-xl lg:col-span-7">
        <div className="pattern-dots absolute inset-0 opacity-5" />
        <div className="absolute inset-x-8 top-6 h-24 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-900/50 px-3 py-1 text-xs font-bold text-blue-200">
            <i data-lucide="cpu" className="mr-1.5 h-3.5 w-3.5" />
            Engineering Principle
          </div>
          <h3 className="mb-4 text-xl font-bold tracking-tight text-white">
            와류저감장치 설계 원리
          </h3>
          <p className="mb-8 text-sm font-light leading-relaxed text-slate-200">
            풍하중 작용 시 구조물 후류에는 교번 와류가 형성되며, 이 와류 발생
            주파수는 Strouhal 관계식에 의해 결정됩니다. 구조물의 고유진동수와
            일치할 경우 공진(VIV)이 발생하며, 이는 반복 응력에 의한 피로 손상으로
            이어질 수 있으므로 정밀한 설계가 필수적입니다.
          </p>

          <div className="mb-8 flex items-center justify-center rounded-2xl border border-slate-700 bg-black/35 px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <math
              xmlns="http://www.w3.org/1998/Math/MathML"
              className="text-[24px] font-semibold text-cyan-300 md:text-[32px]"
            >
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

          <div className="grid grid-cols-1 gap-4 rounded-2xl bg-slate-800/80 p-6 shadow-lg md:grid-cols-2">
            <div className="space-y-4">
              {leftVars.map((item) => (
                <VariableItem
                  key={item.symbol}
                  symbol={item.symbol}
                  desc={item.desc}
                />
              ))}
            </div>

            <div className="space-y-4">
              {rightVars.map((item) => (
                <VariableItem
                  key={item.symbol}
                  symbol={item.symbol}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TE01AA01M6;
