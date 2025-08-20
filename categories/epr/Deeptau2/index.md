---
layout: post
title: Deep tau
date: 2025-08-13 12:04:00 +0900
categories: Deep tau
permalink: /categories/epr/Deeptau2/
heading: "Deep tau"
subheading: "phase2 upg"
---

#  HLT_LooseDeepTauPFTauHPS180_L2NN_eta2p1_v

- Phase 2
---
✅  : Same as phase 1 , checked all. 

❌  : No funtion exact same in phase 2 . Need modified . 

🔵  : Things added in phase 2 . 

🟨  : Things deleted in phase 2 .


# Definition from phase 1 
```python
fragment.HLT_LooseDeepTauPFTauHPS180_L2NN_eta2p1_v12 = cms.Path( 
    1. fragment.HLTBeginSequence 🔵+ 
    2. fragment.hltL1sSingleTau  ✅ + 
    3. fragment.hltPreLooseDeepTauPFTauHPS180L2NNeta2p1 ❌ + 
    3. fragment.hltPreAlCaEcalPhiSym🔵 
    4. fragment.HLTL2TauTagNNSequence + 
    5. fragment.hltL2SingleTauTagNNFilter ✅ + 
    6. fragment.HLTGlobalPFTauHPSSequence ❌+ 
    7. fragment.HLTLooseSingleTauWPDeepTauPFTau ❌+ 
    8. fragment.hltL1JetsHLTPFTauLooseSingleTauWPDeepTauMatch ❌ + 
    9. fragment.hltSelectedPFTau180LooseSingleTauWPDeepTauL1HLTMatched ❌+ 
    10 .fragment.HLTEndSequence ✅ )
```

# 1. HLTBeginSequence
```python 
fragment.HLTBeginSequence = cms.Sequence(
  1.1 fragment.hltTriggerType +
  1.2 fragment.HLTL1UnpackerSequence +
  1.3 fragment.HLTBeamSpot )
```

## 1.1 hltTriggerType ✅ 
```python
fragment.hltTriggerType = cms.EDFilter( "HLTTriggerTypeFilter",
    SelectedTriggerType = cms.int32( 1 )
)
```

## 1.2 HLTL1UnpackerSequence ✅ 
```python
fragment.HLTL1UnpackerSequence = cms.Sequence( 
  1.2.1 fragment.hltGtStage2Digis +
  1.2.2 fragment.hltGtStage2ObjectMap )
```

### 1.2.1 hltGtStage2Digis ✅ 
```python
fragment.hltGtStage2Digis = cms.EDProducer( "L1TRawToDigi",
    FedIds = cms.vint32( 1404 ),
    Setup = cms.string( "stage2::GTSetup" ),
    FWId = cms.uint32( 0 ),
    DmxFWId = cms.uint32( 0 ),
    FWOverride = cms.bool( False ),
    TMTCheck = cms.bool( True ),
    CTP7 = cms.untracked.bool( False ),
    MTF7 = cms.untracked.bool( False ),
    InputLabel = cms.InputTag( "rawDataCollector" ),
    lenSlinkHeader = cms.untracked.int32( 8 ),
    lenSlinkTrailer = cms.untracked.int32( 8 ),
    lenAMCHeader = cms.untracked.int32( 8 ),
    lenAMCTrailer = cms.untracked.int32( 0 ),
    lenAMC13Header = cms.untracked.int32( 8 ),
    lenAMC13Trailer = cms.untracked.int32( 8 ),
    debug = cms.untracked.bool( False ),
    MinFeds = cms.uint32( 0 )
)
```

### 1.2.2 hltGtStage2ObjectMap ✅ 
```python
fragment.hltGtStage2ObjectMap = cms.EDProducer( "L1TGlobalProducer",
    MuonInputTag = cms.InputTag( 'hltGtStage2Digis','Muon' ),
    MuonShowerInputTag = cms.InputTag( 'hltGtStage2Digis','MuonShower' ),
    EGammaInputTag = cms.InputTag( 'hltGtStage2Digis','EGamma' ),
    TauInputTag = cms.InputTag( 'hltGtStage2Digis','Tau' ),
    JetInputTag = cms.InputTag( 'hltGtStage2Digis','Jet' ),
    EtSumInputTag = cms.InputTag( 'hltGtStage2Digis','EtSum' ),
    EtSumZdcInputTag = cms.InputTag( 'hltGtStage2Digis','EtSumZDC' ),
    CICADAInputTag = cms.InputTag( 'hltGtStage2Digis','CICADAScore' ),
    ExtInputTag = cms.InputTag( "hltGtStage2Digis" ),
    AlgoBlkInputTag = cms.InputTag( "hltGtStage2Digis" ),
    GetPrescaleColumnFromData = cms.bool( False ),
    AlgorithmTriggersUnprescaled = cms.bool( True ),
    RequireMenuToMatchAlgoBlkInput = cms.bool( True ),
    AlgorithmTriggersUnmasked = cms.bool( True ),
    useMuonShowers = cms.bool( True ),
    produceAXOL1TLScore = cms.bool( False ),
    resetPSCountersEachLumiSec = cms.bool( True ),
    semiRandomInitialPSCounters = cms.bool( False ),
    ProduceL1GtDaqRecord = cms.bool( True ),
    ProduceL1GtObjectMapRecord = cms.bool( True ),
    EmulateBxInEvent = cms.int32( 1 ),
    L1DataBxInEvent = cms.int32( 5 ),
    AlternativeNrBxBoardDaq = cms.uint32( 0 ),
    BstLengthBytes = cms.int32( -1 ),
    PrescaleSet = cms.uint32( 1 ),
    Verbosity = cms.untracked.int32( 0 ),
    PrintL1Menu = cms.untracked.bool( False ),
    TriggerMenuLuminosity = cms.string( "startup" )
)
```


## 1.3 HLTBeamSpot 🔵
```python
fragment.HLTBeamSpot = cms.Sequence(
  1.3.1 fragment.hltOnlineMetaDataDigis +
  1.3.2 fragment.hltOnlineBeamSpot )
```

### 1.3.1 hltOnlineMetaDataDigis ✅
```python
fragment.hltOnlineMetaDataDigis = cms.EDProducer( "OnlineMetaDataRawToDigi",
    onlineMetaDataInputLabel = cms.InputTag( "rawDataCollector" )
)
```

### 1.3.2 hltOnlineBeamSpot 🔵
```python
fragment.hltOnlineBeamSpot = cms.EDProducer( "BeamSpotOnlineProducer",
    changeToCMSCoordinates = cms.bool( False ),
    maxZ = cms.double( 40.0 ),
    setSigmaZ = cms.double( 0.0 ),
    beamMode = cms.untracked.uint32( 11 ),
    src = cms.InputTag( "" ),
    gtEvmLabel = cms.InputTag( "" ),
    maxRadius = cms.double( 2.0 ),
    useBSOnlineRecords = cms.bool( True ),
    timeThreshold = cms.int32( 48 ),🔵
    sigmaZThreshold = cms.double( 2.0 ),🔵
    sigmaXYThreshold = cms.double( 4.0 )🔵
)
```



# 2. hltL1sSingleTau  ✅
```python
fragment.hltL1sSingleTau = cms.EDFilter( "HLTL1TSeed",
    saveTags = cms.bool( True ),
    L1SeedsLogicalExpression = cms.string( "L1_SingleTau120er2p1 OR L1_SingleTau130er2p1" ),
    L1ObjectMapInputTag = cms.InputTag( "hltGtStage2ObjectMap" ),
    L1GlobalInputTag = cms.InputTag( "hltGtStage2Digis" ),
    L1MuonInputTag = cms.InputTag( 'hltGtStage2Digis','Muon' ),
    L1MuonShowerInputTag = cms.InputTag( 'hltGtStage2Digis','MuonShower' ),
    L1EGammaInputTag = cms.InputTag( 'hltGtStage2Digis','EGamma' ),
    L1JetInputTag = cms.InputTag( 'hltGtStage2Digis','Jet' ),
    L1TauInputTag = cms.InputTag( 'hltGtStage2Digis','Tau' ),
    L1EtSumInputTag = cms.InputTag( 'hltGtStage2Digis','EtSum' ),
    L1EtSumZdcInputTag = cms.InputTag( 'hltGtStage2Digis','EtSumZDC' )
)
```

# 3. ~~❌ (hltPreLooseDeepTauPFTauHPS180L2NNeta2p1)~~

# 3. hltPreAlCaEcalPhiSym🔵
```python 
fragment.hltPreAlCaEcalPhiSym = cms.EDFilter( "HLTPrescaler",
    offset = cms.uint32( 0 ),
    L1GtReadoutRecordTag = cms.InputTag( "hltGtStage2Digis" )
)
```

