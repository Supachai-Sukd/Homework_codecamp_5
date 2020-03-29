let user = prompt(`Enter your user name`);
let password;

if(user == 'Admin' || user == 'admin'){
    password = prompt(`Enter your password`);
    if(password == 'codecamp#5'){
        alert(`ยินดีต้อนรับ คุณ ${user}`);
    }
    else if(password == ''){
        alert(`ยกเลิก`);
    }
    else{
        alert(`Wrong password`);
    }
}
else if(user == ''){
    alert(`ยกเลิก`);
}
else{
    alert(`ผมไม่รู้จักคุณ ${user}`);
}

