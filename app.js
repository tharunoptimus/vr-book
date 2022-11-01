document.querySelector("#microph").addEventListener("click", function () {
	window.location.href = "./model";
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
