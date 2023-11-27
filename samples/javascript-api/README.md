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
 <div class="col productContainer" id="productContainer">
  <img class="zoom" id="zoomImg" src="{{&fsi.server}}/{{&fsi.context}}/static/assets/samples/furniture/hepburn-big.jpg" width="600" height="600" alt="">
  <button type="button" id="zoomBtn" class="btn btn-lg btn-outline-dark">Show Zoom</button>
</div>
```
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
tbd

```

A click on the `zoomBtn` element will initialise a new FSI Viewer element in the `zoomImg` element.
tbd
