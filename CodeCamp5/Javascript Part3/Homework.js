let year = prompt(`ปีแรกที่จัด Codecamp คือปีอะไร`);

if(year == 2018){
    alert(`ถูกต้อง ${year}`);
    alert(`เก่งมากๆ ${year}`);
}
else if(year == 2019 || year == 2017){
    alert(`ใกล้แล้วอีกนิดเดียว ${year}`);
}
else{
    alert(`ผิดนะ ${year}`);
    alert(`กด F5 ลองใหม่นะ ${year}`);
}