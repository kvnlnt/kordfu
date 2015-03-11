var kordfu;

$(document).ready(function(){

    kordfu = App.create('container');

    kordfu
    .addPath('/',           Main.home)
    .addPath('/page/one',   Main.page_one)
    .addPath('/page/two',   Main.page_two)
    .addPath('/page/three', Main.page_three)
    .init();

});
