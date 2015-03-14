/**
 * The Controller. Controller stores routes and notifies
 * observers about changes.
 */

var Main = {

    dashboard: function(container){

        // parts
        var welcome_jst  = '<strong>Welcome</strong> {{ user }}';
        var welcome_data = { user:'Kevin'};
        var welcome_part = Part.create({ jst: welcome_jst, data: welcome_data });

        // page
        var dashboard_jst  = '<h2>{{ title }}</h2><div id="welcome"></div>';
        var dashboard_data = { title: 'Dashboard' };
        var dashboard_page = Page.create({ jst: dashboard_jst, data: dashboard_data, container: container });
        
        // add parts
        dashboard_page.addPart('welcome', welcome_part, '#welcome');

    },

    chords: function(container){

        // page
        var chords_jst  = '<h2>{{ title }}</h2>';
        var chords_data = { title: 'Chords' };
        var chords_page = Page.create({ jst: chords_jst, data: chords_data, container: container });

    },

    progressions: function(container){
        
        // page
        var progressions_jst  = '<h2>{{ title }}</h2>';
        var progressions_data = { title: 'Progressions' };
        var progressions_page = Page.create({ jst: progressions_jst, data: progressions_data, container: container });

    },

    scales: function(container){
        
        // page
        var scales_jst  = '<h2>{{ title }}</h2>';
        var scales_data = { title: 'Scales' };
        var scales_page = Page.create({ jst: scales_jst, data: scales_data, container: container });

    },

    lyrics: function(container){
        
        // page
        var lyrics_jst  = '<h2>{{ title }}</h2>';
        var lyrics_data = { title: 'Lyrics' };
        var lyrics_page = Page.create({ jst: lyrics_jst, data: lyrics_data, container: container });

    },

    theory: function(container){
        
        // page
        var theory_jst  = '<h2>{{ title }}</h2>';
        var theory_data = { title: 'Theory' };
        var theory_page = Page.create({ jst: theory_jst, data: theory_data, container: container });

    },
    
};
