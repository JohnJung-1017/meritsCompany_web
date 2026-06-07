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

const achievements = [
  { label: "merits 업적1", value: 100, suffix: "", icon: "scroll-text" },
  { label: "merits 업적2", value: 200, suffix: "", icon: "map" },
  { label: "merits 업적3", value: 300, suffix: "", icon: "building-2" },
  { label: "merits 업적4", value: 400, suffix: "", icon: "globe-2" },
];

const socials = [
  {
    title: "YouTube",
    description: "회사 유튜브 채널 바로가기",
    icon: "youtube",
    accentClassName: "from-rose-500 to-red-500",
    href: "#",
  },
  {
    title: "Instagram",
    description: "회사 인스타그램 바로가기",
    icon: "instagram",
    accentClassName: "from-fuchsia-500 via-pink-500 to-amber-400",
    href: "#",
  },
  {
    title: "Facebook",
    description: "회사 페이스북 바로가기",
    icon: "facebook",
    accentClassName: "from-blue-500 to-indigo-500",
    href: "#",
  },
];

export function useMP01store() {
  return { hero, achievements, socials };
}
