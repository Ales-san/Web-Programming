(function () {
    document.addEventListener('DOMContentLoaded', () => {
    //window.onload = () => {
        document.getElementById("timer").innerText = "Page load time is: " + performance.now().toPrecision(5) + " ms";
    })
})(); //measure
//alert(navperf.loadEventEnd - navperf.loadEventStart)
//alert("hi, its duration: " + navperf.duration)
