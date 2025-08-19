---
layout: post
title: EPR 
date: 2025-08-13 12:05:00 +0900
categories: epr tau trigger
permalink: /categories/epr/tautrigger/
heading: "EPR tau trigger "
subheading: "Literature Review"
---

# Phase 1 | Phase2 

## Example : 
Phase 1 : HLT_IsoMu20_eta2p1_PNetTauhPFJet27_Loose_eta2p3_CrossL1_v
Phase 2 : HLT_IsoMu20_eta2p1_LooseDeepTauPFTauHPS27_eta2p1_CrossL1

### Phase 1 exmaple : HLT_IsoMu20_eta2p1_PNetTauhPFJet27_Loose_eta2p3_CrossL1_v
2024B - 2024F
#### hltTriggerType

cms.EDFilter("HLTTriggerTypeFilter", SelectedTriggerType = cms.int32(1))

#### hltL1sBigORMu18erTauXXer2p1

cms.EDFilter("HLTL1TSeed",
    L1EGammaInputTag = cms.InputTag("hltGtStage2Digis","EGamma"),
    L1EtSumInputTag = cms.InputTag("hltGtStage2Digis","EtSum"),
    L1EtSumZdcInputTag = cms.InputTag("hltGtStage2Digis","EtSumZDC"),
    L1GlobalInputTag = cms.InputTag("hltGtStage2Digis"),
    L1JetInputTag = cms.InputTag("hltGtStage2Digis","Jet"),
    L1MuonInputTag = cms.InputTag("hltGtStage2Digis","Muon"),
    L1MuonShowerInputTag = cms.InputTag("hltGtStage2Digis","MuonShower"),
    L1ObjectMapInputTag = cms.InputTag("hltGtStage2ObjectMap"),
    L1SeedsLogicalExpression = cms.string('L1_Mu18er2p1_Tau24er2p1 OR L1_Mu18er2p1_Tau26er2p1'),
    L1TauInputTag = cms.InputTag("hltGtStage2Digis","Tau"),
    saveTags = cms.bool(True)
)

#### hltPreIsoMu20eta2p1PNetTauhPFJet27Looseeta2p3CrossL1

cms.EDFilter("HLTPrescaler",
    L1GtReadoutRecordTag = cms.InputTag("hltGtStage2Digis"),
    offset = cms.uint32(0)
)

#### hltL1fL1sBigORMu18erTauXXer2p1L1Filtered0

cms.EDFilter("HLTMuonL1TFilter",
    CandTag = cms.InputTag("hltGtStage2Digis","Muon"),
    CentralBxOnly = cms.bool(True),
    MaxDeltaR = cms.double(0.3),
    MaxEta = cms.double(2.1),
    MinN = cms.int32(1),
    MinPt = cms.double(0.0),
    PreviousCandTag = cms.InputTag("hltL1sBigORMu18erTauXXer2p1"),
    SelectQualities = cms.vint32(),
    saveTags = cms.bool(True)
)

#### hltL2fBigORMu18erTauXXer2p1L1f0L2Filtered10Q

cms.EDFilter("HLTMuonL2FromL1TPreFilter",
    AbsEtaBins = cms.vdouble(0.0),
    BeamSpotTag = cms.InputTag("hltOnlineBeamSpot"),
    CandTag = cms.InputTag("hltL2MuonCandidates"),
    CutOnChambers = cms.bool(False),
    MatchToPreviousCand = cms.bool(True),
    MaxDr = cms.double(9999.0),
    MaxDz = cms.double(9999.0),
    MaxEta = cms.double(2.16),
    MinDr = cms.double(-1.0),
    MinDxySig = cms.double(-1.0),
    MinN = cms.int32(0),
    MinNchambers = cms.vint32(0),
    MinNhits = cms.vint32(0),
    MinNstations = cms.vint32(0),
    MinPt = cms.double(0.0),
    NSigmaPt = cms.double(0.0),
    PreviousCandTag = cms.InputTag("hltL1fL1sBigORMu18erTauXXer2p1L1Filtered0"),
    SeedMapTag = cms.InputTag("hltL2Muons"),
    saveTags = cms.bool(True)
)

#### hltL1fForIterL3L1fBigORMu18erTauXXer2p1L1Filtered0

cms.EDFilter("HLTMuonL1TFilter",
    CandTag = cms.InputTag("hltL1MuonsPt0"),
    CentralBxOnly = cms.bool(True),
    MaxDeltaR = cms.double(0.3),
    MaxEta = cms.double(2.5),
    MinN = cms.int32(1),
    MinPt = cms.double(0.0),
    PreviousCandTag = cms.InputTag("hltL1fL1sBigORMu18erTauXXer2p1L1Filtered0"),
    SelectQualities = cms.vint32(),
    saveTags = cms.bool(True)
)


#### hltL3fL1BigORMu18erTauXXer2p1L1f0L2f10QL3Filtered20Q

cms.EDFilter("HLTMuonL3PreFilter",
    BeamSpotTag = cms.InputTag("hltOnlineBeamSpot"),
    CandTag = cms.InputTag("hltIterL3MuonCandidates"),
    InputLinks = cms.InputTag("hltL3MuonsIterL3Links"),
    L1CandTag = cms.InputTag("hltL1fForIterL3L1fBigORMu18erTauXXer2p1L1Filtered0"),
    L1MatchingdR = cms.double(0.3),
    MatchToPreviousCand = cms.bool(True),
    MaxDXYBeamSpot = cms.double(9999.0),
    MaxDr = cms.double(2.0),
    MaxDz = cms.double(9999.0),
    MaxEta = cms.double(2.1),
    MaxNormalizedChi2 = cms.double(9999.0),
    MaxNormalizedChi2_L3FromL1 = cms.double(1e+99),
    MaxPtDifference = cms.double(9999.0),
    MinDXYBeamSpot = cms.double(-1.0),
    MinDr = cms.double(-1.0),
    MinDxySig = cms.double(-1.0),
    MinN = cms.int32(1),
    MinNhits = cms.int32(0),
    MinNmuonHits = cms.int32(0),
    MinPt = cms.double(20.0),
    MinTrackPt = cms.double(0.0),
    NSigmaPt = cms.double(0.0),
    PreviousCandTag = cms.InputTag("hltL2fBigORMu18erTauXXer2p1L1f0L2Filtered10Q"),
    allowedTypeMask = cms.uint32(255),
    cosmicPropagationHypothesis = cms.bool(False),
    fallbackToME1 = cms.bool(False),
    inputMuonCollection = cms.InputTag("hltIterL3Muons"),
    minMuonHits = cms.int32(-1),
    minMuonStations = cms.int32(2),
    minTrkHits = cms.int32(-1),
    propagatorAlong = cms.ESInputTag("","hltESPSteppingHelixPropagatorAlong"),
    propagatorAny = cms.ESInputTag("","SteppingHelixPropagatorAny"),
    propagatorOpposite = cms.ESInputTag("","hltESPSteppingHelixPropagatorOpposite"),
    requireL3MuonTrajectorySeed = cms.bool(False),
    requiredTypeMask = cms.uint32(0),
    saveTags = cms.bool(True),
    trkMuonId = cms.uint32(0),
    useMB2InOverlap = cms.bool(False),
    useSimpleGeometry = cms.bool(True),
    useState = cms.string('atVertex'),
    useStation2 = cms.bool(True),
    useTrack = cms.string('tracker')
)

#### hltL3fBigORMu18erTauXXer2p1L1f0L2f10QL3Filtered20QL3pfecalIsoRhoFiltered

cms.EDFilter("HLTMuonGenericFilter",
    absEtaLowEdges = cms.vdouble(0.0, 1.479),
    candTag = cms.InputTag("hltL3fL1BigORMu18erTauXXer2p1L1f0L2f10QL3Filtered20Q"),
    doRhoCorrection = cms.bool(False),
    effectiveAreas = cms.vdouble(0.0, 0.0),
    energyLowEdges = cms.vdouble(0.0),
    l1EGCand = cms.InputTag("hltIterL3MuonCandidates"),
    lessThan = cms.bool(True),
    ncandcut = cms.int32(1),
    rhoMax = cms.double(99999999.0),
    rhoScale = cms.double(1.0),
    rhoTag = cms.InputTag(""),
    saveTags = cms.bool(True),
    thrOverE2EB = cms.vdouble(-1.0),
    thrOverE2EE = cms.vdouble(-1.0),
    thrOverEEB = cms.vdouble(0.14),
    thrOverEEE = cms.vdouble(0.1),
    thrRegularEB = cms.vdouble(-1.0),
    thrRegularEE = cms.vdouble(-1.0),
    useAbs = cms.bool(False),
    useEt = cms.bool(True),
    varTag = cms.InputTag("hltMuonEcalMFPFClusterIsoForMuons")
)

#### hltL3fBigORMu18erTauXXer2p1L1f0L2f10QL3Filtered20QL3pfhcalIsoRhoFiltered

cms.EDFilter("HLTMuonGenericFilter",
    absEtaLowEdges = cms.vdouble(0.0, 1.479),
    candTag = cms.InputTag("hltL3fBigORMu18erTauXXer2p1L1f0L2f10QL3Filtered20QL3pfecalIsoRhoFiltered"),
    doRhoCorrection = cms.bool(False),
    effectiveAreas = cms.vdouble(0.0, 0.0),
    energyLowEdges = cms.vdouble(0.0),
    l1EGCand = cms.InputTag("hltIterL3MuonCandidates"),
    lessThan = cms.bool(True),
    ncandcut = cms.int32(1),
    rhoMax = cms.double(99999999.0),
    rhoScale = cms.double(1.0),
    rhoTag = cms.InputTag(""),
    saveTags = cms.bool(True),
    thrOverE2EB = cms.vdouble(-1.0),
    thrOverE2EE = cms.vdouble(-1.0),
    thrOverEEB = cms.vdouble(0.177),
    thrOverEEE = cms.vdouble(0.24),
    thrRegularEB = cms.vdouble(-1.0),
    thrRegularEE = cms.vdouble(-1.0),
    useAbs = cms.bool(False),
    useEt = cms.bool(True),
    varTag = cms.InputTag("hltMuonHcalRegPFClusterIsoForMuons")
)

#### hltL3crIsoBigORMu18erTauXXer2p1L1f0L2f10QL3f20QL3trkIsoFiltered

cms.EDFilter("HLTMuonIsoFilter",
    CandTag = cms.InputTag("hltIterL3MuonCandidates"),
    DepTag = cms.VInputTag("hltMuonTkRelIsolationCut0p08Map"),
    IsolatorPSet = cms.PSet(),
    MinN = cms.int32(1),
    PreviousCandTag = cms.InputTag("hltL3fBigORMu18erTauXXer2p1L1f0L2f10QL3Filtered20QL3pfhcalIsoRhoFiltered"),
    saveTags = cms.bool(True)
)

