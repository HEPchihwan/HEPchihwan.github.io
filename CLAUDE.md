# Jekyll Blog Structure Documentation

## 전체 프로젝트 구조

```
HEPchihwan.github.io/
├── _config.yml                 # Jekyll 설정 파일
├── _layouts/                   # 레이아웃 템플릿
│   ├── home.html              # 홈페이지 레이아웃
│   └── page.html              # 일반 페이지 레이아웃
├── _posts/                    # 블로그 포스트
│   └── 2025-08-13-welcome-to-jekyll.md
├── categories/                # 카테고리 구조
│   ├── lrsm/
│   ├── tools/
│   ├── epr/
│   └── practice/
├── img/                       # 이미지 파일
├── index.md                   # 메인 홈페이지
├── about.md                   # About 페이지
└── _site/                     # 빌드된 정적 파일들
```

## Jekyll 설정 (_config.yml)

### 중요한 설정들
```yaml
# 사이트 기본 정보
title: "Chi Hwan's Blog"
description: "HEP Physics Research & Development Blog"
author: Chi Hwan

# 테마 설정
remote_theme: jeffreytse/jekyll-theme-yat

# 배너 설정 (매우 중요!)
banner:
  title: "Chi Hwan's Blog"
  subtitle: "HEP Physics Research & Development"
  image: "/img/KakaoTalk_20250813_191149495.jpg"

# 카테고리 제외 설정 (템플릿 포스트 숨기기)
exclude_categories: ["blog"]
```

## 레이아웃 시스템

### 1. _layouts/home.html
```yaml
---
layout: articles
heading: 'Chi Hwan''s Blog'
subheading: 'HEP Physics Research & Development'
banner: 'default'
---

{{ content }}
```
- 홈페이지 전용 레이아웃
- `{{ content }}`로 index.md 내용 표시
- YAT 테마의 articles 레이아웃 상속

### 2. _layouts/page.html  
```yaml
---
layout: articles
heading: 'Your awesome heading'
subheading: 'Your awesome subheading' 
banner: 'default'
---
{{ content }}
```
- 일반 페이지용 레이아웃
- 카테고리 페이지에서 사용

## 카테고리 구조 시스템

### 메인 카테고리 (4개)
1. **LRSM** - Left-Right Symmetric Model 연구
2. **Tools** - 개발 도구와 분석 툴  
3. **EPR** - EPR task (Tau trigger 성능 연구)
4. **Practice** - 실습과 연습

### 카테고리 파일 구조
각 카테고리는 다음 구조를 가집니다:
```
categories/[category_name]/
├── index.md                    # 카테고리 메인 페이지
└── [subcategory_name]/
    └── index.md               # 서브카테고리 페이지
```

### 카테고리 index.md 템플릿
```yaml
---
layout: page                    # 중요: page 레이아웃 사용
title: [Category Name]
permalink: /categories/[category]/
heading: "[Display Name]"
subheading: "[Description]"
---

# [Category Name]

[카테고리 설명]

## 서브카테고리
- [Link](/categories/[category]/[sub]/) - [설명]
- [Link](/categories/[category]/[sub]/) - [설명]
```

### 서브카테고리 index.md 템플릿
```yaml
---
layout: post                    # 중요: post 레이아웃 사용
title: [Subcategory Name]
date: 2025-08-13 12:00:00 +0900  # 적절한 날짜 설정
categories: [main_cat] [sub_cat]
permalink: /categories/[main]/[sub]/
heading: "[Display Name]"
subheading: "[Description]"
---

# [Subcategory Name]

[서브카테고리 상세 내용]
```

## 현재 카테고리 구조

### LRSM 카테고리
```
/categories/lrsm/
├── index.md (layout: page)
├── topchannel/index.md (layout: post)
├── tauchannel/index.md (layout: post)  
├── Papers/index.md (layout: post)
├── theory/index.md (layout: post)
└── phenomenology/index.md (layout: post)
```

