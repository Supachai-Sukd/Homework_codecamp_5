function method(n){
    let i,j,step="";
    for(i = n;i > 0;i--){
        for(j = 1;j <= n;j++){
            if(i <= j){
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
method(2)
method(3)
method(4)