let array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
  ].filter(function(x) {
    let beforeTwothoundsand = x.birth.slice(0, 4)
    return beforeTwothoundsand < 2000
  })

  console.log(array1);
  