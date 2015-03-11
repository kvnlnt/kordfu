var Util = {

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