#### hltAK4CaloJetsPFEt5

cms.EDFilter("EtMinCaloJetSelector",
    etMin = cms.double(5.0),
    filter = cms.bool(False),
    src = cms.InputTag("hltAK4CaloJetsPF")
)


#### hltVerticesPFSelector

cms.EDFilter("PrimaryVertexObjectFilter",
    filterParams = cms.PSet(
        maxRho = cms.double(2.0),
        maxZ = cms.double(24.0),
        minNdof = cms.double(4.0),
        pvSrc = cms.InputTag("hltVerticesPF")
    ),
    src = cms.InputTag("hltVerticesPF")
)


#### hltVerticesPFFilter

cms.EDFilter("VertexSelector",
    cut = cms.string('!isFake'),
    filter = cms.bool(True),
    src = cms.InputTag("hltVerticesPFSelector")
)

#### hltPFJetForBtagSelector

cms.EDFilter("HLT1PFJet",
    MaxEta = cms.double(2.6),
    MaxMass = cms.double(-1.0),
    MinE = cms.double(-1.0),
    MinEta = cms.double(-1.0),
    MinMass = cms.double(-1.0),
    MinN = cms.int32(1),
    MinPt = cms.double(30.0),
    inputTag = cms.InputTag("hltAK4PFJetsCorrected"),
    saveTags = cms.bool(True),
    triggerType = cms.int32(86)
)

#### hltSinglePFJets27PNetTauhTagLooseWPMatchMuTauL1

cms.EDFilter("TauTagFilter",
    matchWithSeeds = cms.bool(True),
    matchingdR = cms.double(0.5),
    maxEta = cms.double(2.3),
    minPt = cms.double(27.0),
    nExpected = cms.int32(1),
    saveTags = cms.bool(True),
    seedTypes = cms.vint32(-100),
    seeds = cms.InputTag("hltL1sBigORMu18erTauXXer2p1"),
    selection = cms.string('double t1 = 0.48, t2 = 0.4, t3 = 0.001, t4 = 0, x1 = 27, x2 = 100, x3 = 500, x4 = 1000; if (pt <= x1) return t1; if ((pt > x1) && (pt <= x2)) return (t2 - t1) / (x2 - x1) * (pt - x1) + t1; if ((pt > x2) && (pt <= x3)) return (t3 - t2) / (x3 - x2) * (pt - x2) + t2; if ((pt > x3) && (pt <= x4)) return (t4 - t3) / (x4 - x3) * (pt - x3) + t3; return t4;'),
    tauPtCorr = cms.InputTag("hltParticleNetONNXJetTags","ptcorr"),
    tauTags = cms.InputTag("hltParticleNetDiscriminatorsJetTags","TauhvsAll"),
    taus = cms.InputTag("hltPFJetForBtag"),
    usePtCorr = cms.bool(True)
)

#### hltHpsOverlapFilterIsoMu20LooseMuTauWPPNetPFJet27

cms.EDFilter("HLT2MuonPFJet",
    MaxDelR = cms.double(99999.0),
    MaxDeta = cms.double(-1.0),
    MaxDphi = cms.double(-1.0),
    MaxMinv = cms.double(-1.0),
    MaxPt = cms.double(-1.0),
    MinDelR = cms.double(0.3),
    MinDeta = cms.double(1.0),
    MinDphi = cms.double(0.0),
    MinMinv = cms.double(0.0),
    MinN = cms.int32(1),
    MinPt = cms.double(1.0),
    inputTag1 = cms.InputTag("hltL3crIsoBigORMu18erTauXXer2p1L1f0L2f10QL3f20QL3trkIsoFiltered"),
    inputTag2 = cms.InputTag("hltSinglePFJets27PNetTauhTagLooseWPMatchMuTauL1"),
    originTag1 = cms.VInputTag("hltIterL3MuonCandidates"),
    originTag2 = cms.VInputTag("hltPFJetForBtag"),
    saveTags = cms.bool(True),
    triggerType1 = cms.int32(83),
    triggerType2 = cms.int32(84)
)

#### hltBoolEnd
cms.EDFilter("HLTBool",
    result = cms.bool(True)
)














### Phase 2 Example : HLT_IsoMu20_eta2p1_LooseDeepTauPFTauHPS27_eta2p1_CrossL1

#### HLTBeginSequence

**Definition:**
```python
HLTBeginSequence = cms.Sequence(hltTriggerType+HLTL1Sequence+HLTBeamSpotSequence)
```

**Components:**
- `hltTriggerType` - Trigger type module
hltTriggerType = cms.EDFilter("HLTTriggerTypeFilter",
    SelectedTriggerType = cms.int32(1)
)
- `HLTL1Sequence` - L1 trigger sequence  
HLTL1Sequence = cms.Sequence()
- `HLTBeamSpotSequence` - Beam spot sequence
HLTBeamSpotSequence = cms.Sequence(hltOnlineBeamSpot)

from Configuration.ProcessModifiers.alpaka_cff import alpaka
from ..modules.hltPhase2OnlineBeamSpotDevice_cfi import hltPhase2OnlineBeamSpotDevice
_HLTBeamSpotSequence = cms.Sequence(
     hltOnlineBeamSpot
    +hltPhase2OnlineBeamSpotDevice
)
alpaka.toReplaceWith(HLTBeamSpotSequence, _HLTBeamSpotSequence)

---

#### hltPuppiTauTkMuon4218L1TkFilter
**Type:** PathStatusFilter
**Function:** Filter for pPuppiTauTkMuon42_18 logic

hltPuppiTauTkMuon4218L1TkFilter = cms.EDFilter("PathStatusFilter",
    logicalExpression = cms.string('pPuppiTauTkMuon42_18')
)

---

#### HLTRawToDigiSequence
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/sequences/HLTRawToDigiSequence_cfi.py`

**Definition:**
```python
HLTRawToDigiSequence = cms.Sequence(hltHgcalDigis+HLTEcalDigisSequence+hltHcalDigis+hltMuonCSCDigis+hltMuonDTDigis+hltMuonGEMDigis)
```

**Components:**

##### hltHgcalDigis
**Type:** HGCalRawToDigiFake
**Function:** HGCAL raw data to digi conversion (fake for simulation)
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/modules/hltHgcalDigis_cfi.py`
```python
hltHgcalDigis = cms.EDProducer("HGCalRawToDigiFake",
    bhDigis = cms.InputTag("simHGCalUnsuppressedDigis","HEback"),
    eeDigis = cms.InputTag("simHGCalUnsuppressedDigis","EE"),
    fhDigis = cms.InputTag("simHGCalUnsuppressedDigis","HEfront"),
    mightGet = cms.optional.untracked.vstring
)
```

##### HLTEcalDigisSequence
**Type:** Sequence
**Function:** ECAL digitization sequence
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/sequences/HLTEcalDigisSequence_cfi.py`
```python
HLTEcalDigisSequence = cms.Sequence(hltEcalDigis)
```

###### hltEcalDigis
**Type:** EcalRawToDigi
**Function:** ECAL raw data to digi conversion
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/modules/hltEcalDigis_cfi.py`
```python
hltEcalDigis = cms.EDProducer("EcalRawToDigi",
    DoRegional = cms.bool(False),
    FEDs = cms.vint32(
        601, 602, 603, 604, 605,
        606, 607, 608, 609, 610,
        611, 612, 613, 614, 615,
        616, 617, 618, 619, 620,
        621, 622, 623, 624, 625,
        626, 627, 628, 629, 630,
        631, 632, 633, 634, 635,
        636, 637, 638, 639, 640,
        641, 642, 643, 644, 645,
        646, 647, 648, 649, 650,
        651, 652, 653, 654
    ),
    FedLabel = cms.InputTag("rawDataCollector"),
    forceToKeepFRData = cms.bool(False),
    headerUnpacking = cms.bool(True),
    mightGet = cms.optional.untracked.vstring,
    numbXtalTSamples = cms.int32(10),
    numbTriggerTSamples = cms.int32(1),
    orderedDCCIdList = cms.vint32(
        1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35, 36,
        37, 38, 39, 40, 41, 42, 43, 44, 45,
        46, 47, 48, 49, 50, 51, 52, 53, 54
    ),
    orderedFedList = cms.vint32(
        601, 602, 603, 604, 605,
        606, 607, 608, 609, 610,
        611, 612, 613, 614, 615,
        616, 617, 618, 619, 620,
        621, 622, 623, 624, 625,
        626, 627, 628, 629, 630,
        631, 632, 633, 634, 635,
        636, 637, 638, 639, 640,
        641, 642, 643, 644, 645,
        646, 647, 648, 649, 650,
        651, 652, 653, 654
    ),
    silentMode = cms.untracked.bool(True),
    srpUnpacking = cms.bool(True),
    syncCheck = cms.bool(True),
    tccUnpacking = cms.bool(True)
)
```

##### hltHcalDigis
**Type:** HcalRawToDigi
**Function:** HCAL raw data to digi conversion
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/modules/hltHcalDigis_cfi.py`
```python
hltHcalDigis = cms.EDProducer("HcalRawToDigi",
    ComplainEmptyData = cms.untracked.bool(False),
    ElectronicsMap = cms.string(''),
    ExpectedOrbitMessageTime = cms.untracked.int32(-1),
    FEDs = cms.untracked.vint32(),
    FilterDataQuality = cms.bool(True),
    HcalFirstFED = cms.untracked.int32(700),
    InputLabel = cms.InputTag("rawDataCollector"),
    UnpackCalib = cms.untracked.bool(True),
    UnpackTTP = cms.untracked.bool(True),
    UnpackUMNio = cms.untracked.bool(True),
    UnpackZDC = cms.untracked.bool(True),
    UnpackerMode = cms.untracked.int32(0),
    firstSample = cms.int32(0),
    lastSample = cms.int32(9),
    mightGet = cms.optional.untracked.vstring,
    saveQIE10DataNSamples = cms.untracked.vint32(),
    saveQIE11DataNSamples = cms.untracked.vint32(),
    silent = cms.untracked.bool(True)
)
```

##### hltMuonCSCDigis
**Type:** CSCDCCUnpacker
**Function:** CSC (Cathode Strip Chamber) muon digitization
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/modules/hltMuonCSCDigis_cfi.py`
```python
hltMuonCSCDigis = cms.EDProducer("CSCDCCUnpacker",
    Debug = cms.untracked.bool(False),
    ErrorMask = cms.uint32(0),
    ExaminerMask = cms.uint32(535558134),
    FormatedEventDump = cms.untracked.bool(False),
    InputObjects = cms.InputTag("rawDataCollector"),
    PrintEventNumber = cms.untracked.bool(False),
    SuppressZeroLCT = cms.untracked.bool(True),
    UnpackStatusDigis = cms.bool(False),
    UseExaminer = cms.bool(True),
    UseFormatStatus = cms.bool(True),
    UseSelectiveUnpacking = cms.bool(True),
    VisualFEDInspect = cms.untracked.bool(False),
    VisualFEDShort = cms.untracked.bool(False),
    mightGet = cms.optional.untracked.vstring,
    runDQM = cms.untracked.bool(False),
    useCSCShowers = cms.bool(True),
    useGEMs = cms.bool(True)
)
```

