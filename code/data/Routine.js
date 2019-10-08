module.exports = [ //Routine Table
	//Start of 아침 루틴
  {
    rName: "아침",
    rNo: "R01",
    rTime: "아침",
    rDesc: "아침에 하면 아주 굳",
    rEffect: "좌뇌가 활성화 되고 우뇌를 활성화시켜 몸의 기상을 하게 해줌",
    formula: [
      {tNo: "T01"
      ,multiple: "1/2"
      ,seq: ["2","0"]},
    ],
    keywords: ["아침", "피곤","잠 깨기"],
    refURL: "www.naver.com",
    youtubeURL: "youtube.com",
  },
  //End of 아침 루틴
  //Start of 점심 루틴
  {
    rName: "점심",
    rNo: "R02",
    rTime: "점심",
    rDesc: "점심에 하면 아주 굳",
    rEffect: "밥먹고 소화 도와줌",
    formula: [
      {tNo: "T01"
      ,multiple: "1/2"
      ,seq: ["2","0"]},
      {tNo: "T02"
      ,multiple: "1/3"
      ,seq: ["2","1"]},
    ],
    keywords: ["점심먹고", "점심","소화","근이득"],
    refURL: "www.naver.com",
    youtubeURL: "youtube.com",
  },
  //End of 아침 루틴
]