module.exports.function = function trainingCount (trainingName, requireSet) {
 
const console = require('console');
const tData = require("./data/Training.js");

  //requireSet의 유무에 따라 기존 perSet으로 카운트할지 require된 Set으로 카운트할지 정해야한다.
  var idx;
  if(trainingName == null){
    console.log("trainingName is null")
  }else{
      for(var i=0;i<tData.length; i++){
        if(tData[i].tName.match(trainingName)){
          idx = i;
          break;
        }
      }
    
      console.log("[idx] : " + idx);
      console.log("tData[idx].tName : " + tData[idx].tName);
      let tname = tData[idx].tName;     console.log("tname:"+tname);
      let tno = tData[idx].tNo;         console.log("tno:"+tno);
      let perset = tData[idx].perSet;   console.log("perset:"+perset);
      let setnum = tData[idx].setNum;     console.log("setnum:"+setnum);
      let hasdir = tData[idx].hasDir;     console.log("hasdir:"+hasdir);
      let day = tData [idx].day;         console.log("day:"+day);
      let cal = tData[idx].kcal;        console.log("cal:"+cal);
      let cnt = tData[idx].cnt;         console.log("cnt:"+cnt);
  }
 
  return{
    tName : tname,
    tNo : tno,
    perSet : perset,
    setNum : setnum,
    hasDir : hasdir,
    day : day,
    kcal : cal,
    cnt : cnt,
    requireSet : requireSet
  };
}
