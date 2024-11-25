function first(array) {
    return array.length > 0 ? array[0] : undefined;
  }
  
  // Testování
  console.log(first([3, 2, 1])); // ⟶ 3
  console.log(first([]));        // ⟶ undefined

  function last(array) {
    return array.length > 0 ? array[array.length - 1] : undefined;
  }
  
  // Testování
  console.log(last([3, 2, 1])); // ⟶ 1
  console.log(last([]));        // ⟶ undefined

  function middle(array) {
    if (array.length === 0) return undefined;
    const middleIndex = Math.floor(array.length / 2);
    return array[middleIndex - (array.length % 2 === 0 ? 1 : 0)];
  }
  
  // Testování
  console.log(middle([3, 2, 1]));    // ⟶ 2
  console.log(middle([3, 2, 1, 0])); // ⟶ 2
  console.log(middle([]));           // ⟶ undefined

  function middleMean(array) {
    if (array.length === 0) return undefined;
    const middleIndex = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      return (array[middleIndex - 1] + array[middleIndex]) / 2;
    } else {
      return array[middleIndex];
    }
  }
  
  // Testování
  console.log(middleMean([3, 2, 1]));    // ⟶ 2
  console.log(middleMean([3, 2, 1, 0])); // ⟶ 1.5
  console.log(middleMean([]));           // ⟶ undefined

  function insert(array, value) {
    if (array.includes(value)) {
      return false;
    } else {
      array.push(value);
      return true;
    }
  }
  
  // Testování
  console.log(insert([3, 2, 1], 4)); // ⟶ true
  console.log(insert([3, 2, 1], 3)); // ⟶ false