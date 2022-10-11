

window.onload = loginLoad;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ReUsername = urlParams.get('username')
const RePassword = urlParams.get('password')

function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}
function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var Username = document.forms["myLogin"]["username"];
	var Password = document.forms["myLogin"]["password"];
	
	if(Username.value != ReUsername || Password.value != RePassword)
	{
		alert("ชื่อผู้ใช้หรือรหัสผ่านของคุณไม่ถูกต้อง,กรุณากรอกใหม่อีกครั้ง")
		return false ;
	}
	else{
		alert("ล็อกอินสำเร็จ");
	}




	
}

			