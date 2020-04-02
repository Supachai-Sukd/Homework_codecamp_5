function method(n){
    let i,j,step="";
    for(i = 0;i < n;i++){
        for(j = 0;j < n;j++){
           if(i == j){
               step += "-"
           }
           else{
               step += "*"
           }
        }
        step += "\n";
    }
    console.log(step);
    
}

method(3)