var elem = document.createElement("img");
elem.setAttribute("src", "//fsi-site.neptunelabs.com/fsi/server?type=image&source=images%2Fsamples%2Fshowcase%2Fhandbags%2F8082-2_1.tif&width=400&height=400");
elem.setAttribute("height", "400");
elem.setAttribute("width", "400");
elem.setAttribute("class", "noipz");
elem.setAttribute("alt", "handbag");

var elem2 = document.createElement("img");
elem2.setAttribute("src", "//fsi-site.neptunelabs.com/fsi/server?type=image&source=images%2Fsamples%2Fshowcase%2Fhandbags%2F8082-2_1.tif&width=400&height=400");
elem2.setAttribute("height", "400");
elem2.setAttribute("width", "400");
elem2.setAttribute("class", "hasipz");
elem2.setAttribute("alt", "handbag");

document.getElementById("qzcontainer1").appendChild(elem);
document.getElementById("qzcontainer2").appendChild(elem2);

var myQZ = new $FSI.QuickZoom({autoinit:false, enableByCSSClass:"noipz",  disablebycssclass:"hasipz,no_quickzoom", debug:true, zoomImageOffset:50, inPlaceZoom:false});
myQZ.init();

var myQZ2 = new $FSI.QuickZoom({autoinit:false, enableByCSSClass:"hasipz", useTouch:"true", disablebycssclass:"noipz,no_quickzoom", debug:true, zoomImageOffset:10, inPlaceZoom:true });
myQZ2.init();
