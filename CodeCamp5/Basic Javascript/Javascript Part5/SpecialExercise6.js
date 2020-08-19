function method(n) {
    let star = "",result = 1,i,j;
    for(i = 1;i <= n;i++){
        for(j = 1;j <= n;j++){
            star += String(result);
            result++;
        }
        star += "\n";
    }
    console.log(star);
    
}

method(4)