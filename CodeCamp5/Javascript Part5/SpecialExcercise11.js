function method(n){
    let i,j,step="",result="_";
    for(i = 1;i <= n;i++){
        for(j = 1;j <= n;j++){
           if(i == j){
               step += "_"
           }
           else{
               step += "*"
           }
        }
        step += "\n";
    }
    console.log(step);
    
}

method(4)