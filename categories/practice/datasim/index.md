---
layout: post
title: DATA/SIM
date: 2025-08-13 12:06:00 +0900
categories: practice datasim
permalink: /categories/practice/datasim/
heading: "DATA/SIM"
subheading: "Data vs Simulation Comparison"
---

# DATA/SIM

실험 데이터와 Monte Carlo 시뮬레이션 간의 차이점과 보정 방법을 다룹니다.

## 주요 차이점
### Detector Response
- **Resolution differences**: 실제 검출기와 시뮬레이션의 해상도 차이
- **Efficiency variations**: 검출 효율의 run-dependent 변화
- **Dead channels**: 실제 데이터에서 발생하는 검출기 문제

### Physics Modeling  
- **Pileup conditions**: 실제 충돌 환경과 시뮬레이션 차이
- **Beam conditions**: 빔 에너지, 위치, 각도의 실제 조건
- **Background modeling**: QCD, electroweak 배경의 정확성

## 보정 기법
### Scale Factors
- **Muon/Electron ID**: 렙톤 식별 효율 보정
- **B-tagging**: b-jet 태깅 효율 보정  
- **Trigger efficiency**: 트리거 효율 측정과 적용
- **Energy scale**: 제트와 MET 에너지 보정

### Data-driven Methods
- **Fake rate**: 가짜 렙톤 배경 추정
- **Charge misID**: 전하 오인식률 측정
- **Z→ll**: Z boson을 이용한 보정 인자 측정

## 검증 방법
- Control region 비교
- Kinematic distribution 확인
- Statistical tests (KS test, χ² test)
- Systematic uncertainty 평가