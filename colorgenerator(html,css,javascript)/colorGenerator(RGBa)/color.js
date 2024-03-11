const btn=document.querySelector("button");
btn.addEventListener("click",function(){
    const h1=document.querySelector("h1");
    h1.innerText=randomColor();
    const cuurcolor=randomColor();
    const div=document.querySelector("div");
    div.style.backgroundColor=randomColor();
   console.log("button is clicked"); 
});
function randomColor(){
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);
    const a=(Math.random());
    const newColor=`rgba(${red},${green},${blue},${a})`;
    return newColor;
}