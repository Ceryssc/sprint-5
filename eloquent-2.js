//exercise 1

let line = "#"
for (let line = "#"; line.length < 8; line += "#"){
  console.log(line);
}

//exercise 2

for (let x = 1; x < 100; x += 1) {
    let result = "";
      if (x % 3 == 0) 
        result +="Fizz";
      if (x % 5 == 0) 
        result +="Buzz";
      console.log(result || x);
    }
    
 
//exercise 3


    let size = 8;

    let board = "";
    
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
          board += " ";
        } else {
          board += "#";
        }
      }
      board += "\n";
    }
    
    console.log(board);

    //had trouble trying to solve this one. Mostly took the answer provided. Will revisit later 