/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var array = []
   var claves = Object.keys(objeto)
   for (i=0; i<claves.length; i++){
      var letra = claves[i]
      array.push([letra, objeto[letra]])
   }
   return array
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var ordenada = string.split("").sort(function(a,b){
      return a.charCodeAt(0) - b.charCodeAt(0)
   }).join("")
   
   var obj = {}
   for (i=0; i<ordenada.length; i++){
      if (Object.keys(obj).includes(ordenada[i])){
         obj[ordenada[i]]++
      } else {
         obj[ordenada[i]]=1
      }
   }
   return obj
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var resultado = ""
   var mayúscula = ""
   var minúscula = ""

   for (i=0; i<string.length; i++){
      if (string[i] === string[i].toUpperCase()){
         mayúscula += string[i]
      } else {
         minúscula += string[i]
      }
   }
   resultado = mayúscula + minúscula
   return resultado
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arrayFrase = frase.split(" ")
   var fraseEspejo = []

   for (i=0; i<arrayFrase.length; i++){
      var espejo = arrayFrase[i].split("").reverse().join("")
      fraseEspejo.push(espejo)
   }
   return fraseEspejo.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var num = numero.toString().split("").reverse().join("")
   if (num == numero) return "Es capicua"
   else return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var stringSeparado = string.split("")
   var arraySinABC = []
   for (i=0; i<stringSeparado.length; i++){
      if (stringSeparado[i] !== "a" && stringSeparado[i] !== "b" && stringSeparado[i] !== "c" ){
         arraySinABC.push(stringSeparado[i])
      }
   }
   return arraySinABC.join("")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let n = arrayOfStrings.length
   let aux = arrayOfStrings

   for (let i = 0; i< n -1; i++){
      for (let j=0; j < n-1-i; j++){
         if (aux[j].length > aux[j + 1].length){
            let temp = aux[j]
            aux[j] = aux[j + 1]
            aux[j + 1] = temp
         }
      } 
   }
   return aux
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arr = []
   for (let i=0; i < array1.length; i++){
      for (let j=0; j < array2.length; j++){
         if (array1[i] === array2[j]){
            arr.push(array2[j])
            break
         }
      }
   }
   return arr
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
