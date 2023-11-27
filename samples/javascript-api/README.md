# Product Detail Page - Using FSI TouchZoom & Single Source Imaging

This readme describes how the product Detail page sample with _FSI TouchZoom_ and _Single Source Imaging_ of _FSI Server_ is achieved.
The aim of the demo is to show how you can easily integrate different sizes and formats of an image by simply changing the Image URL.
It also shows how FSI TouchZoom is used.

# Using TouchZoom

In order to display all images with TouchZoom, you only need to add the corresponding script
to the head of your website:

```html
<script src="https://fsi.domain.tld/fsi/viewer/applications/touchzoom/js/fsitouchzoom.js"></script>
```

In our example, this is done through the framework, but you can see that the script is loaded when the page is compiled.

This ensures that FSI TouchZoom is loaded and all images will be displayed in the resolution matching the current magnification.
This way, sharp images on mobile devices are guaranteed.
You can also see this if you resize your browser window or change between different displays.

# Enabling/ disabling FSI TouchZoom by using CSS classes

You can also restrict FSI TouchZoom to certain images and enable or disable it via CSS class.
Simply embed an FSI TouchZoom tag somewhere on the page:

```html
<fsi-touchzoom style="display:none" useDevicePixelRatio="true" enableByCSSClass="zoom"></fsi-touchzoom>
```

In this example, TouchZoom will only be used for images with the class _zoom_.

```html
<img
  id="image"
  class="zoom img-fluid"
  src="https://fsi.domain.tld/fsi/server?type=image&source=images/samples/ssi/furniture/home-7531464.jpg&width=940"
  width="940"
  alt=""
/>
```

You could also use _disableByCSSClass="noZoom"_ for example.

For all parameters which can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-touchzoom).

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
