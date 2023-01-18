var x = document.getElementById("input");
var myCamera = document.getElementById("myCamera");
var infoWindow = document.getElementById("infoWindow");
var tabletHorizontal = document.getElementById("tabletHorizontal");
var openClose = document.getElementById("openClose");
var mainWindow = document.getElementById("mainWindow");
var soundOnOff = document.getElementById("soundOnOff");
var notesOnOff = document.getElementById("notesOnOff");


/********************************** */
/* Movable Nav Menu                 */
/********************************** */
// Open close
openClose.addEventListener("click", function () {

    if (openClose.getAttribute("material").src.id == "interfaceOn") {
        openClose.setAttribute("material", "src: #interfaceOff");
        allButtons.setAttribute("scale", "0 0 0");
        mainWindow.setAttribute("material", "transparent: false; opacity: 0.001");
        console.log("success");
    } else {
        openClose.setAttribute("material", "src: #interfaceOn");

        allButtons.setAttribute("scale", "1 1 1");
        mainWindow.setAttribute("material", "color: #5475d4; transparent: true; opacity: 0.5; side:double");

    }
})

// Wait for scene to load
// document.addEventListener('DOMContentLoaded', function () {
//     var scene = document.querySelector('a-scene');
//     scene.addEventListener('loaded', function (e) {
//         document.getElementById("overlay").style.display = "none";
//     });
// });

// Wait for model to load
// document.querySelector('#myEnvironment').addEventListener('model-loaded', function () {
//     document.getElementById("overlay").style.display = "none";
// });



// Open close
openClose.addEventListener("click", function () {
    if (openClose.getAttribute("text").value == "UI off") {
        openClose.setAttribute("text", "value: UI on");
        mainWindow.setAttribute("scale", "1 1 1");
        // document.querySelector("a-sphere").setAttribute("class", "none");
    } else {
        openClose.setAttribute("text", "value: UI off");
        // document.querySelector("a-sphere").setAttribute("class", "navButton");
        mainWindow.setAttribute("scale", "0 0 0");
    }
})






