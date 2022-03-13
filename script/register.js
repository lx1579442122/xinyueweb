/*
    Logic：
        主要采用原生 JavaScript，
        只有在发送 Ajax 请求是才使用 JQuery
        ..
    
    ===
    1、登录注册页面的切换逻辑

    2、Ajax发送及接受响应逻辑
    ===
*/


// 封装选择器, 采用ES6箭头函数写法
const getSelector = ele => {
        return typeof ele === "string" ? document.querySelector(ele) : "";
}
    // 登录注册载入
const containerShow = () => {
    var show = getSelector(".container")
    show.className += " container-show"
}
window.onload = containerShow;
// 登录注册页切换
((window, document) => {
    // 登录 -> 注册
    let toSignBtn = getSelector(".toSign"),
        toLoginBtn = getSelector(".toLogin")

    loginBox = getSelector(".login-box"),
        signBox = getSelector(".sign-box");

    toSignBtn.onclick = () => {
        loginBox.className += ' animate_login';
        signBox.className += ' animate_sign';
    }
    toLoginBtn.onclick = () => {
        loginBox.classList.remove("animate_login");
        signBox.classList.remove("animate_sign");
    }

})(window, document);

window.addEventListener('DOMContentLoaded', function() {
    //注册的小眼睛按钮，查看密码
    var flag = 0;
    var cos = document.querySelector('#psw');
    let btn = document.querySelector('.cos').querySelector('img');
    btn.addEventListener('click',
        function() {
            if (flag == 0) {
                cos.type = 'text';
                this.src = 'img/open.png';
                flag = 1;
            } else {
                cos.type = 'password';
                this.src = 'img/close.png';
                flag = 0;
            }
        });
    var bos = document.querySelector('#pswt');
    let btn2 = document.querySelector('.bos').querySelector('img');
        btn2.addEventListener('click',function() {
            if (flag == 0) {
                bos.type = 'text';
                this.src = 'img/open.png';
                flag = 1;
            } else {
                bos.type = 'password';
                this.src = 'img/close.png';
                flag = 0;
            }
        });
    var bose = document.querySelector('#pswte');
    let btn3 = document.querySelector('.bose').querySelector('img');
    btn3.addEventListener('click',function() {
        if (flag == 0) {
            bose.type = 'text';
            this.src = 'img/open.png';
            flag = 1;
        } else {
            bose.type = 'password';
            this.src = 'img/close.png';
            flag = 0;
        }
    });
    //文本框placeholder获取焦点隐藏，失去焦点显示
    var inputs = document.querySelector('.container').getElementsByTagName('input');
        addEventListener('click', (e) => {
            for (var i = 0; i < inputs.length; i++) {
                e.target.placeholder = '';
            }
        });
    inputs[0].onblur = (e) => {
        e.target.placeholder = '请输入邮箱';
    }
    inputs[1].onblur = (e) => {
        e.target.placeholder = '请输入密码';
    }
    inputs[2].onblur = (e) => {
        e.target.placeholder = '请输入邮箱';
    }
    inputs[3].onblur = (e) => {
        e.target.placeholder = '请输入密码 6-16位';
    }
    inputs[4].onblur = (e) => {
        e.target.placeholder = '请确认密码 6-16位';
    }

// 邮箱格式，密码等级验证
    // let inputs = document.querySelector('.container').getElementsByTagName('input');
    let user = document.querySelector('.user');
    let pass = document.querySelector('.pass');
    let repass = document.querySelector('.repass');
    let check = document.querySelector('#chec');
    let colors = [
        "#ff4757",
        "#ffa502",
        "#2ed573",
        "#1e90ff"
    ]

    function checksame() {
        if (pass.value == repass.value && pass.value.length > 0) {
            pass.style.border = repass.style.border = "1px solid #7bed9f"
            return true
        } else if (pass.value != repass.value && pass.value.length > 0) {
            pass.style.border = repass.style.border = "1px solid #ff6b81"
            return false
        } else {
            pass.style.border = repass.style.border = "1px solid white"
            return false
        }
    }

    function checkpass(val) {
        var sl = 0
        var chk = [
            /[a-z]/,
            /[0-9]/,
            /[A-Z]/,
            /[\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/
        ]
        for (var i = 0; i < chk.length; i++) {
            if (chk[i].test(val)) {
                sl++
            }
        }
        return (sl)
    }
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keyup", function() {
            var level = checkpass(pass.value)
            for (var i = 0; i < 4; i++) {
                if (i < level) {
                    check.children[i].style.background = colors[i]
                } else {
                    check.children[i].style.background = "rgba(245, 52, 110, 0.5)"
                }
            }
            if (checksame() && pass.value.length > 7 && level > 2 && user.value.length > 0) {
                regbutton.style.color = "white"
                regbutton.style.border = "1px solid white"
                regbutton.style.cursor = "pointer"
            } else {
                regbutton.style.color = "gray"
                regbutton.style.border = "1px solid gray"
                regbutton.style.cursor = "default"
            }
        })
    }
});




// Ajax 请求发送