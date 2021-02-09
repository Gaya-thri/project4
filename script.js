var button = document.getElementById('submit');
try{
button.addEventListener("click",async function(){
    var field = document.getElementById("blur").value;
    var response = await fetch('http://www.boredapi.com/api/activity/?type='+field);
    console.log(response)
    var data = await response.json();
    console.log(data);
    var activity = document.getElementById("activity");
    activity.innerText = data.type+" : "+data.activity;
})
}
catch(error){
    console.log(error);
}