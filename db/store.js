// here we write out functions. we will write them in a class so we can export these functions 

const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);

// now buliding the class
class Store {
    read() {
        return readFileAsync('db/db.json', 'utf-8' )
    }
    getNotes() {
        return this.read()
        .then((notes) => {
            let parsedNotes 
            try {
                parsedNotes = [].concat(JSON.parse(notes))
            } catch (error) {
                parsedNotes = []
            }
            return parsedNotes;
        });


    }
}



module.exports = new Store();


// create new util and FS function call writefileasync 
// create a new mothed in the class for writing to my database 
// write add notes method in store class 

// then write the API wroute--which is a post resquest 
