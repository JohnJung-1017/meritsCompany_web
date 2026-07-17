import SectionHeading from "../../common/SectionHeading";
import SectionSubNav from "../../common/SectionSubNav";
import SectionToc from "../../common/SectionToc";
import WB01AA01M1 from "./WB01AA01M1";
import WB01AA01M2 from "./WB01AA01M2";
import WB01AA01M3 from "./WB01AA01M3";
import WB01AA01M4 from "./WB01AA01M4";

// NavBar 의 방풍벽이란 서브메뉴와 동일한 구성
const subNavItems = [
  { label: "방풍벽 효과", section: "section-effects" },
  { label: "설계 및 검토", section: "section-design" },
];

// 방풍벽이란 페이지 (features) — section-effects / section-design 조립
export function WB01AA01M() {
  return (
    <>
      {/* relative: SectionToc 의 우측 sticky 레일 기준점 */}
      <div
        id="page-features"
        className="page-section relative hidden fade-in bg-white"
      >
        {/* 좁은 화면은 상단 sticky 탭, 데스크톱은 우측 플로팅 목차 — 둘은 배타적으로 표시된다 */}
        <SectionSubNav page="features" items={subNavItems} />
        <SectionToc page="features" items={subNavItems} />

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
