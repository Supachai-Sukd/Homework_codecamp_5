function method(n) {
    let i,j,step="";
    for(i = 1;i <= n;i++){
        
        for(j = 1;j <= n;j++){
            step += String(j * i)
            
            
        }
        step += "\n";
        
    }
    console.log(step);
    
}

method(3)