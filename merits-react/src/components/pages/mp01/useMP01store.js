// 메인(MP01) 페이지 정적 데이터.
// hero 는 기존 gallery.meta.js 의 galleryHero 를 이관한 것.

const hero = {
  videoEmbedUrl:
    "https://www.youtube.com/embed/qd1zxi9HGxk?autoplay=1&mute=1&controls=0&loop=1&playlist=qd1zxi9HGxk&rel=0&playsinline=1",
  title: "MERITS COMPANY",
  subtitle:
    "현장과 구조물 사이에서 축적된 메리츠의 방풍벽 시공 경험을 프로젝트 사례 중심으로 소개합니다.",
  ctaLabel: "SCROLL",
};

const FOUNDING_YEAR = 2000;
const yearsSinceFounding = new Date().getFullYear() - FOUNDING_YEAR;

// value: null 이면 수치 미확정 — 카운트업 없이 "-" 로 표기한다.
const achievements = [
  {
    label: [`창립 ${FOUNDING_YEAR}년부터`, "현재까지"],
    value: yearsSinceFounding,
    suffix: "주년",
    icon: "scroll-text",
  },
  { label: ["특허 보유 기술"], value: 102, suffix: "건", icon: "map" },
  { label: ["기술·경영 인증"], value: 52, suffix: "건", icon: "building-2" },
  { label: ["국책과제", "성공 수행"], value: 8, suffix: "건", icon: "globe-2" },
  {
    label: ["전국 시공", "프로젝트 실적"],
    value: null,
    suffix: "건",
    icon: "construction",
  },
];

// icon 은 common/BrandIcon.jsx 의 BRAND_PATHS 키와 일치해야 한다.
const socials = [
  {
    title: "YouTube",
    description: "회사 유튜브 채널 바로가기",
    icon: "youtube",
    accentClassName: "from-rose-500 to-red-500",
    href: "https://www.youtube.com/@메리츠컴퍼니",
  },
  {
    title: "Instagram",
    description: "회사 인스타그램 바로가기",
    icon: "instagram",
    accentClassName: "from-fuchsia-500 via-pink-500 to-amber-400",
    href: "https://www.instagram.com/meritscompany",
  },
  {
    title: "네이버 블로그",
    description: "회사 네이버 블로그 바로가기",
    icon: "naver",
    accentClassName: "from-emerald-500 to-green-600",
    href: "https://blog.naver.com/meritscompany",
  },
];

export function useMP01store() {
  return { hero, achievements, socials };
}
