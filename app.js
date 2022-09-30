document.querySelector("#microph").addEventListener("click", function () {
	let interim_transcript = ""
	let word = ""
	let final_transcript = ""
	let recognizing = false
	let ignore_onend
	let start_timestamp
	let recognition = new webkitSpeechRecognition()

	recognition.continuous = false
	recognition.interimResults = true
	final_transcript = ""
	recognition.lang = "en-US"
	recognition.start()
	ignore_onend = false

	recognition.onstart = function () {
		recognizing = true
	}
	recognition.onerror = function (event) {
		if (event.error == "no-speech") {
			start_img.src = "mic.gif"
			ignore_onend = true
		}
		if (event.error == "audio-capture") {
			start_img.src = "mic.gif"
			ignore_onend = true
		}
		if (event.error == "not-allowed") {
			console.log(event)
			if (event.timeStamp - start_timestamp < 100) {
			} else {
			}
			ignore_onend = true
		}
	}
	recognition.onend = function () {
		recognizing = false
		if (ignore_onend) {
			return
		}
		if (!final_transcript) {
			return
		}
	}
	recognition.onresult = function (event) {
		for (let i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) {
				final_transcript += event.results[i][0].transcript
			} else {
				interim_transcript += event.results[i][0].transcript
			}
		}
		final_transcript.toLowerCase()
		console.log("final_transcript:  " + final_transcript)
		if (final_transcript || interim_transcript) {
		}
		let xhr = new XMLHttpRequest()
		word = final_transcript
		word = word.trim().toLowerCase()
		let url = "/meaning?word="
		let final = url.concat(word)
		console.log(final)
		xhr.open("GET", final, true)
		xhr.send()
		xhr.onreadystatechange = function () {
			processRequest(xhr)
		}
	}

	function processRequest(xhr) {
		if (xhr.readyState === 4 && xhr.status == 200) {
			console.log(xhr.responseText)
			let response = JSON.parse(xhr.responseText)

			let string = "Definitions: \n"
			let i = 0
			while (i < response.length) {
				let j = i + 1
				string = string + j + ".) " + response[i].definition + "\n"
				i++
			}
			console.log("string")
			let msg = new SpeechSynthesisUtterance(string)
			window.speechSynthesis.speak(msg)
			console.log(response)
		} else console.log("a")
	}
})

let i = 0
document.querySelector("#next").addEventListener("click", function () {
	++i
	switch (i) {
		case 1:
			document
				.querySelector("#pg1")
				.setAttribute("src", "assets/images/3.jpg")
			document
				.querySelector("#pg2")
				.setAttribute("src", "assets/images/4.jpg")
			break
		case 2:
			document
				.querySelector("#pg1")
				.setAttribute("src", "assets/images/5.jpg")
			document
				.querySelector("#pg2")
				.setAttribute("src", "assets/images/6.jpg")
			break
		case 3:
			document
				.querySelector("#pg1")
				.setAttribute("src", "assets/images/7.jpg")
			document
				.querySelector("#pg2")
				.setAttribute("src", "assets/images/8.jpg")
			break
		default:
			i = 3
			break
	}
})
document.querySelector("#prev").addEventListener("click", function () {
	--i
	switch (i) {
		case 0:
			document
				.querySelector("#pg1")
				.setAttribute("src", "assets/images/1.jpg")
			document
				.querySelector("#pg2")
				.setAttribute("src", "assets/images/2.jpg")
			break
			break
		case 1:
			document
				.querySelector("#pg1")
				.setAttribute("src", "assets/images/3.jpg")
			document
				.querySelector("#pg2")
				.setAttribute("src", "assets/images/4.jpg")
			break
		case 2:
			document
				.querySelector("#pg1")
				.setAttribute("src", "assets/images/5.jpg")
			document
				.querySelector("#pg2")
				.setAttribute("src", "assets/images/6.jpg")
			break
		default:
			i = 0
			break
	}
})
