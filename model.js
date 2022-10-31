
let firstSpot = {
    x: -4.4036819083451295,
    y: -1.7130040172565506,
    z: 1.0401400866140904
}

let secondSpot = {
    x: -4.863264634035892,
    y: -1.5729439743469966,
    z: 11.361438220831689
}

let thirdSpot = {
    "x": -3.8095848903623453,
    "y": -0.9643298193154517,
    "z": 19.79980810572306
}

let fourthSpot = {
    x: -12.38877332137508,
    y: 0.3311254395614784,
    z: 29.21812784032301
}

let fifthSpot = {
    x: -35.0466767684293,
    y: -3.2437044316245203,
    z: 29.72909169859804
}

let sixthSpot = {
    "x": -16.330346407559603,
    "y": 1.2759235196256982,
    "z": 17.790676193981337
}

let seventhSpot = {
    "x": -11.140684686670737,
    "y": 1.8492447333341975,
    "z": 4.7149387078883755
}

let eightSpot = {
    "x": -30.522670349274033,
    "y": 0.7023224583135896,
    "z": 1.819407862865846
}

let ninethSpot = {
    "x": -30.754261389946112,
    "y": 0.6864115239197299,
    "z": -23.52924908277821
}

let tenthSpot = {
    "x": -6.001961062609162,
    "y": 2.0796470426658997,
    "z": -23.6342003615527
}

let eleventhSpot = {
    "x": 7.618028028634108,
    "y": 1.7923599500506262,
    "z": -16.782688087521326
}

let twelvethSpot = {
    "x": 6.381414810894141,
    "y": 0.971023969523452,
    "z": -10.086772641540747
}

let thirteenthSpot = {
    "x": -15.442913418793596,
    "y": 2.3248418619318634,
    "z": -15.803172658193478
}

let fourteenthSpot = {
    "x": 6.381414810894141,
    "y": 0.971023969523452,
    "z": -10.086772641540747
}

let fifteenSpot = {
    "x": 8.059554897167299,
    "y": 2.1399787167017017,
    "z": -9.804286187206623
}

let sixteenSpot = {
    "x": 23.173594042884602,
    "y": 0.27200547154172633,
    "z": 7.969080715391346
}

let lastSpot = {
    x: -15.61,
    y: 17.13,
    z: 56.66
}



function testRun() {
    // move to first spot after 2 seconds and then next and then so on
    
    setTimeout(() => moveCamera(firstSpot), 2000)
    setTimeout(() => moveCamera(secondSpot), 4000)
    setTimeout(() => moveCamera(thirdSpot), 6000)
    setTimeout(() => moveCamera(fourthSpot), 8000)
    setTimeout(() => moveCamera(fifthSpot), 10000)
    setTimeout(() => moveCamera(sixthSpot), 12000)
    setTimeout(() => moveCamera(seventhSpot), 14000)
    setTimeout(() => moveCamera(eightSpot), 16000)
    setTimeout(() => moveCamera(ninethSpot), 18000)
    setTimeout(() => moveCamera(tenthSpot), 20000)
    setTimeout(() => moveCamera(eleventhSpot), 22000)
    setTimeout(() => moveCamera(twelvethSpot), 24000)
    setTimeout(() => moveCamera(thirteenthSpot), 26000)
    setTimeout(() => moveCamera(fourteenthSpot), 28000)
    setTimeout(() => moveCamera(fifteenSpot), 30000)
    setTimeout(() => moveCamera(sixteenSpot), 32000)
    setTimeout(() => moveCamera(lastSpot), 34000)
}

