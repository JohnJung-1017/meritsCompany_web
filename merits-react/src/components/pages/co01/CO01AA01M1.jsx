import SectionHeading from "../../common/SectionHeading";
import { useCO01store } from "./useCO01store";

// CEO 인사말 블록
function CO01AA01M1() {
  const { ceoStats, ceoMessage, checklist } = useCO01store();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="CEO Message" title="CEO 인사말" underline />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="relative rounded-2xl shadow-lg overflow-hidden h-[500px] w-full">
            <img
              src="https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Windproof Wall Structure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <h2
                className="text-6xl md:text-7xl font-bold tracking-widest text-white drop-shadow-lg"
                style={{ fontFamily: '"Arial", sans-serif' }}
              >
                MERITS
              </h2>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-blue-900 p-6 rounded-xl shadow-xl z-20">
            <div className="flex items-center gap-4 text-white">
              <i data-lucide="shield" className="w-8 h-8" />
              <div>
                <p className="text-2xl font-bold">2000</p>
                <p className="text-xs text-blue-200 tracking-wider">
                  ESTABLISHED
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6 text-gray-900 leading-tight">
            도로 위의 역학,
            <br />
            <span className="text-blue-600">안전을 설계하는 기업</span>
          </h3>
          {ceoMessage.map((paragraph) => (
            <p
              key={paragraph}
              className="text-gray-600 mb-4 leading-relaxed text-lg font-light"
            >
              {paragraph}
            </p>
          ))}

          <div className="grid grid-cols-3 gap-4 my-8">
            {ceoStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-5 text-center"
              >
                <p className="text-2xl font-bold text-blue-700">{stat.value}</p>
                <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <ul className="space-y-5">
              {checklist.map((item) => (
                <li key={item} className="flex items-start">
                  <i
                    data-lucide="check"
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                  />
                  <span className="ml-3 font-medium text-gray-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CO01AA01M1;
