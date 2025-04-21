function pwConfirm(){
    let pw=document.querySelector("#pw").value;
    let pw2=document.querySelector("#pw2").value;
    if (pw==pw2){
        document.querySelector("#pwCheck").style.color = "blue";
        document.querySelector("#pwCheck").innerText="비밀번호가 일치합니다.";
    } else{
        document.querySelector("#pwCheck").style.color = "red";
        document.querySelector("#pwCheck").innerText="비밀번호가 일치하지 않습니다.";
    }
    if (pw == " "){
        document.querySelector("#pwCheck").style.color = "black";
        document.querySelector("#pwCheck").innerText="비밀번호를 다시 한번 입력해 주세요.";
    }
}
function zipCodeBtn(){
    new daum.Postcode({
        oncomplete: function(data) {
            document.querySelector("#postZip").value=data.zonecode;
            document.querySelector("#addr1").value=data.address;
            document.querySelector("#addr2").focus();
        }
    }).open();
}