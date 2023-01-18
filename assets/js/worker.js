importScripts("./tfjs.js")
importScripts("./mobilenet.js")

async function predictModal(img) {
	let prediction

	await mobilenet.load().then(async (model) => {
		await model.classify(img).then((predictions) => {
			prediction = predictions
		})
	})

	return prediction
}

self.onmessage = async function (e) {
	console.time("PREDICT_IMAGE")
	const canvasData = e.data.canvasData
	
	let predictions = await predictModal(canvasData)
	self.postMessage(sendFinalResult(predictions))
	console.timeEnd("PREDICT_IMAGE")
}

function sendFinalResult(predictions) {
	let result = "It could be "

	for (let i = 0; i < predictions.length; i++) {
		let { className, probability } = predictions[i]
		result += `${(probability * 100).toFixed(2)}% a ${className}, `
	}

	result = result.slice(0, -2)
	console.log(result)
	return result
}
