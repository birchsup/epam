/**
 * 1. You need to write a parser, which takes the "./utils/test.json" file
 * and will create a new JSON file with the name "./parsed.json" (in current directory!) with the structure:
 * [
 *  {
 *    "docId": "http://doc.epam.com/077b1523-56f0-492a-b954-1269e3acc191"
 *  },
 *  {
 *    "docId": "http://doc.epam.com/077d3a4c-a2fe-4ab9-9046-89c0ce5c5b38"
 *  }
 *  .....
 * ]
 * where 077b1523-56f0-492a-b954-1269e3acc191 - is the value of the name attribute from the "./test.json" file
 * Please NOTE, that you should omit the ".html" extension
 *
 * Use the promise version of FS module.
 * DOCS:
 * 		fs.readFile: https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromisesreadfilepath-options
 * 		fs.writeFile: https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromiseswritefilefile-data-options
 *
 * 2. Check yourself by running "npm run test:nodejs"
 *
 */
// const fs = require('fs/promises');
const fs = require('fs');

const jsonParser = async () => {
  let x = fs.readFile('./tasks/module-8/utils/test.json', 'utf8', (err, data) => {
    if (err) {
     
      throw err;
    };

    const jsonData = JSON.parse(data);

    let newObj = jsonData.list.entries.map(entry => ({
      docId: `http://doc.epam.com/${entry.entry.name.slice(0, -5)}`,
    }))

    

    fs.writeFile('./tasks/module-8/parsed.json', JSON.stringify(newObj), (err) => {
      if (err) {
       
        throw err;
      }
    
    });
  });
};

module.exports = {
  jsonParser,
};
