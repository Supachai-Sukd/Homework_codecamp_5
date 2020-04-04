function method(n){
    let i,j,step="",col=(n*2)-1,row=n;
    for(i =n;i > 0;i--){
        for(j =1;j <= col;j++){
            if(j <= n){
                j < i ? (step += "-") : (step += "*")
                
            }
            else{
                j > col - i + 1 ? (step += "-") : (step += "*") 
            }
        }
        step += "\n"
    }
    console.log(step);
    
}

method(2)
method(3)
method(4)