JST.chordData = ''
+ '<h3><% this.chord %></h3>'
+ '<ul>'
+ '<li>Voicing: <% this.voicing %></li>'
+ '<% for(var note in this.notes) { %>'
+ '<li>'
    + 'Note: <% this.notes[note].note %>, '
    + 'Freq: <% this.notes[note].freq %>, '
    + 'Midi: <% this.notes[note].midiKey %>'
+ '</li>'
+ '<% } %>'
+ '<li>Dominant: <% this.dominant %></li>'
+ '<li>Subdominant: <% this.subdominant %></li>'
+ '<li>Voicings: <% this.voicings %></li>'
+ '</ul>'