#### 4. HLTL2TauTagNNSequence
``` python 
fragment.HLTL2TauTagNNSequence = cms.Sequence( 
    4.1 fragment.HLTDoLocalPixelSequence + 
    4.2 fragment.HLTRecoPixelTracksSequence + 
    4.3 fragment.HLTRecopixelvertexingSequence +
    4.4 fragment.HLTDoCaloSequence +
    4.5 cms.ignore(fragment.hltL1sDoubleTauBigOR) +
    4.6 cms.ignore(fragment.hltL1sSingleTau) +
    4.7 cms.ignore(fragment.hltL1sBigOrMuXXerIsoTauYYer) +
    4.8 cms.ignore(fragment.hltL1sMu22erIsoTau40er) +
    4.9 cms.ignore(fragment.hltL1sBigORDoubleTauJet) +
    4.10 cms.ignore(fragment.hltL1VBFDiJetIsoTau) +
    4.11 cms.ignore(fragment.hltL1sVeryBigORMu18erTauXXer2p1) +
    4.12 cms.ignore(fragment.hltL1sDoubleTauBigORWithLowMass) +
    4.13 fragment.hltL2TauTagNNProducer ) 
```

##### 4.1 HLTDoLocalPixelSequence
```python 
fragment.HLTDoLocalPixelSequence = cms.Sequence( 
    4.1.1 fragment.hltOnlineBeamSpotDevice + 
    4.1.2 fragment.hltSiPixelClustersSoA +
    4.1.3 fragment.hltSiPixelClusters +
    4.1.4 fragment.hltSiPixelDigiErrors +
    4.1.5 fragment.hltSiPixelRecHitsSoA +
    4.1.6 fragment.hltSiPixelRecHits )
```

###### 4.1.1 hltOnlineBeamSpotDevice ✅  
```python 
fragment.hltOnlineBeamSpotDevice = cms.EDProducer( "BeamSpotDeviceProducer@alpaka",
    src = cms.InputTag( "hltOnlineBeamSpot" ),
    alpaka = cms.untracked.PSet(  backend = cms.untracked.string( "" ) )
)
```

###### 4.1.2 hltSiPixelClustersSoA  🔵
```python 
fragment.hltSiPixelClustersSoA = cms.EDProducer( "SiPixelRawToClusterPhase1@alpaka",
    IncludeErrors = cms.bool( True ),
    UseQualityInfo = cms.bool( False ),
    clusterThreshold_layer1 = cms.int32( 2000 ), 🔵
    clusterThreshold_otherLayers = cms.int32( 4000 ),
    VCaltoElectronGain = cms.double( 1.0 ),
    VCaltoElectronGain_L1 = cms.double( 1.0 ),
    VCaltoElectronOffset = cms.double( 0.0 ),
    VCaltoElectronOffset_L1 = cms.double( 0.0 ),
    InputLabel = cms.InputTag( "rawDataCollector" ),
    Regions = cms.PSet(  ),
    CablingMapLabel = cms.string( "" ),
    alpaka = cms.untracked.PSet(  backend = cms.untracked.string( "" ) )
)
```

###### 4.1.3 hltSiPixelClusters 🔵
```python 
fragment.hltSiPixelClusters = cms.EDProducer( "SiPixelDigisClustersFromSoAAlpakaPhase1",
    src = cms.InputTag( "hltSiPixelClustersSoA" ),
    clusterThreshold_layer1 = cms.int32( 2000 ),🔵
    clusterThreshold_otherLayers = cms.int32( 4000 ),
    produceDigis = cms.bool( False ),
    storeDigis = cms.bool( False )
)
```

###### 4.1.4 hltSiPixelDigiErrors ✅ 
```python
fragment.hltSiPixelDigiErrors = cms.EDProducer( "SiPixelDigiErrorsFromSoAAlpaka",
    digiErrorSoASrc = cms.InputTag( "hltSiPixelClustersSoA" ),
    fmtErrorsSoASrc = cms.InputTag( "hltSiPixelClustersSoA" ),
    CablingMapLabel = cms.string( "" ),
    UsePhase1 = cms.bool( True ),
    ErrorList = cms.vint32( 29 ),
    UserErrorList = cms.vint32( 40 )
)
```

###### 4.1.5 hltSiPixelRecHitsSoA ✅ 
```python 
fragment.hltSiPixelRecHitsSoA = cms.EDProducer( "SiPixelRecHitAlpakaPhase1@alpaka",
    beamSpot = cms.InputTag( "hltOnlineBeamSpotDevice" ),
    src = cms.InputTag( "hltSiPixelClustersSoA" ),
    CPE = cms.string( "PixelCPEFastParams" ),
    alpaka = cms.untracked.PSet(  backend = cms.untracked.string( "" ) )
)
```

###### 4.1.6 hltSiPixelRecHits ✅ 
```python 
fragment.hltSiPixelRecHits = cms.EDProducer( "SiPixelRecHitFromSoAAlpakaPhase1",
    pixelRecHitSrc = cms.InputTag( "hltSiPixelRecHitsSoA" ),
    src = cms.InputTag( "hltSiPixelClusters" )
)
```

##### 4.2 HLTRecoPixelTracksSequence
```python
fragment.HLTRecoPixelTracksSequence = cms.Sequence( 
    4.2.1 fragment.hltPixelTracksSoA +  
    4.2.2 fragment.hltPixelTracks )
```
###### 4.2.1 hltPixelTracksSoA🔵
```python 
fragment.hltPixelTracksSoA = cms.EDProducer( "CAHitNtupletAlpakaPhase1@alpaka",
    pixelRecHitSrc = cms.InputTag( "hltSiPixelRecHitsSoA" ),
    CPE = cms.string( "PixelCPEFastParams" ),
    ptmin = cms.double( 0.9 ),
    CAThetaCutBarrel = cms.double( 0.00123302705499 ),
    CAThetaCutForward = cms.double( 0.00355691321774 ),
    hardCurvCut = cms.double( 0.503169690002 ),
    dcaCutInnerTriplet = cms.double( 0.0918113099491 ),
    dcaCutOuterTriplet = cms.double( 0.420724617835 ),
    earlyFishbone = cms.bool( True ),
    lateFishbone = cms.bool( False ),
    fillStatistics = cms.bool( False ),
    minHitsPerNtuplet = cms.uint32( 3 ),
    minHitsForSharingCut = cms.uint32( 10 ),
    fitNas4 = cms.bool( False ),
    doClusterCut = cms.bool( True ),
    doZ0Cut = cms.bool( True ),
    doPtCut = cms.bool( True ),
    useRiemannFit = cms.bool( False ),
    doSharedHitCut = cms.bool( True ),
    dupPassThrough = cms.bool( False ),
    useSimpleTripletCleaner = cms.bool( True ),
    maxNumberOfDoublets = cms.uint32( 524288 ),
    idealConditions = cms.bool( False ),
    includeJumpingForwardDoublets = cms.bool( True ),
    cellZ0Cut = cms.double( 12.0 ),
    cellPtCut = cms.double( 0.5 ),
    trackQualityCuts = cms.PSet( 
      chi2MaxPt = cms.double( 10.0 ),
      tripletMaxTip = cms.double( 0.3 ),
      chi2Scale = cms.double( 8.0 ),
      quadrupletMaxTip = cms.double( 0.5 ),
      quadrupletMinPt = cms.double( 0.3 ),
      quadrupletMaxZip = cms.double( 12.0 ),
      tripletMaxZip = cms.double( 12.0 ),
      tripletMinPt = cms.double( 0.5 ),
      chi2Coeff = cms.vdouble( 0.9, 1.8 )
    ),
    minYsizeB1 = cms.int32( 1 ),
    minYsizeB2 = cms.int32( 1 ),
    phiCuts = cms.vint32( 965, 1241, 395, 698, 1058, 1211, 348, 782, 1016, 810, 463, 755, 694, 531, 770, 471, 592, 750, 348 ),
    alpaka = cms.untracked.PSet(  backend = cms.untracked.string( "" ) )
)
```

###### 4.2.2 hltPixelTracks ✅ 
```python
fragment.hltPixelTracks = cms.EDProducer( "PixelTrackProducerFromSoAAlpakaPhase1",
    beamSpot = cms.InputTag( "hltOnlineBeamSpot" ),
    trackSrc = cms.InputTag( "hltPixelTracksSoA" ),
    pixelRecHitLegacySrc = cms.InputTag( "hltSiPixelRecHits" ),
    minNumberOfHits = cms.int32( 0 ),
    minQuality = cms.string( "loose" )
)
```

