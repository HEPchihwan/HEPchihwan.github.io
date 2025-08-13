---
layout: post
title: Uproot
date: 2025-08-13 12:07:00 +0900
categories: practice uproot
permalink: /categories/practice/uproot/
heading: "Uproot"
subheading: "Python ROOT Analysis with Matrix"
---

# Uproot

Python을 이용한 ROOT 파일 분석과 행렬 연산을 다룹니다.

## Uproot 개요
**Uproot**은 Python에서 ROOT 파일을 읽고 분석할 수 있는 라이브러리입니다.
- ROOT C++ 없이 순수 Python으로 작업
- NumPy, pandas와의 완벽한 호환성
- 빠른 데이터 처리와 메모리 효율성

## 기본 사용법
### 파일 열기와 Tree 접근
```python
import uproot
import numpy as np
import pandas as pd

# ROOT 파일 열기
file = uproot.open("data.root")
tree = file["Events"]

# 브랜치 정보 확인
print(tree.keys())
```

### 데이터 읽기
```python
# 단일 브랜치 읽기
muon_pt = tree["Muon_pt"].array()

# 여러 브랜치 동시 읽기  
data = tree.arrays(["Muon_pt", "Muon_eta", "Muon_phi"])

# Pandas DataFrame으로 변환
df = tree.arrays(library="pd")
```

## 행렬 연산 활용
### 벡터화된 계산
- **Four-vector operations**: pt, eta, phi, mass 계산
- **Delta R calculations**: 입자 간 거리 계산
- **Invariant mass**: 다중 입자 시스템 질량

### 효율적인 필터링
```python
# 조건부 선택
high_pt_muons = data[data["Muon_pt"] > 25]

# 복잡한 조건 조합
selection = (data["Muon_pt"] > 25) & (abs(data["Muon_eta"]) < 2.4)
```

## 실제 분석 예제
- Z → μμ 불변질량 스펙트럼
- Dimuon 시스템 운동학 연구
- 효율성 곡선 계산과 시각화