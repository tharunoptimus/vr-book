function playBGSound() {
    let audio = document.querySelector('#backgroundPlayback')
    try {
        audio.volume = 0.9
        audio
            .play()
            .then()
            .catch(() =>
                setTimeout(() => {
                    playBGSound()
                })
            )
    } catch (error) {
        console.log("User has not interacted with the page yet")
    }
}

playBGSound()

function stopPlaying() {
	let audios = document.querySelectorAll("audio")
	audios.forEach(audio => {
		if (audio.getAttribute("data-audioType") == "background") return
		audio.pause()
		audio.currentTime = 0
	})
}

function playAudio(track) {
    stopPlaying()
    let audio = document.querySelector(`[data-audioId="${track}"]`)
    audio.play();
}


async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
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
    "x": 11.123513368795033,
    "y": 0.6395106698406884,
    "z": 10.159701131594833
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


document.querySelector("#playFirst").addEventListener('click', () => {
    playAudio(1)
})
document.querySelector("#playSecond").addEventListener('click', () => {
    playAudio(2)
})
document.querySelector("#playThird").addEventListener('click', () => {
    playAudio(3)
})
document.querySelector("#playFourth").addEventListener('click', () => {
    playAudio(5)
})
document.querySelector("#playFifth").addEventListener('click', () => {
    playAudio(6)
})
document.querySelector("#playSixth").addEventListener('click', () => {
    playAudio(10)
})
document.querySelector("#playSeventh").addEventListener('click', () => {
    playAudio(10)
})
document.querySelector("#playEighth").addEventListener('click', () => {
    playAudio(10)
})

document.querySelector("#nextFirst").addEventListener('click', () => {
    moveCamera(secondSpot)
    setTimeout(() => playAudio(2), 500)

})
document.querySelector("#nextSecond").addEventListener('click', () => {
    moveCamera(thirdSpot)
    setTimeout(() => playAudio(3), 500)
})
document.querySelector("#nextThird").addEventListener('click', () => {
    moveCamera(fourthSpot)
    setTimeout(() => {
        playAudio(4)
    }, 0)
    setTimeout(() => {
        moveCamera(fifthSpot)
        setTimeout(() => playAudio(5), 1000)
    }, 6000)
    
})
document.querySelector("#nextFourth").addEventListener('click', () => {
    moveCamera(sixthSpot)
    setTimeout(() => playAudio(6), 500)
})
console.log(liangBarsky(0, 0, 10, 10, 5, 5, 15, 15))
document.querySelector("#nextFifth").addEventListener('click', () => {
    playAudio(7)
    setTimeout(() => {
        moveCamera(seventhSpot)
        setTimeout(() => {
            moveCamera(eightSpot)
            setTimeout(() => {
                moveCamera(ninethSpot)
                setTimeout(() => {
                    moveCamera(tenthSpot)
                    playAudio(8)
                    setTimeout(() => {
                        moveCamera(eleventhSpot)
                        playAudio(9)
                        setTimeout(() => {
                            moveCamera(twelvethSpot)
                            setTimeout(() => {
                                moveCamera(thirteenthSpot)
                                setTimeout(() => playAudio(10), 3000)
                            }, 3000)
                            
                        }, 3000)
                    }, 4500)
                }, 3000)
            }, 3000)
        }, 3000)
    }, 1500)
})
document.querySelector("#nextSeventh").addEventListener('click', () => {
    moveCamera(fourteenthSpot)
    setTimeout(() => playAudio(11), 500)
})

document.querySelector("#nextSixth").addEventListener('click', () => {
    moveCamera(fifteenSpot)
    setTimeout(() => moveCamera(sixteenSpot), 3000)
    setTimeout(() => playAudio(12), 4000)
})

document.querySelector("#nextEighth").addEventListener('click', () => {
    moveCamera(lastSpot)
    setTimeout(() => playAudio(13), 1000)
})

document.querySelector("#nextStart").addEventListener('click', () => {
    moveCamera(firstSpot)
    setTimeout(() => playAudio(1), 1000)
})

function moveCamera(position, duration = 1000) {
    camera.setAttribute('animation__moveCamera', {
        property: 'position',
        dur: 1000,
        to: position,
        dur: duration
    })
}

function liangBarsky(x1, y1, x2, y2, xmin, ymin, xmax, ymax) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let p = [-dx, dx, -dy, dy];
    let q = [x1 - xmin, xmax - x1, y1 - ymin, ymax - y1];
    let u1 = 0;
    let u2 = 1;
    let flag = 0;
    for (let i = 0; i < 4; i++) {
        if (p[i] == 0) {
            if (q[i] < 0) {
                flag = 1;
                break;
            }
        } else {
            let u = q[i] / p[i];
            if (p[i] < 0) {
                u1 = Math.max(u1, u);
            } else {
                u2 = Math.min(u2, u);
            }
        }
    }
    if (flag == 1 || u1 > u2) {
        return false;
    } else {
        return true;
    }
}
