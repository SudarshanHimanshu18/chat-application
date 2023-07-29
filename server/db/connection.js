const mongoose = require('mongoose');

const username = 'chat_admin_me';
const password = encodeURIComponent('Himanshu@1821');
const dbName = 'himanshu';

const url = `mongodb+srv://${username}:${password}@cluster0.cuqpmk7.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))