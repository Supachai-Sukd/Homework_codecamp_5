function method(n){
    let i,j,step="";
    for(i = 1;i <= n;i++){
        for(j = n;j > 0;j--){
            if(j >= i){
                step += "*"
            }
            else{
                step += "-"
            }
        }
        step += "\n"
    }
    console.log(step);
    
}
method(4)