/*-------------------------------- Constants --------------------------------*/
const playerAPath =[72,73,74,75,76,77,78,79,80,71,62,53,44,35,26,17,8,7,6,5,4,3,2,1,9,18,27,36,45,54,63,64,65,66,67,68,69,70,61,52,43,34,25,16,15,14,13,12,11,10,19,28,37,46,56,57,59,60,51,42,33,24,23,22,21,20,29,38,47,48,49,50,41,32,31,30,39.40]



const doesArrayHaveDuplicates = playerAPath.some(
  (val, i) => playerAPath.indexOf(val) !== i
)
console.log(doesArrayHaveDuplicates);
const plyerBPath =[];


/*---------------------------- Variables (state) ----------------------------*/
let turn , winner, board;
//Four random number to 
let randomNumber1 =Math.floor(Math.random()*2)+1;
let randomNumber2 =Math.floor(Math.random()*2)+1;
let randomNumber3 =Math.floor(Math.random()*2)+1;
let randomNumber4 =Math.floor(Math.random()*2)+1;



/*------------------------ Cached Element References ------------------------*/
const gameBoard = document.querySelectorAll('.cell')
console.log(gameBoard)

/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/