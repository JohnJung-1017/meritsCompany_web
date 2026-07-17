# meritsWeb — 프로젝트 분석 문서

> (주)메리츠컴퍼니 공식 홈페이지 리액트 소스 전체 분석. 코드베이스를 읽고 정리한 문서이며, 작성일 기준(2026-07-15) 스냅샷이다. 최신 상태는 `git log` / 소스 코드가 항상 우선한다.

---

## 1. 프로젝트 목표

- **회사**: (주)메리츠컴퍼니 — 고속도로·교량용 **방풍벽(windproof wall)** 설계·시공 전문기업 (2000년 설립, 대표 김태진).
- **목표**: 회사 소개 + 제품(방풍벽) 기술력 홍보 + 시공 포트폴리오 전시 + 문의 유입을 담당하는 **마케팅용 반응형 싱글페이지 웹사이트**.
- 실제 서비스형 앱이 아니라 정보 전달 목적의 브로슈어 사이트에 가깝다 (로그인, DB, API 호출 없음 — 전부 정적 콘텐츠 + 정적 이미지).
- `index.html`의 메타 정보: `title="(주)메리츠컴퍼니 - 방풍벽 솔루션"`, `description="20년 기술력의 고속도로·교량 방풍벽 설계·시공 전문기업"`.
- 현재 **런칭 준비 단계(프로토타입 → 실서비스 전환 중)** — [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md)에 남은 과제 7건이 정리되어 있다 (파비콘/OG 이미지 대기, 히어로 영상 R2 전환 대기, 정적 파일 다운로드 링크 대기, 도메인 결제 대기 등 — 대부분 "사장님 자산/의사결정" 대기 상태).

## 2. 기술 스택

| 영역 | 사용 기술 |
|---|---|
| 프레임워크 | React 19.2 (함수형 컴포넌트 + Hooks만 사용, 클래스 컴포넌트 없음) |
| 빌드 도구 | Vite 7.3 (`@vitejs/plugin-react`) |
| 스타일 | Tailwind CSS 3.4 (utility-first) + `src/App.css`의 커스텀 CSS(애니메이션·패턴 배경) |
| 아이콘 | `lucide` npm 패키지 (예전엔 CDN global이었으나 최신 커밋(`bc0ab8e`)에서 npm 패키지로 전환) |
| 라우팅 | **없음** — React Router 미사용, 순수 상태 기반 SPA |
| 상태관리 | 없음 (Redux/Zustand 등 미사용) — 페이지별 `use{CODE}store.js` 훅이 정적 데이터를 반환하는 용도로만 쓰임 (서버 상태 아님) |
| 린트 | ESLint 9 (flat config) + `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` |
| 언어 | JS/JSX (TypeScript 아님) |
| 배포 대상(예정) | Vercel (LAUNCH_CHECKLIST의 "Vercel 프로젝트에 커스텀 도메인 추가" 항목 기준 추정), 대용량 자산은 Cloudflare R2 사용 예정 |

### 실행 명령어
```bash
npm run dev       # Vite 개발 서버, http://localhost:5173
npm run build     # 프로덕션 빌드 → dist/
npm run preview   # 빌드 결과 프리뷰
npm run lint      # ESLint
```

## 3. 폴더 구조

