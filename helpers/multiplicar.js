const fs = require('fs');
var colors = require('colors');


const crearArchivo = ( base = 5, list, limit) => {
  
  console.log('======================'.rainbow);
  console.log(`     Tabla del ${base}      `.red);
  console.log('======================'.rainbow);

  let salida = '';
  let consola = '';

  for (let i = 1; i <= limit; i++) {

    consola += `${base}`.blue +` x`.green + ` ${i} `.blue + `=`.green + ` ${5*i} \n`.blue
    salida += `${base} x ${i} = ${5*i} \n`

  }

  list && console.log(consola);

  

  console.log(`Tabla del ${base} creada`);


  const promise = new Promise( ( resolve, reject ) => {
  

    try {
      fs.writeFileSync(`./salida/tabladel${base}.txt`, salida );
      resolve(`tabladel${base}.txt`)
    } catch (error) {
      reject(error);
    }
    
  
  })
  
  return promise;

}

module.exports = {
  crearArchivo
}