### Tools 카테고리
```
/categories/tools/
├── index.md (layout: page)
├── FEWZ/index.md (layout: post)
├── Genproductions/index.md (layout: post)
├── SKNANO/index.md (layout: post)
├── SampleFactory/index.md (layout: post)
└── HiggsCombineTool/index.md (layout: post)
```

### EPR 카테고리
```
/categories/epr/
├── index.md (layout: page)
├── papers/index.md (layout: post)
└── research/index.md (layout: post)
```

### Practice 카테고리
```
/categories/practice/
├── index.md (layout: page)
├── datasim/index.md (layout: post)
└── uproot/index.md (layout: post)
```

## 중요한 설정 규칙

### 1. 레이아웃 규칙
- **메인 카테고리**: `layout: page` 사용
- **서브 카테고리**: `layout: post` 사용 (블로그 포스트 스타일로 표시)
- **홈페이지**: `layout: home` 사용

### 2. Permalink 규칙
- 메인 카테고리: `/categories/[category]/`
- 서브 카테고리: `/categories/[category]/[subcategory]/`
- 일관성 있는 URL 구조 유지

### 3. 날짜 설정 (서브카테고리)
- 모든 서브카테고리는 적절한 date 필드 필요
- 시간 간격을 두어 순서 조정 가능
- 형식: `YYYY-MM-DD HH:MM:SS +0900`

### 4. 카테고리 필드
```yaml
categories: [main_category] [subcategory]
```
- 첫 번째는 메인 카테고리 이름
- 두 번째는 서브 카테고리 이름

## 배너 시스템

### 배너 이미지 설정
- 이미지 파일: `/img/KakaoTalk_20250813_191149495.jpg`
- _config.yml에서 전역 설정
- 모든 페이지에서 동일한 배너 사용

### 배너 텍스트 커스터마이징
각 페이지별로 heading/subheading 설정:
```yaml
heading: "[페이지별 제목]"
subheading: "[페이지별 부제목]"
```

## 포스트 가시성 제어

### Jekyll 템플릿 포스트 숨기기
```yaml
# _posts/2025-08-13-welcome-to-jekyll.md
published: false  # 메인 페이지에서 숨김
```

### 카테고리 제외
```yaml
# _config.yml
exclude_categories: ["blog"]
```

## 빌드 및 배포

### 로컬 빌드
```bash
bundle exec jekyll build
```

### 로컬 서버 실행
```bash
bundle exec jekyll serve
```

### GitHub Pages 자동 배포
- main 브랜치에 push시 자동 빌드/배포
- GitHub Actions 워크플로우 사용

## 새 서브카테고리 추가 방법

1. **디렉토리 생성**: `categories/[main]/[new_sub]/`
2. **index.md 생성**: 위 템플릿 사용
3. **메인 카테고리 업데이트**: 링크 추가
4. **Jekyll 빌드**: 변경사항 반영

### 예시: LRSM에 새 서브카테고리 추가
```yaml
# categories/lrsm/index.md에 추가
- [New_Channel](/categories/lrsm/newchannel/) - 새로운 채널 설명
```

## 트러블슈팅

### 배너가 표시되지 않는 경우
1. _config.yml의 banner 설정 확인
2. 이미지 파일 경로 확인
3. 레이아웃 파일의 banner 필드 확인

### 서브카테고리 링크가 작동하지 않는 경우
1. permalink 설정 확인
2. 폴더 구조와 URL 일치성 확인
3. Jekyll 빌드 후 _site 폴더 확인

### 콘텐츠가 표시되지 않는 경우
1. 레이아웃에 `{{ content }}` 포함 확인
2. front matter 문법 오류 확인
3. 파일 인코딩 (UTF-8) 확인

## YAT 테마 특성

### 사용 중인 테마
- **테마**: jeffreytse/jekyll-theme-yat
- **원격 테마**: GitHub에서 직접 로드
- **커스터마이징**: _layouts 폴더로 오버라이드

### 주요 기능
- 반응형 디자인
- 다크 모드 지원
- 다국어 지원
- SEO 최적화
- 소셜 미디어 통합

이 문서를 참고하여 향후 비슷한 Jekyll 블로그 구조 작업을 수행할 수 있습니다.