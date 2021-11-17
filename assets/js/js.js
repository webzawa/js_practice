let rouletteStop;
let aryKatakana = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ワ", "ヲ", "ン", "ル", "パ", "ン", "三", "世"];
let aryLupin = ["ル", "パ", "ン", "三", "世"];
let aryRouletteId = ["roulette1"
  , "roulette2"
  , "roulette3"
  , "roulette4"
  , "roulette5"];
let charLupin;
let rouletteCount = 0;
let flg = false;
let h_r = document.getElementById("hidden_show_roulette");
let h_v = document.getElementById("hidden_show_video");
let video = document.getElementById("video");
let typesound = [new Audio('assets/video/typewriter-key-1.wav')
  , new Audio('assets/video/typewriter-key-1.wav')
  , new Audio('assets/video/typewriter-key-1.wav')
  , new Audio('assets/video/typewriter-key-1.wav')
  , new Audio('assets/video/typewriter-key-1.wav')
];

const func1 = () => {
  $(".btn").remove()
  h_r.style.padding = "10 | 0";
  h_r.style.height = "auto";
  h_r.style.opacity = "1";
  rouletteFunc1();
  if (flg == true) {
    v.play();
  }
}

const rouletteFunc1 = () => {
  do {
    rouletteFunc2();
  } while (rouletteCount == 8);
}

const rouletteFunc2 = () => {
  rouletteStop = setInterval(function () {
    if (rouletteCount == 8) {
      clearInterval(rouletteStop);
      setTimeout(function () {
        $(".roulette").remove()
        h_v.style.padding = "10 | 0";
        h_v.style.height = "auto";
        h_v.style.opacity = "1";
        flg = true;
        video.play();
      }, 2000)
      return;
    }
    charLupin = aryKatakana[Math.floor(Math.random() * aryKatakana.length)];
    document.getElementById(aryRouletteId[rouletteCount]).innerHTML = charLupin;
    if (charLupin == aryLupin[rouletteCount]) {
      typesound[rouletteCount].play();
      rouletteCount = rouletteCount + 1;
    }
  }, 10);
}

// const rouletteFunc = () =>{
//   rouletteStop = setInterval(function() {
//     charLupin = aryKatakana[Math.floor( Math.random() * aryKatakana.length )];
//     document.getElementById(aryRouletteId[rouletteCount]).innerHTML = charLupin;
//     if(charLupin == aryLupin[rouletteCount]){
//       clearInterval(rouletteStop);
//       rouletteCount = rouletteCount + 1;
//       do{
//         if(charLupin == aryLupin[7]){
//           clearInterval(rouletteStop);
//           setTimeout(function(){
//             $(".roulette").remove()
//           },3000)
//           return;
//         }
//         rouletteFunc();
//       }while (flg == true);
//     }
//   }, 10);
// }
