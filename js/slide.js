// スライドショー用の配列
{
  const images = [
    "img/ramen_shoyu.png",
    "img/ramen_tonkotsu.png",
    "img/ramen_taiwan.png",
    "img/ramen_rakusa.png",
    "img/ramen_none.png",
    "img/ramen_ishiki.png",
  ];

  // 0番目の画像を代入
  let currentIndex = 0;

  // currentIndex番目の画像を表示
  const mainImage = document.getElementById("main");
  mainImage.src = images[currentIndex];

  // 配列の要素数分回す
  // 2番目の引数indexでimageが配列の中で何番目かを取得
  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;

    const li = document.createElement("li");
    // imageの番号がcurrentIndexと同じ
    if (index === currentIndex) {
      // liに対してcurrentクラスを付ける
      li.classList.add("current");
    }
    // liのクリックイベント
    li.addEventListener("click", () => {
      mainImage.src = image;
      // 全てのli要素を取得
      const thumbnails = document.querySelectorAll(".thumbnails > li");
      // currentIndexからcurrentクラス(サムネイル画像に色を付ける)を外す
      thumbnails[currentIndex].classList.remove("current");
      currentIndex = index;
      thumbnails[currentIndex].classList.add("current");
    });

    // liの子要素imgを生成
    li.appendChild(img);
    // thumbnailsクラスのついたulの子要素としてliを生成
    document.querySelector(".thumbnails").appendChild(li);
  });

  // nextというidを振った>ボタンを取得
  const next = document.getElementById("next");
  next.addEventListener("click", () => {
    let target = currentIndex + 1;
    if (target === images.length) {
      target = 0;
    }
    // target番目のサムネイルをクリックしたときの処理をする
    document.querySelectorAll(".thumbnails > li")[target].click();
    
  });

  // prevというidを振った>ボタンを取得
  const prev = document.getElementById("prev");
  prev.addEventListener("click", () => {
    let target = currentIndex - 1;
    if (target < 0) {
      target = images.length - 1;
    }
    // target番目のサムネイルをクリックしたときの処理をする
    document.querySelectorAll(".thumbnails > li")[target].click();
    
  });



  function playSlideshow() {
    // 5秒毎にplaySlideshowを実行
    
    setTimeout(() => {
      // nextをクリックしたときの処理
      next.click();
      playSlideshow()
    }, 5000);
  }

  setTimeout(playSlideshow(),5000);

  

  // 5秒毎にplaySlideshowを実行
  // 5秒毎にplaySlideshowを実行
 


  // const play = document.getElementById("play");
  // play.addEventListener("click",() => {
  //   playSlideshow();
  // });


}