###### hltMuonDTDigis
**Type:** DTuROSRawToDigi
**Function:** DT (Drift Tube) muon digitization
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/modules/hltMuonDTDigis_cfi.py`
```python
hltMuonDTDigis = cms.EDProducer("DTuROSRawToDigi",
    debug = cms.untracked.bool(False),
    inputLabel = cms.InputTag("rawDataCollector")
)
```

##### hltMuonGEMDigis
**Type:** GEMRawToDigiModule
**Function:** GEM (Gas Electron Multiplier) muon digitization
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/modules/hltMuonGEMDigis_cfi.py`
```python
hltMuonGEMDigis = cms.EDProducer("GEMRawToDigiModule",
    InputLabel = cms.InputTag("rawDataCollector"),
    mightGet = cms.optional.untracked.vstring,
    useDBEMap = cms.bool(False)
)
```

---

##### HLTHgcalLocalRecoSequence
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/sequences/HLTHgcalLocalRecoSequence_cfi.py`

**Definition:**
```python
HLTHgcalLocalRecoSequence = cms.Sequence(
    hltHGCalUncalibRecHit+
    hltHGCalRecHit+
    hltHgcalLayerClustersEE+
    hltHgcalLayerClustersHSci+
    hltHgcalLayerClustersHSi+
    hltHgcalMergeLayerClusters)
```

**Components:**
- HGCAL uncalibrated rechits
- HGCAL calibrated rechits  
- Layer clusters for EE, HSci, HSi
- Merged layer clusters
- Alternative heterogeneous version available with SoA producers

---

#### HLTLocalrecoSequence
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/sequences/HLTLocalrecoSequence_cfi.py`

**Definition:**
```python
HLTLocalrecoSequence = cms.Sequence(bunchSpacingProducer+HLTCalolocalrecoSequence)
```

**Components:**
- `bunchSpacingProducer` - Bunch spacing information
- `HLTCalolocalrecoSequence` - Calorimeter local reconstruction

---

#### HLTTrackingSequence
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/sequences/HLTTrackingSequence_cfi.py`

**Definition:**
```python
HLTTrackingSequence = cms.Sequence(HLTItLocalRecoSequence+
                                   HLTOtLocalRecoSequence+
                                   hltTrackerClusterCheck+
                                   HLTPhase2PixelTracksSequence+
                                   hltPhase2PixelVertices+
                                   HLTInitialStepSequence+
                                   HLTHighPtTripletStepSequence+
                                   hltGeneralTracks)
```

**Components:**
- IT (Inner Tracker) and OT (Outer Tracker) local reconstruction
- Tracker cluster check
- Phase 2 pixel tracks and vertices
- Initial step and high-pT triplet step sequences
- General tracks reconstruction

---

#### HLTMuonsSequence
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/sequences/HLTMuonsSequence_cfi.py`

**Definition:**
```python
HLTMuonsSequence = cms.Sequence(
    HLTL2MuonsFromL1TkSequence
    + HLTPhase2L3FromL1TkSequence
    + HLTIter0Phase2L3FromL1TkSequence
    + HLTIter2Phase2L3FromL1TkSequence
    + hltPhase2L3MuonFilter
    + HLTPhase2L3OISequence
    + HLTPhase2L3MuonsSequence
)
```

**Components:**
- L2 muons from L1Tk sequence
- Phase 2 L3 sequences with different iterations
- Outside-in (OI) sequence
- L3 muon filter and final muons sequence

---

