let kilometerReserveText = document.querySelector(`.kilometerReserveTwo`)
let workingBtnDown = document.querySelector(`.WorkingOneWayDown`)
let kilometerNumText = document.querySelector(`.chengingNum`)
let workingBtnTop = document.querySelector(`.WorkingOneTop`)
let hot = document.querySelector(`.twoInformationСhanging`)
let hotDawn = document.querySelector(`.WorkingTwoWayDown`)
let hotTop = document.querySelector(`.WorkingTwoTop`)
let kilometerReserve = 251
let kilometerNum = 45
let hotHelp = 10
let saveKilo = 0
let save = 5
let p = 0
function setTime() {
    if (kilometerNum <= 40 || kilometerNum >= 75) {
        kilometerNum = false
        kilometerNum = 45
        kilometerNum = 70
    }


    kilometerNumText.innerHTML = saveKilo
}
function getPriceEas() {

    if (kilometerNum == 45) {
        kilometerReserve = 251
    } else if (kilometerNum == 50) {
        kilometerReserve = 234


    } else if (kilometerNum == 55) {
        kilometerReserve = kilometerReserve = 216


    } else if (kilometerNum == 60) {
        kilometerReserve = kilometerReserve = 199


    } else if (kilometerNum == 65) {
        kilometerReserve = kilometerReserve = 183


    } else if (kilometerNum == 70) {

        kilometerReserve = kilometerReserve = 167


    }

    kilometerReserveText.innerHTML = kilometerReserve


}
function getKulometer() {
    saveKilo = kilometerNum += save
}
function getKiloDawn() {
    saveKilo = kilometerNum -= save
}

function getElsehOT() {
    if (p <= -20 || p >= 50) {
        p = false
        p = -10
        p = 40
    }

    hot.innerHTML = p
}
function getHotTop() {
    p = p += hotHelp


}
function getHotDawn() {
    p = p -= hotHelp


}



workingBtnTop.onclick = () => {

    getKulometer()
    setTime()
    getPriceEas()
}

workingBtnDown.onclick = () => {
    getKiloDawn()
    setTime()
    getPriceEas()
}
hotTop.onclick = () => {
    getHotTop()
    getElsehOT()
}
hotDawn.onclick = () => {
    getHotDawn()
    getElsehOT()
}










let kayfEfect = document.querySelector(`.containerDoor`)
let carWedth = document.querySelector(`.img`)
let balon = document.querySelector(`.containerForBalon`)
let aHref = document.querySelector(`.boxDoor`)
function getkayf() {
    //  href="./sheetTwo/tip.html"
    if (kayfEfect) {
        carWedth.style.position = `absalute`
        setInterval(() => {

            carWedth.style.width = ` 4040px`
            carWedth.style.height = ` 2000px`
            carWedth.style.marginLeft = ` -1400px`
            carWedth.style.marginTop = ` -370px`
            setInterval(() => {
                window.location.href = './sheetTwo/tip.html';

            }, 1000);
        }, 1000);


    }
}
kayfEfect.onclick = () => {
    setInterval(() => {
        getkayf()
    }, 1000);

}
let longRange = document.querySelector(`#longRange`)
let containerBalonOne = document.querySelector(`.balonKey`)
let balonKeyTwo = document.querySelector(`.balonKeyTwo`)
document.addEventListener('change', function () {
    var chk = event.target

    if (chk.tagName === 'INPUT' && chk.type === 'checkbox' && chk.value === "1") {
        if (chk.checked == true) {
            containerBalonOne.style.width = ` 145px`
            containerBalonOne.style.height = ` 145px`
            balonKeyTwo.style.width = ` 145px`
            balonKeyTwo.style.height = ` 145px`
            carWedth.style.backgroundImage = "url(./img/Model-3-Order-Hero-Desktop-Mobile-Global.jfif)"
            balon.style.marginLeft = `150px`
            balon.style.marginTop = `170px`
            balon.style.width = `727px`
        } else {
            containerBalonOne.style.width = `  90px`
            containerBalonOne.style.height = `  90px`
            balonKeyTwo.style.width = `  90px`
            balonKeyTwo.style.height = `  90px`
            balon.style.marginLeft = `257px`
            balon.style.marginTop = `195px`
            balon.style.width = `497px`
            carWedth.style.backgroundImage = " url(./img/download.jpg)"
        }
    }

})
let balonIige = document.querySelector(`.ThreeInformationСhanging`)
let btnBalonTwo = document.querySelector(`.WorkingThreeTop`)
let btnBalonOne = document.querySelector(`.WorkingThreeWayDown`)
let numBalon = 0
let cauntBB = 2
let widthBB = 21

function getWidthBalonOne() {
    numBalon = widthBB += cauntBB

}
function getWidthBalonTwo() {
    numBalon = widthBB -= cauntBB

}


let balonkey = document.querySelectorAll(`.balonKey`)
function getPorms() {
    if (numBalon <= 17 || numBalon >= 23) {
        numBalon = false
        numBalon = 17
        numBalon = 21
    }
    balonkey.forEach(bal => {
        if (numBalon == 19) {
            bal.src = "./sheetTwo/img_balon/download.png"
        } else {
            bal.src = "./sheetTwo/img_balon/download (2).png"

        }
    })

    balonIige.innerHTML = numBalon

}

btnBalonTwo.onclick = () => {
    getWidthBalonOne()
    getPorms()
}
btnBalonOne.onclick = () => {
    getWidthBalonTwo()
    getPorms()
}




