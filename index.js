var input1 = document.getElementById("name");
var input2 = document.getElementById("email");
var input3 = document.getElementById("number");
var bodytable = document.querySelector("tbody");
var Button = document.getElementById("btn");

Button.addEventListener("onclick", ()=>{
if(input1.value =="" || input2.value =="" || input3.value == "" ){
     warn("again fill");
    return "again fill it";
}
bodytable.innerHTML += `<tr><td>${input1.value}</td><td>${input2.value}</td><td>${input3.value}</td><td id="remove"><button>Remove</button></td></tr>`



var btnRemove = document.getElementById("#remove");
for(let i=0; i<btnRemove.length; i++){
    btnRemove[i].onclick = function(){
        this.parentNode.remove();
    }
}
input1.value =""
input2.value =""
input3.value =""
} )






// console.log("commit")



