#### HLTParticleFlowSequence
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/sequences/HLTParticleFlowSequence_cfi.py`

**Definition:**
```python
HLTParticleFlowSequence = cms.Sequence(HLTParticleFlowClusterSequence+HLTIterTICLSequence+HLTVertexRecoSequence+HLTParticleFlowSuperClusteringSequence+HLTCaloTowersRecSequence+HLTParticleFlowRecoSequence)
```

**Components:**
- Particle flow clustering
- Iterative TICL sequence
- Vertex reconstruction
- Super clustering and calo towers
- Final PF reconstruction

---

#### hltParticleFlowRecHitECALUnseeded
**Type:** PFRecHitProducer
**Function:** ECAL rechits for particle flow
```python
hltParticleFlowRecHitECALUnseeded = cms.EDProducer("PFRecHitProducer",
    navigator = cms.PSet(
        barrel = cms.PSet(

        ),
        endcap = cms.PSet(

        ),
        name = cms.string('PFRecHitECALNavigator')
    ),
    producers = cms.VPSet(
        cms.PSet(
            name = cms.string('PFEBRecHitCreator'),
            qualityTests = cms.VPSet(
                cms.PSet(
                    applySelectionsToAllCrystals = cms.bool(True),
                    name = cms.string('PFRecHitQTestDBThreshold')
                ),
                cms.PSet(
                    cleaningThreshold = cms.double(2.0),
                    name = cms.string('PFRecHitQTestECAL'),
                    skipTTRecoveredHits = cms.bool(True),
                    timingCleaning = cms.bool(True),
                    topologicalCleaning = cms.bool(True)
                )
            ),
            srFlags = cms.InputTag(""),
            src = cms.InputTag("hltEcalRecHit","EcalRecHitsEB")
        ),
        cms.PSet(
            name = cms.string('PFEERecHitCreator'),
            qualityTests = cms.VPSet(
                cms.PSet(
                    applySelectionsToAllCrystals = cms.bool(True),
                    name = cms.string('PFRecHitQTestDBThreshold')
                ),
                cms.PSet(
                    cleaningThreshold = cms.double(2.0),
                    name = cms.string('PFRecHitQTestECAL'),
                    skipTTRecoveredHits = cms.bool(True),
                    timingCleaning = cms.bool(True),
                    topologicalCleaning = cms.bool(True)
                )
            ),
            srFlags = cms.InputTag(""),
            src = cms.InputTag("hltEcalRecHit","EcalRecHitsEE")
        )
    )
)
```

---

#### hltParticleFlowClusterECALUncorrectedUnseeded
**Type:** PFClusterProducer
**Function:** ECAL clustering for particle flow
```python
hltParticleFlowClusterECALUncorrectedUnseeded = cms.EDProducer("PFClusterProducer",
    energyCorrector = cms.PSet(

    ),
    initialClusteringStep = cms.PSet(
        algoName = cms.string('Basic2DGenericTopoClusterizer'),
        thresholdsByDetector = cms.VPSet(
            cms.PSet(
                detector = cms.string('ECAL_BARREL'),
                gatheringThreshold = cms.double(0.08),
                gatheringThresholdPt = cms.double(0.0)
            ),
            cms.PSet(
                detector = cms.string('ECAL_ENDCAP'),
                gatheringThreshold = cms.double(0.3),
                gatheringThresholdPt = cms.double(0.0)
            )
        ),
        useCornerCells = cms.bool(True)
    ),
    pfClusterBuilder = cms.PSet(
        algoName = cms.string('Basic2DGenericPFlowClusterizer'),
        allCellsPositionCalc = cms.PSet(
            algoName = cms.string('Basic2DGenericPFlowPositionCalc'),
            logWeightDenominator = cms.double(0.08),
            minAllowedNormalization = cms.double(1e-09),
            minFractionInCalc = cms.double(1e-09),
            posCalcNCrystals = cms.int32(-1),
            timeResolutionCalcBarrel = cms.PSet(
                constantTerm = cms.double(0.428192),
                constantTermLowE = cms.double(0.0),
                corrTermLowE = cms.double(0.0510871),
                noiseTerm = cms.double(1.10889),
                noiseTermLowE = cms.double(1.31883),
                threshHighE = cms.double(5.0),
                threshLowE = cms.double(0.5)
            ),
            timeResolutionCalcEndcap = cms.PSet(
                constantTerm = cms.double(0.0),
                constantTermLowE = cms.double(0.0),
                corrTermLowE = cms.double(0.0),
                noiseTerm = cms.double(5.72489999999),
                noiseTermLowE = cms.double(6.92683000001),
                threshHighE = cms.double(10.0),
                threshLowE = cms.double(1.0)
            )
        ),
        excludeOtherSeeds = cms.bool(True),
        maxIterations = cms.uint32(50),
        minFracTot = cms.double(1e-20),
        minFractionToKeep = cms.double(1e-07),
        positionCalc = cms.PSet(
            algoName = cms.string('Basic2DGenericPFlowPositionCalc'),
            logWeightDenominator = cms.double(0.08),
            minAllowedNormalization = cms.double(1e-09),
            minFractionInCalc = cms.double(1e-09),
            posCalcNCrystals = cms.int32(9),
            timeResolutionCalcBarrel = cms.PSet(
                constantTerm = cms.double(0.428192),
                constantTermLowE = cms.double(0.0),
                corrTermLowE = cms.double(0.0510871),
                noiseTerm = cms.double(1.10889),
                noiseTermLowE = cms.double(1.31883),
                threshHighE = cms.double(5.0),
                threshLowE = cms.double(0.5)
            ),
            timeResolutionCalcEndcap = cms.PSet(
                constantTerm = cms.double(0.0),
                constantTermLowE = cms.double(0.0),
                corrTermLowE = cms.double(0.0),
                noiseTerm = cms.double(5.72489999999),
                noiseTermLowE = cms.double(6.92683000001),
                threshHighE = cms.double(10.0),
                threshLowE = cms.double(1.0)
            )
        ),
        positionCalcForConvergence = cms.PSet(
            T0_EB = cms.double(7.4),
            T0_EE = cms.double(3.1),
            T0_ES = cms.double(1.2),
            W0 = cms.double(4.2),
            X0 = cms.double(0.89),
            algoName = cms.string('ECAL2DPositionCalcWithDepthCorr'),
            minAllowedNormalization = cms.double(0.0),
            minFractionInCalc = cms.double(0.0)
        ),
        recHitEnergyNorms = cms.VPSet(
            cms.PSet(
                detector = cms.string('ECAL_BARREL'),
                recHitEnergyNorm = cms.double(0.08)
            ),
            cms.PSet(
                detector = cms.string('ECAL_ENDCAP'),
                recHitEnergyNorm = cms.double(0.3)
            )
        ),
        showerSigma = cms.double(1.5),
        stoppingTolerance = cms.double(1e-08)
    ),
    positionReCalc = cms.PSet(
        T0_EB = cms.double(7.4),
        T0_EE = cms.double(3.1),
        T0_ES = cms.double(1.2),
        W0 = cms.double(4.2),
        X0 = cms.double(0.89),
        algoName = cms.string('ECAL2DPositionCalcWithDepthCorr'),
        minAllowedNormalization = cms.double(0.0),
        minFractionInCalc = cms.double(0.0)
    ),
    recHitCleaners = cms.VPSet(),
    recHitsSource = cms.InputTag("hltParticleFlowRecHitECALUnseeded"),
    seedCleaners = cms.VPSet(cms.PSet(
        RecHitFlagsToBeExcluded = cms.vstring(),
        algoName = cms.string('FlagsCleanerECAL')
    )),
    seedFinder = cms.PSet(
        algoName = cms.string('LocalMaximumSeedFinder'),
        nNeighbours = cms.int32(8),
        thresholdsByDetector = cms.VPSet(
            cms.PSet(
                detector = cms.string('ECAL_ENDCAP'),
                seedingThreshold = cms.double(0.6),
                seedingThresholdPt = cms.double(0.15)
            ),
            cms.PSet(
                detector = cms.string('ECAL_BARREL'),
                seedingThreshold = cms.double(0.23),
                seedingThresholdPt = cms.double(0.0)
            )
        )
    ),
    usePFThresholdsFromDB = cms.bool(False)
)
```

---

#### hltParticleFlowClusterECALUnseeded
**Type:** CorrectedECALPFClusterProducer
**Function:** Energy-corrected ECAL PF clusters
```python
hltParticleFlowClusterECALUnseeded = cms.EDProducer("CorrectedECALPFClusterProducer",
    inputECAL = cms.InputTag("hltParticleFlowClusterECALUncorrectedUnseeded"),
    inputPS = cms.InputTag("hltParticleFlowClusterPSUnseeded"),
    minimumPSEnergy = cms.double(0.0),
    skipPS = cms.bool(False)
)
```

---

#### hltFixedGridRhoFastjetAllCaloForEGamma
**Type:** FixedGridRhoProducer
**Function:** Energy density calculation for EGamma objects
```python
hltFixedGridRhoFastjetAllCaloForEGamma = cms.EDProducer("FixedGridRhoProducerFastjetFromRecHit",
    bins = cms.int32(5),
    maxRapidity = cms.double(3.0),
    minRapidity = cms.double(-3.0),
    recHits = cms.InputTag("hltEcalRecHit","EcalRecHitsEB")
)
```

---

#### hltPhase2L3MuonCandidates
**Type:** L3MuonCandidateProducer
**Function:** Creates L3 muon candidates from muons
```python
hltPhase2L3MuonCandidates = cms.EDProducer("L3MuonCandidateProducerFromMuons",
    InputObjects = cms.InputTag("hltPhase2L3Muons")
)
```

---

#### hltPhase2L3MuonsEcalIsodR0p3dRVeto0p000
**Type:** ECAL PF cluster isolation producer
**Function:** ECAL isolation with dR=0.3, dRVeto=0.000
```python
hltPhase2L3MuonsEcalIsodR0p3dRVeto0p000 = cms.EDProducer("MuonHLTEcalPFClusterIsolationProducer",
    absEtaLowEdges = cms.vdouble(0.0, 1.479),
    doRhoCorrection = cms.bool(False),
    drMax = cms.double(0.3),
    drVetoBarrel = cms.double(0.0),
    drVetoEndcap = cms.double(0.0),
    effectiveAreas = cms.vdouble(0.2, 0.2),
    energyEndcap = cms.double(0.0),
    etaStripBarrel = cms.double(0.0),
    etaStripEndcap = cms.double(0.0),
    pfClusterProducer = cms.InputTag("hltParticleFlowClusterECALUnseeded"),
    recoCandidateProducer = cms.InputTag("hltPhase2L3MuonCandidates"),
    rhoMax = cms.double(99999999.0),
    rhoProducer = cms.InputTag("hltFixedGridRhoFastjetAllCaloForEGamma"),
    rhoScale = cms.double(1.0)
)
```

---

#### hltPhase2L3MuonsHcalIsodR0p3dRVeto0p000
**Type:** HCAL PF cluster isolation producer
**Function:** HCAL isolation with dR=0.3, dRVeto=0.000
```python
hltPhase2L3MuonsHcalIsodR0p3dRVeto0p000 = cms.EDProducer("MuonHLTHcalPFClusterIsolationProducer",
    absEtaLowEdges = cms.vdouble(0.0, 1.479),
    doRhoCorrection = cms.bool(False),
    drMax = cms.double(0.3),
    drVetoBarrel = cms.double(0.0),
    drVetoEndcap = cms.double(0.0),
    effectiveAreas = cms.vdouble(0.2, 0.25),
    energyBarrel = cms.double(0.0),
    energyEndcap = cms.double(0.0),
    etaStripBarrel = cms.double(0.0),
    etaStripEndcap = cms.double(0.0),
    pfClusterProducer = cms.InputTag("hltParticleFlowClusterHCAL"),
    recoCandidateProducer = cms.InputTag("hltPhase2L3MuonCandidates"),
    rhoMax = cms.double(99999999.0),
    rhoProducer = cms.InputTag("hltFixedGridRhoFastjetAllCaloForEGamma"),
    rhoScale = cms.double(1.0),
    useHF = cms.bool(False)
)
```

---

#### hltPhase2L3MuonsHgcalLCIsodR0p2dRVetoEM0p00dRVetoHad0p02minEEM0p00minEHad0p00
**Type:** HGCAL layer cluster isolation producer
**Function:** HGCAL isolation with dR=0.2, EM veto=0.00, Had veto=0.02, min energy thresholds
```python
hltPhase2L3MuonsHgcalLCIsodR0p2dRVetoEM0p00dRVetoHad0p02minEEM0p00minEHad0p00 = cms.EDProducer("MuonHLTHGCalLayerClusterIsolationProducer",
    drMax = cms.double(0.2),
    drVetoEM = cms.double(0.0),
    drVetoHad = cms.double(0.02),
    effectiveAreas = cms.vdouble(0.0, 0.0),
    layerClusterProducer = cms.InputTag("hltHgcalMergeLayerClusters"),
    minEnergyEM = cms.double(0.0),
    minEnergyHad = cms.double(0.0),
    recoCandidateProducer = cms.InputTag("hltPhase2L3MuonCandidates"),
    rhoMax = cms.double(99999999.0),
    rhoProducer = cms.InputTag("hltFixedGridRhoFastjetAllCaloForEGamma"),
    rhoScale = cms.double(1.0)
)
```

---

#### hltL3fL1TkSingleMu18Filtered20
**Type:** HLTMuonTrkL1TkMuFilter
**Function:** Filter for muons with pT > 20 GeV
```python
hltL3fL1TkSingleMu18Filtered20 = cms.EDFilter( "HLTMuonTrkL1TkMuFilter",
    inputCandCollection = cms.InputTag( "hltPhase2L3MuonCandidates" ),
    inputMuonCollection = cms.InputTag( "hltPhase2L3Muons" ),
    minTrkHits = cms.int32( -1 ),
    minMuonHits = cms.int32( -1 ),
    minMuonStations = cms.int32( 1 ),
    maxAbsEta = cms.double( 2.1 ),
    minPt = cms.double( 20.0 ),
    minN = cms.uint32( 1 ),
    saveTags = cms.bool( True )
)
```

---

#### hltL3crIsoL1TkSingleMu22EcalIso0p41
**Type:** ECAL isolation filter
**Function:** ECAL isolation < 0.41
```python
hltL3crIsoL1TkSingleMu22EcalIso0p41 = cms.EDFilter("HLTMuonGenericFilter",
    absEtaLowEdges = cms.vdouble(0.0, 1.479),
    candTag = cms.InputTag("hltL3fL1TkSingleMu18Filtered20"),
    doRhoCorrection = cms.bool(False),
    effectiveAreas = cms.vdouble(0.0, 0.0),
    energyLowEdges = cms.vdouble(0.0),
    l1EGCand = cms.InputTag("hltPhase2L3MuonCandidates"),
    lessThan = cms.bool(True),
    ncandcut = cms.int32(1),
    rhoMax = cms.double(99999999.0),
    rhoScale = cms.double(1.0),
    rhoTag = cms.InputTag(""),
    saveTags = cms.bool(True),
    thrOverE2EB = cms.vdouble(-1.0),
    thrOverE2EE = cms.vdouble(-1.0),
    thrOverEEB = cms.vdouble(0.41),
    thrOverEEE = cms.vdouble(0.41),
    thrRegularEB = cms.vdouble(-1.0),
    thrRegularEE = cms.vdouble(-1.0),
    useAbs = cms.bool(False),
    useEt = cms.bool(True),
    varTag = cms.InputTag("hltPhase2L3MuonsEcalIsodR0p3dRVeto0p000")
)
```

---

#### hltL3crIsoL1TkSingleMu22HcalIso0p40
**Type:** HCAL isolation filter
**Function:** HCAL isolation < 0.40
```python
hltL3crIsoL1TkSingleMu22HcalIso0p40 = cms.EDFilter("HLTMuonGenericFilter",
    absEtaLowEdges = cms.vdouble(0.0, 1.479),
    candTag = cms.InputTag("hltL3crIsoL1TkSingleMu22EcalIso0p41"),
    doRhoCorrection = cms.bool(False),
    effectiveAreas = cms.vdouble(0.0, 0.0),
    energyLowEdges = cms.vdouble(0.0),
    l1EGCand = cms.InputTag("hltPhase2L3MuonCandidates"),
    lessThan = cms.bool(True),
    ncandcut = cms.int32(1),
    rhoMax = cms.double(99999999.0),
    rhoScale = cms.double(1.0),
    rhoTag = cms.InputTag(""),
    saveTags = cms.bool(True),
    thrOverE2EB = cms.vdouble(-1.0),
    thrOverE2EE = cms.vdouble(-1.0),
    thrOverEEB = cms.vdouble(0.4),
    thrOverEEE = cms.vdouble(0.4),
    thrRegularEB = cms.vdouble(-1.0),
    thrRegularEE = cms.vdouble(-1.0),
    useAbs = cms.bool(False),
    useEt = cms.bool(True),
    varTag = cms.InputTag("hltPhase2L3MuonsHcalIsodR0p3dRVeto0p000")
)
```

---

#### hltL3crIsoL1TkSingleMu22HgcalIso4p70
**Type:** HGCAL isolation filter
**Function:** HGCAL isolation < 4.70
```python
hltL3crIsoL1TkSingleMu22HgcalIso4p70 = cms.EDFilter("HLTMuonGenericFilter",
    absEtaLowEdges = cms.vdouble(0.0, 1.479),
    candTag = cms.InputTag("hltL3crIsoL1TkSingleMu22HcalIso0p40"),
    doRhoCorrection = cms.bool(False),
    effectiveAreas = cms.vdouble(0.0, 0.0),
    energyLowEdges = cms.vdouble(0.0),
    l1EGCand = cms.InputTag("hltPhase2L3MuonCandidates"),
    lessThan = cms.bool(True),
    ncandcut = cms.int32(1),
    rhoMax = cms.double(99999999.0),
    rhoScale = cms.double(1.0),
    rhoTag = cms.InputTag(""),
    saveTags = cms.bool(True),
    thrOverE2EB = cms.vdouble(-1.0),
    thrOverE2EE = cms.vdouble(-1.0),
    thrOverEEB = cms.vdouble(4.7),
    thrOverEEE = cms.vdouble(4.7),
    thrRegularEB = cms.vdouble(-1.0),
    thrRegularEE = cms.vdouble(-1.0),
    useAbs = cms.bool(False),
    useEt = cms.bool(True),
    varTag = cms.InputTag("hltPhase2L3MuonsHgcalLCIsodR0p2dRVetoEM0p00dRVetoHad0p02minEEM0p00minEHad0p00")
)
```

---

#### HLTPhase2L3MuonGeneralTracksSequence
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/sequences/HLTPhase2L3MuonGeneralTracksSequence_cfi.py`

