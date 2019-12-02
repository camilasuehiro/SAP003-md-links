const fs = require('fs');

function mdLinks (path) {
    return new Promise((resolve, reject) => { 
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(`errooo ${err}`)
            } else {
                const str = data.toString();
                const regex = /\[(.+?)\]\((https?:\/\/[^\)]*)\)/gm;
               
                let m;
                let arr = []

            while ((m = regex.exec(str)) !== null) {
                   arr.push({text: m[1], href: m[2]})
                }
                resolve(arr)
            }
        })
    })
};

module.exports = mdLinks;