```
merits-react/
├── index.html                     # SPA 엔트리, 메타태그/OG 태그 포함 (og:image 등은 TODO)
├── vite.config.js                 # 플러그인만 등록된 최소 설정
├── tailwind.config.js             # content: index.html + src/**/*.{js,jsx}
├── postcss.config.js
├── eslint.config.js
├── LAUNCH_CHECKLIST.md            # (미커밋) 런칭 전 과제 체크리스트
├── .claude/
│   └── launch.json                # 프리뷰용 dev 서버 설정 (npm run dev, 포트 5173)
├── public/
│   └── videos/                    # 현재 비어있음 (히어로 영상은 아직 YouTube 임베드로 대체 중)
└── src/
    ├── main.jsx                   # createRoot + <StrictMode><App/></StrictMode>
    ├── index.css                  # @tailwind 지시자만 포함
    ├── App.jsx                    # 루트: 네비게이션 상태 머신 (아래 4장 참고)
    ├── App.css                    # 전역 커스텀 CSS: 히어로 배경, 바람 애니메이션, 하이라이트 효과 등
    ├── assets/
    │   ├── team-merits-logo.svg / -white-text.svg / -white-text-foot.svg  (로고 3종)
    │   └── images/                # 시공사진 갤러리용 실사진 (hs_*, hc_*, ys_*, ul_*, yj_*)
    └── components/
        ├── common/                # 페이지 공통 유틸 컴포넌트 + 공유 데이터
        ├── layout/                # NavBar, Footer (모든 페이지 공통 프레임)
        └── pages/                 # 7개 페이지, 각자 폴더 (코드 규칙은 4장 참고)
            ├── mp01/  (home)
            ├── co01/  (about)
            ├── wb01/  (features)
            ├── te01/  (technology)
            ├── rs01/  (resources)
            ├── ga01/  (gallery)
            └── ct01/  (contact)
```

## 4. 아키텍처

### 4.1 라우터 없는 SPA (핵심 특징)

`App.jsx`가 유일한 "라우터"다. React Router 등 클라이언트 라우팅 라이브러리를 쓰지 않고, **7개 페이지 컴포넌트를 전부 항상 마운트**한 뒤 `currentPage` state에 따라 CSS class(`.hidden` / `.fade-in`)로 보이기/숨기기만 전환한다 (언마운트하지 않음 → 상태 보존, 단 초기 로드 비용은 전부 한 번에 발생).

```
App (state: currentPage, targetSection, mobileMenuOpen, isHomeHeroActive)
 ├─ NavBar (isTransparent prop)
 ├─ main
 │   ├─ MP01AA01M  #page-home
 │   ├─ CO01AA01M  #page-about
 │   ├─ WB01AA01M  #page-features
 │   ├─ TE01AA01M  #page-technology
 │   ├─ RS01AA01M  #page-resources
 │   ├─ GA01AA01M  #page-gallery
 │   └─ CT01AA01M  #page-contact
 └─ Footer
```

**네비게이션 메커니즘** — `App.jsx`의 `handleInteraction`이 루트 div에 위임된 단일 `onClick` 핸들러로 동작:
- `data-nav-page="pageName"` — 클릭 시 `currentPage` 변경 (페이지 전환)
- `data-nav-section="sectionId"` — 페이지 전환 후 해당 섹션으로 `scrollIntoView` (앵커 이동, 50ms 지연)
- `data-toggle-mobile="true"` — 모바일 메뉴 토글
- `data-close-mobile="true"` — 네비게이션 클릭 시 모바일 메뉴 자동 닫기
- `a href="#"` — 기본 이동 막고(preventDefault) 위 로직에 위임

페이지 전환 시 `useEffect`가 모든 `.page-section`에 `.hidden` 부여 → 대상 페이지만 제거 + `.fade-in` 재적용(리플로우 강제로 애니메이션 재생) → `lucide.createIcons()` 재호출(새로 노출된 `<i data-lucide>` 아이콘 하이드레이션).

### 4.2 페이지 코드 네이밍 규칙

각 네비게이션 대상은 `src/components/pages/` 아래 자신만의 폴더 + 페이지 코드를 가진다:

| Nav key | 폴더/루트 컴포넌트 | `#page-` id |
|---|---|---|
| home | `mp01/MP01AA01M` | `page-home` |
| about | `co01/CO01AA01M` | `page-about` |
| features | `wb01/WB01AA01M` | `page-features` |
| technology | `te01/TE01AA01M` | `page-technology` |
| resources | `rs01/RS01AA01M` | `page-resources` |
| gallery | `ga01/GA01AA01M` | `page-gallery` |
| contact | `ct01/CT01AA01M` | `page-contact` |

