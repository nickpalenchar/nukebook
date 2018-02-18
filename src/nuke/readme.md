# src/nuke directory.

> All modules that delete certain parts of facebook content are included here.

Most modules have a script, `<name>-bomb.js`, that deletes one item, and `<name>-nuker.js`, that iteritively calls the bomb script until all content is removed. Bomb scripts send a message to the nuker scripts whenever they complete one item, making it safe to be called again.