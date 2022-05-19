const fs = require('fs')
const uuidv1 = require('uuid/v1');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class Store {


    getNotes() {
        return readFileAsync('db/db.json', 'utf-8').then((notes) =>{
            return JSON.parse(notes)




    //         try {
    //             parsedNotes = [].concat(JSON.parse(notes))
    //         }
    //         catch (err) 
        })
    }



    addNote(note) {
        const {title, text} = notes;

        if (!title || !text) {
            throw new Error('Title and text are required')
        }

        const newNote = {title, text, id: uuidv1() };

        // we have to read the josn file and take that string and convert it to json
        // since we got an array, we can push newNote into that array
        // then we can save that array back into our JSON file 
        // similiar to read and append activity

        // console.log(this.getNotes());

        this.getNotes().then((notes) => {
            // console.log(notes);
            notes.push(newNote);
        });

        // now we need to write to our file
        
    }
}

    module.exports = new Store();


// ====================================================================================================
// tutor section
// here we write out functions. we will write them in a class so we can export these functions 

// const util = require('util');
// const fs = require('fs');

// const readFileAsync = util.promisify(fs.readFile);

// // now buliding the class
// class Store {
//     read() {
//         return readFileAsync('db/db.json', 'utf-8' )
//     }
//     getNotes() {
//         return this.read()
//         .then((notes) => {
//             let parsedNotes 
//             try {
//                 parsedNotes = [].concat(JSON.parse(notes))
//             } catch (error) {
//                 parsedNotes = []
//             }
//             return parsedNotes;
//         });


//     }
// }



// module.exports = new Store();


// create new util and FS function call writefileasync 
// create a new mothed in the class for writing to my database 
// write add notes method in store class 



// then write the API wroute--which is a post resquest 

