document.addEventListener(
  'DOMContentLoaded', 
  function () {
    // オーバレイを開閉する関数
    const overlay = document.querySelector('#overlay');
    function overlayToggle(e) {
      const isAutolay = document.querySelector('#autoplay').checked;
      overlay.classList.toggle('overlay-on');
      const embed = document.querySelector("#embed");
      embed.src = e.currentTarget.dataset.url;
      if (isAutolay) {
        embed.src += "&autoplay=1";
      }
      embed.width = Math.ceil(window.innerWidth * 0.7);
      embed.height = Math.ceil(window.innerHeight * 0.7);
    }
    // 指定した要素に対して上記関数を実行するクリックイベントを設定
    const clickArea = document.querySelectorAll('.overlay-event');
    for(let i = 0; i < clickArea.length; i++) {
      clickArea[i].addEventListener('click', overlayToggle, false);
    }

    function overlayClose(e) {
      if (e.key === 'Escape' && 0 < Array.from(overlay.classList).filter((v) => v === 'overlay-on').length) {
        overlay.classList.toggle('overlay-on');
        const embed = document.querySelector("#embed");
        embed.src = "";
        e.stopPropagation();
      }
    }

    document.addEventListener('keydown', overlayClose, false);
  
    // イベントに対してバブリングを停止
    function stopEvent(e) {
      e.stopPropagation();
    }
    const overlayInner = document.querySelector('#overlay-inner');
    overlayInner.addEventListener('click', stopEvent, false);
  },
  false
);