##### 4.3 HLTRecopixelvertexingSequence
```python
fragment.HLTRecopixelvertexingSequence = cms.Sequence(
    4.3.1 fragment.HLTRecoPixelTracksSequence +
    4.3.2 fragment.hltPixelVerticesSoA +
    4.3.3 fragment.hltPixelVertices +
    4.3.4 fragment.hltTrimmedPixelVertices )
```

###### 4.3.1 HLTRecoPixelTracksSequence
```python
fragment.HLTRecoPixelTracksSequence = cms.Sequence(
    4.3.1.1 fragment.hltPixelTracksSoA + 
    4.3.1.2 fragment.hltPixelTracks )
```

####### 4.3.1.1 hltPixelTracksSoA
```python
fragment.hltPixelTracksSoA = cms.EDProducer( "CAHitNtupletAlpakaPhase1@alpaka",
    pixelRecHitSrc = cms.InputTag( "hltSiPixelRecHitsSoA" ),
    CPE = cms.string( "PixelCPEFastParams" ),
    ptmin = cms.double( 0.9 ),
    CAThetaCutBarrel = cms.double( 0.00123302705499 ),
    CAThetaCutForward = cms.double( 0.00355691321774 ),
    hardCurvCut = cms.double( 0.503169690002 ),
    dcaCutInnerTriplet = cms.double( 0.0918113099491 ),
    dcaCutOuterTriplet = cms.double( 0.420724617835 ),
    earlyFishbone = cms.bool( True ),
    lateFishbone = cms.bool( False ),
    fillStatistics = cms.bool( False ),
    minHitsPerNtuplet = cms.uint32( 3 ),
    minHitsForSharingCut = cms.uint32( 10 ),
    fitNas4 = cms.bool( False ),
    doClusterCut = cms.bool( True ),
    doZ0Cut = cms.bool( True ),
    doPtCut = cms.bool( True ),
    useRiemannFit = cms.bool( False ),
    doSharedHitCut = cms.bool( True ),
    dupPassThrough = cms.bool( False ),
    useSimpleTripletCleaner = cms.bool( True ),
    maxNumberOfDoublets = cms.uint32( 524288 ),
    idealConditions = cms.bool( False ),
    includeJumpingForwardDoublets = cms.bool( True ),
    cellZ0Cut = cms.double( 12.0 ),
    cellPtCut = cms.double( 0.5 ),
    trackQualityCuts = cms.PSet( 
      chi2MaxPt = cms.double( 10.0 ),
      tripletMaxTip = cms.double( 0.3 ),
      chi2Scale = cms.double( 8.0 ),
      quadrupletMaxTip = cms.double( 0.5 ),
      quadrupletMinPt = cms.double( 0.3 ),
      quadrupletMaxZip = cms.double( 12.0 ),
      tripletMaxZip = cms.double( 12.0 ),
      tripletMinPt = cms.double( 0.5 ),
      chi2Coeff = cms.vdouble( 0.9, 1.8 )
    ),
    minYsizeB1 = cms.int32( 1 ),
    minYsizeB2 = cms.int32( 1 ),
    phiCuts = cms.vint32( 965, 1241, 395, 698, 1058, 1211, 348, 782, 1016, 810, 463, 755, 694, 531, 770, 471, 592, 750, 348 ),
    alpaka = cms.untracked.PSet(  backend = cms.untracked.string( "" ) )
)
```

####### 4.3.1.2 hltPixelTracks ✅ 
 ```python
fragment.hltPixelTracks = cms.EDProducer( "PixelTrackProducerFromSoAAlpakaPhase1",
    beamSpot = cms.InputTag( "hltOnlineBeamSpot" ),
    trackSrc = cms.InputTag( "hltPixelTracksSoA" ),
    pixelRecHitLegacySrc = cms.InputTag( "hltSiPixelRecHits" ),
    minNumberOfHits = cms.int32( 0 ),
    minQuality = cms.string( "loose" )
)
```

###### 4.3.2 hltPixelVerticesSoA 🔵
```python
fragment.hltPixelVerticesSoA = cms.EDProducer( "PixelVertexProducerAlpakaPhase1@alpaka",
    oneKernel = cms.bool( True ),
    useDensity = cms.bool( True ),
    useDBSCAN = cms.bool( False ),
    useIterative = cms.bool( False ),
    doSplitting = cms.bool( True ),
    minT = cms.int32( 2 ),
    eps = cms.double( 0.07 ),
    errmax = cms.double( 0.01 ),
    chi2max = cms.double( 9.0 ),
    maxVertices = cms.int32( 256 ),
    PtMin = cms.double( 0.5 ),
    PtMax = cms.double( 75.0 ),
    pixelTrackSrc = cms.InputTag( "hltPixelTracksSoA" ),
    alpaka = cms.untracked.PSet(  backend = cms.untracked.string( "" ) )
)
```

###### 4.3.3 hltPixelVertices ✅   
```python 
fragment.hltPixelVertices = cms.EDProducer( "PixelVertexProducerFromSoAAlpaka",
    TrackCollection = cms.InputTag( "hltPixelTracks" ),
    beamSpot = cms.InputTag( "hltOnlineBeamSpot" ),
    src = cms.InputTag( "hltPixelVerticesSoA" )
)
```

###### 4.3.4 hltTrimmedPixelVertices ✅  
```python 
fragment.hltTrimmedPixelVertices = cms.EDProducer( "PixelVertexCollectionTrimmer",
    src = cms.InputTag( "hltPixelVertices" ),
    maxVtx = cms.uint32( 100 ),
    fractionSumPt2 = cms.double( 0.3 ),
    minSumPt2 = cms.double( 0.0 ),
    PVcomparer = cms.PSet(  refToPSet_ = cms.string( "HLTPSetPvClusterComparerForIT" ) )
)
```

##### 4.4 HLTDoCaloSequence
```python
fragment.HLTDoCaloSequence = cms.Sequence(
    4.4.1 fragment.HLTDoFullUnpackingEgammaEcalWithoutPreshowerSequence + 
    4.4.2 fragment.HLTDoLocalHcalSequence +
    4.4.3 fragment.hltTowerMakerForAll )
```

