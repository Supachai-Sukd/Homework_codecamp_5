function method(n){
    let i,j,step="",col=(n*2)-1,row=n;
    for(i =1;i <= n;i++){
        for(j = 1 ;j <= col;j++){
           if(j <= n){
               i >= j + 1 ? (step += "-") : (step += "*")
           }
           else{
               j >= col - i +2 ? (step += "-") : (step += "*")
           }
        }
        step += "\n"
    }
    console.log(step);
    
}


method(2)
method(3)
method(4)