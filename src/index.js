module.exports = function check(str, bracketsConfig) {
  // преобразуем в массив подстрок
  let bracketsConfigArray = bracketsConfig.map((arr) => arr.join(""));

  var instr = str + '&';
  var tempstr = "" ;
  startwhile = true;
  // проходим по массиву подстрок, до тех пор пока находим подстроки
  while ( startwhile ) {  
    startwhile = false;
    for (var n = 0; n < bracketsConfigArray.length ; n++ ) { 
      if ( instr.includes( bracketsConfigArray[n] ) ) {
          tempstr = instr.replace ( bracketsConfigArray[n] , "");
          instr = tempstr;
          startwhile = true;
      }
    }
  }
  if ( instr == '&' ) {
    return true;
  }
  return false;
};
