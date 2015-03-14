var kordfu;

$(document).ready(function(){

    kordfu = App.create('container');

    kordfu
    .addPath('/', Main.dashboard)
    .addPath('/chords', Main.chords)
    .addPath('/progressions', Main.progressions)
    .addPath('/scales', Main.scales)
    .addPath('/lyrics', Main.lyrics)
    .addPath('/theory', Main.theory)
    .init();

});
