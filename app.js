const addWithDelay = (start)=> {
  /*
  setTimeout(()=> {
    const rnd = Math.ceil(Math.random()*10);
    console.log(`Random ${rnd}`);
    return fn(start + rnd);
  }, 0);
  */
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      const rnd = Math.ceil(Math.random()*10);
      console.log(`Random ${rnd}`);
      if(rnd < 5){
        return reject('you got less than 5');
      }
      resolve(start + rnd);
    }, 0);
  });
};

const run = async()=> {
  try {
    let data = await addWithDelay(0);
    data = await addWithDelay(data);
    data = await addWithDelay(data);
    data = await addWithDelay(data);
    data = await addWithDelay(data);
  }
  catch(ex){
    console.log(ex);
  }
}
run();

/*
addWithDelay(0)
  .then( data =>addWithDelay(data))
  .then( data =>addWithDelay(data))
  .then( data =>addWithDelay(data))
  .then( data =>addWithDelay(data))
  .then( data =>addWithDelay(data))
  .then( data => console.log(data));
  */

/*
addWithDelay(0, (data)=> {
  addWithDelay(data, (data)=> {
    addWithDelay(data, (data)=> {
      addWithDelay(data, (data)=> {
        addWithDelay(data, (data)=> {
          console.log(data);
        });
      });
    });
  });
});
*/
