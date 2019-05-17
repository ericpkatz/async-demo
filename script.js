/*
fetch('https://swapi.co/api/people/')
  .then( response => response.json())
  .then( data => {
    const names = data.results.map( item => item.name );
    const html = names.map( name => `<li>${ name}</li>`).join('');
    const list = document.querySelector('ul');
    list.innerHTML = html;
  });
  */

const fetchData = async()=> {
  try {
    let response = await fetch('https://swapi.co/api/people/');
    let data = await response.json();
    const names = data.results.map( item => item.name );
    response = await fetch(data.next);
    data = await response.json();
    const allNames = names.concat(data.results.map( item => item.name ));

    const html = allNames.map( name => `<li>${ name}</li>`).join('');
    const list = document.querySelector('ul');
    list.innerHTML = html;
  }
  catch(ex){
    console.log(ex);
  }
};

fetchData();
console.log('here');
