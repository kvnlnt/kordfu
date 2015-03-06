var kordfu;

$(document).ready(function(){

    kordfu = new App();

    kordfu
    .addPath('/',           Controller.dashboard)
    .addPath('/page/one',   Controller.page_one)
    .addPath('/page/two',   Controller.page_two)
    .addPath('/page/three', Controller.page_three)
    .init();

});
