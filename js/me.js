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
function openLink(link1, link2) {
    // 执行相应的操作，例如打开链接或者执行其他逻辑
    window.open(link1);
    window.open(link2);
}
