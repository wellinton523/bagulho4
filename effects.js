const card = document.querySelector(".card-effect");

document.addEventListener("mousemove", (e) => {
    rotate(e, card)
})

function rotate(event, element){
    const x = event.clientX
    const y = event.clientY

    const middley = window.innerWidth / 2
    const middlex = window.innerHeight / 2

    const ofsetx = ((x - middlex) / middlex) * 2
    const ofsety = ((y - middley) / middley) * 2 *4


    element.style.setProperty("--rotateX", ofsety * -1 + "deg")
    element.style.setProperty("--rotateY", ofsetx + "deg")
}