**Definition:**
```python
#### HLTPhase2L3MuonGeneralTracksSequence
**File:** `/data6/Users/anchihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/sequences/HLTPhase2L3MuonGeneralTracksSequence_cfi.py`
This sequence defines the reconstruction of general tracks for Phase 2 L3 muons. It combines various steps of track reconstruction, from cluster checking to final track selection.

HLTPhase2L3MuonGeneralTracksSequence = cms.Sequence(
    hltTrackerClusterCheck
    +hltPhase2L3MuonPixelTracksAndHighPtTripletTrackingRegions
    +hltPhase2L3MuonPixelTracksSeedLayers
    +hltPhase2L3MuonPixelTracksHitDoublets
    +hltPhase2L3MuonPixelTracksHitQuadruplets
    +hltPhase2L3MuonPixelTracks
    +hltPhase2L3MuonPixelVertices
    +hltPhase2L3MuonInitialStepSeeds
    +hltPhase2L3MuonInitialStepTrackCandidates
    +hltPhase2L3MuonInitialStepTracks
    +hltPhase2L3MuonInitialStepTrackCutClassifier
    +hltPhase2L3MuonInitialStepTracksSelectionHighPurity
    +hltPhase2L3MuonHighPtTripletStepClusters
    +hltPhase2L3MuonHighPtTripletStepSeedLayers
    +hltPhase2L3MuonHighPtTripletStepHitDoublets
    +hltPhase2L3MuonHighPtTripletStepHitTriplets
    +hltPhase2L3MuonHighPtTripletStepSeeds
    +hltPhase2L3MuonHighPtTripletStepTrackCandidates
    +hltPhase2L3MuonHighPtTripletStepTracks
    +hltPhase2L3MuonHighPtTripletStepTrackCutClassifier
    +hltPhase2L3MuonHighPtTripletStepTracksSelectionHighPurity
    +hltPhase2L3MuonGeneralTracks
)

---

### Module Definitions

##### hltTrackerClusterCheck
```python
import FWCore.ParameterSet.Config as cms

hltTrackerClusterCheck = cms.EDProducer("ClusterCheckerEDProducer",
    ClusterCollectionLabel = cms.InputTag("siStripClusters"),
    MaxNumberOfPixelClusters = cms.uint32(40000),
    MaxNumberOfStripClusters = cms.uint32(400000),
    PixelClusterCollectionLabel = cms.InputTag("hltSiPixelClusters"),
    cut = cms.string('strip < 400000 && pixel < 40000 && (strip < 50000 + 10*pixel) && (pixel < 5000 + 0.1*strip)'),
    doClusterCheck = cms.bool(False),
    mightGet = cms.optional.untracked.vstring,
    silentClusterCheck = cms.untracked.bool(False)
)
```

##### hltPhase2L3MuonPixelTracksAndHighPtTripletTrackingRegions
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonPixelTracksAndHighPtTripletTrackingRegions = cms.EDProducer("CandidateSeededTrackingRegionsEDProducer",
    RegionPSet = cms.PSet(
        beamSpot = cms.InputTag("hltOnlineBeamSpot"),
        deltaEta = cms.double(0.4),
        deltaPhi = cms.double(0.4),
        input = cms.InputTag("hltPhase2L3MuonCandidates"),
        maxNRegions = cms.int32(10000),
        maxNVertices = cms.int32(1),
        measurementTrackerName = cms.InputTag(""),
        mode = cms.string('BeamSpotSigma'),
        nSigmaZBeamSpot = cms.double(4.0),
        nSigmaZVertex = cms.double(3.0),
        originRadius = cms.double(0.2),
        precise = cms.bool(True),
        ptMin = cms.double(0.9),
        searchOpt = cms.bool(False),
        vertexCollection = cms.InputTag("notUsed"),
        whereToUseMeasurementTracker = cms.string('Never'),
        zErrorBeamSpot = cms.double(24.2),
        zErrorVetex = cms.double(0.2)
    )
)
```

##### hltPhase2L3MuonPixelTracksSeedLayers
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonPixelTracksSeedLayers = cms.EDProducer("SeedingLayersEDProducer",
    BPix = cms.PSet(
        HitProducer = cms.string('hltSiPixelRecHits'),
        TTRHBuilder = cms.string('WithTrackAngle')
    ),
    FPix = cms.PSet(
        HitProducer = cms.string('hltSiPixelRecHits'),
        TTRHBuilder = cms.string('WithTrackAngle')
    ),
    MTEC = cms.PSet(

    ),
    MTIB = cms.PSet(

    ),
    MTID = cms.PSet(

    ),
    MTOB = cms.PSet(

    ),
    TEC = cms.PSet(

    ),
    TIB = cms.PSet(

    ),
    TID = cms.PSet(

    ),
    TOB = cms.PSet(

    ),
    layerList = cms.vstring(
        'BPix1+BPix2+BPix3+BPix4',
        'BPix1+BPix2+BPix3+FPix1_pos',
        'BPix1+BPix2+BPix3+FPix1_neg',
        'BPix1+BPix2+FPix1_pos+FPix2_pos',
        'BPix1+BPix2+FPix1_neg+FPix2_neg',
        'BPix1+FPix1_pos+FPix2_pos+FPix3_pos',
        'BPix1+FPix1_neg+FPix2_neg+FPix3_neg',
        'FPix1_pos+FPix2_pos+FPix3_pos+FPix4_pos',
        'FPix1_neg+FPix2_neg+FPix3_neg+FPix4_neg',
        'FPix2_pos+FPix3_pos+FPix4_pos+FPix5_pos',
        'FPix2_neg+FPix3_neg+FPix4_neg+FPix5_neg',
        'FPix3_pos+FPix4_pos+FPix5_pos+FPix6_pos',
        'FPix3_neg+FPix4_neg+FPix5_neg+FPix6_neg',
        'FPix4_pos+FPix5_pos+FPix6_pos+FPix7_pos',
        'FPix4_neg+FPix5_neg+FPix6_neg+FPix7_neg',
        'FPix5_pos+FPix6_pos+FPix7_pos+FPix8_pos',
        'FPix5_neg+FPix6_neg+FPix7_neg+FPix8_neg'
    ),
    mightGet = cms.optional.untracked.vstring
)
```

##### hltPhase2L3MuonPixelTracksHitDoublets
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonPixelTracksHitDoublets = cms.EDProducer("HitPairEDProducer",
    clusterCheck = cms.InputTag("hltTrackerClusterCheck"),
    layerPairs = cms.vuint32(0, 1, 2),
    maxElement = cms.uint32(5000000),
    maxElementTotal = cms.uint32(50000000),
    mightGet = cms.optional.untracked.vstring,
    produceIntermediateHitDoublets = cms.bool(True),
    produceSeedingHitSets = cms.bool(False),
    seedingLayers = cms.InputTag("hltPhase2L3MuonPixelTracksSeedLayers"),
    trackingRegions = cms.InputTag("hltPhase2L3MuonPixelTracksAndHighPtTripletTrackingRegions"),
    trackingRegionsSeedingLayers = cms.InputTag("")
)
```

##### hltPhase2L3MuonPixelTracksHitQuadruplets
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonPixelTracksHitQuadruplets = cms.EDProducer("CAHitQuadrupletEDProducer",
    CAHardPtCut = cms.double(0),
    CAOnlyOneLastHitPerLayerFilter = cms.optional.bool,
    CAPhiCut = cms.double(0.2),
    CAThetaCut = cms.double(0.0012),
    SeedComparitorPSet = cms.PSet(
        ComponentName = cms.string('LowPtClusterShapeSeedComparitor'),
        clusterShapeCacheSrc = cms.InputTag("hltSiPixelClusterShapeCache"),
        clusterShapeHitFilter = cms.string('ClusterShapeHitFilter')
    ),
    doublets = cms.InputTag("hltPhase2L3MuonPixelTracksHitDoublets"),
    extraHitRPhitolerance = cms.double(0.032),
    fitFastCircle = cms.bool(True),
    fitFastCircleChi2Cut = cms.bool(True),
    maxChi2 = cms.PSet(
        enabled = cms.bool(True),
        pt1 = cms.double(0.7),
        pt2 = cms.double(2.0),
        value1 = cms.double(200.0),
        value2 = cms.double(50.0)
    ),
    mightGet = cms.optional.untracked.vstring,
    useBendingCorrection = cms.bool(True)
)
```

##### hltPhase2L3MuonPixelTracks
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonPixelTracks = cms.EDProducer("PixelTrackProducer",
    Cleaner = cms.string('hltPhase2L3MuonPixelTrackCleanerBySharedHits'),
    Filter = cms.InputTag("hltPhase2PixelTrackFilterByKinematics"),
    Fitter = cms.InputTag("hltPhase2PixelFitterByHelixProjections"),
    SeedingHitSets = cms.InputTag("hltPhase2L3MuonPixelTracksHitQuadruplets"),
    mightGet = cms.optional.untracked.vstring,
    passLabel = cms.string('hltPhase2L3MuonPixelTracks')
)
```

