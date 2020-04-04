function method(n) {
    let step="",row=2*n-1,col=2*n-1;
    
    for (let i = 1; i <= row; i++) {
      for (let j = 1; j <= col; j++) {
        if (i <= n) {
          j > n - i && j < n + i ? (step += "*") : (step += "-");
        } else {
          j <= i - n || j >= col - (i - n) + 1 ? (step += "-") : (step += "*");
        }
      }
      step += "\n";
    }
    console.log(step);
  }
  
  method(2);
  method(3);
  method(4);