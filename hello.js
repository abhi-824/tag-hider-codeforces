var div = document.querySelectorAll(".tag-box");
var buttonToUnhide=document.createElement("button");
buttonToUnhide.className="button-hide";
buttonToUnhide.innerHTML="Unhide tags";
for(let i=0;i<div.length;i++)
    div[i].style.display ="none";
document.querySelector(".tag-box").parentNode.appendChild(buttonToUnhide);
buttonToUnhide.addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=0;i<div.length;i++)
        div[i].style.display ="inline";
    document.querySelector(".button-hide").remove();
})


