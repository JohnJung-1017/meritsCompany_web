import SectionHeading from "../../common/SectionHeading";
import SectionSubNav from "../../common/SectionSubNav";
import SectionToc from "../../common/SectionToc";
import TE01AA01M1 from "./TE01AA01M1";
import TE01AA01M2 from "./TE01AA01M2";
import TE01AA01M3 from "./TE01AA01M3";
import TE01AA01M4 from "./TE01AA01M4";
import TE01AA01M5 from "./TE01AA01M5";
import TE01AA01M6 from "./TE01AA01M6";
import TE01AA01M7 from "./TE01AA01M7";
import TE01AA01M8 from "./TE01AA01M8";
import TE01AA01M9 from "./TE01AA01M9";

// NavBar 의 기술력 서브메뉴와 동일한 구성
const subNavItems = [
  { label: "방풍패널 종류 및 특징", section: "section-panels" },
  { label: "와류저감장치", section: "section-vortex" },
];

// 기술력 페이지 (technology) — section-panels / section-vortex 두 섹션 조립
export function TE01AA01M() {
  return (
    <>
      {/* relative: SectionToc 의 우측 sticky 레일 기준점 */}
      <div
        id="page-technology"
        className="page-section relative hidden fade-in bg-white"
      >
        {/* 좁은 화면은 상단 sticky 탭, 데스크톱은 우측 플로팅 목차 — 둘은 배타적으로 표시된다 */}
        <SectionSubNav page="technology" items={subNavItems} />
        <SectionToc page="technology" items={subNavItems} />

        <div
          id="section-panels"
          className="min-h-screen border-b border-gray-100 py-24"
        >
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Panel Types & Specs"
              title="방풍패널의 종류 및 특징 (재질 및 공극률)"
              description="방풍벽 재질의 특성과 공극률에 따른 세부 효과, 그리고 공식 제품 제원표입니다."
            />

            <TE01AA01M1 />
            <TE01AA01M2 />
            <TE01AA01M3 />
            <TE01AA01M4 />
            <TE01AA01M5 />
          </div>
        </div>

        <div id="section-vortex" className="min-h-screen bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Vortex Reduction System"
              title="와류저감장치(Vortex Generator) 핵심 기술"
              titleClassName="mb-4"
              description="풍하중 작용 시 구조물 후류에 발생하는 교번 와류를 제어하는 공력학적 설계 원리입니다."
              descriptionClassName="text-gray-600"
              descriptionTopMargin=""
            />

            <TE01AA01M6 />
            <TE01AA01M7 />
            <TE01AA01M8 />
            <TE01AA01M9 />
          </div>
        </div>
      </div>
    </>
  );
}

export default TE01AA01M;
