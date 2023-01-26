# Product Detail Page - Using Flyout Zoom

This readme describes how the product detail page sample with *Flyout Zoom* is achieved using *FSI QuickZoom*.
The aim of the demo is to show how you can easily integrate zoom by simply adding a custom tag.

To display zoom with FSI QuickZoom, simply add the appropriate script, which you can find in the **Required Scripts** section, to the head of your website:

```html
<script
  src='https://docs.neptunelabs.com/fsi/viewer/applications/quickzoom/js/fsiquickzoom.js'
</script>
```
This will ensure that FSI QuickZoom is loaded.

Place the <fsi-quickzoom> tag part at the beginning of your body section. In your example, the tag will look like this:
```html
<fsi-quickzoom style="display:none"
               inPlaceZoom="false"
               magnification="2.5"
               enableByCSSClass="zoom"
               zoomImageOffset="20"
               autoZoomDimension="true"
               unCropZoomedImage="true"
></fsi-quickzoom>
```

**inPlaceZoom** must be set to *false* to get the flyout zoom.
The **zoomImageOffset** defines the offset between the image container and the zoom window.

You can then add the image to your site by copying the contents of the source code:

```html
 <img class="zoom" id="image" src="https://docs.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-o4s4AfTgOvg-unsplash.jpg&width=840" width="840" alt="">
```

## Enabling/ Disabling zoom by CSS class

Of course, not all images on a page need to be zoomed. In our product detail page example, we only want the main product image to be zoomed in, and not the thumbnails on the right or the recommended products at the bottom.

We can achieve this by adding a CSS class to the image we want to zoom, **class="zoom"** and by setting the parameter **enableByCSSClass="zoom"** in the <fsi-quickzoom> tag.

If you only need to disable zooming for a few images on a page, you can do it the other way round by setting the **disableByCSSClass** parameter.

## Testing with examples from  your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and customise the file, then restart the main demo again.
