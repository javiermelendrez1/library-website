var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    name: {type: String, required: true, minLength: 3, maxLength: 100}
});

//virtual for genre url
GenreSchema.virtual('url').get(() => {
    return 'catalog/genre/' + this._id;
});

//export model
module.exports = mongoose.model('Genre', GenreSchema);