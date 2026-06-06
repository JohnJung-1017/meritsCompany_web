# meritsCompany_web — Claude Code 가이드

## 프로젝트 개요
(주)메리츠컴퍼니 방풍벽 사업부 회사 소개 웹사이트. 외주 프로젝트.
정적 SPA (React + Vite), 백엔드·API 없음.

## 기술 스택
- **React 19** + **Vite 7** (TypeScript 미사용, JSX)
- **Tailwind CSS** — `index.html`에서 CDN 로드 (`https://cdn.tailwindcss.com`)
- **Lucide Icons** — `index.html`에서 CDN 로드 (`https://unpkg.com/lucide@latest`), `window.lucide.createIcons()`로 렌더링
- ESLint 9

## 폴더 구조
```
meritsCompany_web/          ← git root = React 프로젝트 root
├── public/                 ← 정적 파일 (파일 다운로드: public/downloads/ 에 배치)
├── src/
│   ├── main.jsx
│   ├── App.jsx             ← 전체 라우팅/레이아웃 관리
│   ├── App.css             ← 커스텀 CSS (animation, wind-interact 등)
│   ├── index.css           ← 최소 reset
│   ├── assets/
│   │   ├── images/         ← 시공사진 (프로젝트별 prefix: hs_, hc_, ys_, ul_, yj_)
│   │   └── *.svg           ← 로고 3종
│   └── components/
│       ├── layout/
│       │   ├── NavBar.jsx
│       │   └── Footer.jsx
│       └── pages/
│           ├── HomePage.jsx
│           ├── AboutPage.jsx
│           ├── FeaturesPage.jsx
│           ├── TechnologyPage.jsx
│           ├── ResourcesPage.jsx
│           ├── GalleryPage.jsx
│           ├── ContactPage.jsx
│           ├── gallery.meta.js  ← 갤러리 데이터 + 히어로 설정
│           └── gallery/
│               ├── GalleryCard.jsx
│               ├── GalleryCarousel.jsx
│               ├── GalleryDetail.jsx
│               ├── GalleryGrid.jsx
│               ├── GalleryHeader.jsx
│               └── GalleryImage.jsx
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## 라우팅 방식
React Router 미사용. `data-nav-page` / `data-nav-section` data attribute와 CSS `hidden` 클래스 토글로 페이지 전환.
- 이벤트 위임: `App.jsx`의 `handleInteraction` 함수가 컨테이너 전체의 클릭 처리
- 페이지 ID 패턴: `id="page-{pageName}"` (예: `id="page-home"`)
- 섹션 앵커 패턴: `id="section-{sectionName}"` (예: `id="section-effects"`)

## 개발 명령어
```bash
# 프로젝트 root(meritsCompany_web/)에서 실행
npm run dev      # 개발 서버
npm run build    # 빌드 (dist/)
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint 검사
```

## 코드 작성 후 필수 검사
코드 변경 후에는 반드시 아래 두 가지를 실행할 것:
```bash
npm run lint            # ESLint — 오류가 없어야 커밋 가능
npx prettier --check .  # Prettier — 포맷 불일치 파일 확인
npx prettier --write .  # Prettier — 자동 포맷 적용
```
Prettier는 아직 프로젝트에 설치되지 않았으므로 설치 후 사용:
```bash
npm install --save-dev prettier
```

## 파일 다운로드 구현 방향 (미완성)
DB 없이 정적으로 구현 예정.
- `public/downloads/` 폴더에 파일 배치 후 `<a href="/downloads/file.pdf" download>` 방식
- 또는 외부 스토리지(Google Drive 등) 링크 방식

## 주요 미완성 항목
- `ResourcesPage.jsx`: 다운로드 버튼 동작 없음 (클릭 시 실제 파일 연결 필요)
- `ContactPage.jsx` + `HomePage.jsx`: SNS 링크 `href="#"` placeholder
- `AboutPage.jsx`: Unsplash 외부 이미지 → 실제 회사 이미지로 교체 예정
- `TechnologyPage.jsx`: 와류저감장치 도면/사진 자리 표시 영역 (`카메라 아이콘 placeholder`)
- `homeAchievementStats`: 업적 수치 placeholder (`merits 업적1~4`)

## 알려진 기술 부채
- Tailwind CDN 사용 (프로덕션 최적화 미적용, 약 3MB+ 번들)
- Lucide CDN + `window.lucide.createIcons()` (React 패키지 미사용)
- 페이지 전환 시 모든 페이지가 DOM에 마운트 상태 (숨김만 처리)
- URL 변경 없음 (뒤로가기/북마크 불가)
