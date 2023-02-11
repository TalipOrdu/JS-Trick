const answerNo = document.querySelector(".negative");
const answerYes = document.querySelector(".positive");
const result = document.querySelector(".result");

console.log(answerYes);
answerNo.addEventListener("mouseover",mouseHover);

function mouseHover(){
    const i = Math.floor(Math.random()*400) + 1; 
    const j = Math.floor(Math.random()*400) + 1; 
    
    answerNo.style.left = i + "px";
    answerNo.style.top = j + "px";
}

answerYes.addEventListener("click",()=>{
    result.style.display="block";
    answerNo.style.display = "none";
    answerYes.style.display = "none";
})
