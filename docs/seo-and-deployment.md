# SEO & Deployment Guide

## 1. 배포 파이프라인

### 구조

```
GitHub (main push) → GitHub Actions → Build (pnpm) → Cloudflare Pages 배포
```

### 워크플로우

- 파일: `.github/workflows/deploy.yml`
- 트리거: `main` 브랜치 push
- 빌드: `pnpm install` → `pnpm build` → `out/` 디렉토리 생성
- 배포: `wrangler pages deploy out --project-name=glitchsnap`

### GitHub Secrets (필수)

| Name | 설명 |
|------|------|
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 계정 ID |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API 토큰 (Edit Cloudflare Workers 권한) |

설정 위치: GitHub repo → Settings → Secrets and variables → Actions

### Cloudflare Pages

- 프로젝트명: `glitchsnap`
- 도메인: `glitchsnap.com`, `glitchsnap.pages.dev`
- Git 연결: 없음 (GitHub Actions로 직접 배포)

---

## 2. SEO 설정 현황

### 메타데이터

- 기본 설정: `app/layout.tsx` (metadataBase, title, description, keywords, robots)
- 페이지별 설정: `lib/metadata.ts`의 `generatePageMetadata()` 사용
- 사이트 설정: `lib/constants.ts`의 `siteConfig`

### 도메인

- 기본 도메인: `https://glitchsnap.com` (www 없음)
- `siteConfig.url`: `https://glitchsnap.com`
- `www.glitchsnap.com`은 설정되어 있지 않음 (404 반환)

### robots.txt

- 파일: `app/robots.ts` (빌드 시 자동 생성)
- 허용: `/`
- 차단: `/api/`, `/admin/`
- sitemap 참조 포함

### sitemap.xml

- 파일: `app/sitemap.ts` (빌드 시 자동 생성)
- 포함 페이지: 홈, features, pricing, about, blog, 블로그 글 3개
- 블로그 글 목록은 하드코딩 (새 글 추가 시 수동 업데이트 필요)

### Open Graph / Twitter Card

- `app/layout.tsx`에서 전역 설정
- OG 이미지: `/public/og.png` (1200x630)
- Twitter: `summary_large_image` 카드

### 구조화 데이터 (JSON-LD)

- Organization 스키마: `lib/metadata.ts` → `generateOrganizationSchema()`
- SoftwareApplication 스키마: `lib/metadata.ts` → `generateSoftwareApplicationSchema()`
- BlogPosting 스키마: `lib/metadata.ts` → `generateBlogPostSchema()` (정의됨, 미사용)

---

## 3. Google Search Console

### 설정

1. [Google Search Console](https://search.google.com/search-console) 접속
2. 속성: `https://glitchsnap.com` 등록됨
3. sitemap 제출: `https://glitchsnap.com/sitemap.xml`

### 색인 생성 요청

URL 검사 → URL 입력 → "색인 생성 요청" 클릭. 주요 페이지별로 각각 요청하면 색인이 더 빠름.

### 색인 반영 소요 시간

- 색인 시작: 1~3일
- 검색 결과 노출: 1~2주

---

## 4. 남은 개선사항

| 우선순위 | 항목 | 설명 |
|---------|------|------|
| 높음 | `/about`, `/blog` 메타데이터 | `'use client'`라 metadata export 불가, 서버 컴포넌트로 분리 필요 |
| 높음 | BlogPosting 스키마 적용 | `generateBlogPostSchema()` 블로그 글 페이지에 적용 |
| 중간 | sitemap 날짜 | 모든 페이지 lastModified가 2024-01-15로 고정 |
| 중간 | 블로그 글 동적 관리 | sitemap에 하드코딩된 블로그 슬러그를 동적으로 변경 |
| 낮음 | www 리다이렉트 | `www.glitchsnap.com` → `glitchsnap.com` 리다이렉트 설정 |
| 낮음 | RSS 피드 | 블로그 RSS feed 추가 |
