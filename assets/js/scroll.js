


var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');
var slider = document.getElementById('slider');

line1.onclick = function() {
  slider.style.transform = 'translateX(0)';
}

line2.onclick = function() {
  slider.style.transform = 'translateX(-215%)';
}

line3.onclick = function() {
  slider.style.transform = 'translateX(-50)';
}

