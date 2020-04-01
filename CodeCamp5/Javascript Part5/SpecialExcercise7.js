function method(n) {
    let i,j,step="",result;
    result = n * n;
    for(i = n;i > 0;i--){
        for(j = n;j > 0;j--){
            step += String(result);
            result--;
        }
        step += "\n";
    }
    console.log(step);
    
}

method(4)