// API読み込み
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// API読み込み後にプレーヤーの設定
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('Lupin');
// }

// // ボタンクリック時の操作
// document.getElementById('play').addEventListener('click', function() {
//   player.playVideo();
// }, false);

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

const func1 = () => {
  rouletteFunc();
  let h = document.getElementById("hidden_show");
  let v = document.getElementById("video");
  v.play();
  h.style.padding = "10 | 0";
  h.style.height = "auto";
  h.style.opacity = "1";
}

const rouletteFunc = () => {
  rouletteStop = setInterval(function () {
    charLupin = aryKatakana[Math.floor(Math.random() * aryKatakana.length)];
    document.getElementById(aryRouletteId[rouletteCount]).innerHTML = charLupin;
    if (charLupin == aryLupin[rouletteCount]) {
      clearInterval(rouletteStop);
      rouletteCount = rouletteCount + 1;
      do {
        if (charLupin == aryLupin[7]) { clearInterval(rouletteStop); return; }
        rouletteFunc();
      } while (flg == true);
    }
  }, 10);
}

// $(function() {
//   var getWindowMovieHeight = function() {
//     // ここでブラウザの縦横のサイズを取得します。
//     var windowSizeHeight = $(window).outerHeight();
//     var windowSizeWidth = $(window).outerWidth();

//     // メディアの縦横比に合わせて数値は変更して下さい。(メディアのサイズが width < heightの場合で書いています。逆の場合は演算子を逆にしてください。)
//     var windowMovieSizeWidth = windowSizeHeight * 1.76388889;
//     var windowMovieSizeHeight = windowSizeWidth / 1.76388889;
//     var windowMovieSizeWidthLeftMargin = (windowMovieSizeWidth - windowSizeWidth) / 2;

//     if (windowMovieSizeHeight < windowSizeHeight) {
//       // 横幅のほうが大きくなってしまう場合にだけ反応するようにしています。
//       $("#video").css({left: -windowMovieSizeWidthLeftMargin});
//     }
//   };

//   // 以下画面の可変にも対応できるように。
//   $(window).on('load', function(){
//     getWindowMovieHeight();
//   });

//   $(window).on('resize', function(){
//     getWindowMovieHeight();
//   });
// });
