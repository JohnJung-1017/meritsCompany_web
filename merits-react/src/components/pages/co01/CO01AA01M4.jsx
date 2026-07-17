import SectionHeading from "../../common/SectionHeading";
import { useCommonStore } from "../../common/useCommonStore";

const transit = {
  subway: ["신분당선 상현역 2번 출구", "수인분당선 청명역 1번 출구"],
};

// 오시는길 블록 — 지도 연동 전까지 자리만 확보한 placeholder
function CO01AA01M4() {
  const { offices } = useCommonStore();
  const { head } = offices;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Location" title="오시는길" underline />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex h-80 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-100 text-gray-400 lg:h-full">
          <div className="text-center">
            <i data-lucide="map" className="mx-auto h-8 w-8" />
            <p className="mt-2 text-sm">지도 영역 (연동 예정)</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <i data-lucide="map-pin" className="h-5 w-5 text-blue-600" />
              <h3 className="font-bold text-gray-900">본사 위치</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              {head.addressLines.join(" ")} {head.addressDetail}
            </p>
            <p className="mt-2 text-sm font-medium text-blue-700">
              T. {head.tel} / F. {head.fax}
            </p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <i data-lucide="train-front" className="h-5 w-5 text-blue-600" />
              <h3 className="font-bold text-gray-900">주변 지하철</h3>
            </div>
            <ul className="space-y-1">
              {transit.subway.map((line) => (
                <li key={line} className="text-sm text-gray-600">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CO01AA01M4;