###### 4.4.1 HLTDoFullUnpackingEgammaEcalWithoutPreshowerSequence
```python
fragment.HLTDoFullUnpackingEgammaEcalWithoutPreshowerSequence = cms.Sequence(
    4.4.1.1 fragment.hltEcalDigisLegacy +
    4.4.1.2 fragment.hltEcalDigisSoA +
    4.4.1.3 fragment.hltEcalDigis +
    4.4.1.4 fragment.hltEcalUncalibRecHitSoA +
    4.4.1.5 fragment.hltEcalUncalibRecHit +
    4.4.1.6 fragment.hltEcalDetIdToBeRecovered +
    4.4.1.7 fragment.hltEcalRecHit )
```

  ####### 4.4.1.1 hltEcalDigisLegacy ✅   
  ```python
  fragment.hltEcalDigisLegacy = cms.EDProducer( "EcalRawToDigi",
      tccUnpacking = cms.bool( True ),
      FedLabel = cms.InputTag( "listfeds" ),
      srpUnpacking = cms.bool( True ),
      syncCheck = cms.bool( True ),
     feIdCheck = cms.bool( True ),
      silentMode = cms.untracked.bool( True ),
      InputLabel = cms.InputTag( "rawDataCollector" ),
     orderedFedList = cms.vint32( 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638,   639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654 ),
      eventPut = cms.bool( True ),
      numbTriggerTSamples = cms.int32( 1 ),
      numbXtalTSamples = cms.int32( 10 ),
      orderedDCCIdList = cms.vint32( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54 ),
      FEDs = cms.vint32( 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654 ),
      DoRegional = cms.bool( False ),
      feUnpacking = cms.bool( True ),
      forceToKeepFRData = cms.bool( False ),
      headerUnpacking = cms.bool( True ),
      memUnpacking = cms.bool( True )
  )
  ```

  ####### 4.4.1.2 hltEcalDigisSoA ✅   
  ```python
  fragment.hltEcalDigisSoA = cms.EDProducer( "EcalRawToDigiPortable@alpaka",
      InputLabel = cms.InputTag( "rawDataCollector" ),
      FEDs = cms.vint32( 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654 ),
      maxChannelsEB = cms.uint32( 61200 ),
      maxChannelsEE = cms.uint32( 14648 ),
      digisLabelEB = cms.string( "ebDigis" ),
      digisLabelEE = cms.string( "eeDigis" ),
      alpaka = cms.untracked.PSet(  backend = cms.untracked.string( "" ) )
  )
  ```

  ####### 4.4.1.3 hltEcalDigis ✅   
  ```python
  fragment.hltEcalDigis = cms.EDProducer( "EcalDigisFromPortableProducer",
      digisInLabelEB = cms.InputTag( 'hltEcalDigisSoA','ebDigis' ),
      digisInLabelEE = cms.InputTag( 'hltEcalDigisSoA','eeDigis' ),
      digisOutLabelEB = cms.string( "ebDigis" ),
      digisOutLabelEE = cms.string( "eeDigis" ),
      produceDummyIntegrityCollections = cms.bool( False )
  )
  ```

  ####### 4.4.1.4 hltEcalUncalibRecHitSoA 🔵
  ```python
  fragment.hltEcalUncalibRecHitSoA = cms.EDProducer( "EcalUncalibRecHitProducerPortable@alpaka",
    digisLabelEB = cms.InputTag( 'hltEcalDigisSoA','ebDigis' ),
    digisLabelEE = cms.InputTag( 'hltEcalDigisSoA','eeDigis' ),
    recHitsLabelEB = cms.string( "EcalUncalibRecHitsEB" ),
    recHitsLabelEE = cms.string( "EcalUncalibRecHitsEE" ),
    EBtimeFitLimits_Lower = cms.double( 0.2 ),
    EBtimeFitLimits_Upper = cms.double( 1.4 ),
    EEtimeFitLimits_Lower = cms.double( 0.2 ),
    EEtimeFitLimits_Upper = cms.double( 1.4 ),
    EBtimeConstantTerm = cms.double( 0.6 ),
    EEtimeConstantTerm = cms.double( 1.0 ),
    EBtimeNconst = cms.double( 28.5 ),
    EEtimeNconst = cms.double( 31.8 ),
    outOfTimeThresholdGain12pEB = cms.double( 1000.0 ),
    outOfTimeThresholdGain12mEB = cms.double( 1000.0 ),
    outOfTimeThresholdGain61pEB = cms.double( 1000.0 ),
    outOfTimeThresholdGain61mEB = cms.double( 1000.0 ),
    outOfTimeThresholdGain12pEE = cms.double( 1000.0 ),
    outOfTimeThresholdGain12mEE = cms.double( 1000.0 ),
    outOfTimeThresholdGain61pEE = cms.double( 1000.0 ),
    outOfTimeThresholdGain61mEE = cms.double( 1000.0 ),
    amplitudeThresholdEB = cms.double( 10.0 ),
    amplitudeThresholdEE = cms.double( 10.0 ),
    EBtimeFitParameters = cms.vdouble( -2.015452, 3.130702, -12.3473, 41.88921, -82.83944, 91.01147, -50.35761, 11.05621 ),
    EEtimeFitParameters = cms.vdouble( -2.390548, 3.553628, -17.62341, 67.67538, -133.213, 140.7432, -75.41106, 16.20277 ),
    EBamplitudeFitParameters = cms.vdouble( 1.138, 1.652 ),
    EEamplitudeFitParameters = cms.vdouble( 1.89, 1.4 ),
    kernelMinimizeThreads = cms.untracked.vuint32( 32, 1, 1 ),
    shouldRunTimingComputation = cms.bool( True ),
    alpaka = cms.untracked.PSet(  backend = cms.untracked.string( "" ) )
)
  ```

  ####### 4.4.1.5 hltEcalUncalibRecHit
  ```python
  fragment.hltEcalUncalibRecHit = cms.EDProducer( "EcalUncalibRecHitSoAToLegacy",
    inputCollectionEB = cms.InputTag( 'hltEcalUncalibRecHitSoA','EcalUncalibRecHitsEB' ),
    outputLabelEB = cms.string( "EcalUncalibRecHitsEB" ),
    isPhase2 = cms.bool( False ),
    inputCollectionEE = cms.InputTag( 'hltEcalUncalibRecHitSoA','EcalUncalibRecHitsEE' ),
    outputLabelEE = cms.string( "EcalUncalibRecHitsEE" )
)
  ```

  ####### 4.4.1.6 hltEcalDetIdToBeRecovered
  ```python
fragment.hltEcalDetIdToBeRecovered = cms.EDProducer( "EcalDetIdToBeRecoveredProducer",
    ebSrFlagCollection = cms.InputTag( "hltEcalDigisLegacy" ),
    eeSrFlagCollection = cms.InputTag( "hltEcalDigisLegacy" ),
    ebIntegrityGainErrors = cms.InputTag( 'hltEcalDigisLegacy','EcalIntegrityGainErrors' ),
    ebIntegrityGainSwitchErrors = cms.InputTag( 'hltEcalDigisLegacy','EcalIntegrityGainSwitchErrors' ),
    ebIntegrityChIdErrors = cms.InputTag( 'hltEcalDigisLegacy','EcalIntegrityChIdErrors' ),
    eeIntegrityGainErrors = cms.InputTag( 'hltEcalDigisLegacy','EcalIntegrityGainErrors' ),
    eeIntegrityGainSwitchErrors = cms.InputTag( 'hltEcalDigisLegacy','EcalIntegrityGainSwitchErrors' ),
    eeIntegrityChIdErrors = cms.InputTag( 'hltEcalDigisLegacy','EcalIntegrityChIdErrors' ),
    integrityTTIdErrors = cms.InputTag( 'hltEcalDigisLegacy','EcalIntegrityTTIdErrors' ),
    integrityBlockSizeErrors = cms.InputTag( 'hltEcalDigisLegacy','EcalIntegrityBlockSizeErrors' ),
    ebDetIdToBeRecovered = cms.string( "ebDetId" ),
    eeDetIdToBeRecovered = cms.string( "eeDetId" ),
    ebFEToBeRecovered = cms.string( "ebFE" ),
    eeFEToBeRecovered = cms.string( "eeFE" )
)
  ```

  ####### 4.4.1.7 hltEcalRecHit
  ```python
fragment.hltEcalRecHit = cms.EDProducer( "EcalRecHitProducer",
    EErechitCollection = cms.string( "EcalRecHitsEE" ),
    EEuncalibRecHitCollection = cms.InputTag( 'hltEcalUncalibRecHit','EcalUncalibRecHitsEE' ),
    EBuncalibRecHitCollection = cms.InputTag( 'hltEcalUncalibRecHit','EcalUncalibRecHitsEB' ),
    EBrechitCollection = cms.string( "EcalRecHitsEB" ),
    ChannelStatusToBeExcluded = cms.vstring(  ),
    killDeadChannels = cms.bool( True ),
    algo = cms.string( "EcalRecHitWorkerSimple" ),
    EBLaserMIN = cms.double( 0.5 ),
    EELaserMIN = cms.double( 0.5 ),
    EBLaserMAX = cms.double( 3.0 ),
    EELaserMAX = cms.double( 8.0 ),
    timeCalibTag = cms.ESInputTag( "","" ),
    timeOffsetTag = cms.ESInputTag( "","" ),
    skipTimeCalib = cms.bool( False ),
    laserCorrection = cms.bool( True ),
    flagsMapDBReco = cms.PSet( 
      kDead = cms.vstring( 'kNoDataNoTP' ),
      kGood = cms.vstring( 'kOk',
        'kDAC',
        'kNoLaser',
        'kNoisy' ),
      kTowerRecovered = cms.vstring( 'kDeadFE' ),
      kNoisy = cms.vstring( 'kNNoisy',
        'kFixedG6',
        'kFixedG1' ),
      kNeighboursRecovered = cms.vstring( 'kFixedG0',
        'kNonRespondingIsolated',
        'kDeadVFE' )
    ),
    algoRecover = cms.string( "EcalRecHitWorkerRecover" ),
    recoverEBIsolatedChannels = cms.bool( False ),
    recoverEEIsolatedChannels = cms.bool( False ),
    recoverEBVFE = cms.bool( False ),
    recoverEEVFE = cms.bool( False ),
    recoverEBFE = cms.bool( False ),
    recoverEEFE = cms.bool( False ),
    dbStatusToBeExcludedEE = cms.vint32( 14, 78, 142 ),
    dbStatusToBeExcludedEB = cms.vint32( 14, 78, 142 ),
    logWarningEtThreshold_EB_FE = cms.double( -1.0 ),
    logWarningEtThreshold_EE_FE = cms.double( -1.0 ),
    ebDetIdToBeRecovered = cms.InputTag( 'hltEcalDetIdToBeRecovered','ebDetId' ),
    eeDetIdToBeRecovered = cms.InputTag( 'hltEcalDetIdToBeRecovered','eeDetId' ),
    ebFEToBeRecovered = cms.InputTag( 'hltEcalDetIdToBeRecovered','ebFE' ),
    eeFEToBeRecovered = cms.InputTag( 'hltEcalDetIdToBeRecovered','eeFE' ),
    singleChannelRecoveryMethod = cms.string( "NeuralNetworks" ),
    singleChannelRecoveryThreshold = cms.double( 8.0 ),
    sum8ChannelRecoveryThreshold = cms.double( 0.0 ),
    bdtWeightFileNoCracks = cms.FileInPath( "RecoLocalCalo/EcalDeadChannelRecoveryAlgos/data/BDTWeights/bdtgAllRH_8GT700MeV_noCracks_ZskimData2017_v1.xml" ),
    bdtWeightFileCracks = cms.FileInPath( "RecoLocalCalo/EcalDeadChannelRecoveryAlgos/data/BDTWeights/bdtgAllRH_8GT700MeV_onlyCracks_ZskimData2017_v1.xml" ),
    triggerPrimitiveDigiCollection = cms.InputTag( 'hltEcalDigisLegacy','EcalTriggerPrimitives' ),
    cleaningConfig = cms.PSet( 
      cThreshold_endcap = cms.double( 15.0 ),
      tightenCrack_e1_double = cms.double( 2.0 ),
      cThreshold_barrel = cms.double( 4.0 ),
      e6e2thresh = cms.double( 0.04 ),
      e4e1Threshold_barrel = cms.double( 0.08 ),
      e4e1Threshold_endcap = cms.double( 0.3 ),
      tightenCrack_e4e1_single = cms.double( 3.0 ),
      cThreshold_double = cms.double( 10.0 ),
      e4e1_b_barrel = cms.double( -0.024 ),
      tightenCrack_e6e2_double = cms.double( 3.0 ),
      e4e1_a_barrel = cms.double( 0.04 ),
      tightenCrack_e1_single = cms.double( 2.0 ),
      e4e1_a_endcap = cms.double( 0.02 ),
      e4e1_b_endcap = cms.double( -0.0125 ),
      ignoreOutOfTimeThresh = cms.double( 1.0E9 )
    )
)
  ```

