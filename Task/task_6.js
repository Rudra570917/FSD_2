function transformFirstAndLast(arr) {
    let obj = {};
    
    let first = arr[0];
    let last = arr[arr.length - 1];
    
    obj[first] = last;
    
    return obj;
}

// Example
console.log(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']));
console.log(transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']));