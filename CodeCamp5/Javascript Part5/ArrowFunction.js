


let okAgree = () => alert("You agreed.");
let notAgree = () => alert("You canceled the execution.");
let ask = (question,yes,no) => {
    if(confirm(question)) yes();
    else no();
}




ask("Do you agree?",okAgree,notAgree)




