function hbh(x) {
    if (isNaN(x)) {
      return 'Not a Number!';
    }
    return x * 1000;
  }
  
  console.log(hbh('100F'));
  
  console.log(hbh('12'));
  