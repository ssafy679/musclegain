module.exports.function = function trainingRecommend (routineName) {
  const tempDatas = require("./data/Exercise.js");
  const console = require("console");

  /* --- --- */
  if(routineName == null){
    console.log("routineName is null");
  } else {
    console.log("routineName : "+routineName);
    console.log("routineName.length : "+routineName.length);
  }

  for(let i = 0; i<tempDatas.length; i++){
    if(tempDatas[i].rName == routineName){
      console.log("설명: "+tempDatas[i].rDesc);
      return tempDatas[i];
    }
  }

  console.log(results);
  console.log('trainingRecommend is end...');
  return {}
}
