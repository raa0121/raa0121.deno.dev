document.addEventListener(
  'DOMContentLoaded', 
  function () {
    // オーバレイを開閉する関数
    const overlay = document.querySelector('#overlay');
    function overlayToggle(e) {
      overlay.classList.toggle('overlay-on');
      const embed = document.querySelector("#embed");
      console.log(embed);
      embed.src = e.currentTarget.dataset.url + "&autoplay=1";
      embed.width = Math.ceil(window.screen.width * 0.7);
      embed.height = Math.ceil(window.screen.height * 0.7);
    }
    // 指定した要素に対して上記関数を実行するクリックイベントを設定
    const clickArea = document.querySelectorAll('.overlay-event');
    for(let i = 0; i < clickArea.length; i++) {
      clickArea[i].addEventListener('click', overlayToggle, false);
    }
  
    // イベントに対してバブリングを停止
    function stopEvent(event) {
      event.stopPropagation();
    }
    const overlayInner = document.querySelector('#overlay-inner');
    overlayInner.addEventListener('click', stopEvent, false);
  },
  false
);