폴더 내부 파일명 컨벤션:
- `{CODE}AA01M.jsx` — **루트** 컴포넌트(named export). `#page-{name}` 래퍼를 소유하고 하위 블록을 조립. `App.jsx`가 직접 import하는 대상.
- `{CODE}AA01M1.jsx`, `M2.jsx`, … — 책임별 하위 블록 (섹션 단위 분리).
- `{CODE}AA01D1.jsx`, … — 다이얼로그/드로어 오버레이 (현재 실제 사용 없음).
- `use{CODE}store.js` — 해당 페이지의 **정적 콘텐츠/데이터**(배열, 카피, 이미지 import)를 반환하는 훅. 페이지 콘텐츠의 단일 소스. **콘텐츠 수정 시 JSX가 아니라 이 파일을 고친다.**

각 페이지의 하위 블록 개수(콘텐츠 복잡도 반영):
- `mp01`(home): M1(히어로)~M4, 4개 블록 + hero/achievements/socials store
- `co01`(about): 단일 M(체크리스트 store만) — LAUNCH_CHECKLIST #4에 따르면 인사말/연혁/인증서 3블록으로 재구성 예정
- `wb01`(features): M1~M4, 4개 블록 (threats/benefits/installations/dragValues/windLoadRows store)
- `te01`(technology): M1~M9, **9개 블록** — 가장 콘텐츠가 많은 페이지 (재질/공극률/적용사례/와류저감 공식 등)
- `rs01`(resources): 단일 M, `useCommonStore`의 `downloads` 재사용
- `ga01`(gallery): M1(헤더)+M2(카드+상세뷰), 카드 클릭 시 인라인 상세보기(모달 아님, `activeId` state로 토글) + 이미지 캐러셀(prev/next)
- `ct01`(contact): 단일 M, `useCommonStore`의 `company`/`offices` 재사용

### 4.3 공유 레이어 (`src/components/common/`)

