const arvutinr = Math.floor(Math.random() * 10) + 1
console.log("arvutinr",arvutinr)
const aNumber = Number(window.prompt("Sisesta üks number 1-10-ni", ""))
if(aNumber == arvutinr) {
    console.log("Yay! Arvasid õige numbri ära!")
}
else if (aNumber == arvutinr + 1) {
    console.log("Ai, sa pakkusid väga lähedale.")
}
else if (aNumber == arvutinr - 1) {
    console.log("Ai, sa pakkusid väga lähedale.")
}
else {
    console.log(`Sorry, ei ole õige number`)
}
