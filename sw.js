if (!self.define) {
	let e,
		s = {}
	const a = (a, r) => (
		(a = new URL(a + ".js", r).href),
		s[a] ||
			new Promise((s) => {
				if ("document" in self) {
					const e = document.createElement("script")
					;(e.src = a), (e.onload = s), document.head.appendChild(e)
				} else (e = a), importScripts(a), s()
			}).then(() => {
				let e = s[a]
				if (!e)
					throw new Error(`Module ${a} didn’t register its module`)
				return e
			})
	)
	self.define = (r, i) => {
		const d =
			e ||
			("document" in self ? document.currentScript.src : "") ||
			location.href
		if (s[d]) return
		let o = {}
		const c = (e) => a(e, d),
			b = { module: { uri: d }, exports: o, require: c }
		s[d] = Promise.all(r.map((e) => b[e] || c(e))).then((e) => (i(...e), o))
	}
}
define(["./workbox-8a9ef17b"], function (e) {
	"use strict"
	self.addEventListener("message", (e) => {
		e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
	}),
		e.precacheAndRoute(
			[
				{
					url: "android-chrome-192x192.png",
					revision: "c18efaede0829ec161331ce6710fd5a7",
				},
				{
					url: "android-chrome-512x512.png",
					revision: "ec2543060eb1725f1d75c9aae0a401cb",
				},
				{ url: "app.js", revision: "9ec34b1615b98fb0e9817c83e5424a75" },
				{
					url: "apple-touch-icon.png",
					revision: "f268f1840a5eb3bb0849e0965c2227e7",
				},
				{
					url: "ar.html",
					revision: "992a18665874b1063ce2230afce7ecc4",
				},
				{
					url: "assets/audio/1.mp3",
					revision: "c34e0e18d482fd8e5cfc89f5ca2e713b",
				},
				{
					url: "assets/audio/10.mp3",
					revision: "68832fdb08dd060cc2c27269167e3dbd",
				},
				{
					url: "assets/audio/11.mp3",
					revision: "08c9691a2aa01d517b6d9c532324692a",
				},
				{
					url: "assets/audio/12.mp3",
					revision: "a8fc3920f7be450be60df842352f57da",
				},
				{
					url: "assets/audio/13.mp3",
					revision: "2cbc984c3944e66ad63a8c20b54cd8a6",
				},
				{
					url: "assets/audio/2.mp3",
					revision: "9a8fc543ba6882d77019438610a943b3",
				},
				{
					url: "assets/audio/3.mp3",
					revision: "45bc7818986608b673b90d780086696f",
				},
				{
					url: "assets/audio/4.mp3",
					revision: "1281bc724aa1abbf0f738c9a5493cade",
				},
				{
					url: "assets/audio/5.mp3",
					revision: "adce947196be6af768487dad2cff877a",
				},
				{
					url: "assets/audio/6.mp3",
					revision: "5246ef610479a92f6c6c8c5ec79a8519",
				},
				{
					url: "assets/audio/7.mp3",
					revision: "0796060fd447d8023903d83444aed110",
				},
				{
					url: "assets/audio/8.mp3",
					revision: "f1bcb64dee8cda3327c8c0a21a4c94bd",
				},
				{
					url: "assets/audio/9.mp3",
					revision: "27da1db59460f33ab1994e589c7b711d",
				},
				{
					url: "assets/audio/t1.mp3",
					revision: "566a20e21abdb9a57abf982e5378cbf8",
				},
				{
					url: "assets/audio/t10.mp3",
					revision: "e6769d3060f86217f15e25aa6fd7270a",
				},
				{
					url: "assets/audio/t11.mp3",
					revision: "8ef3ac0485cca7bc6d06f1cb6bb9d2fb",
				},
				{
					url: "assets/audio/t12.mp3",
					revision: "d92f34180400e12e8fe6c00759829d62",
				},
				{
					url: "assets/audio/t13.mp3",
					revision: "5e15d7567535dfaad2330ab95a050eba",
				},
				{
					url: "assets/audio/t2.mp3",
					revision: "7f2db06ebdc21da56d945a9d55be0c1d",
				},
				{
					url: "assets/audio/t3.mp3",
					revision: "cec215e94791b6a5bde3986c8e3419c7",
				},
				{
					url: "assets/audio/t4.mp3",
					revision: "814bdc7251211ab89288a53559a04461",
				},
				{
					url: "assets/audio/t5.mp3",
					revision: "59591e4ea1ee4dbe40065b20499c662e",
				},
				{
					url: "assets/audio/t6.mp3",
					revision: "43afbd91bd190e767e17101debd23177",
				},
				{
					url: "assets/audio/t7.mp3",
					revision: "0c6b38cd2b382f0e62f12f343dbf58fc",
				},
				{
					url: "assets/audio/t8.mp3",
					revision: "47a062ae5b1a8eeb6ef85b862f288887",
				},
				{
					url: "assets/audio/t9.mp3",
					revision: "102df979595ab60b694acdb6e4be9de9",
				},
				{
					url: "assets/images/1.jpg",
					revision: "a8db98cba2eae31ebf8dd4b569eed55d",
				},
				{
					url: "assets/images/3.jpg",
					revision: "89966a8481e0e3f4e4776f8c88f72a26",
				},
				{
					url: "assets/images/4.jpg",
					revision: "3b7ba8c6978152d70e91e330ca14d82a",
				},
				{
					url: "assets/images/5.jpg",
					revision: "21f006f5a9fc02f5df83baa122ef4001",
				},
				{
					url: "assets/images/6.jpg",
					revision: "b689ef12c56769bc17f6757d8986e120",
				},
				{
					url: "assets/images/7.jpg",
					revision: "a6a1798ae66753cbe7e3bc74ad730a54",
				},
				{
					url: "assets/images/8.jpg",
					revision: "d352402f6dc4323fe4836597264facd7",
				},
				{
					url: "assets/images/coding.jpg",
					revision: "2970622caea19eefebc0f20ae8825fdf",
				},
				{
					url: "assets/images/experience.png",
					revision: "214a81d87d52922e3b19332a194aac64",
				},
				{
					url: "assets/images/feel_logo.jpg",
					revision: "802f964c800d724ed9f7c513402e4cf6",
				},
				{
					url: "assets/images/feel_logo.png",
					revision: "f1f6b7b6f65ee4b85e1c2390dd613f4e",
				},
				{
					url: "assets/images/kitty.png",
					revision: "1416fadd5a35661e74f7b1a79c79a85e",
				},
				{
					url: "assets/images/logo.png",
					revision: "2df75e0e4759c2f377a3b425ae0fcf98",
				},
				{
					url: "assets/images/main.png",
					revision: "25d85da9ec912fc5c6c110e6685d2ee9",
				},
				{
					url: "assets/images/mdg_logo_1.jpg",
					revision: "4424b4c1a41e5a237c138e706e95f9f2",
				},
				{
					url: "assets/images/newyork.jpg",
					revision: "aa67ba2fb504c5b24c8fd9935d37baec",
				},
				{
					url: "assets/images/newyork.png",
					revision: "5893e37d644de2d9e16b78c2b96c380a",
				},
				{
					url: "assets/images/projector.jpg",
					revision: "fd84b43c356683b56001f9fe080429fa",
				},
				{
					url: "assets/images/read.png",
					revision: "0beceb3d5c69baf6fa3b500bbc918cb9",
				},
				{
					url: "assets/images/sky.jpg",
					revision: "697c826b952305beb6cd16e1e90bf0df",
				},
				{
					url: "assets/images/vrbook.png",
					revision: "eef15476904a99f6b7fe81c1a59c9ad3",
				},
				{
					url: "assets/js/aframe-extras.min.js",
					revision: "0617583fccb657a32a00bc69b82be3d5",
				},
				{
					url: "assets/js/aframe.min.js",
					revision: "a40c4f1e8ce1a3e444e42b00067dc2a0",
				},
				{
					url: "assets/js/rounded.min.js",
					revision: "797de3fdfd1819a95c1bee7f57227d57",
				},
				{
					url: "assets/models/classroom.mtl",
					revision: "664e0aeb3a2bffef7946a763a98c6529",
				},
				{
					url: "assets/models/classroom.obj",
					revision: "bd540ed5a60415f16888ec5c47b8897b",
				},
				{
					url: "assets/models/classroom.png",
					revision: "1e21cb983aa131c3ccb1c5dddd6e5136",
				},
				{
					url: "assets/models/classroom02.mtl",
					revision: "890c5c9396d5c7993762fab13975771d",
				},
				{
					url: "assets/models/classroom02.obj",
					revision: "87bc404d734807bfe481783ad5ba44d4",
				},
				{
					url: "assets/models/classroom02.png",
					revision: "1e21cb983aa131c3ccb1c5dddd6e5136",
				},
				{
					url: "assets/models/deer.bin",
					revision: "54e917aa6be6bd305983f4e62dcb4a3b",
				},
				{
					url: "assets/models/deer.gltf",
					revision: "a6fd7eda287e952e0a51a8f6ad8e055b",
				},
				{
					url: "assets/models/dog.bin",
					revision: "0941680377897c7a3f7e2d9a3b109d96",
				},
				{
					url: "assets/models/dog.gltf",
					revision: "2af658d3ac103e5eb4f71045225e7a46",
				},
				{
					url: "assets/models/eagle.bin",
					revision: "d995965a47f1651c745d10092c0ad69e",
				},
				{
					url: "assets/models/eagle.gltf",
					revision: "1d3fcf2d7ae6218c80defead305d3141",
				},
				{
					url: "assets/models/farm.bin",
					revision: "c5ae21e7f1e09d0f714cd437953a9848",
				},
				{
					url: "assets/models/farm.gltf",
					revision: "aeb562a4dd445d86455349ab5a531936",
				},
				{
					url: "assets/models/farmer.bin",
					revision: "35128a8800e6a6cd09eea57b94f15b9a",
				},
				{
					url: "assets/models/farmer.gltf",
					revision: "70ae7010da32a714aca996e06f1e266f",
				},
				{
					url: "assets/models/king.bin",
					revision: "bb2626aa2be8a6be025736bba0a054ce",
				},
				{
					url: "assets/models/king.gltf",
					revision: "99da5a0aa667fb3003cd7410bce65bbb",
				},
				{
					url: "assets/models/license.txt",
					revision: "b4d2611b10abaca674f94c4525798c9a",
				},
				{
					url: "assets/models/pongalPot.bin",
					revision: "8c5700da99701acd79ed8d4e24f6f368",
				},
				{
					url: "assets/models/pongalPot.gltf",
					revision: "d4e547d037cbb445d7ed5ac8b2052598",
				},
				{
					url: "assets/models/pongalSetup.bin",
					revision: "34a799a1a9a153cfb3c3b6c0d1a0a22f",
				},
				{
					url: "assets/models/pongalSetup.gltf",
					revision: "da4922a8f34a997339242de2a18f9277",
				},
				{
					url: "assets/models/scene.bin",
					revision: "fb26eeb5e29b40cfc7561c981939fb0f",
				},
				{
					url: "assets/models/scene.gltf",
					revision: "0f73ca9f3c2d3e9c6bb6c842f46bf64c",
				},
				{
					url: "assets/models/sdeer.bin",
					revision: "30554540f6f0c9d94b6f396b9bc0f1e7",
				},
				{
					url: "assets/models/sdeer.gltf",
					revision: "82e7f4c2affe622428afe2cd8f6ffdfc",
				},
				{
					url: "assets/models/sheep.bin",
					revision: "1b407efc56e2343528b0ffb43c59a08b",
				},
				{
					url: "assets/models/sheep.gltf",
					revision: "5d6791476c625825ec654822d0167f4d",
				},
				{
					url: "assets/models/sitar.bin",
					revision: "3702e56816cecfa6a4b8e958aadb6da9",
				},
				{
					url: "assets/models/sitar.gltf",
					revision: "fb7379f64637242f7c49e1f19ddcfce1",
				},
				{
					url: "assets/models/sugarcane.bin",
					revision: "25985046ab577143d1aeb0371de244ad",
				},
				{
					url: "assets/models/sugarcane.gltf",
					revision: "350ab79e15bb66470169a881ed19cc18",
				},
				{
					url: "assets/models/textures/02_-_Default_baseColor.png",
					revision: "41051c9393462afaeb3f9361989840b9",
				},
				{
					url: "assets/models/textures/02_-_Default_normal.png",
					revision: "d08fc1979f4cb68e72a4d46f9055e512",
				},
				{
					url: "assets/models/textures/10454_Sugarcane_Field_v1.002_baseColor.jpeg",
					revision: "3a45bd3367d52e0d980d6c7775886c4b",
				},
				{
					url: "assets/models/textures/blinn1SG_baseColor.png",
					revision: "65f9fdddff319c01ab1aef898b2ffcf4",
				},
				{
					url: "assets/models/textures/blinn1SG_metallicRoughness.png",
					revision: "3f3037913975ed95e7889df5183b4c2c",
				},
				{
					url: "assets/models/textures/bofy_baseColor.png",
					revision: "9ddb85820a6baf4df8a73446013651c6",
				},
				{
					url: "assets/models/textures/Book-tittle_baseColor.png",
					revision: "707461a138edc95f118ff9af1ca75706",
				},
				{
					url: "assets/models/textures/Book-tittle_emissive.jpeg",
					revision: "068b26979baea7ce4b23493957449c00",
				},
				{
					url: "assets/models/textures/char_swatches_lit_m_007_baseColor.png",
					revision: "4a861a613fbcdacd5c704e21f3e20025",
				},
				{
					url: "assets/models/textures/Doggo_Base_baseColor.png",
					revision: "aa27dafb32b432c203bfdc39993ed202",
				},
				{
					url: "assets/models/textures/Doggo_Base_normal.png",
					revision: "06cf577fcf707cb9a9027230f6917585",
				},
				{
					url: "assets/models/textures/Doggo_Fuzzies_baseColor.png",
					revision: "5f35a4e24f7cc28b123c1fb84364811f",
				},
				{
					url: "assets/models/textures/eyeball_m_005_baseColor.png",
					revision: "bbb5db684c5b27ae296ec7bf3d0fe4bb",
				},
				{
					url: "assets/models/textures/kolam_baseColor.png",
					revision: "05759db4cccc1c12555dcc1c6c570ceb",
				},
				{
					url: "assets/models/textures/Light_Wood_baseColor.png",
					revision: "5603d9ce18f0065a567cd1922f815cc5",
				},
				{
					url: "assets/models/textures/Main_baseColor.png",
					revision: "f0bdc299cf43973baa40ea80a6ef7e36",
				},
				{
					url: "assets/models/textures/Main_normal.png",
					revision: "4f4ce7fb114428f1204f5367c1bbeece",
				},
				{
					url: "assets/models/textures/Material__23_baseColor.jpeg",
					revision: "9af0af501a178a9ac2b1521eb8204f88",
				},
				{
					url: "assets/models/textures/Material_baseColor.png",
					revision: "80409fce619b68a157e591c53b6a2c61",
				},
				{
					url: "assets/models/textures/material_normal.png",
					revision: "344218293cc5dcef47539db884e5d780",
				},
				{
					url: "assets/models/textures/root.001_baseColor.jpeg",
					revision: "f20b0679050324ae243aaee47779f004",
				},
				{
					url: "assets/models/textures/stow_baseColor.jpeg",
					revision: "f7a756b8874c60f9768f56fe7da72791",
				},
				{
					url: "assets/models/textures/Texture-base_baseColor.jpeg",
					revision: "0e21cab910bfcee0866030e435125d1a",
				},
				{
					url: "assets/models/textures/wood_baseColor.jpeg",
					revision: "c304dbe330c97b23a1210ae1af986528",
				},
				{
					url: "bgtamil.mp3",
					revision: "d789d1a31a7abde2c33eef9274ebbee3",
				},
				{
					url: "demo/assets/js/aframe-extras.min.js",
					revision: "0617583fccb657a32a00bc69b82be3d5",
				},
				{
					url: "demo/assets/js/aframe.min.js",
					revision: "633f1c957b3c2aad61a147eb2592c0ca",
				},
				{
					url: "demo/assets/js/rounded.min.js",
					revision: "797de3fdfd1819a95c1bee7f57227d57",
				},
				{
					url: "demo/assets/models/license.txt",
					revision: "f156cebaec38f8aebe5fa0b406da9d49",
				},
				{
					url: "demo/assets/models/scene.bin",
					revision: "7de71a0c421754481624609324b66c3f",
				},
				{
					url: "demo/assets/models/scene.gltf",
					revision: "c2f69f3b1c7af11ad39c4b2c0a652e30",
				},
				{
					url: "demo/assets/models/textures/earth1_baseColor.jpeg",
					revision: "1376ff4ac727d8c80f62489736e28ab0",
				},
				{
					url: "demo/assets/models/textures/jupiter1_baseColor.jpeg",
					revision: "ec76ed42611da94d5f902543acc71db3",
				},
				{
					url: "demo/assets/models/textures/mars1_baseColor.jpeg",
					revision: "ce536292c0210de0d3044832e903152e",
				},
				{
					url: "demo/assets/models/textures/mercury1_baseColor.jpeg",
					revision: "f4cd1405ed16e65ebf27544e14ecadc7",
				},
				{
					url: "demo/assets/models/textures/moon18_baseColor.jpeg",
					revision: "ca39d773cf438fe33f88d40d0f53a709",
				},
				{
					url: "demo/assets/models/textures/neptune1_baseColor.jpeg",
					revision: "07d5b9faef7607a6f1ebfb7b69b03d0a",
				},
				{
					url: "demo/assets/models/textures/pluto1_baseColor.jpeg",
					revision: "23590b07ffc55ba49035f35213a0de9d",
				},
				{
					url: "demo/assets/models/textures/saturn1_baseColor.png",
					revision: "abf41c7bd86fd65d137b8c6d7e8c7dfb",
				},
				{
					url: "demo/assets/models/textures/uranus1_baseColor.jpeg",
					revision: "c987f6baa0c306a2f058975a390a680e",
				},
				{
					url: "demo/assets/models/textures/venus1_baseColor.jpeg",
					revision: "8e2a6265b22dd8fad2e5338a8716cb43",
				},
				{
					url: "demo/index.html",
					revision: "08ad1d7e44a6a9d40b6a03a9268ca180",
				},
				{
					url: "favicon.ico",
					revision: "35573c09906f61cff37dbf7a53796b64",
				},
				{
					url: "final.html",
					revision: "218a5b4c6109f106ac3b7723166d86e4",
				},
				{
					url: "fonts/KelsonSans.png",
					revision: "b26f76f0c25f72de426392a859c0aa00",
				},
				{
					url: "index.html",
					revision: "f3c68ab43f43df2c01e658e4ff8820e6",
				},
				{
					url: "medieval.mp3",
					revision: "496b23cd9e20e5bd8cbebd9c8e9df5f1",
				},
				{
					url: "meta.html",
					revision: "f82f9266333bcc792912b971ce943465",
				},
				{
					url: "mic-animate.gif",
					revision: "9a18cac36497b8030313ee2bbf02d5b6",
				},
				{
					url: "mic-slash.gif",
					revision: "d621426962be76a40d29219e23373314",
				},
				{
					url: "mic.gif",
					revision: "c3ba5f18f671e1e9a104059631a58d92",
				},
				{
					url: "mobilenet.js",
					revision: "b3d51648dc72e978bb690add8f7368e3",
				},
				{
					url: "model.html",
					revision: "bd66bb612bbbcdaeb52d4b9c0815104d",
				},
				{
					url: "model.js",
					revision: "f2e55541372d5327aba595db467fdb38",
				},
				{
					url: "modelmeta.html",
					revision: "f82f9266333bcc792912b971ce943465",
				},
				{
					url: "rapid.html",
					revision: "e44fbe97fe2642e3fffa07d5418e9845",
				},
				{
					url: "read.html",
					revision: "cd86520a31b20392ef3cbdbf1089ae51",
				},
				{
					url: "tamil.html",
					revision: "af6e5e1cf5ab8ea4f6ab621de2453c3e",
				},
				{
					url: "tamil.js",
					revision: "c85ccd0f53a9ce2993b18bcca485c328",
				},
				{
					url: "tfjs.js",
					revision: "1e9261174f92eb57fc68247f92363676",
				},
				{
					url: "worker.js",
					revision: "197948f938fc31973e929539a392e347",
				},
			],
			{ ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
		)
})
//# sourceMappingURL=sw.js.map
