module.exports.function = function routineCounting (rname) {

const console = require('console');
const rData = require("./data/Routine.js");

  if(rname == null){
    console.log("routineName is null");
  }else{
     console.log("routineName : " + rname);
  }

    /*------ 선언부 ------*/
  let results = [];
  
  /*------ 실행 ------*/
  for(let i = 0; i < rData.length; i++) {
    if(rData[i].rName.match(rname)) {
      results.push(rData[i]);
    }
  }

  console.log(results);
  console.log("###RoutineCounting() end...");
  return results;
}