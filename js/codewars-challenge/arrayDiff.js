function arrayDiff(a, b) {  
    let arrayDiff = a.filter(element => {
      return !b.includes(element);
    });
    return arrayDiff;
  }