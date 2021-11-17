let rouletteStop;
let rouletteCount = 0;
let flg = false;
let aryLupin = ["ル", "パ", "ン", "三", "世"];
let rouletteId = "roulette1";
let rouletteIdStyle = document.getElementById("hidden_show_roulette");
let videoIdStyle = document.getElementById("hidden_show_video");
let video = document.getElementById("video");
let lupinTypewriterSound = new Audio("assets/video/lupin_typewriter.wav");

const func1 = () => {
  $(".btn").remove()
  rouletteIdStyle.style.padding = "10 | 0";
  rouletteIdStyle.style.height = "auto";
  rouletteIdStyle.style.opacity = "1";
  setTimeout(function () {
    rouletteFunc1();
  }, 30)
}

const rouletteFunc1 = () => {
  lupinTypewriterSound.volume = 0.3;
  lupinTypewriterSound.play();
  rouletteStop = setInterval(function () {
    document.getElementById(rouletteId).innerHTML = aryLupin[rouletteCount];
    rouletteCount = rouletteCount + 1;
    if (rouletteCount == 5) {
      clearInterval(rouletteStop);
      document.getElementById(rouletteId).style.fontSize = "110px";
      document.getElementById(rouletteId).innerHTML = "ル パ ン 三 世";
      flg = true
      if (flg == true) {
        setTimeout(function () {
          $(".roulette").remove()
          $(".brDiv").remove()
          videoIdStyle.style.padding = "10 | 0";
          videoIdStyle.style.height = "auto";
          videoIdStyle.style.opacity = "1";
          flg = true;
          video.play();
        }, 7000)
      }
    }
  }, 200)
}
