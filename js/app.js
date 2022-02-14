/*-------------------------------- Constants --------------------------------*/
const playerAPath=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81];
const plyerBPath =[17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,45,46,47,48,49,50,51,52,53,54,55,56,33,34,35,36,37,38,39,40,41,42,43,44,65,66,67,68,69,70,71,72,57,58,59,60,61,62,63,64,77,78,89,80,73,74,75,76,81];




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