module.exports.function = function trainingDescription (trainingName) {
  const tempDatas = require("./data/Exercise.js");
  const console = require("console");

  /*------ 디버깅용 ------*/
  if (trainingName == null)
    console.log("trainingName is null")
  else {
    console.log("trainingName : " + trainingName);
    console.log("trainingName.length : " + trainingName.length)
  }

  /*------ 실행 ------*/
  for(let i = 0; i < tempDatas.length; i++) {
    if(tempDatas[i].tName == trainingName) {
      return tempDatas[i];
    }
  }

  console.log(results);
  console.log("###TrainingDescription() end...");
  return {}
}
