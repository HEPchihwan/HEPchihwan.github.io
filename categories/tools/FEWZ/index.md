---
layout: post
title: FEWZ
date: 2025-08-13 12:02:00 +0900
categories: tools FEWZ
permalink: /categories/tools/FEWZ/
heading: "FEWZ"
subheading: "W,Z Production Calculator"
---

# FEWZ

FEWZ (Fully Exclusive W,Z)는 W와 Z boson 생성 과정의 정확한 이론 계산을 수행하는 도구입니다.

## 개요
FEWZ는 hadron collider에서 W/Z boson 생성의 NNLO QCD 보정을 포함한 정밀 계산을 제공합니다.
- **NNLO precision**: Next-to-Next-to-Leading Order QCD 계산
- **Electroweak corrections**: 전자기약 상호작용 보정
- **PDF uncertainties**: Parton distribution function 불확실성

## 주요 기능
### Cross Section Calculation
- **Total cross sections**: pp → W/Z + X
- **Differential distributions**: dσ/dp_T, dσ/dy
- **Fiducial measurements**: 실험 조건에 맞는 계산
- **Scale variations**: Renormalization/factorization scale

### Physics Applications
- **Standard candles**: W/Z 생성률을 이용한 luminosity 측정
- **PDF constraints**: W charge asymmetry, Z rapidity 분포
- **BSM searches**: 새로운 물리에 대한 정밀한 배경 추정
- **Precision tests**: Electroweak sector 정밀 검증

## 사용 예제
### Input Configuration
```
# FEWZ input file
process: pp → Z → e+e-
energy: 13000 GeV
pdf: NNPDF3.1
order: NNLO
```

### Output Analysis
- Cross section with uncertainties
- K-factor (NNLO/LO ratio)  
- Scale dependence studies
- PDF uncertainty bands

## CMS/ATLAS에서의 활용
- W/Z cross section 측정과 이론 비교
- Acceptance × efficiency 보정
- Signal/background normalization
- Systematic uncertainty 평가