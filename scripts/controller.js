/**
 * The Controller. Controller stores routes and notifies
 * observers about changes.
 */

var Controller = {
    dashboard: function(container){
        container.html('dashboard');
        console.log('dashboard');
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
