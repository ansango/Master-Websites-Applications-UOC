// Anibal Santos Gomez

/*

4. Escribid una función en JavaScript que analice una URL y devuelva un objecto con las siguientes propiedades: protocolo, hot, query y un array params.

Ejemplo: Si la entrada es “http://cv.uoc.edu/webapps/bustiaca/listMails.do?mailId=5848042_774330153&l=181_m4_250_01_t01”, la salida debe ser:

{ "protocolo": "http", "host": "cv.uoc.edu", "path": "/webapps/bustiaca/listMails.do", "query": {"mailId": "5848042_774330153", "l": "181_m4_250_01_t01"} }

*/

const address = "http://cv.uoc.edu/webapps/bustiaca/listMails.do?mailId=5848042_774330153&l=181_m4_250_01_t01";

function urlAnalyze(url) {
  
  const urlObj = new URL(url)
  
  let infoUrl = {
    protocol: urlObj.protocol,
    host: urlObj.host,
    path: urlObj.pathname,
    query: urlObj.searchParams
  }  
  return infoUrl
}

urlAnalyze(address)
