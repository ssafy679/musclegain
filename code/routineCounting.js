module.exports.function = function routineCounting (routineName) {

const console = require('console');
const rData = require("./data/Routine.js");

  if(routineName == null){
    console.log("routineName is null");
  }else{
     console.log("routineName : " + routineName);
  }

    /*------ 선언부 ------*/
  let results = [];
  
  /*------ 실행 ------*/
  for(let i = 0; i < rData.length; i++) {
    if(rData[i].rName.match(routineName)) {
      results.push(rData[i]);
    }
  }

  console.log(results);
  console.log("###RoutineCounting() end...");
  return results;
}