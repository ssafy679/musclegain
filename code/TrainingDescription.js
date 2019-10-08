module.exports.function = function trainingDescription (trainingName) {
  const tempData = require("./data/TempData.js");
  const console = require("console");

  /*------ 디버깅용 ------*/
  if (trainingName == null)
    console.log("trainingName is null")
  else {
    console.log("trainingName : " + trainingName);
    console.log("trainingName.length : " + trainingName.length)
  }

  /*------ 실행 ------*/
  let results = [];
  trainingName;

  console.log(results);
  console.log("###TrainingDescription() end...");
  return {}
}
