function method(n) {
    let string =""
    for(let i=1; i <= n;i++){
        for (let j = 0; j < i; j++) {
            string += "*";
        }
        string += "\n"
    }
  string += "\n"
   console.log(string);
   
}
method(2)