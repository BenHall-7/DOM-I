let handle = setInterval(interval, 10);
let s = 0;

function interval() {
    if (s >= 10) {
        s = 10;

        clearInterval(handle);
        document.getElementsByClassName("digits")[0].classList.add("redDigit");
    }

    let secondTens = Math.floor((s / 10) % 10);
    let secondOnes = Math.floor((s / 1) % 10);
    let msHundreds = Math.floor((s * 10) % 10);
    let msTens = Math.floor((s * 100) % 10);
    document.getElementById("secondTens").textContent = secondTens;
    document.getElementById("secondOnes").textContent = secondOnes;
    document.getElementById("msHundreds").textContent = msHundreds;
    document.getElementById("msTens").textContent = msTens;

    s += 0.01;
}