// 기술력(TE01) 페이지 정적 데이터.
// 복잡한 셀별 강조가 있는 풍속감쇄표(M3)·사양표(M5)는 각 컴포넌트에 마크업으로 둔다.

const materials = [
  {
    code: "GI",
    title: "아연도강판",
    cardBorder: "border-gray-200",
    badge: "border border-slate-300 bg-slate-100 text-slate-700",
    description:
      "기본 재질로 많이 사용되는 아연도강판은 내구성과 강도가 우수하며 경제적입니다. 대부분의 환경에서 사용할 수 있어 도로와 교량 등 다양한 장소에 적합합니다.",
  },
  {
    code: "FRP",
    title: "섬유 강화 플라스틱",
    cardBorder: "border-blue-100",
    badge: "bg-blue-900 text-white",
    description:
      "부식에 강한 소재로, 겨울철 염화칼슘이 자주 뿌려지는 도로 경계 부분에서 특히 효과적입니다. 철재에 비해 가볍고 유지보수가 용이하며, 부식 저항성이 뛰어나 장기적으로 관리 비용을 절감할 수 있습니다.",
  },
  {
    code: "AL/STS",
    title: "알루미늄 / 스테인리스",
    cardBorder: "border-gray-200",
    badge: "bg-gray-800 text-white",
    description:
      "알루미늄은 가벼우면서도 내구성이 뛰어나며, 부식 저항성이 높아 해안가와 같이 습기가 많은 지역에서 적합합니다. 스테인레스 강판 또한 높은 내구성과 부식 저항성을 제공해 유지보수가 거의 필요하지 않으며, 방풍벽의 수명을 늘려줍니다.",
  },
];

const porosity = [
  {
    range: "공극률 22~33%",
    cardBorder: "border-blue-100",
    titleClassName: "text-blue-900",
    dotClassName: "bg-blue-500",
    description:
      "바람의 속도가 원래 바람의 약 15~25%로 감소하여 차량의 주행 안정성이 높아집니다. 이 공극률 범위는 바람을 적절히 차단하면서도 난류를 줄이기 위한 용도로 교량이나 개방된 고속도로 구간에 효과적입니다.",
  },
  {
    range: "공극률 45%",
    cardBorder: "border-gray-200",
    titleClassName: "text-gray-800",
    dotClassName: "bg-gray-500",
    description:
      "바람 속도가 원래 바람의 30~45%로 유지되며, 바람을 완전히 막지 않고 일정 부분 통과시켜 차량이 지나치게 흔들리지 않도록 설계할 수 있습니다. 이는 해안가나 산악 지역 등 지속적으로 강한 바람이 부는 지역에 적합합니다.",
  },
];

const applications = [
  { icon: "anchor", label: "항만 방풍벽" },
  { icon: "cloud-off", label: "야적장 비산먼지 차단벽" },
  { icon: "arrow-up-circle", label: "고속도로 방음벽 상부 증설 구간" },
  { icon: "factory", label: "해안 산업단지 방진·방풍 시설" },
];

const formulaVars = [
  { symbol: "f", desc: "와류 발생 주파수" },
  { symbol: "V", desc: "설계 풍속" },
  { symbol: "St", desc: "Strouhal 수 (형상에 따라 0.18~0.22)" },
  { symbol: "D", desc: "구조물 특성 길이" },
];

const effectRows = [
  {
    label: "항력계수",
    normal: "1.3 ~ 1.5",
    normalClassName: "text-gray-500",
    applied: "0.8 ~ 1.0",
  },
  {
    label: "피로누적도",
    normal: "높음",
    normalClassName: "font-medium text-red-500",
    applied: "20~35% 감소",
  },
  {
    label: "진동발생",
    normal: "주기적 발생",
    normalClassName: "font-medium text-red-500",
    applied: "현저히 감소",
  },
  {
    label: "유지관리비",
    normal: "높음",
    normalClassName: "font-medium text-red-500",
    applied: "절감",
  },
];

export function useTE01store() {
  return { materials, porosity, applications, formulaVars, effectRows };
}
