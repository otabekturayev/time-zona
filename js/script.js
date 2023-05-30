let seconds = document.querySelector('.seconds')
let time = document.querySelector('.time')

function showTime() {
    let date = new Date()
    let dateParse = Date.parse(date.toUTCString()) / 1000
    seconds.innerText = dateParse
}

setInterval(() => {
    showTime()
}, 1000)

function showTime1() {
    let date1 = new Date()
    time.innerText = `${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`
}
setInterval(() => {
    showTime1()
}, 1000);


let format = document.querySelector('.format')
let gmt = document.querySelector('.gmt')
let yourZone = document.querySelector('.time__zone')
let number = document.querySelector('#number')
let btn1 = document.querySelector('.btn1')
let table1 = document.querySelector('.table1')


btn1.addEventListener('click', () => {
    table1.style.display = 'block'
    let val = Number(number.value * 1000)
    const stringUTC = new Date(val)

    if (number.value.length > 11) {
        format.innerText = 'Milliseconds'
    } else {
        format.innerText = 'Seconds'
    }
    gmt.innerText = stringUTC.toUTCString() + "+0000"
    yourZone.innerText = new Date(val)
})


let inpYear = document.querySelector('#year')
let inpMonth = document.querySelector('#month')
let inpDay = document.querySelector('#day')
let inpHour = document.querySelector('#hour')
let inpMinute = document.querySelector('#minute')
let inpSecond = document.querySelector('#second')
let unix = document.querySelector('.unix')
let gmt2 = document.querySelector('.gmt2')
let timeZone2 = document.querySelector('.time__zone2')
let btn2 = document.querySelector('.btn2')
let table2 = document.querySelector('.table2')


btn2.addEventListener('click', () => {
    table2.style.display = 'block'
    let year = Number(inpYear.value)
    let month = Number(inpMonth.value)
    let day = Number(inpDay.value)
    let hour = Number(inpHour.value)
    let minute = Number(inpMinute.value)
    let second = Number(inpSecond.value)
    let date4 = new Date(year, month - 1, day, hour, minute, second)
    if( inpYear.value == "" && inpMonth.value == "" 
        && inpDay.value == "" && inpHour.value == "" 
        && inpMinute.value == "" && inpSecond.value == ""){
            unix.innerText = ""
            gmt2.innerText = "Invalid date"
            timeZone2.innerText = "Invalid date"
        }else{
            unix.innerText = Date.parse(date4) / 1000
            gmt2.innerText = date4.toUTCString() + "+0000"
            timeZone2.innerText = date4
        }
    
    
})    