/********************************** */
/* Main PDF Loader with PDF.js      */
/********************************** */
document.querySelector("#pdf-upload").addEventListener("change", function (e) {
    var canvasElement = document.querySelector("#pdf_renderer")
    var file = e.target.files[0]
    // If wrong file extension
    if (file.type != "application/pdf") {
        console.error(file.name, "is not a pdf file.")
        return
    }
    // Scale of pdf
    var scale = 2;

    var fileReader = new FileReader();
    fileReader.onload = function () {
        var loadedFile = new Uint8Array(this.result);

        PDFJS.disableWorker = true; // due to CORS
        var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            pages = [],
            currentPage = 1,
            url = loadedFile;
        var pageLength;
        PDFJS.getDocument(url).then(function (pdf) {
            if (currentPage <= pdf.numPages) {
                getPage();
            }

            // main entry point/function for loop
            function getPage() {
                // when promise is returned do as usual
                pdf.getPage(currentPage).then(function (page) {

                    var viewport = page.getViewport(scale);
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    var renderContext = {
                        canvasContext: ctx,
                        viewport: viewport
                    };

                    // now, tap into the returned promise from render:
                    page.render(renderContext).then(function () {
                        // store compressed image data in array
                        pages.push(canvas.toDataURL());

                        if (currentPage < pdf.numPages) {
                            // Check if it is the first page, then show its content. Done once
                            if (currentPage == 1) {
                                var textContent = page.getTextContent();
                                textContent.then(function (text) {
                                    // all contents of current page
                                    var pageText = text.items.map(
                                        function (s) {
                                            return s.str;
                                        }).join('');



                                });
                            }

                            currentPage++;
                            getPage(); // get next page
                        } else {
                            // after all the pages are parsed
                            for (var i = 0; i < pages.length; i++) {
                                drawPage(i);
                            }

                            document.getElementById("intro4").style.display = "none";
                            var sounds = ['3_arts.mp3', '5_tale.mp3', 'bgtamil.mp3'];
                            var selectedSound = sounds[Math.floor(Math.random() * sounds.length)];
                            document.getElementById('soundlink').setAttribute('sound', 'src: url(assets/audio/' + selectedSound + '); loop: true');
                            document.getElementById('soundlink').components.sound.playSound();
                        }
                    });
                })
            }

            // Zoom in
            document.getElementById('zoom_in').addEventListener('click', (e) => {
                var book = document.getElementById("book");
                book.object3D.scale.multiplyScalar(1.05);
            });
            // Zoom out
            document.getElementById('zoom_out').addEventListener('click', (e) => {
                var book = document.getElementById("book");
                book.object3D.scale.divideScalar(1.05);
            });

            pageLength = pdf.numPages;
        });



        // Button Next
        var current = 0;
        document.getElementById('go_next').addEventListener('click', (e) => {
            var myPage = document.querySelector("a-image");
            current += 1;
            if (current < pageLength) {
                myPage.setAttribute("src", "#img" + current);
            }
            if (current == pageLength - 1) {
                document.getElementById('go_next').setAttribute("scale", "0 0 0")
            }
            if (current != 0) {
                document.getElementById('go_previous').setAttribute("scale",
                    "0.08 0.08 0.08")
            }
            document.getElementById("current_page").setAttribute("text", "value: " + current + "; color: #000; align: center; width: 1; height: 0.5");
            console.log(current);
            getPageText(current + 1);

        });

        // Button previous
        document.getElementById('go_previous').addEventListener('click', (e) => {
            var myPage = document.querySelector("a-image");
            current -= 1
            if (current < pageLength) {
                myPage.setAttribute("src", "#img" + current);
            }
            if (current != pageLength - 1) {
                document.getElementById('go_next').setAttribute("scale", "0.08 0.08 0.08")
            }
            if (current == 0) {
                document.getElementById('go_previous').setAttribute("scale", "0 0 0")
            }
            document.getElementById("current_page").setAttribute("text", "value: " + current + "; color: #000; align: center; width: 1; height: 0.5");;
            console.log(current);
            getPageText(current + 1);
        });

        /* 
        Showing page content based on page number
        Necessary for
        */

        function getPageText(number) {
            PDFJS.getDocument(url).then(function (pdf) {
                pdf.getPage(number).then(function (page) {
                    page.getTextContent().then(function () {
                        var textContent = page.getTextContent();
                        textContent.then(function (text) {

                            var pageText = text.items.map(function (s) {
                                return s.str;
                            }).join('') //.replace(/- /g, "").replace(/’/g, "").replace(/“/g, "").replace(/”/g, "").replace(/'/g, "").replace(/\[[0-9]\]/g, "").replace(/[A-Z][.][A-Z][.][A-Z][.]/g, "");
                            console.log(pageText);
                            sendPassage(pageText);
                        });
                    });
                })
            })
        }



        // Render img to canvas
        function drawPage(index, callback) {
            var img = new Image;
            img.onload = function () {
                ctx.drawImage(this, 0, 0, ctx.canvas.width, ctx.canvas.height);
                console.log(ctx.canvas.width);
                if (index > 0) img.style.display = 'inline-block';
                // set ids from 0
                img.setAttribute("id", "img" + index);
                document.getElementById("assets").appendChild(img);
                img.setAttribute("style", "display:none;");
                var myPage = document.querySelector("a-image");
                myPage.setAttribute("visible", "true");
                myPage.setAttribute("src", "#img0");
                myPage.setAttribute("width", ctx.canvas.width / 500)
                myPage.setAttribute("height", ctx.canvas.height / 500)
            }
            img.src = pages[index]; // start loading the data-uri as source
        }
    };
    fileReader.readAsArrayBuffer(file);
})




// Get Text contents of the page loaded
var passage;

function sendPassage(myPassage) {
    passage = myPassage;
    return passage;
}




// Sound On/Off
soundOnOff.addEventListener("click", function () {
    console.log(soundOnOff.getAttribute("material").src.id);
    if (soundOnOff.getAttribute("material").src.id == "soundOn") {
        soundOnOff.setAttribute("material", "src: #soundOff");
        document.getElementById('soundlink').components.sound.pauseSound();
    } else {
        soundOnOff.setAttribute("material", "src: #soundOn");
        document.getElementById('soundlink').components.sound.playSound();

    }
})

// Notes On/Off
notesOnOff.addEventListener("click", function () {
    
    if (notesOnOff.getAttribute("material").src.id == "notesOff") {
        notesOnOff.setAttribute("material", "src: #notesOn");
        infoWindow.setAttribute("visible", true);
    } else {
        notesOnOff.setAttribute("material", "src: #notesOff");
        infoWindow.setAttribute("visible", false);
        

    }
})


// Export GLTF (GLB)
function exportGLTF(input, options) {
    AFRAME.scenes[0].systems['gltf-exporter'].export(input, options);
}
function exportModel() {
    if(infoWindow.getAttribute("visible") == true){
        exportGLTF(infoWindow);
    }
    
}