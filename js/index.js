const loginForm = document.getElementById("login-form");

function login() {
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // 간단한 로그인 체크
    if (username === 'admin' && password === 'admin') {
        alert('관리자로 로그인 되었습니다');
        window.location.href = '../index.html';
    } else{
        alert('로그인 되었습니다');
        window.location.href = '../index.html';
    }
}
