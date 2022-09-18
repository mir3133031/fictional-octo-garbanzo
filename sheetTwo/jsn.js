
let color = {
    brown: `img_sheet/image\ 1.jpg`,
    cream: "./img_sheet/image 8 (1).jpg",
    white: "./img_sheet/image 9 (1).jpg",
}
let button = document.querySelectorAll(`button`)
let imgSalon = document.querySelector(`.boxImgSalon`)
button.forEach(btn => {
    btn.onclick = () => {
        let key = btn.getAttribute(`data-color`)
        imgSalon.style.backgroundImage = `url("${color[key]}")`
    }
})

let gameBox = document.querySelector(`.gameBox`)
let carWedth = document.querySelector(`.boxImgSalon`)
function getkayf() {
            window.location.href = '../gamesheet/index.html';


}

gameBox.onclick = () => {
    getkayf()

}

