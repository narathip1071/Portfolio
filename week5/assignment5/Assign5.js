
var x=3
function postFunction()
{
    var text = document.getElementById("text1").value;
    x = x-1;
    if(x==2)
    {
        document.getElementById("topic1").innerHTML = text;
    }
    else if(x==1)
    {
        document.getElementById("comment1").innerHTML = text;
    }
    else if(x==0)
    {
        document.getElementById("comment2").innerHTML = text; 
    }
    return x;  
}
function clearFunction()
{
    x=3;
    document.getElementById("topic1").innerHTML= null;
    document.getElementById("comment1").innerHTML = null;
    document.getElementById("comment2").innerHTML= null;
    document.getElementById("text1").value =null;
}









