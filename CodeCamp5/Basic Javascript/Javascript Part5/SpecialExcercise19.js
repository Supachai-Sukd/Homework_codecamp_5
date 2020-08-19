function method(n){
    let i,j,row=(n*2)-1,step="",col=n;
    for(i = 1;i <= row;i++){
        for(j = 1;j <= col;j++){
            if(i <= n){
                if(j >= col - i + 1){
                    step += "*"
                }
                else{
                    step += "-"
                }
            }
            else{
               if(j >= i - col + 1){
                    step += "*"
               }
               else{
                   step += "-"
               }
            }
        }
        step += "\n"
    }
    console.log(step);
    
}
method(4)