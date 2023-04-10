const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Assigment')
.catch((err) => {
    console.log('da ket noi');
    console.log(err);
});

module.exports = {mongoose};