##### hltPhase2L3MuonPixelVertices
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonPixelVertices = cms.EDProducer("PixelVertexProducer",
    Finder = cms.string('DivisiveVertexFinder'),
    Method2 = cms.bool(True),
    NTrkMin = cms.int32(2),
    PVcomparer = cms.PSet(
        refToPSet_ = cms.string('hltPhase2L3MuonPSetPvClusterComparerForIT')
    ),
    PtMin = cms.double(1.0),
    TrackCollection = cms.InputTag("hltPhase2L3MuonPixelTracks"),
    UseError = cms.bool(True),
    Verbosity = cms.int32(0),
    WtAverage = cms.bool(True),
    ZOffset = cms.double(5.0),
    ZSeparation = cms.double(0.005),
    beamSpot = cms.InputTag("hltOnlineBeamSpot")
)
```

##### hltPhase2L3MuonInitialStepSeeds
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonInitialStepSeeds = cms.EDProducer("SeedGeneratorFromProtoTracksEDProducer",
    InputCollection = cms.InputTag("hltPhase2L3MuonPixelTracks"),
    InputVertexCollection = cms.InputTag(""),
    SeedCreatorPSet = cms.PSet(
        refToPSet_ = cms.string('hltPhase2L3MuonSeedFromProtoTracks')
    ),
    TTRHBuilder = cms.string('WithTrackAngle'),
    originHalfLength = cms.double(0.3),
    originRadius = cms.double(0.1),
    useEventsWithNoVertex = cms.bool(True),
    usePV = cms.bool(True),
    useProtoTrackKinematics = cms.bool(False)
)
```

##### hltPhase2L3MuonInitialStepTrackCandidates
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonInitialStepTrackCandidates = cms.EDProducer("CkfTrackCandidateMaker",
    MeasurementTrackerEvent = cms.InputTag("hltMeasurementTrackerEvent"),
    NavigationSchool = cms.string('SimpleNavigationSchool'),
    RedundantSeedCleaner = cms.string('CachingSeedCleanerBySharedInput'),
    TrajectoryBuilderPSet = cms.PSet(
        refToPSet_ = cms.string('hltPhase2L3MuonInitialStepTrajectoryBuilder')
    ),
    TrajectoryCleaner = cms.string('TrajectoryCleanerBySharedHits'),
    TransientInitialStateEstimatorParameters = cms.PSet(
        numberMeasurementsForFit = cms.int32(4),
        propagatorAlongTISE = cms.string('PropagatorWithMaterial'),
        propagatorOppositeTISE = cms.string('PropagatorWithMaterialOpposite')
    ),
    cleanTrajectoryAfterInOut = cms.bool(True),
    doSeedingRegionRebuilding = cms.bool(True),
    maxNSeeds = cms.uint32(100000),
    maxSeedsBeforeCleaning = cms.uint32(1000),
    numHitsForSeedCleaner = cms.int32(50),
    onlyPixelHitsForSeedCleaner = cms.bool(True),
    reverseTrajectories = cms.bool(False),
    src = cms.InputTag("hltPhase2L3MuonInitialStepSeeds"),
    useHitsSplitting = cms.bool(False)
)
```

##### hltPhase2L3MuonInitialStepTracks
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonInitialStepTracks = cms.EDProducer("TrackProducer",
    AlgorithmName = cms.string('initialStep'),
    Fitter = cms.string('FlexibleKFFittingSmoother'),
    GeometricInnerState = cms.bool(False),
    MeasurementTracker = cms.string(''),
    MeasurementTrackerEvent = cms.InputTag("hltMeasurementTrackerEvent"),
    NavigationSchool = cms.string('SimpleNavigationSchool'),
    Propagator = cms.string('RungeKuttaTrackerPropagator'),
    SimpleMagneticField = cms.string(''),
    TTRHBuilder = cms.string('WithTrackAngle'),
    TrajectoryInEvent = cms.bool(False),
    beamSpot = cms.InputTag("hltOnlineBeamSpot"),
    clusterRemovalInfo = cms.InputTag(""),
    src = cms.InputTag("hltPhase2L3MuonInitialStepTrackCandidates"),
    useHitsSplitting = cms.bool(False),
    useSimpleMF = cms.bool(False)
)
```

##### hltPhase2L3MuonInitialStepTrackCutClassifier
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonInitialStepTrackCutClassifier = cms.EDProducer("TrackCutClassifier",
    beamspot = cms.InputTag("hltOnlineBeamSpot"),
    ignoreVertices = cms.bool(False),
    mva = cms.PSet(
        dr_par = cms.PSet(
            d0err = cms.vdouble(0.003, 0.003, 0.003),
            d0err_par = cms.vdouble(0.001, 0.001, 0.001),
            dr_exp = cms.vint32(4, 4, 4),
            dr_par1 = cms.vdouble(0.8, 0.7, 0.6),
            dr_par2 = cms.vdouble(0.6, 0.5, 0.45)
        ),
        dz_par = cms.PSet(
            dz_exp = cms.vint32(4, 4, 4),
            dz_par1 = cms.vdouble(0.9, 0.8, 0.7),
            dz_par2 = cms.vdouble(0.8, 0.7, 0.55)
        ),
        maxChi2 = cms.vdouble(9999.0, 25.0, 16.0),
        maxChi2n = cms.vdouble(2.0, 1.4, 1.2),
        maxDr = cms.vdouble(0.5, 0.03, 3.40282346639e+38),
        maxDz = cms.vdouble(0.5, 0.2, 3.40282346639e+38),
        maxDzWrtBS = cms.vdouble(3.40282346639e+38, 24.0, 15.0),
        maxLostLayers = cms.vint32(3, 2, 2),
        min3DLayers = cms.vint32(3, 3, 3),
        minLayers = cms.vint32(3, 3, 3),
        minNVtxTrk = cms.int32(3),
        minNdof = cms.vdouble(1e-05, 1e-05, 1e-05),
        minPixelHits = cms.vint32(0, 0, 3)
    ),
    qualityCuts = cms.vdouble(-0.7, 0.1, 0.7),
    src = cms.InputTag("hltPhase2L3MuonInitialStepTracks"),
    vertices = cms.InputTag("hltPhase2L3MuonPixelVertices")
)
```

##### hltPhase2L3MuonInitialStepTracksSelectionHighPurity
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonInitialStepTracksSelectionHighPurity = cms.EDProducer("TrackCollectionFilterCloner",
    copyExtras = cms.untracked.bool(True),
    copyTrajectories = cms.untracked.bool(False),
    minQuality = cms.string('highPurity'),
    originalMVAVals = cms.InputTag("hltPhase2L3MuonInitialStepTrackCutClassifier","MVAValues"),
    originalQualVals = cms.InputTag("hltPhase2L3MuonInitialStepTrackCutClassifier","QualityMasks"),
    originalSource = cms.InputTag("hltPhase2L3MuonInitialStepTracks")
)
```

##### hltPhase2L3MuonHighPtTripletStepClusters
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonHighPtTripletStepClusters = cms.EDProducer("TrackClusterRemoverPhase2",
    TrackQuality = cms.string('highPurity'),
    maxChi2 = cms.double(9.0),
    mightGet = cms.optional.untracked.vstring,
    minNumberOfLayersWithMeasBeforeFiltering = cms.int32(0),
    oldClusterRemovalInfo = cms.InputTag(""),
    overrideTrkQuals = cms.InputTag(""),
    phase2OTClusters = cms.InputTag("hltSiPhase2Clusters"),
    phase2pixelClusters = cms.InputTag("hltSiPixelClusters"),
    trackClassifier = cms.InputTag("","QualityMasks"),
    trajectories = cms.InputTag("hltPhase2L3MuonInitialStepTracksSelectionHighPurity")
)
```

##### hltPhase2L3MuonHighPtTripletStepSeedLayers
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonHighPtTripletStepSeedLayers = cms.EDProducer("SeedingLayersEDProducer",
    BPix = cms.PSet(
        HitProducer = cms.string('hltSiPixelRecHits'),
        TTRHBuilder = cms.string('WithTrackAngle'),
        skipClusters = cms.InputTag("hltPhase2L3MuonHighPtTripletStepClusters")
    ),
    FPix = cms.PSet(
        HitProducer = cms.string('hltSiPixelRecHits'),
        TTRHBuilder = cms.string('WithTrackAngle'),
        skipClusters = cms.InputTag("hltPhase2L3MuonHighPtTripletStepClusters")
    ),
    MTEC = cms.PSet(

    ),
    MTIB = cms.PSet(

    ),
    MTID = cms.PSet(

    ),
    MTOB = cms.PSet(

    ),
    TEC = cms.PSet(

    ),
    TIB = cms.PSet(

    ),
    TID = cms.PSet(

    ),
    TOB = cms.PSet(

    ),
    layerList = cms.vstring(
        'BPix1+BPix2+BPix3',
        'BPix2+BPix3+BPix4',
        'BPix1+BPix3+BPix4',
        'BPix1+BPix2+BPix4',
        'BPix2+BPix3+FPix1_pos',
        'BPix2+BPix3+FPix1_neg',
        'BPix1+BPix2+FPix1_pos',
        'BPix1+BPix2+FPix1_neg',
        'BPix2+FPix1_pos+FPix2_pos',
        'BPix2+FPix1_neg+FPix2_neg',
        'BPix1+FPix1_pos+FPix2_pos',
        'BPix1+FPix1_neg+FPix2_neg',
        'FPix1_pos+FPix2_pos+FPix3_pos',
        'FPix1_neg+FPix2_neg+FPix3_neg',
        'BPix1+FPix2_pos+FPix3_pos',
        'BPix1+FPix2_neg+FPix3_neg',
        'FPix2_pos+FPix3_pos+FPix4_pos',
        'FPix2_neg+FPix3_neg+FPix4_neg',
        'FPix3_pos+FPix4_pos+FPix5_pos',
        'FPix3_neg+FPix4_neg+FPix5_neg',
        'FPix4_pos+FPix5_pos+FPix6_pos',
        'FPix4_neg+FPix5_neg+FPix6_neg',
        'FPix5_pos+FPix6_pos+FPix7_pos',
        'FPix5_neg+FPix6_neg+FPix7_neg',
        'FPix6_pos+FPix7_pos+FPix8_pos',
        'FPix6_neg+FPix7_neg+FPix8_neg'
    ),
    mightGet = cms.optional.untracked.vstring
)
```

