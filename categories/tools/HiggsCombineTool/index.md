---
layout: post
title: HiggsCombineTool
date: 2025-08-13 13:02:00 +0900
categories: tools HiggsCombineTool
permalink: /categories/tools/HiggsCombineTool/
heading: "HiggsCombineTool"
subheading: "Statistical Analysis Framework"
---

# HiggsCombineTool

CMS에서 사용하는 통계 분석 도구입니다.

## 주요 기능
통계적 추론과 한계 설정을 위한 포괄적인 프레임워크를 제공합니다.

### Limit Setting
- **CLs method**: 95% confidence level 배제 한계
- **Asymptotic approximation**: 빠른 한계 계산
- **Toy Monte Carlo**: 정확한 통계 추론
- **Expected vs Observed**: 기대 한계와 관측 한계 비교

### Signal Extraction
- **Maximum Likelihood**: 신호 강도 측정
- **Profile Likelihood**: 신뢰 구간 설정
- **Nuisance Parameters**: 체계적 불확실성 처리
- **Pull and Impact**: 매개변수 영향 평가

## 분석 유형
### 1. Counting Experiment
- 단순한 이벤트 수 기반 분석
- 배경 추정과 불확실성 평가
- 적은 통계에서 유용

### 2. Shape Analysis  
- 운동학적 분포를 이용한 분석
- Invariant mass, transverse momentum 등
- 더 높은 민감도 제공

### 3. Multi-category Analysis
- 여러 신호/배경 영역 동시 분석
- 상관관계 고려한 통합 분석
- 체계적 불확실성의 적절한 처리

## 실사용 예제
- LRSM W_R boson 탐색 한계
- Heavy neutrino 질량 제한
- 새로운 물리 탐색의 표준 도구

## 유용한 명령어
```bash
combine -M Asymptotic datacard.txt
combine -M FitDiagnostics datacard.txt  
combine -M Impacts datacard.txt
```