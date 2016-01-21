var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sandbox');

var ratSchema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Rat', ratSchema);
