// 회사소개(CO01) 페이지 정적 데이터.

const ceoStats = [
  { value: "102건", label: "특허 확보" },
  { value: "52건", label: "기술·경영 인증" },
  { value: "8건", label: "국책과제 성공 수행" },
];

const ceoMessage = [
  "메리츠컴퍼니는 방풍벽·방음시설 설계·시공 기술을 바탕으로, 도로와 교량 위 극한의 풍하중 환경에서도 안전을 지켜온 엔지니어링 기업입니다.",
  "2000년 설립 이후 축적한 기술력을 인정받아 다수의 특허와 기술·경영 인증, 국책과제를 성공적으로 수행해왔으며, 이제는 이 기술 자산을 새로운 제품 라인으로 확장하고 있습니다.",
  "가장 혹독한 환경에서 검증된 기술로, 고객의 생명과 안전을 지키는 회사가 되겠습니다.",
];

const checklist = [
  "고속도로 및 특수 교량 방풍벽 전문 시공",
  "부식에 강한 첨단 소재(FRP/GI) 적용",
  "자체 풍동 실험을 거친 특허 타공 기술 보유",
];

const managementGoals = [
  {
    icon: "cpu",
    titleEn: "Expertise & Technology",
    title: "기술 중심의 핵심 역량 고도화",
    points: [
      "첨단 설계 역량 강화: 3D 구조해석 시뮬레이션을 통한 정밀 설계",
      "독보적 기술력 확보: 기능성과 심미성을 갖춘 특허 공법 지속 개발",
      "현장 맞춤형 R&D: 이상 하중에 대응하는 고강도·고효율 구조물 연구",
    ],
  },
  {
    icon: "leaf",
    titleEn: "Sustainable Diversification",
    title: "지속가능한 신규 사업 확장",
    points: [
      "친환경 인프라 구축: 탄소중립·ESG 경영에 부합하는 신규 사업 확대",
      "자원의 고부가가치화: 신소재 개발 및 B2G/B2C 융합 사업 전개",
      "종합 엔지니어링: 기획·설계·시공·유지보수를 아우르는 서비스 확장",
    ],
  },
];

const historyTimeline = [
  {
    year: "2025",
    items: [
      { month: "10", desc: "자원순환시설(안성공장) 설립" },
      { month: "03", desc: "제2경춘국도 건설공사 중 방음터널 특허공법 선정" },
    ],
  },
  {
    year: "2024",
    items: [
      { month: "10", desc: "울산 KTX복합단지 방음시설 자재공법 심의 선정" },
      { month: "04", desc: "태능-구리IC간 광역도로 확장공사 방음터널 공법 선정" },
    ],
  },
  {
    year: "2023",
    items: [
      { month: "06", desc: "경기도 기술개발과제 성공판정" },
      { month: "03", desc: "용인 보평지구 방음시설 계약 (220억)" },
    ],
  },
  {
    year: "2022",
    items: [
      { month: "11", desc: "트러스구조를 갖는 고가 경량화 방음벽 특허등록" },
      { month: "09", desc: "본사 이전 (용인 흥덕)" },
    ],
  },
];

export function useCO01store() {
  return { ceoStats, ceoMessage, checklist, managementGoals, historyTimeline };
}
