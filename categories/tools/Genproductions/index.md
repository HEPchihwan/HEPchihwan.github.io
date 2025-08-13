---
layout: post
title: Genproductions
date: 2025-08-13 12:03:00 +0900
categories: tools Genproductions
permalink: /categories/tools/Genproductions/
heading: "Genproductions"
subheading: "GridPack Generation Framework"
---

# Genproductions

CMS의 Monte Carlo 샘플 생성을 위한 GridPack 생성 프레임워크입니다.

## 개요
Genproductions는 CMS에서 사용하는 Monte Carlo event generation의 표준 프레임워크입니다.
- **GridPack creation**: MadGraph, POWHEG 등 generator용 gridpack 생성
- **Centralized workflow**: 표준화된 샘플 생성 과정
- **Version control**: GitHub를 통한 체계적 관리

## 주요 구성 요소
### Generator Support
- **MadGraph5_aMC@NLO**: Leading BSM signal generator
- **POWHEG**: NLO accuracy for SM processes
- **PYTHIA8**: Parton shower and hadronization
- **Herwig**: Alternative parton shower

### GridPack Types
- **LO GridPacks**: Tree-level matrix elements
- **NLO GridPacks**: Next-to-leading order precision
- **Matched samples**: Matrix elements + parton shower
- **Custom processes**: User-defined physics models

## 사용 과정
### 1. Configuration Setup
```bash
# Process definition
process pp > w+ w- / h
# Parameter space
scan mWR [1000:5000:500]
# Cuts and settings
set ebeam1 6500
set ebeam2 6500
```

### 2. GridPack Generation
```bash
# Submit gridpack job
./submit_gridpack_generation.sh
  --name WR_M1000_2022
  --generator MadGraph
  --process pp_WR_ll
```

### 3. Validation
- Cross-section checks
- Kinematic distributions
- Generator-level comparisons
- LHE file inspection

## CMS Integration
### Official Sample Production
- **PrepID system**: 샘플 요청과 추적
- **McM (Monte Carlo Management)**: 생산 관리
- **DAS (Data Aggregation System)**: 데이터셋 검색

### Local Testing
- CMSSW integration testing
- Fast simulation validation  
- Full simulation cross-checks
- Analysis-ready format conversion

## LRSM 예제
```python
# LRSM heavy neutrino process
import model LRSM_UFO
generate p p > wr+ > l+ n4, wr+ > l+ n4
add process p p > wr- > l- n4~, wr- > l- n4~
```

이 도구를 사용하여 다양한 BSM 모델의 Monte Carlo 샘플을 체계적으로 생성할 수 있습니다.