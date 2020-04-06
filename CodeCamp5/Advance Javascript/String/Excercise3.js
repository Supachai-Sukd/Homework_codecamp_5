function truncate (str, maxlength) {
    let msg = str;
    let maxMsg = maxlength;
    console.log(msg.slice(0,maxMsg) + "...");
}

truncate("Bankbank",4);