function method(n) {
    let step = "",result = 1,row = 2 * n - 1,col = n;
    
    for (let i = 1; i <= row; i++) {
      for (let j = 1; j <= col; j++) {
        if (i <= n) {
          j >= col - i + 1 ? (step += String(result++)) : (step += "-");
        } else {
          j >= i - col + 1 ? (step += String(result++)) : (step += "-");
        }
      }
      step += "\n";
    }
    console.log(step);
  }
  
  method(4);
  