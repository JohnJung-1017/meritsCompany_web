import SectionHeading from "../../common/SectionHeading";
import WB01AA01M1 from "./WB01AA01M1";
import WB01AA01M2 from "./WB01AA01M2";
import WB01AA01M3 from "./WB01AA01M3";
import WB01AA01M4 from "./WB01AA01M4";

// 방풍벽이란 페이지 (features) — section-effects / section-design 조립
export function WB01AA01M() {
  return (
    <>
      <div id="page-features" className="page-section hidden fade-in bg-white">
        <div id="section-effects" className="min-h-[calc(100vh-5rem)]">
          <WB01AA01M1 />
          <WB01AA01M2 />
          <WB01AA01M3 />
        </div>

        <div id="section-design" className="min-h-screen bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Engineering Standard"
              title="방풍벽 설계 요소 및 구조 안전 기준"
              description="레거시 설계 기준 내용을 현재 React 페이지 구조에 맞춰 이관했습니다."
            />

            <WB01AA01M4 />
          </div>
        </div>
      </div>
    </>
  );
}

export default WB01AA01M;
