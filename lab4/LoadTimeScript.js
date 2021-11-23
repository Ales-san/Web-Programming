(function () {
    document.addEventListener('DOMContentLoaded', () => {
    //window.onload = () => {
        let navperf = performance.getEntriesByType('navigation')[0];
        let pageLoadTime = Math.abs(navperf.domContentLoadedEventStart - navperf.domContentLoadedEventEnd);
        document.getElementById("timer").innerText = "Page load time is: " + pageLoadTime.toPrecision(5);
    })
})();
//alert(navperf.loadEventEnd - navperf.loadEventStart)
//alert("hi, its duration: " + navperf.duration)
