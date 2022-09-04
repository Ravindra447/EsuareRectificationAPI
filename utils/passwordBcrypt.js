const bcrypt = require('bcryptjs');

const createHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
const comparePassword = function(cadidatePassword, hash, callback) {
    bcrypt.compare(cadidatePassword, hash, (err, isMatch) => {
        if (err)
            console.error(
                "Unable to update item. Error JSON:",
                JSON.stringify(err, null, 2)
            );
        callback(null, isMatch);
    });
};
module.exports = {
    createHash: createHash,
    comparePassword: comparePassword
}