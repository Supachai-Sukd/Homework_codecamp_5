function method(n) {
    let i, j, star = "";
    for(i=n;i>0;i--){
        for(j=n;j>0;j--){
            star += String(i);
        }
        star += "\n";
    }
    
    console.log(star)
    
}
method(4)
   







