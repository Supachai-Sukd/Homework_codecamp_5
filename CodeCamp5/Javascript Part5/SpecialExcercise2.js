function method(n) {
    let i, j, star = "";
    for (i = 1; i <= n; i++){
        for(j=1;j<=n;j++){
            star += String(j);
        }
        star += "\n";
    }
    console.log(star)
}

   


method(4)




