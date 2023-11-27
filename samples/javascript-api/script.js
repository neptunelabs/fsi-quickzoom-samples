document.addEventListener('DOMContentLoaded', () => {
  $FSI.quickZoomParameters = { autoInit: false };

  document.getElementById('zoomBtn').addEventListener('click', () => {
    console.log('Hello!')
    addMyImagesToTheDom(); // add your images here
    const instance = new $FSI.QuickZoom();
    const success = instance.init(zoomImg, {
      debug: true,
      useDevicePixelRatio: true,
      inPlaceZoom: false,
      enableByCSSClass: 'useQuickZoom',
      onReady: () => {
        // show FSI Viewer instance and hide image
        document.getElementById('zoomBtn').style.display = 'none'
      },
    }, false);

    function addMyImagesToTheDom() {

      const ele = document.getElementById("zoomImg");
      ele.setAttribute("src", "{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/home-7531464.jpg&width=600");
      ele.setAttribute("width", "600");
      ele.setAttribute("height", "600");
     ele.classList.add('useQuickZoom')
    }

  })

});

function changeImage(buttonID) {
  let img;
  let curImage = document.getElementById('zoomImg');
  switch (buttonID) {
    case "0":
      img =  '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/home-7531464.jpg&width=940';
      break
   case "1":
      img = '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/home-7531467.jpg&width=940';
      break
    case "2":
      img = '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/home-7531463.jpg&width=940';
      break
     default:
            img = '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/home-7531464.jpg&width=940';
  }
  curImage.src = img;
}