###### 4.4.2 HLTDoLocalHcalSequence
```python
fragment.HLTDoLocalHcalSequence = cms.Sequence(
    4.4.2.1 fragment.hltHcalDigis +
    4.4.2.2 fragment.hltHcalDigisSoA + 
    4.4.2.3 fragment.hltHbheRecoSoA +
    4.4.2.4 fragment.hltHbhereco +
    4.4.2.5 fragment.hltHfprereco +
    4.4.2.6 fragment.hltHfreco +
    4.4.2.7 fragment.hltHoreco )
```

  ####### 4.4.2.1 hltHcalDigis
  ```python
fragment.hltHcalDigis = cms.EDProducer( "HcalRawToDigi",
    HcalFirstFED = cms.untracked.int32( 700 ),
    firstSample = cms.int32( 0 ),
    lastSample = cms.int32( 9 ),
    FilterDataQuality = cms.bool( True ),
    FEDs = cms.untracked.vint32(  ),
    UnpackZDC = cms.untracked.bool( True ),
    UnpackCalib = cms.untracked.bool( True ),
    UnpackUMNio = cms.untracked.bool( True ),
    UnpackTTP = cms.untracked.bool( False ),
    silent = cms.untracked.bool( True ),
    saveQIE10DataNSamples = cms.untracked.vint32(  ),
    saveQIE10DataTags = cms.untracked.vstring(  ),
    saveQIE11DataNSamples = cms.untracked.vint32(  ),
    saveQIE11DataTags = cms.untracked.vstring(  ),
    ComplainEmptyData = cms.untracked.bool( False ),
    UnpackerMode = cms.untracked.int32( 0 ),
    ExpectedOrbitMessageTime = cms.untracked.int32( -1 ),
    InputLabel = cms.InputTag( "rawDataCollector" ),
    ElectronicsMap = cms.string( "" )
)
  ```

  ####### 4.4.2.2 hltHcalDigisSoA
  ```python
fragment.hltHcalDigisSoA = cms.EDProducer( "HcalDigisSoAProducer@alpaka",
    hbheDigisLabel = cms.InputTag( "hltHcalDigis" ),
    qie11DigiLabel = cms.InputTag( "hltHcalDigis" ),
    digisLabelF01HE = cms.string( "f01HEDigis" ),
    digisLabelF5HB = cms.string( "f5HBDigis" ),
    digisLabelF3HB = cms.string( "f3HBDigis" ),
    maxChannelsF01HE = cms.uint32( 10000 ),
    maxChannelsF5HB = cms.uint32( 10000 ),
    maxChannelsF3HB = cms.uint32( 10000 ),
    alpaka = cms.untracked.PSet(  backend = cms.untracked.string( "" ) )
)
  ```

  ####### 4.4.2.3 hltHbheRecoSoA
  ```python
fragment.hltHbheRecoSoA = cms.EDProducer( "HBHERecHitProducerPortable@alpaka",
    maxTimeSamples = cms.uint32( 10 ),
    kprep1dChannelsPerBlock = cms.uint32( 32 ),
    digisLabelF01HE = cms.InputTag( 'hltHcalDigisSoA','f01HEDigis' ),
    digisLabelF5HB = cms.InputTag( 'hltHcalDigisSoA','f5HBDigis' ),
    digisLabelF3HB = cms.InputTag( 'hltHcalDigisSoA','f3HBDigis' ),
    recHitsLabelM0HBHE = cms.string( "" ),
    sipmQTSShift = cms.int32( 0 ),
    sipmQNTStoSum = cms.int32( 3 ),
    firstSampleShift = cms.int32( 0 ),
    useEffectivePedestals = cms.bool( True ),
    meanTime = cms.double( 0.0 ),
    timeSigmaSiPM = cms.double( 2.5 ),
    timeSigmaHPD = cms.double( 5.0 ),
    ts4Thresh = cms.double( 0.0 ),
    applyTimeSlew = cms.bool( True ),
    tzeroTimeSlewParameters = cms.vdouble( 23.960177, 11.977461, 9.109694 ),
    slopeTimeSlewParameters = cms.vdouble( -3.178648, -1.5610227, -1.075824 ),
    tmaxTimeSlewParameters = cms.vdouble( 16.0, 10.0, 6.25 ),
    kernelMinimizeThreads = cms.vuint32( 16, 1, 1 ),
    pulseOffsets = cms.vint32( -3, -2, -1, 0, 1, 2, 3, 4 ),
    alpaka = cms.untracked.PSet(  backend = cms.untracked.string( "" ) )
)
  ```

  ####### 4.4.2.4 hltHbhereco
  ```python
fragment.hltHbhereco = cms.EDProducer( "HcalRecHitSoAToLegacy",
    src = cms.InputTag( "hltHbheRecoSoA" )
)
  ```

  ####### 4.4.2.5 hltHfprereco
  ```python
fragment.hltHfprereco = cms.EDProducer( "HFPreReconstructor",
    digiLabel = cms.InputTag( "hltHcalDigis" ),
    forceSOI = cms.int32( -1 ),
    soiShift = cms.int32( 0 ),
    dropZSmarkedPassed = cms.bool( True ),
    tsFromDB = cms.bool( False ),
    sumAllTimeSlices = cms.bool( False )
)
  ```

  ####### 4.4.2.6 hltHfreco
  ```python
fragment.hltHfreco = cms.EDProducer( "HFPhase1Reconstructor",
    inputLabel = cms.InputTag( "hltHfprereco" ),
    algoConfigClass = cms.string( "HFPhase1PMTParams" ),
    useChannelQualityFromDB = cms.bool( False ),
    checkChannelQualityForDepth3and4 = cms.bool( False ),
    algorithm = cms.PSet( 
      tfallIfNoTDC = cms.double( -101.0 ),
      triseIfNoTDC = cms.double( -100.0 ),
      rejectAllFailures = cms.bool( True ),
      energyWeights = cms.vdouble( 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 2.0, 0.0, 2.0, 0.0, 2.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 2.0, 0.0, 2.0, 0.0, 2.0, 0.0, 1.0 ),
      soiPhase = cms.uint32( 1 ),
      timeShift = cms.double( 0.0 ),
      tlimits = cms.vdouble( -1000.0, 1000.0, -1000.0, 1000.0 ),
      Class = cms.string( "HFFlexibleTimeCheck" )
    ),
    runHFStripFilter = cms.bool( False ),
    HFStripFilter = cms.PSet( 
      seedHitIetaMax = cms.int32( 35 ),
      verboseLevel = cms.untracked.int32( 10 ),
      maxThreshold = cms.double( 100.0 ),
      stripThreshold = cms.double( 40.0 ),
      wedgeCut = cms.double( 0.05 ),
      lstrips = cms.int32( 2 ),
      maxStripTime = cms.double( 10.0 ),
      gap = cms.int32( 2 ),
      timeMax = cms.double( 6.0 )
    ),
    setNoiseFlags = cms.bool( True ),
    S9S1stat = cms.PSet( 
      shortEnergyParams = cms.vdouble( 35.1773, 35.37, 35.7933, 36.4472, 37.3317, 38.4468, 39.7925, 41.3688, 43.1757, 45.2132, 47.4813, 49.98, 52.7093 ),
      shortETParams = cms.vdouble( 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ),
      long_optimumSlope = cms.vdouble( -99999.0, 0.0164905, 0.0238698, 0.0321383, 0.041296, 0.0513428, 0.0622789, 0.0741041, 0.0868186, 0.100422, 0.135313, 0.136289, 0.0589927 ),
      isS8S1 = cms.bool( False ),
      longETParams = cms.vdouble( 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ),
      longEnergyParams = cms.vdouble( 43.5, 45.7, 48.32, 51.36, 54.82, 58.7, 63.0, 67.72, 72.86, 78.42, 84.4, 90.8, 97.62 ),
      short_optimumSlope = cms.vdouble( -99999.0, 0.0164905, 0.0238698, 0.0321383, 0.041296, 0.0513428, 0.0622789, 0.0741041, 0.0868186, 0.100422, 0.135313, 0.136289, 0.0589927 ),
      HcalAcceptSeverityLevel = cms.int32( 9 )
    ),
    S8S1stat = cms.PSet( 
      shortEnergyParams = cms.vdouble( 40.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0 ),
      shortETParams = cms.vdouble( 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ),
      long_optimumSlope = cms.vdouble( 0.3, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1 ),
      isS8S1 = cms.bool( True ),
      longETParams = cms.vdouble( 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ),
      longEnergyParams = cms.vdouble( 40.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0 ),
      short_optimumSlope = cms.vdouble( 0.3, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1 ),
      HcalAcceptSeverityLevel = cms.int32( 9 )
    ),
    PETstat = cms.PSet( 
      shortEnergyParams = cms.vdouble( 35.1773, 35.37, 35.7933, 36.4472, 37.3317, 38.4468, 39.7925, 41.3688, 43.1757, 45.2132, 47.4813, 49.98, 52.7093 ),
      shortETParams = cms.vdouble( 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ),
      long_R_29 = cms.vdouble( 0.8 ),
      longETParams = cms.vdouble( 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ),
      longEnergyParams = cms.vdouble( 43.5, 45.7, 48.32, 51.36, 54.82, 58.7, 63.0, 67.72, 72.86, 78.42, 84.4, 90.8, 97.62 ),
      short_R_29 = cms.vdouble( 0.8 ),
      long_R = cms.vdouble( 0.98 ),
      short_R = cms.vdouble( 0.8 ),
      HcalAcceptSeverityLevel = cms.int32( 9 )
    )
)
  ```

  ####### 4.4.2.7 hltHoreco
  ```python
fragment.hltHoreco = cms.EDProducer( "HcalHitReconstructor",
    correctForTimeslew = cms.bool( True ),
    correctForPhaseContainment = cms.bool( True ),
    correctionPhaseNS = cms.double( 13.0 ),
    digiLabel = cms.InputTag( "hltHcalDigis" ),
    correctTiming = cms.bool( False ),
    dropZSmarkedPassed = cms.bool( True ),
    firstAuxTS = cms.int32( 4 ),
    firstSample = cms.int32( 4 ),
    samplesToAdd = cms.int32( 4 ),
    tsFromDB = cms.bool( True ),
    useLeakCorrection = cms.bool( False ),
    recoParamsFromDB = cms.bool( True ),
    setNegativeFlags = cms.bool( False ),
    saturationParameters = cms.PSet(  maxADCvalue = cms.int32( 127 ) ),
    setSaturationFlags = cms.bool( False ),
    Subdetector = cms.string( "HO" ),
    digiTimeFromDB = cms.bool( True ),
    hfTimingTrustParameters = cms.PSet(  ),
    setTimingTrustFlags = cms.bool( False ),
    setNoiseFlags = cms.bool( False ),
    digistat = cms.PSet(  ),
    HFInWindowStat = cms.PSet(  ),
    S9S1stat = cms.PSet(  ),
    S8S1stat = cms.PSet(  ),
    PETstat = cms.PSet(  ),
    dataOOTCorrectionName = cms.string( "" ),
    dataOOTCorrectionCategory = cms.string( "Data" ),
    mcOOTCorrectionName = cms.string( "" ),
    mcOOTCorrectionCategory = cms.string( "MC" )
)
  ```
