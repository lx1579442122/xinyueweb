
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


});