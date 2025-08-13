---
layout: post
title: EPR Research
date: 2025-08-13 12:04:00 +0900
categories: epr research
permalink: /categories/epr/research/
heading: "EPR Research"
subheading: "Quantum Mechanics Studies"
---

# EPR Research

Tau trigger 성능 연구의 실제 진행 상황과 결과를 기록합니다.

## 연구 계획
### Phase 1: 현재 성능 평가 (2025 Q1)
- Run3 초기 데이터를 이용한 baseline 성능 측정
- L1 tau trigger 효율성과 rate 분석
- HLT tau path 성능 평가

### Phase 2: 알고리즘 최적화 (2025 Q2)
- Machine learning 기반 tau 식별 개선
- Dynamic threshold 조정 알고리즘 개발
- Background rejection 향상 방법

### Phase 3: 검증 및 구현 (2025 Q3-Q4)
- 개선된 알고리즘의 성능 검증
- Online system에 적용
- 장기간 안정성 모니터링

## 분석 진행 상황
### 완료된 작업
- [x] Run3 tau trigger dataset 수집
- [x] 기본적인 효율성 측정 코드 개발
- [ ] Tag-and-Probe 분석 프레임워크 구축

### 진행 중인 작업  
- Data/MC comparison for efficiency
- Turn-on curve 최적화 연구
- Rate vs efficiency trade-off 분석

### 예정된 작업
- Machine learning 모델 훈련
- Cross-validation with 2024 data
- Performance report 작성

## 중간 결과
### Preliminary Findings
- L1 tau trigger efficiency: ~85% @ 20 GeV
- HLT efficiency (relative to L1): ~90%
- Main background sources: QCD jets, electrons

### 개선 포인트
- Low-pT tau 영역에서 효율성 향상 필요
- Fake rate 감소를 위한 추가 discriminator 개발
- Pileup 조건에 따른 성능 최적화