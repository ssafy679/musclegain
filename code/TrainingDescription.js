module.exports.function = function trainingDescription (trainingName) {
  const tData = require("./data/Training.js");
  const console = require("console");

  /*------ 디버깅용 ------*/
  if (trainingName == null)
    console.log("trainingName is null")
  else {
    console.log("trainingName : " + trainingName);
    console.log("trainingName.length : " + trainingName.length)
  }

  /*------ 선언부 ------*/
  let results = [];
  
  /*------ 실행 ------*/
  for(let i = 0; i < tData.length; i++) {
    if(tData[i].tName.match(trainingName)) {
      results.push(tData[i]);
    }
  }

  console.log(results);
  console.log("###TrainingDescription() end...");
  return results;
}
