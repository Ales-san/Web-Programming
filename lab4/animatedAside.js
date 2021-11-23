element = document.getElementById('stock');
var i = 0;
var direction = 1;
setInterval(() => {
    let color = 50 + i;
    document.querySelectorAll('aside')[0].style.backgroundColor = 'rgb(244, 248, ' + color + ')';
    i += direction;
    if(i >= 255) {
        direction = -1;
    }
    if(i <= 0) {
        direction = 1;
    }
    }, 3);
