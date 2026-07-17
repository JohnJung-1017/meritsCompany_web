# 메리츠컴퍼니 웹 런칭 체크리스트

> 프로토타입 → 실제 런칭까지 남은 과제 추적표.
> 시니어 개발자 검수 피드백 + 사장님 요청 항목을 7개 과제로 정리.
>
> **범례:** ☐ 미착수 · ◐ 진행중 · ☑ 완료 / 🧑‍💻 코드만으로 가능 · 📦 사장님 자산 필요
> **상태:** 🟢 즉시 진행 가능 · 🟡 보류(자산/결제/의사결정 대기)

---

## ▶ 현재 우선순위 (사장님 결정 반영)

**🟢 즉시 진행:** #2 본문 가독성 → #3 포트폴리오 → #4 회사소개 재구성
**🟡 보류:**
- #1 파비콘+메타태그 — 아이콘/썸네일 이미지 미수령 (이미지 받으면 진행)
- #5 정적파일 다운로드 — 파일 미수령
- #6 히어로 영상 — 의사결정 대기 (R2 방식 등)
- #7 도메인 — 도메인 결제 필요

---

## 1. 파비콘 + 메타태그 (SEO·공유) 🟡 보류 (이미지 대기) 🧑‍💻📦
- [ ] `public/favicon.svg` 추가 (기존 `src/assets/team-merits-logo.svg` 기반)
- [ ] `favicon.ico` fallback + `apple-touch-icon.png` 추가
- [ ] `index.html` `<head>`에 favicon 링크 등록
- [ ] `meta description` 추가
- [ ] Open Graph 태그 (`og:title` / `og:description` / `og:image` / `og:url`) 추가
- [ ] `theme-color` 추가
- [ ] 📦 (선택) 로고가 작은 사이즈에서 뭉개지면 정사각형 심볼 별도 제작

## 2. 본문 가독성 — 핵심 포인트 강조 ◐ 1차 적용 완료 🧑‍💻
- [x] 재사용 유틸 `.key-point`(컬러강조)·`.text-hl`(형광펜) `App.css`에 추가
- [x] 형광펜 하이라이트 페이지 진입 시 좌→우 sweep 애니메이션(`hlSweep`, CSS-only)
- [x] 기술력 페이지(TE01) 본문 핵심어 강조 적용
- [x] 회사소개 페이지(CO01) 본문 핵심어 강조 적용
- [ ] (후속) store 기반 카드 설명문(재질·공극률)으로 확장 — 사장님 검토 후 결정
- [ ] (후속) 홈 placeholder 문구는 실제 카피 확정 후 강조

## 3. 메인 하단 포트폴리오 영역 🟢 즉시 진행 🧑‍💻
- [ ] 신규 블록 `mp01/MP01AA01M5.jsx` 생성
- [ ] `useGA01store.js`의 `galleryProjects`에서 최근 3~4개 재사용 (썸네일 카드)
- [ ] 카드 클릭 → `data-nav-page="gallery"` 갤러리 이동 연결
- [ ] `MP01AA01M.jsx` 루트에 합성 (자료실 아래 / 소셜 위)

## 4. 회사소개 페이지 재구성 🟢 즉시 진행(골격) 🧑‍💻 + 📦(실내용)
> 기존 단일 블록(개요+체크리스트) 소스도 새 구조에 맞춰 재구성한다.
- [ ] `CO01AA01M1.jsx` — 인사말 & 기업이념 ('품질 타협 없는 안전')
- [ ] `CO01AA01M2.jsx` — 주요 연혁 (세로형 타임라인, 2000~현재)
- [ ] `CO01AA01M3.jsx` — 기술인증 & 특허 (갤러리 그리드, `ImageWithFallback` 재사용)
- [ ] `useCO01store.js`에 `greeting`/`philosophy`/`history[]`/`certifications[]` 더미 구조 추가
- [ ] 기존 개요+체크리스트 통합, 내비 앵커(`section-*`) 점프 지원
- [ ] 📦 인사말 실제 문안, 연혁 실제 이력, 인증서/특허증/구조계산서 이미지 제공

## 5. 정적파일 다운로드 활성화 🟡 보류 (파일 미수령) 🧑‍💻(연결) + 📦(파일)
> **대용량 기준:** 5MB 이하 → `public/downloads/` (repo) · 5MB 초과·영상 → Cloudflare R2
- [ ] `useCommonStore.js`의 `downloads[]` 각 항목에 `href` 필드 추가
- [ ] 자료실 `RS01AA01M.jsx` 카드에 `<a>`/onClick 연결
- [ ] 홈 자료실 `MP01AA01M3.jsx` 카드에 링크 연결 (외부는 `target=_blank rel=noopener`)
- [ ] 📦 시험성적서 등 5MB 이하 파일 → `public/downloads/`에 배치
- [ ] 📦 회사소개서·도면 ZIP·영상 → R2 업로드 후 URL 제공

## 6. 히어로 영상 안정화 (R2 + `<video>`) 🟡 보류 (의사결정 대기) 🧑‍💻(연결) + 📦(영상)
- [ ] `useMP01store.js` `hero.videoEmbedUrl` → `hero.videoUrl`/`hero.poster` 구조 변경
- [ ] `MP01AA01M1.jsx` YouTube iframe 제거 → `<video autoplay muted loop playsInline poster>`
- [ ] poster fallback 이미지 지정
- [ ] 📦 압축한 루프 mp4 (권장 1080p·짧은 루프·최소 용량) R2 업로드 + 공개 URL
- [ ] 📦 R2 버킷 생성

## 7. 도메인 연결 🟡 보류 (결제 필요) 📦
- [ ] 📦 도메인 구매 + 등록처 접근 권한
- [ ] Vercel 프로젝트에 커스텀 도메인 추가
- [ ] 도메인 등록처에서 DNS 레코드(A/CNAME) 설정
- [ ] 루트 도메인이면 Vite `base` `'/'` 유지 확인

---

## 런칭 전 최종 검증
- [ ] `npm run lint` 통과
- [ ] `npm run build && npm run preview` 프로덕션 빌드 검증 (자산 경로·번들 크기)
- [ ] 각 페이지 전환 / 포트폴리오 카드→갤러리 이동 / 다운로드 링크 동작 / 영상 자동재생·루프 확인
- [ ] 파비콘·탭 타이틀 표시 확인
- [ ] 배포 후 카톡/검색 공유 미리보기(OG) 확인
- [ ] R2 자산 공개 URL 직접 접근 가능 여부 확인

---

## 진행 순서 가이드
1. **🟢 지금 진행:** #2 본문 가독성 → #3 포트폴리오 → #4 회사소개 재구성(골격)
2. **🟡 자산/결제/결정 후:** #1 파비콘+메타(이미지) · #4 실내용 · #5 파일 · #6 영상 · #7 도메인
