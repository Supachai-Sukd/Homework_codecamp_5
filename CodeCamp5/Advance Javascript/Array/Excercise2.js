let styles = ["Jazz","Blues"];
console.log(styles); // Jazz Blues
styles.push("Rock-n-Roll");
console.log(styles); //Jazz Blues Rock-n-Roll
styles[1] = "Classics"
console.log(styles); //Jazz Classics Rock-n-Roll
styles.shift()
console.log(styles); //Classics Rock-n-Roll
styles.unshift("Rap","Reggae");
console.log(styles); //Rap Reggae Classics Rock-n-Roll



