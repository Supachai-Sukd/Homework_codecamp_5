function method(n){
    let i,step="",result = 2;
    for(i = 0;i < n;i++){
        
        step += String(result);
        result+=2;
        step += "\n";
    }
    console.log(step);
    
}
method(4)