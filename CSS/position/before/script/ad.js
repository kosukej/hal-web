
for (let i=0; i>100; i++) {
    document.getElementById("box2").style.bottom = i+"px";
    await _sleep(2000);
}

const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

