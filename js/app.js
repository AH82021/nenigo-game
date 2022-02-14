/*-------------------------------- Constants --------------------------------*/
const playerAPath=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81];
const plyerBPath =[17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,45,46,47,48,49,50,51,52,53,54,55,56,33,34,35,36,37,38,39,40,41,42,43,44,65,66,67,68,69,70,71,72,57,58,59,60,61,62,63,64,77,78,89,80,73,74,75,76,81];




/*---------------------------- Variables (state) ----------------------------*/
let turn , winner, board;
//Four random number to 
let randomNumber1 =Math.floor(Math.random()*2)+1;
let roundImg1="../image/1-"+randomNumber1+".png"
let randomNumber2 =Math.floor(Math.random()*2)+1;
let roundImg2="../image/2-"+randomNumber2+".png"
let randomNumber3 =Math.floor(Math.random()*2)+1;
let roundImg3="../image/3-"+randomNumber3+".png"
let randomNumber4 =Math.floor(Math.random()*2)+1;
let roundImg4="../image/4-"+randomNumber4+".png"
console.log(randomNumber1,randomNumber2,randomNumber3,randomNumber4);

const Neno = randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4;



let rollBtn = document.querySelector(".rollBtn")


/*------------------------ Cached Element References ------------------------*/
let imgSel1 =document.querySelector(".img1")
let imgSel2 =document.querySelector(".img2")
let imgSel3 =document.querySelector(".img3")
let imgSel4 =document.querySelector(".img4")
let text = document.querySelector(".text")





/*----------------------------- Event Listeners -----------------------------*/
rollBtn.addEventListener('click',rollNenios)


/*-------------------------------- Functions --------------------------------*/
// function to select roll the nenios
function rollNenios() {
imgSel1.setAttribute("src",roundImg1)
imgSel2.setAttribute("src",roundImg2)
imgSel3.setAttribute("src",roundImg3)
imgSel4.setAttribute("src",roundImg4)
  init()
}

function init() {
  
  console.log(Neno);
  if (Neno === 8)  {
    return text.innerText ="It is Neno and you got 9 moves"
  } else if (Neno === 4){
    return text.innerText ="It is a Darwish, you got 4 moves 🚩"
  } else if(Neno === 5 || Neno === 7){
  return text.innerText ="It is a Polow, you got 3 moves  🚩"
  }else if(Neno === 6) {
    return text.innerText ="It is a togag, you got 2 moves  🚩"
  } else{
    return text.innerText ="It is a onak, you got 1 moves  🚩"
  }

  
}