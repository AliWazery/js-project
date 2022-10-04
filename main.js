





let input = document.querySelector("input");


let btn =document.querySelector("button");


btn.addEventListener("click",function(){

   let val = input.value ; //باخدلاالفاليو 
   if(val.length<3||val.length>10||val.length==""){
     window.alert("please enter suitable task")
   }else{
      let tskcontain =document.getElementById("tasklist");  //بجيب المكان للي فيه الاليرت
      let newtask=document.createElement("div"); //بعمل الديف اللي فيه التاسك
      newtask.classList.add('alert')
      newtask.classList.add('alert-primary')   
      newtask.classList.add('valid')
      let newbtn=document.createElement("button");
      newbtn.classList.add("removed")
   
      newbtn.classList.add("btn")
      newbtn.classList.add("btn-danger")
      let esc =document.createTextNode("remove")
      newbtn.appendChild(esc)
      newbtn.style.float="right"
      newbtn.style.margin="-5px"
      newtask.appendChild(newbtn);
      newtask.append(val)
      tskcontain.appendChild(newtask);
   document.addEventListener("click" ,function(e){
      


      if(e.target.classList.contains("valid")){
         e.target.classList.toggle('check')
      }
     
   })
      
      let remo=document.getElementById("remo");
      remo.style.display="none"
      input.value=""   }
   
})



function notask(){
   if( tskcontain.childElementCount==0 ){
      remo.style.display="block";
   
   }
   }




document.addEventListener("click",function(e){
if(e.target.classList.contains("removed")){
e.target.parentElement.remove();
notask();
}}
)



let btn2 = document.getElementById("up");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn2.style.display = "block";
  } else {
    btn2.style.display = "none";
  }
};

btn2.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};