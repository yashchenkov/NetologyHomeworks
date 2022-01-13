function cachingDecoratorNew(func) {
  let cashe = [];

  return function (...args) {
    let hash = args.toString();
    let found = cashe.find((elem) => elem.hash === hash);

    if(found !==  undefined) {
      console.log("Из кэша: " + cashe[hash]);
      return "Из кэша: " + cashe[hash];
    } else {
      let result = func(...args);
      let length = cashe.push({
        hash: hash,
        value: result,
      });

      if(length >= 5) {
        cashe.shift();
      }
      cashe[hash] = result;
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
}



function debounceDecoratorNew(func, ms) {
    let timeout;
    let flag = false;

    return function (...args) {
      if(!flag) {
      flag = true;
      func.call(this, ...args);
    }
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    };
  }


function debounceDecorator2(func, ms) {
    let timeout;
    let flag = false;
    let history = [];
    
    return function (...args) {
      history.push(args);
      if(!flag) {
      flag = true;
      func.call(this, ...args);
    }
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, ms);
      //console.log(history);
    };
}