--- 
upper this line , git change does not mean there is a change between phase 1,2 

###### 4.4.3 hltTowerMakerForAll
```python
fragment.hltTowerMakerForAll = cms.EDProducer( "CaloTowersCreator",
    EBSumThreshold = cms.double( 0.2 ),
    HF2Weight = cms.double( 1.0 ),
    EBWeight = cms.double( 1.0 ),
    hfInput = cms.InputTag( "hltHfreco" ),
    EESumThreshold = cms.double( 0.45 ),
    HOThreshold0 = cms.double( 3.5 ),
    HOThresholdPlus1 = cms.double( 3.5 ),
    HOThresholdMinus1 = cms.double( 3.5 ),
    HOThresholdPlus2 = cms.double( 3.5 ),
    HOThresholdMinus2 = cms.double( 3.5 ),
    HBGrid = cms.vdouble(  ),
    HBThreshold1 = cms.double( 0.4 ),
    HBThreshold2 = cms.double( 0.3 ),
    HBThreshold = cms.double( 0.3 ),
    EEWeights = cms.vdouble(  ),
    HF1Threshold = cms.double( 0.5 ),
    HF2Weights = cms.vdouble(  ),
    HOWeights = cms.vdouble(  ),
    EEGrid = cms.vdouble(  ),
    HEDWeight = cms.double( 1.0 ),
    EEWeight = cms.double( 1.0 ),
    UseHO = cms.bool( False ),
    HBWeights = cms.vdouble(  ),
    HESWeight = cms.double( 1.0 ),
    HF1Weight = cms.double( 1.0 ),
    HF2Grid = cms.vdouble(  ),
    HEDWeights = cms.vdouble(  ),
    HF1Grid = cms.vdouble(  ),
    EBWeights = cms.vdouble(  ),
    HOWeight = cms.double( 1.0E-99 ),
    EBThreshold = cms.double( 0.07 ),
    EEThreshold = cms.double( 0.3 ),
    UseEtEBTreshold = cms.bool( False ),
    UseSymEBTreshold = cms.bool( False ),
    UseEtEETreshold = cms.bool( False ),
    UseSymEETreshold = cms.bool( False ),
    hbheInput = cms.InputTag( "hltHbhereco" ),
    HcalThreshold = cms.double( -1000.0 ),
    HF2Threshold = cms.double( 0.85 ),
    HESThreshold1 = cms.double( 0.1 ),
    HESThreshold = cms.double( 0.2 ),
    HF1Weights = cms.vdouble(  ),
    hoInput = cms.InputTag( "hltHoreco" ),
    HESGrid = cms.vdouble(  ),
    HESWeights = cms.vdouble(  ),
    HEDThreshold1 = cms.double( 0.1 ),
    HEDThreshold = cms.double( 0.2 ),
    EcutTower = cms.double( -1000.0 ),
    HEDGrid = cms.vdouble(  ),
    ecalInputs = cms.VInputTag( 'hltEcalRecHit:EcalRecHitsEB','hltEcalRecHit:EcalRecHitsEE' ),
    HBWeight = cms.double( 1.0 ),
    HOGrid = cms.vdouble(  ),
    EBGrid = cms.vdouble(  ),
    MomConstrMethod = cms.int32( 1 ),
    MomHBDepth = cms.double( 0.2 ),
    MomHEDepth = cms.double( 0.4 ),
    MomEBDepth = cms.double( 0.3 ),
    MomEEDepth = cms.double( 0.0 ),
    HcalAcceptSeverityLevel = cms.uint32( 9 ),
    EcalRecHitSeveritiesToBeExcluded = cms.vstring( 'kTime',
      'kWeird',
      'kBad' ),
    UseHcalRecoveredHits = cms.bool( False ),
    UseEcalRecoveredHits = cms.bool( False ),
    UseRejectedHitsOnly = cms.bool( False ),
    HcalAcceptSeverityLevelForRejectedHit = cms.uint32( 9999 ),
    EcalSeveritiesToBeUsedInBadTowers = cms.vstring(  ),
    UseRejectedRecoveredHcalHits = cms.bool( False ),
    UseRejectedRecoveredEcalHits = cms.bool( False ),
    missingHcalRescaleFactorForEcal = cms.double( 0.0 ),
    AllowMissingInputs = cms.bool( False ),
    HcalPhase = cms.int32( 1 ),
    usePFThresholdsFromDB = cms.bool( True ),
    EcalRecHitThresh = cms.bool( True )
)
```

