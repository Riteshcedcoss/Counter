var data = 0;
document.getElementById("counting").innerText = data;
  function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}

function decrement() {
   if(data<=0){
    document.getElementById("counting").innerText = data;
   }
   else{
    data = data - 1;
    document.getElementById("counting").innerText = data;
}
}
function display(){
    document.getElementById("counting").innerText = data;
}