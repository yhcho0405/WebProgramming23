let intervalVar = undefined;
let timeSecond = undefined;
let authenticationCode = undefined;

function doTimer() {
    alert("인증번호가 전송되었습니다.")	// 인증번호 전송 버튼을 클릭!
    const auth_btn = document.getElementById("auth__btn");
    auth_btn.value = "인증번호 재전송";	// 인증번호 전송 버튼 text가 '재전송'으로 바뀜.
    timeSecond = 180;	// 타이머 3분
    document.getElementById('time_count').innerText = getTimeString(timeSecond);	// 타이머 입력창에 시간이 노출된다.

    if (intervalVar != undefined) {	
    clearInterval(intervalVar);
    }

    intervalVar = setInterval(function () {
        if (timeSecond != 0) {
        timeSecond = timeSecond - 1;
        document.getElementById('time_count').innerText = getTimeString(timeSecond);	// 0초가 아니라면 1초씩 감소 되면서 타이머 입력창에 보여진다.
        } else {
        clearInterval(intervalVar);
        intervalVar = false;	// 그 외 동작은 clearInterval 메소드로 인해 시간이 멈춘다.
        } 
        if (timeSecond == -1 || intervalVar == false) {
        alert('인증번호 유효시간이 초과하였습니다. 인증번호를 재전송 해주세요.');
        doTimer();	// 인증시간이 지나고 재귀함수 실행.
        document.getElementById("typingcode").value = null;
        }	// 그리고 만약에 임시 인증코드를 입력하지 않거나 확인버튼을 누르지 않고 시간이 0초가 된다면 위 안내문이 보여진다.
    }, 1000);	// 180초에서 1000ms초 간격으로 시간이 흐른다. 
}

function getTimeString(second) {	// 타이머 계산법
    let minute = '' + (Math.floor(second / 60));	// 1분
    let dividedSec = second % 60;	//  60초
    if (dividedSec < 10) {	// 만약 10보다 작은 1~9초는 앞에 '0'을 붙인다.
        dividedSec = '0' + dividedSec;
    }
    // ex) 3:00 -> 3분
    return minute + ":" + dividedSec;
}

function doCodeCheck() {
    const typingCode = document.getElementById("typingcode").value;	// 입력코드 요소 셀렉팅
    if (typingCode == '') {
        alert('인증번호를 입력하세요.');
        return;
    }
    if (timeSecond == -1 || intervalVar == false) {
        alert('인증번호 유효시간이 초과하였습니다. 인증번호를 재전송 해주세요.');
    }	// 시간이 0초가 되어서 시간이 다된 상태에서 인증코드를 입력하게 된다면 위 안내문이 보여진다.
    else {
        alert('인증번호가 동일합니다.');
        clearInterval(intervalVar);
        intervalVar = false;
    }
}

function check_pw(){
    var pw = document.getElementById('pw').value;
    var SC = ["!","@","#","$","%"];
    var check_SC = 0;

    if(pw.length < 6 || pw.length>16){
        window.alert('비밀번호는 6글자 이상, 16글자 이하만 이용 가능합니다.');
        document.getElementById('pw').value='';
    }
    for(var i=0;i<SC.length;i++){
        if(pw.indexOf(SC[i]) != -1){
            check_SC = 1;
        }
    }
    if(check_SC == 0){
        window.alert('!,@,#,$,% 의 특수문자가 들어가 있지 않습니다.')
        document.getElementById('pw').value='';
    }
    if(document.getElementById('pw').value !='' && document.getElementById('pw2').value!=''){
        if(document.getElementById('pw').value==document.getElementById('pw2').value){
            document.getElementById('check').src='../images/homepage_img/check.png'
        }
        else{
            document.getElementById('check').src='../images/homepage_img/notcheck.png';
        }
    }
}


function signin() {

    alert('가입 되었습니다');
    window.location.href = '../index.html';

}
