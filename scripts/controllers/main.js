/**
 * The Controller. Controller stores routes and notifies
 * observers about changes.
 */

var Main = {

    home: function(container){
        var homePartRecord = Record.create({ welcome:'welcome', user:'Kevin Lint'});
        var homePart       = HomePart.create(homePartRecord, container);

        setTimeout(function(){
            homePartRecord.setKeyVal('user', 'Nobody');
            console.log(homePartRecord);
        }, 1000);


        // container.html(homePart.get());
    },

    page_one: function(container){
        container.html('one');
        console.log('page one');
    },

    page_two: function(container){
        container.html('page_two');
        console.log('page two');
    },

    page_three: function(container){
        container.html('three');
        console.log('page three');
    }
    
};
