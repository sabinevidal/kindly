/*
This script is what was used to extract data from the kindly_luis_export.json file, combined test and label as 
`{
    "text": "[text]",
    "intent": [0 or 1]
}`
*/

const fs = require('fs')
let louis = require('./kindly_luis_export.json')
let utterances = louis.utterances;
let resultString = ''
for (index in utterances){
    ignore = ["ignore", "None"]
    label = (ignore.includes(utterances[index].intent)) ? 0 : 1;
    resultString = '[' + utterances[index].text + '],' + ' [' + label + ']\n'
    fs.writeFileSync('modeling/dataset/training_data.txt', resultString, { flag: 'a+' }, err => {
        console.log("Something went wrong while writing to file ",err)
    })
}
