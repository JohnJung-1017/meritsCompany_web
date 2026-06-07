// 여러 페이지에서 공통으로 쓰이는 데이터 단일 소스.
// - downloads : 홈(자료 하이라이트)과 자료실 페이지가 동일하게 사용
// - company / offices : 문의 페이지와 Footer가 공유하는 회사 정보

const downloads = [
  {
    title: "제품 및 회사소개서",
    meta: "PDF Document / 5.2 MB",
    icon: "book-open",
    actionIcon: "download-cloud",
    actionIconClassName: "w-6 h-6",
  },
  {
    title: "표준 설계 도면 (DWG)",
    meta: "ZIP Archive / 12.4 MB",
    icon: "pen-tool",
    actionIcon: "download-cloud",
    actionIconClassName: "w-6 h-6",
  },
  {
    title: "특허현황 및 시험성적서",
    meta: "PDF Document / 4.1 MB",
    icon: "award",
    actionIcon: "download-cloud",
    actionIconClassName: "w-6 h-6",
  },
  {
    title: "풍동 시험 동영상자료",
    meta: "MP4 Video / Link",
    icon: "play-circle",
    actionIcon: "external-link",
    actionIconClassName: "w-5 h-5",
  },
];

const company = {
  name: "(주)메리츠컴퍼니",
  ceo: "김태진",
  email: "merits@merits.co.kr",
};

const offices = {
  head: {
    label: "본사",
    addressLines: ["경기도 용인시 기흥구 흥덕중앙로 55,", "흥덕리써밋 309~310호"],
    addressDetail: "(영덕동, 리써밋타워)",
    tel: "1544-3341",
    fax: "031-211-6366",
  },
  factory: {
    label: "공장",
    addressLines: ["경기도 화성시 서신면 전곡산단13길 7"],
    addressDetail: "(전곡리)",
    tel: "031-366-7993",
    fax: "031-366-7994",
  },
};

export function useCommonStore() {
  return { downloads, company, offices };
}
