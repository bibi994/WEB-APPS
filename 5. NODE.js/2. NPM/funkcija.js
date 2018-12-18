var figlet = require('figlet');

function prikaz() {

    let newData;
    figlet('Frontend Bootcamp!', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        newData = data;
    });
    return newData;


}
module.exports = { prikaz };