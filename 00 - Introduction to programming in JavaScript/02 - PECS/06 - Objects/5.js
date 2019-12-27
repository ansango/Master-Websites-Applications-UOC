// Anibal Santos Gomez

/*

5. Escribid una función en JavaScript que convierta un objeto a formato JSON, sin usar la función JSON.stringify().

*/

const book = {
    title: 'Walden',
    author: 'Henry Thoureau',
    isbn: 9781977555977,
  };
  
  function objToJSON(obj) {
    let json = Object
      .entries(obj)
      .reduce((a, e) => {
        if (typeof e[1] != "function" && e[1] !== undefined) {
          if (e[0] === "num" || e[0] === "null") {
            a += `"${e[0]}":${e[1]},`;
          } else {
            a += `"${e[0]}":"${e[1]}",`;
          }
        }
        return a;
      }, "`{")
      .slice(1, -1) + "}";
    return json;
  }
  
  objToJSON(book)