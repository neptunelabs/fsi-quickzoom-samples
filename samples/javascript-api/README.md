# JS API Sample

FSI QuickZoom contains an extensive JS API with methods and callbacks that you can use.
You can find [an overview of all available parameters in the corresponding documentation](https://docs.neptunelabs.com/docs/fsi-quickzoom/js-api/public-methods).

This example is a simple demonstration of how to use these methods and callbacks.

To display zoom with FSI QuickZoom, all you need to do is add the following script to the top of your web page:

```html
<script
  src='https://fsi.domain.tld/fsi/viewer/applications/quickzoom/js/fsiquickzoom.js'
</script>
```
This will ensure that the FSI QuickZoom is loaded.

For this sample, we will only have static images at the beginning, as we only want to initalize QuickZoom in place of an image when a button is clicked.
This means that the viewer is initialised by JavaScript.

To do this, we have created this part in the body:

```html
<fsi-quickzoom
  style="display: none"
  inPlaceZoom="true"
  magnification="2.5"
  enableByCSSClass="useQuickZoom"
  autoZoomDimension="true"
></fsi-quickzoom>
 <div class="col productContainer" id="productContainer">
  <img class="zoom" id="zoomImg" src="{{&fsi.server}}/{{&fsi.context}}/static/assets/samples/furniture/hepburn-big.jpg" width="600" height="600" alt="">
  <button type="button" id="zoomBtn" class="btn btn-lg btn-outline-dark">Show Zoom</button>
</div>
```

It's important to set `enableByCSSClass="useQuickZoom"` as the CSS class is set later on.
`productContainer` is the div that contains all the elements.
`zoomImg` is the image that will be displayed on load and replaced by the viewer.
The `zoomBtn` button is used to switch from the image to the viewer.

In the corresponding `style.css` the button is placed above the image div with `z-index`:

```css
.productContainer .btn {
  position: absolute;
  z-index: 15;
}
```

The switch on button click is achieved via JS in the corresponding `script.js`:

```js
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
    const instance = $FSI.quickZoom.scanForNewImages()
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

```

The `imgCounter` ensures the correct image is loaded onClick.
The function `addMyImagesToTheDom()` adds the class `useQuickZoom` to the id `zoomImg`.
A click on the `zoomBtn` element will scan for now images with the method `$FSI.quickZoom.scanForNewImages()`. (see [documentation](https://docs.neptunelabs.com/docs/fsi-quickzoom/js-api/callbacks#scanfornewimages))
Since we set the class which is listed in the parameter `enableByCSSClass`, images will now be loaded with QuickZoom.

The function `changeImage(buttonID)` switches the images corresponding to the thumbnails.

