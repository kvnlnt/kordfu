/**
 * The Controller. Controller stores routes and notifies
 * observers about changes.
 */

var Main = {

    home: function(container){

        var part = Part.create({
            template: '<strong>{{ welcome }}</strong> {{ user }}',
            record: { welcome:'welcome', user:'Kevin', kids:['lincoln', 'sydnie'], family:{mom:'Sonja', dad:'Berry'}},
        });

        setTimeout(function(){
            if(part.getRecord().val('user') === 'Nobody'){
                part.getRecord().setKeyVal('user', 'Kevin');
            } else {
                part.getRecord().setKeyVal('user', 'Nobody');
            }
            
        }, 1000);

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
