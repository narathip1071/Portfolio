window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm ;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย

        var Password1 = document.forms["myForm"]["password"];
        var Password2 = document.forms["myForm"]["password1"];
        if(Password1.value == Password2.value)
        {
            alert("OK"); 
        }
        else 
        {
            document.getElementById("errormsg").innerHTML = "รหัสผ่านไม่ถูกต้อง";
            return false;
        }
        
}