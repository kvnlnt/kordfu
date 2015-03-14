var Util = {

    // USAGE
    // var pattern = /\{\{(.+?)\}\}/g;
    // var tokens  = Util.regMatches(this._template, pattern, 1);
    regMatches: function(string, regex, index) {
        var index = index || (index = 1); // default to the first capturing group
        var matches = [];
        var match;
        while (match = regex.exec(string)) {
            matches.push(match[index]);
        }
        return matches;
    }

};
