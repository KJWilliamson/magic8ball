//using anagrams and frequency counter to get an idea
//using switch statement
//need to get button working and show answer





let randomNum = Math.floor( Math.random() * 6 ) +1;
let magicball = '';
  switch (randomNum) {
  case 1: 
    magicball = "Yes"; 
    break; 
  case 2:
    magicball = "No";
    break; 
  case 3:
    magicball = "It's very likely"; 
    break;
  case 4: 
    magicball = "Try again later";
  case 5:
    magicball = "The future is uncertain";
  case 6: 
    magicball = "Not likely";
  }
