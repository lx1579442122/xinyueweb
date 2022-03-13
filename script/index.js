                
// 轮播 end
// 最新推荐的隐藏span显示
window.addEventListener('DOMContentLoaded', function () {
    let lis = document.querySelector('#block').querySelectorAll('li');
    let div = document.getElementById('block').getElementsByTagName('div');
    let img = document.querySelector('#block').querySelectorAll('img')
    // 事件监听不可行
    // for (let i = 0; i < lis.length; i++) {
    //     lis[i].addEventListener('mouseover', () => {
    //         for (let i = 0; i < div.length; i++) {
    //             div[i].style.display = 'block';
    //         }
    //     });
    //     lis[i].addEventListener('mouseout', () => {
    //         for (let i = 0; i < div.length; i++) {
    //             div[i].style.display = 'none';
    //         }
    //     });
    // }
    for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function (e) {
            div[i].style.display = 'block';
            lis[i].className = 'br';
        }
        lis[i].onmouseout = function () {
            div[i].style.display = 'none';
            lis[i].className = '';
        }
    }
    // 背景切换
    const bgc = document.querySelector('.bgc').querySelectorAll('img');
    const bgck = document.querySelector('.bgck').querySelector('img');
    for (let i = 0; i < bgc.length; i++) {
        bgc[i].onclick = function () {
            console.log(this.src);
            bgck.src = this.src;
        }
    }
     // 快速回到顶部以及对身体，底部的定义
            // Window.onload = function () {
    let recommend = document.querySelector('.recommend');
    // console.log(recommend.offsetTop);
    let cation = document.querySelector('.cation');
    // 由于改为固定定位的时候，top值会复用，会跳动
    let to = cation.offsetTop - recommend.offsetTop + 330;
    let tp = document.querySelector('.cation').querySelector('.top');
    // let body = document.querySelector('.body');
    let foot = document.querySelector('.foot');
    // let footer = document.querySelector('.footer');
    document.addEventListener('scroll', function () {
        // console.log(window.pageXOffset);
        // 回到顶部属性设置
        if (window.pageYOffset >= recommend.offsetTop - 330) {
            cation.style.position = 'fixed';
            cation.style.top = to + 'px';
            tp.style.display = 'block';
        } else {
            cation.style.position = 'absolute';
            cation.style.top = '43rem';
            tp.style.display = 'none';
        }
        // 去到底部

    });
    // 回到顶部点击事件
    tp.addEventListener('click', function () {
        timers = setInterval(() => {
            var backtop = document.documentElement.scrollTop;
            var speedtop = backtop / 7;
            document.documentElement.scrollTop = backtop - speedtop;
            if (backtop == 0) {
                clearInterval(timers);
            }
        }, 30);
        // 在第一页没有必要出现回到顶部这个按钮
    })
    // document.documentElement.scrollTop = 0;
    // }
    //文本框placeholder获取焦点隐藏，失去焦点显示
    let iput = document.querySelector('.serch').querySelector('input')
    iput.onclick = function () {
        iput.placeholder = '';
    }
    iput.onblur = function () {
        iput.placeholder = '搜索···';
    }

    // 轮播start
    var mySwiper = new Swiper('.swiper', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            disableOnInteraction: false,
            delay: 2000
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    // 轮播 end
    // 导航栏样式
    var li = document.querySelector('#nv').querySelectorAll('li');
    let hover = document.querySelector('.hov');
    for (let i = 0; i < li.length; i++) {
        li[i].onmouseover = function () {
            let le = i * 7;
            hover.style.left = le + 'rem';
        }
    }

    for (let i = 0; i < li.length; i++) {
        li[i].onmouseout = function () {
            hover.style.left = 0 + 'px';
        }
        // 导航栏hover动画
    }
    // 导航栏时间
    var show = document.querySelector('.show');
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
        var t = `北京时间：` + y + `-` + m + `-` +
            d + ` ` + h + `:` +
            min + `:` + s;
        show.innerHTML = t;
    }, 1000);

});