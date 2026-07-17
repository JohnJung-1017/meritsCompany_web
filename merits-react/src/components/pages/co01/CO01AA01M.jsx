import SectionSubNav from "../../common/SectionSubNav";
import CO01AA01M1 from "./CO01AA01M1";
import CO01AA01M2 from "./CO01AA01M2";
import CO01AA01M3 from "./CO01AA01M3";
import CO01AA01M4 from "./CO01AA01M4";

const subNavItems = [
  { label: "CEO 인사말", section: "section-ceo" },
  { label: "경영목표", section: "section-goals" },
  { label: "기업연혁", section: "section-history" },
  { label: "오시는길", section: "section-location" },
];

// 회사소개 페이지 (about) — section-ceo/goals/history/location 네 섹션을 이어붙여 조립
export function CO01AA01M() {
  return (
    <>
      {/* PAGE: ABOUT */}
      <div id="page-about" className="page-section hidden fade-in bg-white">
        <SectionSubNav page="about" items={subNavItems} />

        <section id="section-ceo" className="bg-white py-20">
          <CO01AA01M1 />
        </section>

        <section id="section-goals" className="bg-gray-50 py-20">
          <CO01AA01M2 />
        </section>

        <section id="section-history" className="bg-white py-20">
          <CO01AA01M3 />
        </section>

        <section id="section-location" className="bg-gray-50 py-20">
          <CO01AA01M4 />
        </section>
      </div>
    </>
  );
}

export default CO01AA01M;
