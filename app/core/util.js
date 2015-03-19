var Util = {

    // USAGE
    // var pattern = /\{\{(.+?)\}\}/g;
    // var tokens  = Util.regMatches(this._template, pattern, 1);
    regMatches: function(str, re, groups) {
        var m;
        var matches = [];
        while ((m = re.exec(str)) != null) {
            if (m.index === re.lastIndex) {
                re.lastIndex++;
            }
            matches.push(m.slice(1, groups));
        }
        return matches;
    }

};
