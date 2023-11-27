document.addEventListener('DOMContentLoaded', () => {
  let img
  imgCounter = 0;
  document.getElementById('zoomBtn').addEventListener('click', () => {
    if (imgCounter === 0) {
      img =  '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/home-7473734.jpg&width=600';
    }
    else if (imgCounter === 1) {
      img =  '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/home-7473732.jpg&width=600';
    } else {
      img =  '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/home-7531458.jpg&width=600';
    }

    addMyImagesToTheDom(); // add your images here
    const instance = new $FSI.QuickZoom();
    const success = instance.init(zoomImg, {
      debug: true,
      useDevicePixelRatio: true,
      inPlaceZoom: true,
      enableByCSSClass: 'useQuickZoom',
    }, true);

    document.getElementById('zoomBtn').style.display = 'none'

    function addMyImagesToTheDom() {

      const ele = document.getElementById("zoomImg");
      ele.setAttribute("src", img);
      ele.classList.add('useQuickZoom')
    }

  })

});

function changeImage(buttonID) {
  let curImage = document.getElementById('zoomImg');
  switch (buttonID) {
    case "0":
      img =  '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/home-7473734.jpg&width=600';
      imgCounter = 0;
      break
   case "1":
      img = '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/home-7473732.jpg&width=600';
     imgCounter = 1;
      break
    case "2":
      img = '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/home-7531458.jpg&width=600';
      imgCounter = 2;
      break
     default:
            img = '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/home-7531464.jpg&width=600';
  }
  curImage.src = img;
}
