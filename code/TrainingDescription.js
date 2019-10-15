module.exports.function = function trainingDescription (TrainingName) {
  const tData = require("./data/Training.js");
  const console = require("console");

  /*------ 디버깅용 ------*/
  if (TrainingName == null)
    console.log("trainingName is null")
  else {
    console.log("trainingName : " + TrainingName);
    console.log("trainingName.length : " + TrainingName.length)
  }

  /*------ 선언부 ------*/
  let results = [];
  
  /*------ 실행 ------*/
  for(let i = 0; i < tData.length; i++) {
    if(tData[i].tName.match(TrainingName)) {
      results.push(tData[i]);
    }
  }

  console.log(results);
  console.log("###TrainingDescription() end...");
  return results;
}
