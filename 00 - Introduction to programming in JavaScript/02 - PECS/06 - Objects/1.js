// Anibal Santos Gomez

/*

1 . Escribid un programa en JavaScript que cree un array de objetos, donde cada objeto describa un libro con las propiedades siguientes: 
título, autor y código ISBN. Escribid una función que itere sobre todos los libros, y para cada uno escriba por consola el título, el autor, el código ISBN, 
y si éste empieza por 84 o 97884, además escriba "ISBN España".

*/

let books_collection = [
    {
      title: 'Walden',
      author: 'Henry Thoureau',
      isbn: '9781977555977'
    },
    {
      title: 'War and peace',
      author: 'Lev Tolstoi',
      isbn: '9780854566242'
    },
    {
      title: 'Conjunto vacio',
      author: 'Verónica Gerber Bicecci',
      isbn: '9788415862871'
    },
    {
      title: 'La vida también se piensa',
      author: 'Miquel Seguró Mendlewicz',
      isbn: '8425441325'
    }
  ]
  
  function getMyBooks(books) {
    for (let i = 0; i < books.length; i++) {
      if (books[i].isbn.substring(0, 5) === '97884' || books[i].isbn.substring(0, 2) === '84') {
        books.map((e) => {
          e.isbn_spain = true
        })
      } else {
        books.map((e) => {
          e.isbn_spain = false
        })
      }
      console.log(`Title: "${books[i].title}", Author: ${books[i].author}, ISBN: ${books[i].isbn}, ISBN-SPAIN: ${books[i].isbn_spain}`)
    }
  }
  
  getMyBooks(books_collection)