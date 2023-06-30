let string="";
let button= document.querySelectorAll(".btn");
Array.from(button).forEach((button) =>{
 button.addEventListener('click',(e)=>{
    if(e.target.innerHTML== '='){
        document.querySelector('input').value= eval(string);

    }
    else if(e.target.innerHTML== "AC"){
        string="";
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML== "DE" ){
           string=string.substring(0,string.length-1);
           document.querySelector('input').value=string;
    }
    else{
    string = string + e.target.innerHTML;
    document.querySelector('input').value=string;
    }
 })
})