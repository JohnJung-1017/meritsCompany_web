import SectionHeading from "../../common/SectionHeading";
import { useWB01store } from "./useWB01store";

// 방풍벽 필요성 (강풍 위협 3가지 + 필요성/중요성 카드)
function WB01AA01M1() {
  const { threats } = useWB01store();

  return (
    <section className="pattern-dots overflow-hidden border-b border-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Necessity"
          eyebrowIcon="alert-triangle"
          eyebrowColor="text-red-500"
          title="방풍벽 필요성"
          description="강풍은 도로와 교량에서 큰 위험 요소로 작용하여 안전을 위협합니다."
          descriptionClassName="text-gray-600"
          descriptionWide
        />

        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            {threats.map((threat) => (
              <div
                key={threat.title}
                className={`border-l-4 ${threat.borderClass} pl-5`}
              >
                <h4 className="mb-2 flex items-center text-lg font-bold text-gray-800">
                  <i
                    data-lucide={threat.icon}
                    className={`mr-2 h-5 w-5 ${threat.iconColor}`}
                  />
                  {threat.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  {threat.text}
                </p>
              </div>
            ))}
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
                  주행 안정성을 확보하고 강풍에 의한 사고를 줄이기 위해, 도로와
                  교량에 방풍벽을 설치하는 것이 필요합니다. 방풍벽은 차량이
                  강풍의 영향을 덜 받도록 도와주어 주행 안정성을 높이고, 눈이나
                  먼지와 같은 부유물질의 쌓임을 방지하여 도로 환경을 더욱
                  안전하게 만듭니다.
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
                  위험을 줄이기 위해 방풍벽이 필수적입니다. 강풍은 차량의 주행
                  안정성을 저해하고, 사고를 유발할 수 있습니다. 특히, 고도가
                  높고 바람의 영향을 더 많이 받는 교량에서는 방풍벽이 안전을
                  보장하는 중요한 역할을 합니다. 교량 위의 강풍은 차량의 방향을
                  바꾸거나 전복을 유발할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WB01AA01M1;
