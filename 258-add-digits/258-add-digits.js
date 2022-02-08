const addDigits = (num) => {
    let myFunc = n => Number(n);
    const list = Array.from(String(num), myFunc);
    if (list.length === 1) {
        return num
    }
    const sum = list.reduce(add, 0); // with initial value to avoid when the array is empty


    
    return addDigits(sum)
    
}

function add(accumulator, a) {
  return accumulator + a;
}