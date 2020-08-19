function method(n){
    let i,j,col=(n*2)-1,row=(n*2)-1,result=1,step="";
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
          if (i <= n) {
            j > n - i && j < n + i ? (step +=String(result++)) : (step += "-");
          } else {
            j <= i - n || j >= col - (i - n) + 1 ? (step += "-") : (step +=String(result++));
          }
        }
        step += "\n";
      }
      console.log(step);
}
method(4)
method(3)