/**
 * The Controller. Controller stores routes and notifies
 * observers about changes.
 */

var Main = {

    dashboard: function(container){

        // parts
        var welcome_jst  = '<strong>Welcome</strong> <% this.user %>';
        var welcome_data = Record.create({ user: 'Kevin'});
        var welcome_part = Part.create({ jst: welcome_jst, record: welcome_data, container: container });

        // page
        var dashboard_jst  = '<% Template.includeMenu() %><h2><% this.title %></h2><div id="welcome"></div>';
        var dashboard_data = Record.create({ title: 'Dashboard' });
        var dashboard_page = Page.create({ jst: dashboard_jst, record: dashboard_data, container: container });
        
        // add parts
        dashboard_page.addPart('welcome', welcome_part, '#welcome');

    },

    chords: function(container){

        // records
        var chord_selector_record = Record.create({ root:'C', qual:'' });
        var chord_data_record = Record.create({ test:[]}); // can leave blank, setup on init

        // page
        var page_record = Record.create({ title: 'Chords' });
        var page = Page.create({ jst: JST.chords, record: page_record, container: container });

        // parts
        var chord_selector = ChordSelectorPart.create({ jst: JST.chordSelector, record: chord_selector_record });
        var chord_data = ChordDataPart.create({ jst: JST.chordData, record: chord_data_record });

        // events
        chord_selector_record.recordChanged.sub(chord_data.setChord.bind(chord_data));
        
        // add parts
        page
        .addPart('chord_selector', chord_selector, '#chord_selector')
        .addPart('chord_data', chord_data, '#chord_data');

    },

    progressions: function(container){
        
        // page
        var progressions_jst  = '{{ Template.includeMenu() }}<h2><% this.title %></h2>';
        var progressions_data = { title: 'Progressions' };
        var progressions_page = Page.create({ jst: progressions_jst, data: progressions_data, container: container });

    },

    scales: function(container){
        
        // page
        var scales_jst  = '{{ Template.includeMenu() }}<h2>{{ title }}</h2>';
        var scales_data = { title: 'Scales' };
        var scales_page = Page.create({ jst: scales_jst, data: scales_data, container: container });

    },

    lyrics: function(container){
        
        // page
        var lyrics_jst  = '{{ Template.includeMenu() }}<h2>{{ title }}</h2>';
        var lyrics_data = { title: 'Lyrics' };
        var lyrics_page = Page.create({ jst: lyrics_jst, data: lyrics_data, container: container });

    },

    theory: function(container){
        
        // page
        var theory_jst  = '{{ Template.includeMenu() }}<h2>{{ title }}</h2>';
        var theory_data = { title: 'Theory' };
        var theory_page = Page.create({ jst: theory_jst, data: theory_data, container: container });

    },
    
};