##### hltPhase2L3MuonHighPtTripletStepHitDoublets
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonHighPtTripletStepHitDoublets = cms.EDProducer("HitPairEDProducer",
    clusterCheck = cms.InputTag("hltTrackerClusterCheck"),
    layerPairs = cms.vuint32(0, 1),
    maxElement = cms.uint32(50000000),
    maxElementTotal = cms.uint32(50000000),
    mightGet = cms.optional.untracked.vstring,
    produceIntermediateHitDoublets = cms.bool(True),
    produceSeedingHitSets = cms.bool(False),
    seedingLayers = cms.InputTag("hltPhase2L3MuonHighPtTripletStepSeedLayers"),
    trackingRegions = cms.InputTag("hltPhase2L3MuonPixelTracksAndHighPtTripletTrackingRegions"),
    trackingRegionsSeedingLayers = cms.InputTag("")
)
```

##### hltPhase2L3MuonHighPtTripletStepHitTriplets
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonHighPtTripletStepHitTriplets = cms.EDProducer("CAHitTripletEDProducer",
    CAHardPtCut = cms.double(0.5),
    CAPhiCut = cms.double(0.06),
    CAThetaCut = cms.double(0.003),
    SeedComparitorPSet = cms.PSet(
        ComponentName = cms.string('LowPtClusterShapeSeedComparitor'),
        clusterShapeCacheSrc = cms.InputTag("hltSiPixelClusterShapeCache"),
        clusterShapeHitFilter = cms.string('ClusterShapeHitFilter')
    ),
    doublets = cms.InputTag("hltPhase2L3MuonHighPtTripletStepHitDoublets"),
    extraHitRPhitolerance = cms.double(0.032),
    maxChi2 = cms.PSet(
        enabled = cms.bool(True),
        pt1 = cms.double(0.8),
        pt2 = cms.double(8),
        value1 = cms.double(100),
        value2 = cms.double(6)
    ),
    mightGet = cms.optional.untracked.vstring,
    useBendingCorrection = cms.bool(True)
)
```

##### hltPhase2L3MuonHighPtTripletStepSeeds
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonHighPtTripletStepSeeds = cms.EDProducer("SeedCreatorFromRegionConsecutiveHitsEDProducer",
    MinOneOverPtError = cms.double(1),
    OriginTransverseErrorMultiplier = cms.double(1),
    SeedComparitorPSet = cms.PSet(
        ComponentName = cms.string('none')
    ),
    SeedMomentumForBOFF = cms.double(5),
    TTRHBuilder = cms.string('WithTrackAngle'),
    forceKinematicWithRegionDirection = cms.bool(False),
    magneticField = cms.string(''),
    propagator = cms.string('PropagatorWithMaterial'),
    seedingHitSets = cms.InputTag("hltPhase2L3MuonHighPtTripletStepHitTriplets")
)
```

##### hltPhase2L3MuonHighPtTripletStepTrackCandidates
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonHighPtTripletStepTrackCandidates = cms.EDProducer("CkfTrackCandidateMaker",
    MeasurementTrackerEvent = cms.InputTag("hltMeasurementTrackerEvent"),
    NavigationSchool = cms.string('SimpleNavigationSchool'),
    RedundantSeedCleaner = cms.string('CachingSeedCleanerBySharedInput'),
    TrajectoryBuilderPSet = cms.PSet(
        refToPSet_ = cms.string('hltPhase2L3MuonHighPtTripletStepTrajectoryBuilder')
    ),
    TrajectoryCleaner = cms.string('hltPhase2L3MuonHighPtTripletStepTrajectoryCleanerBySharedHits'),
    TransientInitialStateEstimatorParameters = cms.PSet(
        numberMeasurementsForFit = cms.int32(4),
        propagatorAlongTISE = cms.string('PropagatorWithMaterial'),
        propagatorOppositeTISE = cms.string('PropagatorWithMaterialOpposite')
    ),
    cleanTrajectoryAfterInOut = cms.bool(True),
    doSeedingRegionRebuilding = cms.bool(True),
    maxNSeeds = cms.uint32(100000),
    maxSeedsBeforeCleaning = cms.uint32(1000),
    numHitsForSeedCleaner = cms.int32(50),
    onlyPixelHitsForSeedCleaner = cms.bool(True),
    phase2clustersToSkip = cms.InputTag("hltPhase2L3MuonHighPtTripletStepClusters"),
    reverseTrajectories = cms.bool(False),
    src = cms.InputTag("hltPhase2L3MuonHighPtTripletStepSeeds"),
    useHitsSplitting = cms.bool(False)
)
```

##### hltPhase2L3MuonHighPtTripletStepTracks
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonHighPtTripletStepTracks = cms.EDProducer("TrackProducer",
    AlgorithmName = cms.string('highPtTripletStep'),
    Fitter = cms.string('FlexibleKFFittingSmoother'),
    GeometricInnerState = cms.bool(False),
    MeasurementTracker = cms.string(''),
    MeasurementTrackerEvent = cms.InputTag("hltMeasurementTrackerEvent"),
    NavigationSchool = cms.string('SimpleNavigationSchool'),
    Propagator = cms.string('RungeKuttaTrackerPropagator'),
    SimpleMagneticField = cms.string(''),
    TTRHBuilder = cms.string('WithTrackAngle'),
    TrajectoryInEvent = cms.bool(False),
    beamSpot = cms.InputTag("hltOnlineBeamSpot"),
    clusterRemovalInfo = cms.InputTag(""),
    src = cms.InputTag("hltPhase2L3MuonHighPtTripletStepTrackCandidates"),
    useHitsSplitting = cms.bool(False),
    useSimpleMF = cms.bool(False)
)
```

##### hltPhase2L3MuonHighPtTripletStepTrackCutClassifier
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonHighPtTripletStepTrackCutClassifier = cms.EDProducer("TrackCutClassifier",
    beamspot = cms.InputTag("hltOnlineBeamSpot"),
    ignoreVertices = cms.bool(False),
    mva = cms.PSet(
        dr_par = cms.PSet(
            d0err = cms.vdouble(0.003, 0.003, 0.003),
            d0err_par = cms.vdouble(0.002, 0.002, 0.001),
            dr_exp = cms.vint32(4, 4, 4),
            dr_par1 = cms.vdouble(0.7, 0.6, 0.6),
            dr_par2 = cms.vdouble(0.6, 0.5, 0.45)
        ),
        dz_par = cms.PSet(
            dz_exp = cms.vint32(4, 4, 4),
            dz_par1 = cms.vdouble(0.8, 0.7, 0.7),
            dz_par2 = cms.vdouble(0.6, 0.6, 0.55)
        ),
        maxChi2 = cms.vdouble(9999.0, 9999.0, 9999.0),
        maxChi2n = cms.vdouble(2.0, 1.0, 0.8),
        maxDr = cms.vdouble(0.5, 0.03, 3.40282346639e+38),
        maxDz = cms.vdouble(0.5, 0.2, 3.40282346639e+38),
        maxDzWrtBS = cms.vdouble(3.40282346639e+38, 24.0, 15.0),
        maxLostLayers = cms.vint32(3, 3, 2),
        min3DLayers = cms.vint32(3, 3, 4),
        minLayers = cms.vint32(3, 3, 4),
        minNVtxTrk = cms.int32(3),
        minNdof = cms.vdouble(1e-05, 1e-05, 1e-05),
        minPixelHits = cms.vint32(0, 0, 3)
    ),
    qualityCuts = cms.vdouble(-0.7, 0.1, 0.7),
    src = cms.InputTag("hltPhase2L3MuonHighPtTripletStepTracks"),
    vertices = cms.InputTag("hltPhase2L3MuonPixelVertices")
)
```

##### hltPhase2L3MuonHighPtTripletStepTracksSelectionHighPurity
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonHighPtTripletStepTracksSelectionHighPurity = cms.EDProducer("TrackCollectionFilterCloner",
    copyExtras = cms.untracked.bool(True),
    copyTrajectories = cms.untracked.bool(False),
    minQuality = cms.string('highPurity'),
    originalMVAVals = cms.InputTag("hltPhase2L3MuonHighPtTripletStepTrackCutClassifier","MVAValues"),
    originalQualVals = cms.InputTag("hltPhase2L3MuonHighPtTripletStepTrackCutClassifier","QualityMasks"),
    originalSource = cms.InputTag("hltPhase2L3MuonHighPtTripletStepTracks")
)
```

##### hltPhase2L3MuonGeneralTracks
```python
import FWCore.ParameterSet.Config as cms

hltPhase2L3MuonGeneralTracks = cms.EDProducer("TrackListMerger",
    Epsilon = cms.double(-0.001),
    FoundHitBonus = cms.double(5.0),
    LostHitPenalty = cms.double(5.0),
    MaxNormalizedChisq = cms.double(1000.0),
    MinFound = cms.int32(3),
    MinPT = cms.double(0.9),
    ShareFrac = cms.double(0.19),
    TrackProducers = cms.VInputTag("hltPhase2L3MuonInitialStepTracksSelectionHighPurity", "hltPhase2L3MuonHighPtTripletStepTracksSelectionHighPurity"),
    allowFirstHitShare = cms.bool(True),
    copyExtras = cms.untracked.bool(True),
    copyMVA = cms.bool(False),
    hasSelector = cms.vint32(0, 0),
    indivShareFrac = cms.vdouble(1.0, 1.0),
    makeReKeyedSeeds = cms.untracked.bool(False),
    newQuality = cms.string('confirmed'),
    selectedTrackQuals = cms.VInputTag(cms.InputTag("hltPhase2L3MuonInitialStepTracksSelectionHighPurity"), cms.InputTag("hltPhase2L3MuonHighPtTripletStepTracksSelectionHighPurity")),
    setsToMerge = cms.VPSet(cms.PSet(
        pQual = cms.bool(True),
        tLists = cms.vint32(0, 1)
    )),
    trackAlgoPriorityOrder = cms.string('hltPhase2L3MuonTrackAlgoPriorityOrder'),
    writeOnlyTrkQuals = cms.bool(False)
)


**Components:**
- Complete muon-specific tracking sequence with pixel tracks, initial step, and high-pT triplet step reconstruction

---

