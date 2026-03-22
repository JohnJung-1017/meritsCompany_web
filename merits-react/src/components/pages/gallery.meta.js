import meritsPort001 from "../../assets/images/merits_port_001.jpg";
import meritsPort002 from "../../assets/images/merits_port_002.jpg";
import meritsSeacoast001 from "../../assets/images/merits_seacoast_001.png";
import meritsSeacoast002 from "../../assets/images/merits_seacoast_002.png";

export const galleryHero = {
  videoEmbedUrl:
    "https://www.youtube.com/embed/qd1zxi9HGxk?autoplay=1&mute=1&controls=0&loop=1&playlist=qd1zxi9HGxk&rel=0&playsinline=1",
  title: "MERITS COMPANY",
  subtitle:
    "현장과 구조물 사이에서 축적된 메리츠의 방풍벽 시공 경험을 프로젝트 사례 중심으로 소개합니다.",
  ctaLabel: "SCROLL",
};

export const galleryPageCopy = {
  title: "방풍벽 시공사례",
  description: [
    "(주)메리츠컴퍼니는 방음시설과 방풍시설의 설계부터 시공까지 전 과정을 아우르는 ",
    "전문 인프라를 바탕으로 국내외 주요 현장의 랜드마크를 완성해 왔습니다.",
    "사용자의 삶의 질을 높이는 정밀한 시공 기술과 환경 변화에 대응하는 방풍 엔지니어링을 통해,",
    "(주)메리츠컴퍼니는 도시의 품격을 높이고 공간이 지닌 본연의 가치를 극대화합니다.",
  ],
};

export const galleryProjects = [
  {
    id: "windbreak-001",
    title: "판교 PSK 캠퍼스",
    thumbnail: meritsPort001,
    thumbnailAlt: "판교 PSK 캠퍼스 방풍벽 시공 전경",
    detail: {
      location: "경기도 성남시",
      period: "2021.09 ~ 2024.04",
      scale: "지하 6층 ~ 지상 10층",
      description:
        "대형 복합개발 현장 외곽 동선에 맞춰 방풍 성능과 시야 개방감을 함께 고려한 프로젝트입니다.",
    },
    images: [
      {
        src: meritsPort001,
        alt: "판교 PSK 캠퍼스 정면 시공 사진",
        caption: "정면 전경",
      },
      {
        src: meritsPort002,
        alt: "판교 PSK 캠퍼스 측면 시공 사진",
        caption: "측면 연결 구간",
      },
    ],
  },
  {
    id: "windbreak-002",
    title: "서해안 산업부두",
    thumbnail: meritsSeacoast001,
    thumbnailAlt: "서해안 산업부두 방풍벽 시공 사진",
    detail: {
      location: "충청남도 서산시",
      period: "2022.03 ~ 2023.08",
      scale: "연장 320m",
      description:
        "해안가 돌풍과 염분 환경을 고려해 내구성과 유지관리성을 함께 확보한 항만 방풍벽 시공사례입니다.",
    },
    images: [
      {
        src: meritsSeacoast001,
        alt: "서해안 산업부두 메인 전경",
        caption: "메인 전경",
      },
      {
        src: meritsSeacoast002,
        alt: "서해안 산업부두 상세 시공 사진",
        caption: "상세 구간",
      },
    ],
  },
  {
    id: "windbreak-003",
    title: "남부 물류센터",
    thumbnail: meritsPort002,
    thumbnailAlt: "남부 물류센터 방풍벽 시공 사진",
    detail: {
      location: "경상남도 양산시",
      period: "2020.11 ~ 2021.07",
      scale: "연장 180m",
      description:
        "차량 진출입이 많은 물류센터 외곽부에 적용된 사례로, 구조 안정성과 운영 동선 간섭 최소화에 중점을 뒀습니다.",
    },
    images: [
      {
        src: meritsPort002,
        alt: "남부 물류센터 메인 시공 사진",
        caption: "차량 동선 구간",
      },
      {
        src: meritsPort001,
        alt: "남부 물류센터 보조 시공 사진",
        caption: "코너 연결부",
      },
    ],
  },
  {
    id: "windbreak-004",
    title: "동해안 발전설비",
    thumbnail: meritsSeacoast002,
    thumbnailAlt: "동해안 발전설비 방풍벽 시공 사진",
    detail: {
      location: "강원도 동해시",
      period: "2023.01 ~ 2024.02",
      scale: "연장 260m",
      description:
        "해안 풍하중 대응과 설비 보호 목적을 함께 가진 현장으로, 현장 조건에 맞춘 패널 배치가 적용되었습니다.",
    },
    images: [
      {
        src: meritsSeacoast002,
        alt: "동해안 발전설비 메인 시공 사진",
        caption: "설비 인접 구간",
      },
      {
        src: meritsSeacoast001,
        alt: "동해안 발전설비 추가 시공 사진",
        caption: "연장부 전경",
      },
    ],
  },
  {
    id: "windbreak-005",
    title: "여주 점동 물류센터",
    thumbnail: meritsPort001,
    thumbnailAlt: "여주 점동 물류센터 시공 사례",
    detail: {
      location: "경기도 여주시",
      period: "2022.05 ~ 2023.02",
      scale: "연장 210m",
      description:
        "물류센터 외곽 풍압 저감과 보행 동선 안전 확보를 위해 단계별로 설치한 시공사례입니다. 현재 데이터는 더미 예시이며 실제 현장 정보로 쉽게 교체할 수 있습니다.",
    },
    images: [
      {
        src: meritsPort001,
        alt: "여주 점동 물류센터 대표 이미지",
        caption: "대표 전경",
      },
      {
        src: "",
        alt: "여주 점동 물류센터 상세 이미지 준비 중",
        caption: "추가 이미지 준비 중",
      },
      {
        src: meritsPort002,
        alt: "여주 점동 물류센터 연결부 이미지",
        caption: "연결부 전경",
      },
    ],
  },
  {
    id: "windbreak-006",
    title: "강남 343 빌딩",
    thumbnail: meritsSeacoast002,
    thumbnailAlt: "강남 343 빌딩 시공 사례",
    detail: {
      location: "서울특별시 강남구",
      period: "2021.09 ~ 2024.04",
      scale: "지하 7층 ~ 지상 18층",
      description:
        "도심 고층부 주변 풍환경과 공개공지 동선을 함께 고려한 더미 프로젝트입니다. 이미지 로딩 실패 상황까지 고려해 placeholder 동작을 함께 검증할 수 있도록 구성했습니다.",
    },
    images: [
      {
        src: meritsSeacoast002,
        alt: "강남 343 빌딩 대표 이미지",
        caption: "메인 파사드",
      },
      {
        src: meritsSeacoast001,
        alt: "강남 343 빌딩 디테일 이미지",
        caption: "상세 시공부",
      },
      {
        src: "broken-image-example.jpg",
        alt: "강남 343 빌딩 이미지 로딩 실패 예시",
        caption: "로딩 실패 예시",
      },
    ],
  },
];