- `SectionHeading.jsx` — eyebrow + title + description 패턴을 통일한 섹션 헤더 (about/resources/features/technology에서 반복 사용).
- `ImageWithFallback.jsx` — `onError` 시 그라디언트 placeholder(`"시공 이미지 준비 중"` 등 커스텀 라벨)로 대체되는 이미지 컴포넌트. 실사진이 아직 없는 gallery 항목(예: `windbreak-006` "동해묵호항 방풍벽(예정)")에서 의도적으로 깨진 경로(`broken-image-example.jpg`)를 fallback 데모용으로 사용 중.
- `useCommonStore.js` — 페이지 간 공유 데이터의 단일 소스:
  - `downloads[]` — 홈 자료 하이라이트 ≡ 자료실(resources) 페이지가 동일 데이터 사용 (아직 실제 다운로드 `href` 없음, LAUNCH_CHECKLIST #5 대기 중)
  - `company` / `offices`(head/factory) — 문의(contact) 페이지 ≡ Footer가 동일 데이터 사용 (본사: 경기 용인, 공장: 경기 화성, 대표전화 1544-3341)

### 4.4 NavBar 투명도 로직

`NavBar`는 `App.jsx`로부터 `isTransparent` prop을 받는다. **home 페이지 + 히어로 섹션이 화면에 보일 때**만 투명 모드(로고 화이트텍스트 버전 표시, 배경 투명)가 된다. 히어로 가시성은 `MP01AA01M1`(`mp01/MP01AA01M1.jsx`)의 `IntersectionObserver`(threshold 0.2)가 감지해 `onHeroVisibilityChange` 콜백으로 `App.jsx`까지 끌어올린다. 서브메뉴 호버 중에는 강제로 불투명 배경 전환(`isTransparentIdle`).

데스크톱 nav는 9컬럼 CSS Grid를 **inline style**(`gridTemplateColumns`)로 구성 — Tailwind JIT가 템플릿 리터럴 보간 클래스(`grid-cols-[...]`)를 인식 못 하는 문제를 우회하기 위한 의도적 설계(코드 주석에 명시됨).

## 5. 콘텐츠/기능 상세 (페이지별)

| 페이지 | 핵심 콘텐츠 |
|---|---|
| **home** | 유튜브 임베드 배경 히어로(`iframe`, autoplay/mute/loop) + 타이틀/서브타이틀 + 스크롤 유도 버튼 → 업적 카운터(achievements, 현재 더미값 100/200/300/400) → 자료 하이라이트 → SNS 링크(YouTube/Instagram/Facebook, 현재 `href="#"` 더미) |
| **about** | 회사 소개 카피 + 설립 2000년 배지 + 체크리스트 3항목(방풍벽 전문 시공/부식 저항 소재/특허 타공 기술). LAUNCH_CHECKLIST #4에 따르면 인사말·연혁 타임라인·인증서 갤러리로 확장 예정(현재는 골격만) |
| **features (방풍벽이란?)** | 강풍 위협 설명(3개 카드: 강풍의 위협/전세계적 현상/국내 사고 사례) → 방풍벽 효과 3종(주행안전/풍속감쇄/구조안정) → 설치 구간 4종(교량/고속도로/산악해안/터널고가) → 항력계수 표 → 풍하중 계산 표(section-design) |
| **technology (기술력)** | **가장 방대한 페이지, 9개 하위 블록.** section-panels: 재질 3종(GI/FRP/AL·STS) 비교, 공극률 2단계(22~33% / 45%) 효과, 적용 분야 4종, 풍속감쇄표·사양표(마크업 직접 구현). section-vortex: 와류저감장치(Vortex Generator) 원리, Strouhal 수 공식 변수 설명, 적용 전/후 효과 비교표(항력계수/피로누적도/진동/유지관리비) |
| **resources (자료실)** | 다운로드 카드 4종(제품소개서 PDF/표준설계도면 DWG/특허현황 PDF/풍동시험 영상) — `useCommonStore.downloads` 재사용, 현재 실제 링크 미연결 |
| **gallery (시공사진)** | 실제 시공 사례 6건 카드 그리드 + 클릭 시 인라인 상세(위치/기간/규모/설명 + 이미지 캐러셀). 실사진 5건(횡성대교/홍천 화촌교/여수 자동차공업소/울릉도 해군기지/영종도 해양경찰청) + 예정 1건(동해묵호항, 깨진 이미지로 fallback UI 시연) |
| **contact (문의)** | 진한 파란 배경 + 대표 인사말 + SNS 링크 + 본사/공장 연락처 카드(`useCommonStore.offices` 재사용) |

## 6. 에셋

- **이미지**: `src/assets/images/` — 시공사진 실사진 16장 (jpg/JPG/png 혼용, 파일명 접두어로 현장 구분: `hs_`=횡성대교, `hc_`=홍천화촌교, `ys_`=여수공업소, `ul_`=울릉도, `yj_`=영종도). `co01`(회사소개)의 배경 이미지는 아직 Unsplash 외부 URL을 임시로 사용 중 (`images.unsplash.com/...`) — 교체 대상으로 추정.
- **로고**: SVG 3종 (`team-merits-logo.svg` 컬러, `-white-text.svg` 화이트 텍스트형, `-white-text-foot.svg` 푸터 전용).
- **비디오**: `public/videos/` 폴더는 **현재 비어있음**. 히어로 배경 영상은 임시로 YouTube iframe 임베드(`hero.videoEmbedUrl`, `mp01/useMP01store.js`)로 대체 중이며, LAUNCH_CHECKLIST #6에 따라 향후 Cloudflare R2에 업로드한 `<video>` 태그 방식으로 전환 예정 (자체 mp4 loop + poster 이미지).
- **파비콘/OG 이미지**: `index.html`에 `<link>`/`<meta>` 태그는 이미 작성돼 있으나 실제 파일(`favicon.ico`, `og-image.png` 등)은 `public/`에 아직 없음 — LAUNCH_CHECKLIST #1 대기 항목.
- **폰트**: Google Fonts CDN(`Noto Sans KR`, weight 300/400/500/700/900)을 `App.css` 상단에서 `@import`.

## 7. 스타일링 시스템

- Tailwind가 대부분의 스타일을 담당(유틸리티 클래스 인라인).
- `src/App.css`에 Tailwind로 표현하기 어려운 커스텀 효과들이 정의됨:
  - `.hero-bg`, `.pattern-dots`, `.blueprint-bg`, `.pattern-holes-*` — 배경 패턴/블루프린트 격자
  - `.wind-streak` / `@keyframes blow` — 바람 흐름을 형상화한 스트릭 애니메이션
  - `.barrier-line` / `@keyframes pulse-barrier` — 방풍벽 에너지 라인 펄스 효과
  - `.fade-in` / `@keyframes fadeIn` — 페이지 전환 공통 애니메이션 (App.jsx가 리플로우 강제 후 재적용)
  - `.key-point`(파란색 강조), `.text-hl`(형광펜 하이라이트, 페이지 진입 시 좌→우 sweep 애니메이션) — 본문 가독성 개선용, 최근 추가된 유틸(LAUNCH_CHECKLIST #2에서 진행 중, TE01/CO01에 1차 적용 완료)
  - `.wind-interact` / `.icon-react` — 카드 호버 시 기울임+그림자+아이콘 컬러 전환 인터랙션
  - `.animate-cfd-*` — 유체 흐름(CFD) 시각화용 반복 애니메이션 4종 (기술력 페이지 와류 섹션에서 사용 추정)

## 8. 설정 파일 요약

| 파일 | 내용 |
|---|---|
| `vite.config.js` | `@vitejs/plugin-react`만 등록, 별도 alias/proxy 없음 |
| `tailwind.config.js` | `content`만 지정, theme 확장 없음(기본 팔레트 그대로 사용) |
| `postcss.config.js` | Tailwind + autoprefixer 표준 구성(추정, 파일 자체는 미확인이나 devDependencies에 존재) |
| `eslint.config.js` | flat config, `react-hooks`/`react-refresh` 규칙 + `no-unused-vars`(대문자 시작 변수는 예외 — 컴포넌트 export 패턴 고려) |
| `.claude/launch.json` | Claude Code 프리뷰용 dev 서버 정의 (`npm run dev`, 포트 5173) |
| `index.html` | `lang="ko"`, SEO 메타 + OG 태그 뼈대 (실제 이미지/도메인 값은 TODO 주석과 함께 비어있음) |

## 9. 현재 미완성/진행 중 항목 (LAUNCH_CHECKLIST.md 기준)

우선순위 🟢 즉시 진행 가능:
1. 본문 가독성 강조(`.key-point`/`.text-hl`) — 1차 적용 완료, store 기반 확장은 검토 대기
2. 메인 하단 포트폴리오 블록 신규 추가 (`MP01AA01M5.jsx`, `galleryProjects` 최근작 재사용 예정) — 미착수
3. 회사소개 페이지 재구성(인사말/연혁/인증서 3블록 분리) — 골격만, 실내용은 사장님 자산 대기

🟡 보류(자산/결제/의사결정 대기):
4. 파비콘 + OG 이미지 (이미지 미수령)
5. 정적 파일 다운로드 활성화 (파일 미수령 — 5MB 이하는 `public/downloads/`, 초과분은 Cloudflare R2)
6. 히어로 영상 YouTube → R2 `<video>` 전환 (영상 파일 대기)
7. 커스텀 도메인 연결 (결제 대기)

## 10. 참고 — 최근 히스토리(git log 기준)

- `bc0ab8e` build: Tailwind/Lucide CDN → npm 패키지 전환 및 NavBar 개선 (최신)
- `9945504` refactor(pages): 페이지별 폴더·책임 블록·store 훅 구조로 재편 — **현재 아키텍처(4장)의 기반이 된 대규모 리팩터링**
- 그 이전 커밋들은 CDN 기반 구조에서 페이지별 콘텐츠를 점진적으로 채워온 이력 (기술력/시공사진/메인 페이지 순으로 작업)
