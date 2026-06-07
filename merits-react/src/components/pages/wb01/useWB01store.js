// 방풍벽이란(WB01) 페이지 정적 데이터.

const threats = [
  {
    title: "강풍의 위협",
    borderClass: "border-red-500",
    icon: "wind",
    iconColor: "text-red-500",
    text: "강풍은 도로와 교량에서 큰 위험 요소로 작용하여 안전을 위협합니다. 특히 교량 위에서는 차량 전복 사고가 발생할 수 있으며, 도로 주변 구조물이 파손될 위험도 큽니다. 강풍으로 인해 차량 주행 안정성이 떨어지며 제어력을 잃은 차량이 사고를 일으킬 가능성이 매우 높아집니다.",
  },
  {
    title: "전세계적 현상",
    borderClass: "border-orange-400",
    icon: "globe-2",
    iconColor: "text-orange-500",
    text: "기후 변화로 해수 온도가 상승하며 태풍과 허리케인이 강력해져 전 세계적으로 강풍 피해가 늘고 있습니다. 미국, 일본, 필리핀 등에서는 강풍과 폭우로 인한 피해가 꾸준히 증가하며, 재난 경보 발령 빈도도 높아지고 있습니다. 또한, 도시화로 고층 건물과 교통 인프라가 늘면서 강풍에 의한 사고와 2차 피해 가능성도 커지고 있습니다. 세계기상기구(WMO), 유엔 재난위험경감사무국(UNDRR), 미국 해양대기청(NOAA) 등 보고서를 인용하면, 강풍에 의한 경제적 손실은 점진적으로 증가하는 추세이며 기후 변화로 인한 자연재해의 빈도 증가와 관련하여, 강풍 피해는 앞으로도 계속해서 증가할 것으로 예측됩니다.",
  },
  {
    title: "차량 사고 사례 (대한민국도 예외없는 강풍 사고 지역)",
    borderClass: "border-yellow-500",
    icon: "alert-circle",
    iconColor: "text-yellow-500",
    text: "강풍으로 인한 사고는 대한민국에서도 점차 심각한 문제로 대두되고 있습니다. 특히, 고속도로와 교량, 산악 지역과 같은 강풍 취약 지역에서 차량 전복, 충돌 사고가 빈번하게 발생하고 있습니다. 예를 들어, 2023년 강원도 동해안 고속도로에서는 강풍으로 인해 대형 트럭이 전복되는 사고가 발생하여 도로가 한동안 폐쇄되었고, 차량 운전자들이 큰 불편을 겪은 사례가 있었습니다. 국토교통부와 한국도로공사 보고에 따르면, 강풍으로 인한 차량 사고 비율은 최근 5년간 꾸준히 증가하고 있으며, 이는 기후 변화와 바람의 강도 증가와 밀접한 관련이 있는 것으로 분석되고 있습니다.",
  },
];

const benefits = [
  {
    icon: "shield-check",
    title: "주행 안전성 확보",
    text: "25m/s 이상의 횡풍을 완화해 대형 차량의 차선 이탈 및 전복을 선제적으로 방지합니다.",
  },
  {
    icon: "wind",
    title: "탁월한 풍속 감쇄",
    text: "바람을 완전히 막지 않고 타공 패널을 통해 분산시켜 후방 풍속을 효과적으로 낮춥니다.",
  },
  {
    icon: "layers",
    title: "구조적 안정성 유지",
    text: "바람의 하중을 통과시켜 분산하므로, 기존 교량 및 도로 구조물에 무리 없이 설치 가능합니다.",
  },
];

const installations = [
  {
    icon: "waves",
    iconColor: "text-blue-500",
    title: "교량 구간",
    text: "바람을 직접적으로 받는 구간입니다. 방풍벽 설치 시 5, 6차선으로 이동할수록 풍속이 확연히 감소하여 주행 방향 상실을 막고 안전한 주행 환경을 제공합니다.",
  },
  {
    icon: "sun",
    iconColor: "text-orange-500",
    title: "개방된 고속도로",
    text: "다양한 각도에서 강한 횡풍이 불면 차량이 옆으로 밀릴 위험이 큽니다. 방풍벽은 이러한 바람의 세기를 줄여 안정적인 주행을 유지하게 합니다.",
  },
  {
    icon: "mountain",
    iconColor: "text-green-600",
    title: "산악 및 해안가",
    text: "지형적 돌풍과 해안가의 습기/염분을 제어합니다. 다공성 방풍벽을 통해 바람을 줄이면서도 염분이 벽을 통과하도록 설계해 인프라 부식을 줄일 수 있습니다.",
  },
  {
    icon: "disc",
    iconColor: "text-purple-500",
    title: "터널 출구 및 고가",
    text: "터널을 나올 때 압력 차이로 발생하는 강한 돌풍과, 고가도로 가장자리에서 차량이 외부로 밀려나는 경로 이탈 현상을 방지합니다.",
  },
];

const dragValues = [
  { label: "공극률 50%", value: "CD = 0.58" },
  { label: "공극률 60%", value: "CD = 0.49" },
  { label: "공극률 70%", value: "CD = 0.41" },
];

const windLoadRows = [
  { windSpeed: "30", dragCoef: "0.8", earthwork: "0.45", bridge: "0.60" },
  { windSpeed: "35", dragCoef: "0.8", earthwork: "0.65", bridge: "0.80" },
  { windSpeed: "40", dragCoef: "0.8", earthwork: "0.80", bridge: "1.00" },
  {
    windSpeed: "45",
    dragCoef: "0.8",
    earthwork: "1.05",
    bridge: "1.30",
    highlight: true,
  },
];

export function useWB01store() {
  return { threats, benefits, installations, dragValues, windLoadRows };
}
