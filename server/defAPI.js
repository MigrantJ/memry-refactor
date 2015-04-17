'use strict';
var _ = require('lodash');
var api = {};

var cloneSingleDef = function (origDef) {
  return {
    _id: origDef._id,
    title: origDef.title,
    description: origDef.description,
    descriptionURL: origDef.descriptionURL
  };
};

var cloneDefs = function (origDefs) {
  if (origDefs.constructor === Array) {
    var newDefs = [];
    _.forEach(origDefs, function(d, i) {
      newDefs[i] = cloneSingleDef(d);
    });

    return newDefs;
  } else {
    throw 'cloneDefs() requires an Array!';
  }
};

//checks specifically for someone trying to slip in corrupted data
api.validateDefToAdd = function (defs, inputDef) {
  //input should never, ever not pass these checks
  //confirm definition is formatted properly
  if (inputDef.title === undefined || inputDef.description === undefined) {
    //todo: assertions are too extreme, makes the whole thing crash
    throw 'Definition is corrupt, missing required parts';
  }
};

api.checkIfTitleExists = function (defs, inputDef) {
  //confirm once again that this title doesn't already exist
  if (_.find(defs, function(def) { return inputDef.title === def.title; })) {
    var assertString = 'Title ' + inputDef.title + ' already exists!';
    //todo: assertions are too extreme, makes the whole thing crash
    throw assertString;
  }
};

//converts unsafe characters, removes unwanted ones, and prepares for further processing
api.formatInput = function (inputDef) {
  //make sure input is safe and doesn't have html or mysql injection or anything else weird
  var safeDef = cloneSingleDef(inputDef);
  //strip out / convert all unsafe characters - ', ", html tags, mysql calls, etc and save back into description
  safeDef.description = _.escape(inputDef.description);

  //add a space to the end of the description if there isn't one already, for regex purposes
  if (safeDef.description[safeDef.description.length - 1] !== ' ') {
    safeDef.description += ' ';
  }

  return safeDef;
};

//convert a word to a regex so we can search other def descriptions for it
api.defTitleToRegexStr = function(title) {
  var regexContents = '([\\s,.;\'"!?])(';
  for (var i = 0; i < title.length; i++) {
    var char = title.charAt(i);
    if (char === ' ') {
      regexContents += '\\s';
    } else {
      regexContents += '[' + char.toUpperCase() + char.toLowerCase() + ']';
    }
  }
  //this prevents linked terms ending with anything other than a space or punctuation
  regexContents += ')(?=[\\s,.;\'"!?])';
  return regexContents;
};

//when a definition is added, all other defs that have the new def's title in their descriptions need to link to the new def
//returns an object containing all defs. This needs to be pushed to the db separately
api.addDeflinksToDescriptions = function (defs, defToAdd) {
  var modDefs = cloneDefs(defs);
  var regex = new RegExp(api.defTitleToRegexStr(defToAdd.title), 'g');

  _.forEach(modDefs, function (d) {
    d.descriptionURL = d.descriptionURL.replace(regex, '$1<deflink d=\'' + defToAdd._id + '\'>$2</deflink>');
  });

  return modDefs;
};

//similarly, when a def is removed, the other defs should no longer link to it
//returns an object containing all defs. This needs to be pushed to the db separately
api.removeDeflinkFromDescriptions = function(defs, defToRemove) {
  var modDefs = cloneDefs(defs);
  var regex = new RegExp('(<deflink\\sd=\'' + defToRemove._id + '\'>)([\\s\\S]+)(<\\/deflink>)');
  _.forEach(modDefs, function(d) {
    d.descriptionURL = d.descriptionURL.replace(regex, '$2');
  });

  return modDefs;
};

//when a new def is added, words in its desc that are the titles of other defs should be links
//returns the description with links. This should be placed directly into the descriptionURL property
api.addLinksToNewDefDesc = function (defs, def) {
  var description = def.description;
  _.forEach(defs, function(d) {
    if (def.title !== d.title) {
      var regex = new RegExp(api.defTitleToRegexStr(d.title), 'g');
      description = description.replace(regex, '$1<deflink d=\'' + d._id + '\'>$2</deflink>');
    }
  });
  return description;
};

//takes a raw inputted definition from the client
//returns a processed definition ready to be saved to the database
api.processInputDef = function (defs, newDef) {
  api.validateDefToAdd(defs, newDef);
  var formattedDef = api.formatInput(newDef);
  //create the descriptionURL param by adding links to the input description
  formattedDef.descriptionURL = api.addLinksToNewDefDesc(defs, formattedDef);

  return formattedDef;
};

module.exports = api;