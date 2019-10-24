module.exports.function = function routineCounting (rName) {

const console = require('console');
const rData = require("./data/Routine.js");

  if(rName == null){
    console.log("routineName is null");
  }else{
     console.log("routineName : " + rName);
  }

    /*------ 선언부 ------*/
  let results = [];
  
  /*------ 실행 ------*/
  for(let i = 0; i < rData.length; i++) {
    if(rData[i].rName.match(rName)) {
      results.push(rData[i]);
    }
  }

  console.log(results);
  console.log("###RoutineCounting() end...");
  return results;
}

module.exports.function = function routineRecommend (rName) {
  
  /*
  루틴 추천해주는 테이블
  
  1. 먼저 인풋값인 routineName에 해당하는 루틴이 있는 경우에는 해당 루틴 레코드 리턴~
  2. routine이름이 존재하지 않는 경우 키워드 컬럼에서 비슷한 걸 찾기

  해당 루틴에 대해 오늘 해야할 트레이닝을



  */
  //생성자
  var RoutineBlock = function(rName, tName, tNo, tDesc, caution, perSet, setNum, hasDir, tPart, tMuscle, hasRoutine, tTime,day, kcal, cnt, refURL, youtubeURL, imgURL){
      this.rName = rName;
      this.tName = tName;
      this.tNo = tNo;
      this.tDesc = tDesc;
      this.caution = caution;
      this.perSet = perSet;
      this.setNum = setNum;
      this.hasDir = hasDir;
      this.tPart = tPart;
      this.tMuscle = tMuscle;
      this.hasRoutine = hasRoutine;
      this.tTime = tTime;
      this.day = day;
      this.kcal = kcal;
      this.cnt = cnt;
      this.refURL = refURL;
      this.youtubeURL = youtubeURL;
      this.imgURL = imgURL;
  }
  const rData = require("./data/Routine.js");
  const tData = require("./data/Training.js");
  
  
  const console = require('console');
  console.log('this is routineRecommend');
  var rIdx = -1;//결정된 루틴의 인덱스

  //루틴 네임으로 검색
  for(var i=0; i<rData.length; i++){
    if(rData[i].rName== routineName){
      rIdx = i;
      break;
    }
  }
  //루틴 키워드로 검색
  if(rIdx == -1){
    for(var i=0; i<rData.length; i++){
      if(rData[i].keywords.includes(routineName)){
        rIdx = i;
      }
    }    
  }

  if(rIdx == -1) return null; // 어디에도 인풋네임 비슷한 루틴이 없는경우에 해당
  /*
  var date = new Date();
  var today = date.getDate();

  //formula 접근법
  name = rData[0].formula[0].tNo;

  
  //오늘은 nn일 : [운동명]을 해야함 str = str1.substring(1,3);
  var Idx=2;
  var today="";
  var flag;
  //오늘의 할일 돌아가는 코드 ㅜㅜ캄동
  for(var i=0;i<rData[Idx].formula.length;i++){
    flag = Number(date.getDate())%Number(rData[Idx].formula[i].seq[0]) - Number(rData[Idx].formula[i].seq[1]);
    console.log(">>"+flag);
    if(flag==0){
      console.log("운동코드: "+ (Number(rData[Idx].formula[i].tNo.substring(1,3))-1));
      today = tData[(Number(rData[Idx].formula[i].tNo.substring(1,3))-1)].tName;
    }
  }
  */
  console.log("선택된 루틴명: "+ rData[rIdx].rName);
  //[results 배열 채우기]
  var results = new Array();
    //필요변수들
  var now = rData[rIdx].formula;
  var flag;// 수식 저장
  var date = new Date();
  var r;
  var val1;
  var val2;
  
  for(var i = 0;i<now.length;i++){
    flag = Number(date.getDate()) % Number(now[i].seq[0]) - Number(now[i].seq[1]);
    if(flag == 0){
      //오늘의 루틴인 경우
      var t = tData[(Number(now[i].tNo.substring(1,3))-1)];
      /*
      perSet이 1인 경우에는 cnt에 day상수 적용  =>val1
      그 외에는 perSet을 증가시키는데 day 상수 사용=>val2
      */
      val1 = Number(t.perSet);
      val2 = Number(t.cnt);
      if(val1==1){
        //이때는 val2값에 day상수 적용
        val2 = val2+Math.floor((Number(t.day)*Number(date.getDate()/5))/5)*5;
      }else{
        val1 = val1+Math.floor((Number(t.day)*Number(date.getDate()/5))/5)*5;
        console.log(">>> "+val1);
      }
      r = new RoutineBlock(
          rData[rIdx].rName,
          t.tName,
          t.tNo,
          t.tDesc,
          t.caution,
          val1,
          Number(t.setNum)*Number(now[i].multiple),
          t.hasDir,
          t.tPart,
          t.tMuscle,
          t.hasRoutine,
          t.tTime,
          t.day,
          t.kcal,
          val2,
          t.refURL,
          t.youtubeURL,
          t.imgURL
        );
      results.push(r);

    }
  }

  console.log(results);

  

  return results;
}