##### hltPhase2L3MuonsTrkIsoRegionalNewdR0p3dRVeto0p005dz0p25dr0p20ChisqInfPtMin0p0Cut0p07
**Type:** Track isolation producer
**Function:** Track isolation with dR=0.3, dRVeto=0.005, dz=0.25, dr=0.20, cut=0.07
```python
hltPhase2L3MuonsTrkIsoRegionalNewdR0p3dRVeto0p005dz0p25dr0p20ChisqInfPtMin0p0Cut0p07 = cms.EDProducer("L3MuonCombinedRelativeIsolationProducer",
    CaloDepositsLabel = cms.InputTag("hltL3CaloMuonCorrectedIsolations"),
    CaloExtractorPSet = cms.PSet(
        CaloTowerCollectionLabel = cms.InputTag("hltTowerMakerForAll"),
        ComponentName = cms.string('CaloExtractorByAssociator'),
        DR_Max = cms.double(0.24),
        DR_Veto_E = cms.double(0.07),
        DR_Veto_H = cms.double(0.1),
        DepositInstanceLabels = cms.vstring(
            'ecal',
            'hcal',
            'ho'
        ),
        DepositLabel = cms.untracked.string('Calo'),
        Noise_E = cms.double(0.0),
        Noise_H = cms.double(0.0),
        Noise_HO = cms.double(0.0),
        PrintTimeReport = cms.untracked.bool(False),
        PropagatorName = cms.string('hltESPSteppingHelixPropagatorAlong'),
        Threshold_E = cms.double(0.0),
        Threshold_H = cms.double(0.0),
        Threshold_HO = cms.double(0.0),
        TrackAssociatorParameters = cms.PSet(
            CSCSegmentCollectionLabel = cms.InputTag("hltCscSegments"),
            CaloTowerCollectionLabel = cms.InputTag("hltTowerMakerForAll"),
            DTRecSegment4DCollectionLabel = cms.InputTag("hltDt4DSegments"),
            EBRecHitCollectionLabel = cms.InputTag("hltEcalRecHit","EcalRecHitsEB"),
            EERecHitCollectionLabel = cms.InputTag("hltEcalRecHit","EcalRecHitsEE"),
            HBHERecHitCollectionLabel = cms.InputTag("hltHbhereco"),
            HORecHitCollectionLabel = cms.InputTag("hltHoreco"),
            accountForTrajectoryChangeCalo = cms.bool(False),
            dREcal = cms.double(0.24),
            dREcalPreselection = cms.double(0.24),
            dRHcal = cms.double(0.24),
            dRHcalPreselection = cms.double(0.24),
            dRPreshowerPreselection = cms.double(0.2),
            muonMaxDistanceX = cms.double(5.0),
            muonMaxDistanceY = cms.double(5.0),
            muonPropagator = cms.string('hltESPSteppingHelixPropagatorAlong'),
            trajectoryUncertaintyTolerance = cms.double(-1.0),
            truthMatch = cms.bool(False),
            useCalo = cms.bool(True),
            useEcal = cms.bool(True),
            useExternal = cms.bool(True),
            useHO = cms.bool(True),
            useHcal = cms.bool(True),
            useMuon = cms.bool(False),
            usePreshower = cms.bool(False)
        ),
        UseRecHitsFlag = cms.bool(False),
        VetoThreshold_E = cms.double(0.0),
        VetoThreshold_H = cms.double(0.0),
        VetoThreshold_HO = cms.double(0.0)
    ),
    PrintTimeReport = cms.untracked.bool(False),
    TrackExtractorPSet = cms.PSet(
        BeamSpotLabel = cms.InputTag("hltOnlineBeamSpot"),
        BeamlineOption = cms.string('BeamSpotFromEvent'),
        Chi2Ndof_Max = cms.double(1e+99),
        Chi2Prob_Min = cms.double(-1.0),
        ComponentName = cms.string('TrackExtractor'),
        DR_Max = cms.double(0.3),
        DR_Veto = cms.double(0.005),
        DepositLabel = cms.untracked.string('PXLS'),
        Diff_r = cms.double(0.2),
        Diff_z = cms.double(0.25),
        NHits_Min = cms.uint32(0),
        Pt_Min = cms.double(0.0),
        inputTrackCollection = cms.InputTag("hltPhase2L3MuonGeneralTracks")
    ),
    inputMuonCollection = cms.InputTag("hltPhase2L3MuonCandidates"),
    outputMuonCollection = cms.InputTag(""),
    useCalo = cms.bool(False),
    useTracker = cms.bool(True)
)
```

---

##### hltL3crIsoL1TkSingleMu22TrkIsoRegionalNewFiltered0p07EcalHcalHgcalTrk
**Type:** Combined isolation filter
**Function:** Combined ECAL+HCAL+HGCAL+Track isolation filter
```python
hltL3crIsoL1TkSingleMu22TrkIsoRegionalNewFiltered0p07EcalHcalHgcalTrk = cms.EDFilter("HLTMuonIsoFilter",
    CandTag = cms.InputTag("hltPhase2L3MuonCandidates"),
    DepTag = cms.VInputTag("hltPhase2L3MuonsTrkIsoRegionalNewdR0p3dRVeto0p005dz0p25dr0p20ChisqInfPtMin0p0Cut0p07"),
    IsolatorPSet = cms.PSet(

    ),
    MinN = cms.int32(1),
    PreviousCandTag = cms.InputTag("hltL3crIsoL1TkSingleMu22HgcalIso4p70"),
    saveTags = cms.bool(True)
)
```

---

##### HLTAK4PFJetsReconstruction
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/sequences/HLTAK4PFJetsReconstruction_cfi.py`

**Definition:**
```python
HLTAK4PFJetsReconstruction = cms.Sequence(hltAK4PFJets+hltAK4PFJetCorrectorL1+hltAK4PFJetCorrectorL2+hltAK4PFJetCorrectorL3+hltAK4PFJetCorrector+hltAK4PFJetsCorrected)
```

**Components:**
- AK4 PF jet reconstruction
- L1, L2, L3 jet energy corrections
- Final corrected jets

---

##### hltAK4PFJetsForTaus
**Type:** FastjetJetProducer
**Function:** AK4 PF jets for tau reconstruction
```python
hltAK4PFJetsForTaus = cms.EDProducer("FastjetJetProducer",
    Active_Area_Repeats = cms.int32(1),
    Ghost_EtaMax = cms.double(5.0),
    Rho_EtaMax = cms.double(4.4),
    doAreaDiskApprox = cms.bool(False),
    doAreaFastjet = cms.bool(False),
    doPUOffsetCorr = cms.bool(False),
    doPVCorrection = cms.bool(False),
    doRhoFastjet = cms.bool(False),
    inputEMin = cms.double(0.0),
    inputEtMin = cms.double(0.0),
    jetAlgorithm = cms.string('Anti-Kt'),
    jetPtMin = cms.double(5.0),
    jetType = cms.string('PFJet'),
    maxBadEcalCells = cms.uint32(9999999),
    maxBadHcalCells = cms.uint32(9999999),
    maxProblematicEcalCells = cms.uint32(9999999),
    maxProblematicHcalCells = cms.uint32(9999999),
    maxRecoveredEcalCells = cms.uint32(9999999),
    maxRecoveredHcalCells = cms.uint32(9999999),
    minSeed = cms.uint32(14327),
    nSigmaPU = cms.double(1.0),
    puPtMin = cms.double(10.0),
    rParam = cms.double(0.4),
    radiusPU = cms.double(0.5),
    src = cms.InputTag("hltParticleFlow"),
    srcPVs = cms.InputTag("hltPhase2PixelVertices"),
    useDeterministicSeed = cms.bool(True),
    voronoiRfact = cms.double(-0.9)
)
```

---

##### HLTPFTauHPS
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/sequences/HLTPFTauHPS_cfi.py`

**Definition:**
```python
HLTPFTauHPS = cms.Sequence(hltTauPFJets08Region+hltHpsTauPFJetsRecoTauChargedHadronsWithNeutrals+hltPFTauPiZeros+hltHpsCombinatoricRecoTaus+hltHpsSelectionDiscriminator+hltHpsPFTauProducerSansRefs+hltHpsPFTauProducer+hltHpsPFTauDiscriminationByDecayModeFindingNewDMs+hltHpsPFTauTrackFindingDiscriminator+hltHpsSelectedPFTausTrackFinding+hltHpsPFTauTrack)
```

**Components:**
- Tau PF jets in region
- Charged hadron and neutral pion reconstruction
- Combinatoric tau reconstruction
- HPS discriminators and tau producers

---

#### HLTHPSDeepTauPFTauSequence
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/sequences/HLTHPSDeepTauPFTauSequence_cfi.py`

**Definition:**
```python
HLTHPSDeepTauPFTauSequence = cms.Sequence(hltHpsPFTauDiscriminationByDecayModeFindingNewDMs+hltHpsPFTauPrimaryVertexProducerForDeepTau+hltHpsPFTauSecondaryVertexProducerForDeepTau+hltHpsPFTauTransverseImpactParametersForDeepTau+hltFixedGridRhoFastjetAll+hltHpsPFTauBasicDiscriminatorsForDeepTau+hltHpsPFTauBasicDiscriminatorsdR03ForDeepTau+hltHpsPFTauDeepTauProducer)
```

**Components:**
- Decay mode finding
- Primary and secondary vertex producers
- Impact parameters
- Deep tau discriminators and producer

---

#### hltHpsSelectedPFTauLooseTauWPDeepTau
**Type:** PFTauSelector
**Function:** PF tau selector with DeepTau VSjet discriminator
```python
hltHpsSelectedPFTauLooseTauWPDeepTau = cms.EDFilter("PFTauSelector",
    cut = cms.string('pt > 20 & abs(eta) < 2.3 & tauID("byDeepTau2017v2p1VSjetraw") > 0.5'),
    discriminators = cms.VPSet(cms.PSet(
        discriminator = cms.InputTag("hltHpsPFTauDeepTauProducer","VSjet"),
        selectionCut = cms.double(0.5)
    )),
    src = cms.InputTag("hltHpsPFTauProducer")
)
```

---

#### hltHpsPFTau27LooseTauWPDeepTau
**Type:** HLT1PFTau filter
**Function:** Tau filter with pT > 27 GeV and DeepTau loose working point
```python
hltHpsPFTau27LooseTauWPDeepTau = cms.EDFilter("HLT1PFTau",
    MaxEta = cms.double(2.1),
    MinN = cms.int32(1),
    MinPt = cms.double(27.0),
    inputTag = cms.InputTag("hltHpsSelectedPFTauLooseTauWPDeepTau"),
    saveTags = cms.bool(True),
    triggerType = cms.int32(84)
)
```

---

#### HLTEndSequence
**File:** `/data6/Users/achihwan/CMSSW_15_1_0_pre4/src/HLTrigger/Configuration/python/HLT_75e33/sequences/HLTEndSequence_cfi.py`

**Definition:**
```python
HLTEndSequence = cms.Sequence(hltBoolEnd)
```

**Components:**
- `hltBoolEnd` - Boolean end module

---