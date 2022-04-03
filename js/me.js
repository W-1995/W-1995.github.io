function fix_the_nav() {
    // alert(1)
    if(window.location.hash){
        // alert(2)
        // alert(location.hash)
        var target = $(location.hash);
        // alert(3)
        // alert(target)
        $("body,html").scrollTop(target.offset().top-56); // my nav size is 100px
    }
}