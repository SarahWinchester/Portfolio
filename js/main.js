//sounds
var audio = $("audio")[0];
$(".listMenu").mouseover(function() {
    audio.play();
});
$(".tag").mouseover(function() {
    audio.play();
});
$(".menu").mouseover(function() {
    audio.play();
});
// Changing data in div
function hover(description) {
    console.log(description);
    $('.boxdata').html(description)
}
//changin data
$('.textWord_about').hide();

$('.link').click(function() {
    $('.textWord_about').hide();       
    $('.textWord_about[data-link=' + $(this).data('link') + ']').fadeIn({
        width: '200px'
    }, 300);
});
//This is the tooltip init
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('.textWord_about[data-link=' + "first" + ']').fadeIn({
        width: '200px'
    }, 300); 
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
var instance3 = $(".singleProyect").overlayScrollbars({className: "os-theme-light" ,
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