##### 4.5 hltL1sDoubleTauBigOR
```python
fragment.hltL1sDoubleTauBigOR = cms.EDFilter( "HLTL1TSeed",
    saveTags = cms.bool( True ),
    L1SeedsLogicalExpression = cms.string( "L1_DoubleIsoTau32er2p1 OR L1_DoubleIsoTau34er2p1 OR L1_DoubleIsoTau35er2p1 OR L1_DoubleIsoTau36er2p1 OR L1_DoubleTau70er2p1" ),
    L1ObjectMapInputTag = cms.InputTag( "hltGtStage2ObjectMap" ),
    L1GlobalInputTag = cms.InputTag( "hltGtStage2Digis" ),
    L1MuonInputTag = cms.InputTag( 'hltGtStage2Digis','Muon' ),
    L1MuonShowerInputTag = cms.InputTag( 'hltGtStage2Digis','MuonShower' ),
    L1EGammaInputTag = cms.InputTag( 'hltGtStage2Digis','EGamma' ),
    L1JetInputTag = cms.InputTag( 'hltGtStage2Digis','Jet' ),
    L1TauInputTag = cms.InputTag( 'hltGtStage2Digis','Tau' ),
    L1EtSumInputTag = cms.InputTag( 'hltGtStage2Digis','EtSum' ),
    L1EtSumZdcInputTag = cms.InputTag( 'hltGtStage2Digis','EtSumZDC' )
)
```

##### 4.6 hltL1sSingleTau
```python
fragment.hltL1sSingleTau = cms.EDFilter( "HLTL1TSeed",
    saveTags = cms.bool( True ),
    L1SeedsLogicalExpression = cms.string( "L1_SingleTau120er2p1 OR L1_SingleTau130er2p1" ),
    L1ObjectMapInputTag = cms.InputTag( "hltGtStage2ObjectMap" ),
    L1GlobalInputTag = cms.InputTag( "hltGtStage2Digis" ),
    L1MuonInputTag = cms.InputTag( 'hltGtStage2Digis','Muon' ),
    L1MuonShowerInputTag = cms.InputTag( 'hltGtStage2Digis','MuonShower' ),
    L1EGammaInputTag = cms.InputTag( 'hltGtStage2Digis','EGamma' ),
    L1JetInputTag = cms.InputTag( 'hltGtStage2Digis','Jet' ),
    L1TauInputTag = cms.InputTag( 'hltGtStage2Digis','Tau' ),
    L1EtSumInputTag = cms.InputTag( 'hltGtStage2Digis','EtSum' ),
    L1EtSumZdcInputTag = cms.InputTag( 'hltGtStage2Digis','EtSumZDC' )
)
```

##### 4.7 hltL1sBigOrMuXXerIsoTauYYer
```python
fragment.hltL1sBigOrMuXXerIsoTauYYer = cms.EDFilter( "HLTL1TSeed",
    saveTags = cms.bool( True ),
    L1SeedsLogicalExpression = cms.string( "L1_Mu22er2p1_IsoTau32er2p1 OR L1_Mu22er2p1_IsoTau34er2p1 OR L1_Mu22er2p1_Tau70er2p1" ),
    L1ObjectMapInputTag = cms.InputTag( "hltGtStage2ObjectMap" ),
    L1GlobalInputTag = cms.InputTag( "hltGtStage2Digis" ),
    L1MuonInputTag = cms.InputTag( 'hltGtStage2Digis','Muon' ),
    L1MuonShowerInputTag = cms.InputTag( 'hltGtStage2Digis','MuonShower' ),
    L1EGammaInputTag = cms.InputTag( 'hltGtStage2Digis','EGamma' ),
    L1JetInputTag = cms.InputTag( 'hltGtStage2Digis','Jet' ),
    L1TauInputTag = cms.InputTag( 'hltGtStage2Digis','Tau' ),
    L1EtSumInputTag = cms.InputTag( 'hltGtStage2Digis','EtSum' ),
    L1EtSumZdcInputTag = cms.InputTag( 'hltGtStage2Digis','EtSumZDC' )
)
```

##### 4.8 hltL1sMu22erIsoTau40er
```python
fragment.hltL1sMu22erIsoTau40er = cms.EDFilter( "HLTL1TSeed",
    saveTags = cms.bool( True ),
    L1SeedsLogicalExpression = cms.string( "L1_Mu22er2p1_IsoTau40er2p1" ),
    L1ObjectMapInputTag = cms.InputTag( "hltGtStage2ObjectMap" ),
    L1GlobalInputTag = cms.InputTag( "hltGtStage2Digis" ),
    L1MuonInputTag = cms.InputTag( 'hltGtStage2Digis','Muon' ),
    L1MuonShowerInputTag = cms.InputTag( 'hltGtStage2Digis','MuonShower' ),
    L1EGammaInputTag = cms.InputTag( 'hltGtStage2Digis','EGamma' ),
    L1JetInputTag = cms.InputTag( 'hltGtStage2Digis','Jet' ),
    L1TauInputTag = cms.InputTag( 'hltGtStage2Digis','Tau' ),
    L1EtSumInputTag = cms.InputTag( 'hltGtStage2Digis','EtSum' ),
    L1EtSumZdcInputTag = cms.InputTag( 'hltGtStage2Digis','EtSumZDC' )
)
```

##### 4.9 hltL1sBigORDoubleTauJet
```python
fragment.hltL1sBigORDoubleTauJet = cms.EDFilter( "HLTL1TSeed",
    saveTags = cms.bool( True ),
    L1SeedsLogicalExpression = cms.string( "L1_DoubleTau_Iso34_Iso23_er2p1_Jet55_RmOvlp_dR0p5 OR L1_DoubleTau_Iso34_Iso26_er2p1_Jet55_RmOvlp_dR0p5 OR L1_DoubleTau_Iso34_Iso23_er2p1_Jet70_RmOvlp_dR0p5 OR L1_DoubleTau_Iso34_Iso26_er2p1_Jet70_RmOvlp_dR0p5" ),
    L1ObjectMapInputTag = cms.InputTag( "hltGtStage2ObjectMap" ),
    L1GlobalInputTag = cms.InputTag( "hltGtStage2Digis" ),
    L1MuonInputTag = cms.InputTag( 'hltGtStage2Digis','Muon' ),
    L1MuonShowerInputTag = cms.InputTag( 'hltGtStage2Digis','MuonShower' ),
    L1EGammaInputTag = cms.InputTag( 'hltGtStage2Digis','EGamma' ),
    L1JetInputTag = cms.InputTag( 'hltGtStage2Digis','Jet' ),
    L1TauInputTag = cms.InputTag( 'hltGtStage2Digis','Tau' ),
    L1EtSumInputTag = cms.InputTag( 'hltGtStage2Digis','EtSum' ),
    L1EtSumZdcInputTag = cms.InputTag( 'hltGtStage2Digis','EtSumZDC' )
)
```

##### 4.10 hltL1VBFDiJetIsoTau
```python
fragment.hltL1VBFDiJetIsoTau = cms.EDFilter( "HLTL1TSeed",
    saveTags = cms.bool( True ),
    L1SeedsLogicalExpression = cms.string( "L1_DoubleJet45_Mass_Min550_IsoTau45er2p1_RmOvlp_dR0p5 OR L1_DoubleJet45_Mass_Min600_IsoTau45er2p1_RmOvlp_dR0p5 OR L1_DoubleJet45_Mass_Min700_IsoTau45er2p1_RmOvlp_dR0p5 OR L1_DoubleJet45_Mass_Min800_IsoTau45er2p1_RmOvlp_dR0p5" ),
    L1ObjectMapInputTag = cms.InputTag( "hltGtStage2ObjectMap" ),
    L1GlobalInputTag = cms.InputTag( "hltGtStage2Digis" ),
    L1MuonInputTag = cms.InputTag( 'hltGtStage2Digis','Muon' ),
    L1MuonShowerInputTag = cms.InputTag( 'hltGtStage2Digis','MuonShower' ),
    L1EGammaInputTag = cms.InputTag( 'hltGtStage2Digis','EGamma' ),
    L1JetInputTag = cms.InputTag( 'hltGtStage2Digis','Jet' ),
    L1TauInputTag = cms.InputTag( 'hltGtStage2Digis','Tau' ),
    L1EtSumInputTag = cms.InputTag( 'hltGtStage2Digis','EtSum' ),
    L1EtSumZdcInputTag = cms.InputTag( 'hltGtStage2Digis','EtSumZDC' )
)
```

