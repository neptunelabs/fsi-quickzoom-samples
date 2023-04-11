# Product Detail Page - Using In-Place Zoom

This readme describes how the product detail page sample with *In-Place Zoom* with *FSI QuickZoom* is achieved.
The aim of the demo is to show how you can easily integrate zoom by just adding a custom tag.

In order to display zoom with FSI QuickZoom, you only need to add the corresponding script you see in the **Required Scripts** section to the head of your website:

```html
<script
  src='https://docs.neptunelabs.com/fsi/viewer/applications/quickzoom/js/fsiquickzoom.js'
</script>
```
This ensures that FSI QuickZoom is loaded.

Place the <fsi-quickzoom> tag part on the start of your body section. In your example, the tag will look like this:
```html
<fsi-quickzoom style="display:none"
               inPlaceZoom="true"
               magnification="2.5"
               enableByCSSClass="zoom"
               autoZoomDimension="true"
               unCropZoomedImage="true"
></fsi-quickzoom>
```

You can then add the image to your site by copying the content of the source code:

```html
 <img class="zoom" id="image" src="//docs.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-o4s4AfTgOvg-unsplash.jpg&width=840" width="840" alt="">
```

## Enabling/ Disabling zoom by CSS class

Naturally, not all images on a site need to be displayed with zoom. In our Product Detail Page example, we only want to display the main product image with the zoom, the thumbnail images on the right or the recommended products on the bottom are not supposed to be zoomed.

We can achieve this by adding a CSS class to the image we want to zoom, **class="zoom"** and by setting the parameter **enableByCSSClass="zoom"** in the <fsi-quickzoom> tag.

If you only need to disable a few images on a site from zooming, you can also use this the other way around by setting the parameter **disableByCSSClass**.

## Testing with examples from  your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
