function method(n){
    let i,j,step="";
    for(i = n;i > 0;i--){
        for(j = n;j > 0;j--){
            if(j <= i){
                step += "*"
            }
            else{
                step += "-"
            }
        }
       step+= "\n"
        
    }
    console.log(step);
    
}
method(4)
method(3)
method(2)