/**
 * Created by ogi on 01.06.16.
 */

/**
 * TODO
 *
 * Prepare a delta json file(s) for manual translation
 * trans delta -c .trans.json
 *      read the newly generated reactIntlJson file,
 *      merge translations from the TM file(s) and
 *      output json file(s) for manual translation, containing only the messages not contained in the TM.
 *
 * Prepare a full json file(s) for editing and/or manual translation
 * trans all -c .trans.json
 *      read the newly generated reactIntlJson file,
 *      merge translations from the TM file(s) and
 *      output json file(s) for manual translation, containing all messages translated and untranslated.
 *
 * Update the translation memory TM file(s) with the manual translated file(s) and generate the updated reactIntlJson file
 * trans merge -c .trans.json
 *
 *
 * config file .trans.json
 *
 *
 * */

var defaultConfig = {
    defaultLanguage: "en",
    inputJson: "dist/reactIntlMessages.json",
    translationMemoryTMX:"src/intl/TM-de.tmx",  // we chose one TM for all languages

    lanuages: ["de"],
    toBeTranslatedJson: {
        de: "transTmp/translate-de.json"
    },
    outputJson: {
        de: "src/intl/reactIntlMessages-de.json"
    }
};


/*
* TODO
*
* for an alternative see https://github.com/TermSearch/tmx2json
*
* we would need the reverse too
*
* */


/*
* TODO
*
* add some api for machine translation
*
* */

var xml2js = require('xml2js');
var fs = require('fs');

var parser = new xml2js.Parser();
fs.readFile('test/TM.tmx', function (err, data) {
    parser.parseString(data, function (err, result) {
        console.log("result:", JSON.stringify(result, undefined, 2));

        // the JSON structure of such a file is:
        //  .header
        //  .body
        //  body.tu is an array of the `translation unit`s
        //  each `translation unit` contains one tuv `translation unit vector`?
        //  each `translation unit vector` is an array of `segment`s
        //  each `segment` has the language in .$.xml-lang and the string in .seg

        // since we use ONE TM for every language our translation unit vectors contain only 2 elements the source language and the destination language
        // so we could fill up our simpleTM and make it just an array of { en: en_seg, de: de_seg}


    });
});