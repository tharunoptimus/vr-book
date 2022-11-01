let audio = document.querySelector('#backgroundPlayback')
audio.volume = 0.2
audio.play().then().catch(() => setTimeout(() => {
    audio.play();
}))

function playAudio(track) {
    let audio = document.querySelector(`[data-audioId="${track}"]`);
    audio.play();
}

var camera = document.querySelector("#anchor")
console.dir(camera)
// function arrayToObject(a){let r={};return r.x=a[0],r.y=a[1],r.z=a[2],r}var camera=document.querySelector("#anchor");let array=[];array.push(camera.object3D.position.x),array.push(camera.object3D.position.y),array.push(camera.object3D.position.z),arrayToObject(array);
let startingPoint = {
    "x": -25.904088393201196,
    "y": 24.508831959192033,
    "z": -16.557635642977598
}


let firstSpot = {
    "x": -3.4491275556584724,
    "y": -1.4752871870691993,
    "z": 1.1484422781436274
}

let secondSpot = {
    "x": -4.223747505703943,
    "y": -0.13440643473877356,
    "z": 8.901140774452907
}

let thirdSpot = {
    "x": -3.8095848903623453,
    "y": -0.9643298193154517,
    "z": 19.79980810572306
}

let fourthSpot = {
    "x": -12.559224571907968,
    "y": 1.4979038461372927,
    "z": 29.69425928543112
}

let fifthSpot = {
    "x": -37.05230654675581,
    "y": -1.7050803951908988,
    "z": 31.905526164358907
}

let sixthSpot = {
    "x": -16.330346407559603,
    "y": 1.2759235196256982,
    "z": 17.790676193981337
}

let seventhSpot = {
    "x": -12.154663866156858,
    "y": 1.6498278742984276,
    "z": 1.9269676587695803
}

let eightSpot = {
    "x": -35.22149050982954,
    "y": -1.2708369665665415,
    "z": -2.4462053792573353
}

let ninethSpot = {
    "x": -34.46023988644136,
    "y": 0.46056464654373586,
    "z": -31.152141057456213
}

let tenthSpot = {
    "x": -7.188485290099285,
    "y": 1.4984765818102326,
    "z": -30.377751624302217
}

let eleventhSpot = {
    "x": 4.682531712999506,
    "y": 0.860249665936355,
    "z": -23.4674228745857
}

let twelvethSpot = {
    "x": 6.339603505589668,
    "y": 0.7133900845850579,
    "z": -15.432201701500711
}

let thirteenthSpot = {
    "x": -15.442913418793596,
    "y": 2.3248418619318634,
    "z": -15.803172658193478
}

let fourteenthSpot = {
    "x": 7.6970427615,
    "y": 1.95396206406,
    "z": -13.5786278782
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

document.querySelector("#nextStart").addEventListener('click', () => {
    moveCamera(firstSpot)
})

function moveCamera(position) {
    camera.setAttribute('animation__moveCamera', {
        property: 'position',
        dur: 1000,
        to: position,
    })
}