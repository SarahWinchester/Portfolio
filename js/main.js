//This is the tooltip init
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
//Those are the instance for scrollbar
var instance = $("#skillScroll").overlayScrollbars({className: "os-theme-light" ,
resize               : "none",
sizeAutoCapable      : true,
clipAlways           : true,
normalizeRTL         : true,
paddingAbsolute      : false,
autoUpdate           : null,
autoUpdateInterval   : 33,
scrollbars : {
    visibility       : "auto",
    autoHide         : "leave",
    autoHideDelay    : 100,
    dragScrolling    : true,
    clickScrolling   : false,
    touchSupport     : true
}}).overlayScrollbars();
var instance2 = $("#projectContainer").overlayScrollbars({className: "os-theme-light" ,
resize               : "none",
sizeAutoCapable      : true,
clipAlways           : true,
normalizeRTL         : true,
paddingAbsolute      : false,
autoUpdate           : null,
autoUpdateInterval   : 33,
scrollbars : {
    visibility       : "auto",
    autoHide         : "leave",
    autoHideDelay    : 100,
    dragScrolling    : true,
    clickScrolling   : false,
    touchSupport     : true
}}).overlayScrollbars();
var instance2 = $(".singleProyect").overlayScrollbars({className: "os-theme-light" ,
resize               : "none",
sizeAutoCapable      : true,
clipAlways           : true,
normalizeRTL         : true,
paddingAbsolute      : false,
autoUpdate           : null,
autoUpdateInterval   : 33,
scrollbars : {
    visibility       : "auto",
    autoHide         : "leave",
    autoHideDelay    : 100,
    dragScrolling    : true,
    clickScrolling   : false,
    touchSupport     : true
}}).overlayScrollbars();
