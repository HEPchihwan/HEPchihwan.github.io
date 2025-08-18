---
layout: post
title: DATA/SIM
date: 2025-08-18 12:06:00 +0900
categories: practice datasim
permalink: /categories/practice/datasim/
heading: "DATA/SIM"
subheading: "Data vs Simulation Comparison"
---

# DATA/SIM


## Drell Yan ( Z -> mu mu )

### Selections 
- HLT        : Isomu24
- safeptcut  : 26
- ID         : POGTIGHT
- pt/eta cut : 30 / 2.4 
- leading , subleading muon , opposite charge 


*Results*
[2022 C,D ERA]

![alt text](DY_DileptonZMass_comparison_2022.png)

*Reference results*

![alt text](image-1.png)

- SMP 16-009

* Discrepancy reasons : 
  1 . Pt cut 30 makes inv Dilepton inv mass < 60 less precise . 
  1. NO scale factors applied , ~10% diff from data .

## TTBar ( TTLJ )

### Selections 
- HLT        : Isomu24
- safeptcut  : 26
- ID         : POGTIGHT
- pt/eta cut : 30 / 2.4 
- B jet      : ParticleNet Tight / 30 2.4
- light jet  : 30 / 2.4
- MET        : 30

  -> Transverse Mass ( leading Muon + lead,subleading B jet, light jet + MET )


*Results*
[2022 C,D ERA ]

![alt text](TTbar_StackedMC_comparison_2022.png)

*Reference results*

![alt text](TTLJ_ref.png)

- TOP 20-001

* Discrepancy reasons : 
  1. More complex states than DY 
  2. Inv mass & transverse Inv mass Diff
  3. Scale factor Diff
  4. Used Boosted , resolved region 
  5. etc ..