##### 4.11 hltL1sVeryBigORMu18erTauXXer2p1
```python
fragment.hltL1sVeryBigORMu18erTauXXer2p1 = cms.EDFilter( "HLTL1TSeed",
    saveTags = cms.bool( True ),
    L1SeedsLogicalExpression = cms.string( "L1_Mu18er2p1_Tau24er2p1 OR L1_Mu18er2p1_Tau26er2p1 OR L1_Mu18er2p1_Tau26er2p1_Jet55 OR L1_Mu18er2p1_Tau26er2p1_Jet70" ),
    L1ObjectMapInputTag = cms.InputTag( "hltGtStage2ObjectMap" ),
    L1GlobalInputTag = cms.InputTag( "hltGtStage2Digis" ),
    L1MuonInputTag = cms.InputTag( 'hltGtStage2Digis','Muon' ),
    L1MuonShowerInputTag = cms.InputTag( 'hltGtStage2Digis','MuonShower' ),
    L1EGammaInputTag = cms.InputTag( 'hltGtStage2Digis','EGamma' ),
    L1JetInputTag = cms.InputTag( 'hltGtStage2Digis','Jet' ),
    L1TauInputTag = cms.InputTag( 'hltGtStage2Digis','Tau' ),
    L1EtSumInputTag = cms.InputTag( 'hltGtStage2Digis','EtSum' ),
    L1EtSumZdcInputTag = cms.InputTag( 'hltGtStage2Digis','EtSumZDC' )
)
```

##### ~~ 4.12 hltL1sDoubleTauBigORWithLowMass ~~  🟨 
```python
fragment.hltL1sDoubleTauBigORWithLowMass = cms.EDFilter( "HLTL1TSeed",
    saveTags = cms.bool( True ),
    L1SeedsLogicalExpression = cms.string( "L1_DoubleIsoTau32er2p1 OR L1_DoubleIsoTau34er2p1 OR L1_DoubleIsoTau35er2p1 OR L1_DoubleIsoTau36er2p1 OR L1_DoubleTau70er2p1 OR L1_DoubleIsoTau32er2p1_Mass_Max80" ),
    L1ObjectMapInputTag = cms.InputTag( "hltGtStage2ObjectMap" ),
    L1GlobalInputTag = cms.InputTag( "hltGtStage2Digis" ),
    L1MuonInputTag = cms.InputTag( 'hltGtStage2Digis','Muon' ),
    L1MuonShowerInputTag = cms.InputTag( 'hltGtStage2Digis','MuonShower' ),
    L1EGammaInputTag = cms.InputTag( 'hltGtStage2Digis','EGamma' ),
    L1JetInputTag = cms.InputTag( 'hltGtStage2Digis','Jet' ),
    L1TauInputTag = cms.InputTag( 'hltGtStage2Digis','Tau' ),
    L1EtSumInputTag = cms.InputTag( 'hltGtStage2Digis','EtSum' ),
    L1EtSumZdcInputTag = cms.InputTag( 'hltGtStage2Digis','EtSumZDC' )
) 
```
##### 4.12 hltL1sDoubleTauBigOR  🔵
```python 
fragment.hltL1sDoubleTauBigOR = cms.EDFilter( "HLTL1TSeed",
    saveTags = cms.bool( True ),
    L1SeedsLogicalExpression = cms.string( "L1_DoubleIsoTau32er2p1 OR L1_DoubleIsoTau34er2p1 OR L1_DoubleIsoTau35er2p1 OR L1_DoubleIsoTau36er2p1 OR L1_DoubleTau70er2p1" ),
    L1ObjectMapInputTag = cms.InputTag( "hltGtStage2ObjectMap" ),
    L1GlobalInputTag = cms.InputTag( "hltGtStage2Digis" ),
    L1MuonInputTag = cms.InputTag( 'hltGtStage2Digis','Muon' ),
    L1MuonShowerInputTag = cms.InputTag( 'hltGtStage2Digis','MuonShower' ),
    L1EGammaInputTag = cms.InputTag( 'hltGtStage2Digis','EGamma' ),
    L1JetInputTag = cms.InputTag( 'hltGtStage2Digis','Jet' ),
    L1TauInputTag = cms.InputTag( 'hltGtStage2Digis','Tau' ),
    L1EtSumInputTag = cms.InputTag( 'hltGtStage2Digis','EtSum' ),
    L1EtSumZdcInputTag = cms.InputTag( 'hltGtStage2Digis','EtSumZDC' )
)
```

##### 4.13 hltL2TauTagNNProducer
```python
fragment.hltL2TauTagNNProducer = cms.EDProducer( "L2TauNNProducerAlpaka",
    debugLevel = cms.int32( 0 ),
    L1Taus = cms.VPSet( 
      cms.PSet(  L1TauTrigger = cms.InputTag( "hltL1sDoubleTauBigOR" ),
        L1CollectionName = cms.string( "DoubleTau" )
      ),
      cms.PSet(  L1TauTrigger = cms.InputTag( "hltL1sSingleTau" ),
        L1CollectionName = cms.string( "SingleTau" )
      ),
      cms.PSet(  L1TauTrigger = cms.InputTag( "hltL1sBigOrMuXXerIsoTauYYer" ),
        L1CollectionName = cms.string( "MuXXTauYY" )
      ),
      cms.PSet(  L1TauTrigger = cms.InputTag( "hltL1sMu22erIsoTau40er" ),
        L1CollectionName = cms.string( "Mu22Tau40" )
      ),
      cms.PSet(  L1TauTrigger = cms.InputTag( "hltL1sBigORDoubleTauJet" ),
        L1CollectionName = cms.string( "DoubleTauJet" )
      ),
      cms.PSet(  L1TauTrigger = cms.InputTag( "hltL1VBFDiJetIsoTau" ),
        L1CollectionName = cms.string( "VBFIsoTau" )
      ),
      cms.PSet(  L1TauTrigger = cms.InputTag( "hltL1sVeryBigORMu18erTauXXer2p1" ),
        L1CollectionName = cms.string( "Mu18TauXX" )
      ),
      cms.PSet(  L1TauTrigger = cms.InputTag( "hltL1sTauVeryBigOR" ),
        L1CollectionName = cms.string( "TauVeryBigOR" )
      )
    ),
    hbheInput = cms.InputTag( "hltHbhereco" ),
    hoInput = cms.InputTag( "hltHoreco" ),
    ebInput = cms.InputTag( 'hltEcalRecHit','EcalRecHitsEB' ),
    eeInput = cms.InputTag( 'hltEcalRecHit','EcalRecHitsEE' ),
    pataVertices = cms.InputTag( "hltPixelVerticesSoA" ),
    pataTracks = cms.InputTag( "hltPixelTracksSoA" ),
    BeamSpot = cms.InputTag( "hltOnlineBeamSpot" ),
    maxVtx = cms.uint32( 100 ),
    fractionSumPt2 = cms.double( 0.3 ),
    minSumPt2 = cms.double( 0.0 ),
    track_pt_min = cms.double( 1.0 ),
    track_pt_max = cms.double( 10.0 ),
    track_chi2_max = cms.double( 99999.0 ),
    graphPath = cms.string( "RecoTauTag/TrainingFiles/data/L2TauNNTag/L2TauTag_Run3v1.pb" ),
    normalizationDict = cms.string( "RecoTauTag/TrainingFiles/data/L2TauNNTag/NormalizationDict.json" )
)
```





# 5. hltL2SingleTauTagNNFilter ✅
```python
fragment.hltL2SingleTauTagNNFilter = cms.EDFilter( "L2TauTagFilter",
    saveTags = cms.bool( True ),
    nExpected = cms.int32( 1 ),
    L1TauSrc = cms.InputTag( "hltL1sSingleTau" ),
    L2Outcomes = cms.InputTag( 'hltL2TauTagNNProducer','SingleTau' ),
    DiscrWP = cms.double( 0.8517 ),
    l1TauPtThreshold = cms.double( 250.0 )
)
```

# 6. ❌ (HLTGlobalPFTauHPSSequence)

# 7. ❌ (HLTLooseSingleTauWPDeepTauPFTau)

# 8. ❌ (hltL1JetsHLTPFTauLooseSingleTauWPDeepTauMatch)

# 9. ❌ (hltSelectedPFTau180LooseSingleTauWPDeepTauL1HLTMatched)

# 10. HLTEndSequence ✅ 
```python
fragment.HLTEndSequence = cms.Sequence( fragment.hltBoolEnd )
```