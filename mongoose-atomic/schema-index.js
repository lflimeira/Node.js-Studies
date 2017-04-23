const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

mongoose.connect('mongodb://localhost/teste');

const userSchema = new Schema({
    name: String,
    email: String,
    create_at: {type: String , default: Date.now, index: true}
});

userSchema.index({name: 1, type: -1});

const User = mongoose.model('Usuario', userSchema);
const _user = {
    name: 'Segundo',
    email: 'segundo@gmail.com'
}

User.create(_user, (err, data) => {
    if (err) { return console.log('Error: ', err);}
    return console.log('Inseriu: ', data);
});
