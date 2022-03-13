// 图片跟随鼠标移动
window.addEventListener('DOMContentLoaded', () => {
 

    let pic = document.querySelector('img');
    document.addEventListener('mousemove', e => {
        let x = e.pageX;
        let y = e.pageY;
        // console.log(x, y);
        pic.style.left = x + 5 + 'px';
        pic.style.top = y + 5 + 'px';
    });
//   背景切换鼠标点击显示
    let tit =document.querySelector('.tit');
    let none = document.querySelector('#none');
    // let bgc = document.querySelector('.bgc');
    let isopen = false;
    tit.onclick = function () {
        isopen = !isopen;
        if (isopen) {
            tit.innerHTML = '点击隐藏切换';
            none.style.display = 'block';
        } else {
            tit.innerHTML = '点击切换背景';    
            none.style.display = 'none';
        }
    }
   
 // 背景切换
    const bgc = document.querySelector('.bgc').querySelectorAll('img');
    const bgck = document.querySelector('.bgck').querySelector('img');
    for (let i = 0; i < bgc.length; i++) {
        bgc[i].onclick = function () {
                    // console.log(this.src);
            bgck.src = this.src;
            }
    }
    
});
