---
layout: post
title: SampleFactory
date: 2025-08-13 13:01:00 +0900
categories: tools SampleFactory
permalink: /categories/tools/SampleFactory/
heading: "SampleFactory"
subheading: "Monte Carlo Sample Production"
---

# SampleFactory

Monte Carlo 샘플 생성과 관리를 위한 도구입니다.

## 기능 개요
- **Event Generation**: MadGraph, PYTHIA를 이용한 이벤트 생성
- **Detector Simulation**: Geant4 기반 CMS 시뮬레이션
- **Reconstruction**: CMSSW를 이용한 이벤트 재구성
- **Sample Management**: 생성된 샘플의 체계적 관리

## 생성 과정
### 1. Matrix Element 계산
- MadGraph5_aMC@NLO
- Process definition and parameter setting
- Grid pack generation

### 2. Parton Shower & Hadronization  
- PYTHIA8 fragmentation
- Underlying event simulation
- Multiple interaction modeling

### 3. Detector Simulation
- CMS detector geometry
- Physics interactions in materials
- Electronics response simulation

### 4. Reconstruction
- Track reconstruction
- Calorimeter clustering  
- Particle identification
- Higher-level object reconstruction

## 샘플 종류
- **Signal samples**: LRSM, extra dimensions
- **Background samples**: SM processes (W+jets, Z+jets, tt̄, diboson)
- **Data-driven samples**: QCD multijet, fake rate studies

## 품질 관리
- Cross-section validation
- Kinematic distribution checks
- Generator-level comparisons
- Systematic uncertainty evaluation