// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 1000);

// console.log("3");

const pm = new Promise( (rs, rj) => {
    setTimeout(() => {
        console.log('2');
        rs()
    }, 1000);
}
)

console.log('1');
pm.then( () => {
    console.log('3');
    
})
