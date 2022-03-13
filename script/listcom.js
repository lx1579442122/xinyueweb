// 导航栏时间
// var show = document.querySelector('.show');
window.onload = function () {
    // 手风琴 start
    let wrap = document.querySelector('.wrap');
    let cards = document.querySelectorAll('.card');

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('mouseover', function () {
            cards[i].classList.add("active");
        })
        cards[i].addEventListener('mouseleave', function () {
            
            cards[i].classList.remove("active");

        })
    }      
       
    
        // for (let i = 0; i < cards.length; i++) {
        //     cards[i].classList.remove("active");
        // }
   

    var nian = document.querySelector('.show').querySelector('h2');
    var yue = document.querySelector('.show').querySelector('p');
    var ri = document.querySelector('.show').querySelector('span');
    setInterval(function () {
        var time = new Date(); // 程序计时的月从0开始取值后+1   
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var min = time.getMinutes();
        var s = time.getSeconds();
        y = y < 10 ? '0' + y : y;
        m = m < 10 ? '0' + m : m;
        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        min = min < 10 ? '0' + min : min;
        s = s < 10 ? '0' + s : s;
        var t = `北京时间`
        var n = h + `:` + min + `:` + s;
        var j = y + `-` + m + `-` + d + ``;
        nian.innerHTML = t;
        yue.innerHTML = j;
        ri.innerHTML = n;
    }, 1000);
}

