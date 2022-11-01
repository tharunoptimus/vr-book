var camera = document.querySelector("#anchor")
console.dir(camera)
// function arrayToObject(a){let r={};return r.x=a[0],r.y=a[1],r.z=a[2],r}var camera=document.querySelector("#anchor");let array=[];array.push(camera.object3D.position.x),array.push(camera.object3D.position.y),array.push(camera.object3D.position.z),arrayToObject(array);
let startingPoint = {
    "x": -25.904088393201196,
    "y": 24.508831959192033,
    "z": -16.557635642977598
}


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


document.querySelector("#playFirst").addEventListener('click', () => {})
document.querySelector("#playSecond").addEventListener('click', () => {})
document.querySelector("#playThird").addEventListener('click', () => {})
document.querySelector("#playFourth").addEventListener('click', () => {})
document.querySelector("#playFifth").addEventListener('click', () => {})
document.querySelector("#playSixth").addEventListener('click', () => {})
document.querySelector("#playSeventh").addEventListener('click', () => {})
document.querySelector("#playEighth").addEventListener('click', () => {})

document.querySelector("#nextFirst").addEventListener('click', () => {
    moveCamera(secondSpot)
})
document.querySelector("#nextSecond").addEventListener('click', () => {
    moveCamera(thirdSpot)
})
document.querySelector("#nextThird").addEventListener('click', () => {
    moveCamera(fourthSpot)
    setTimeout(() => moveCamera(fifthSpot), 3000)
})
document.querySelector("#nextFourth").addEventListener('click', () => {
    moveCamera(sixthSpot)
})
document.querySelector("#nextFifth").addEventListener('click', () => {
    moveCamera(seventhSpot)
    setTimeout(() => {
        moveCamera(eightSpot)
        setTimeout(() => {
            moveCamera(ninethSpot)
            setTimeout(() => {
                moveCamera(tenthSpot)
                setTimeout(() => {
                    moveCamera(eleventhSpot)
                    setTimeout(() => {
                        moveCamera(twelvethSpot)
                        setTimeout(() => moveCamera(thirteenthSpot), 3000)
                    }, 3000)
                }, 3000)
            }, 3000)
        }, 3000)
    }, 3000)
})
document.querySelector("#nextSeventh").addEventListener('click', () => {
    moveCamera(fourteenthSpot)
})

document.querySelector("#nextSixth").addEventListener('click', () => {
    moveCamera(fifteenSpot)
    setTimeout(() => moveCamera(sixteenSpot), 3000)
})

document.querySelector("#nextEighth").addEventListener('click', () => {
    moveCamera(lastSpot)
})


function moveCamera(position) {
    camera.setAttribute('animation__moveCamera', {
        property: 'position',
        dur: 1000,
        to: position,
    })
}

setTimeout(() => moveCamera(firstSpot), 2000)