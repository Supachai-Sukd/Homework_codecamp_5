function method(n) {
    let i,step="",result;
    result = 0;
    for(i = 0;i < n;i++){
        
        step += String(result)
        result++;
        result++;
        step += "\n";
    }
    
    console.log(step);
    
}

method(2)