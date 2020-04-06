function checkSpam (string) {
    let str = string.includes("xxx") || string.includes("viagra");
    console.log(`ข้อความคุณเป็น spam หรือไม่ ${str}`)
}


// xxx  เป็น true
// viagra
checkSpam("viagra")