const express = require('express');
const messageCtrl = require('./controllers/messages_controller')
const server = 3001;
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));
app.get('/api/messages', messageCtrl.getMessages);
app.post('/api/messages', messageCtrl.addMessage);
app.put('/api/messages/:id', messageCtrl.updateMessage);
app.delete('/api/messages/:id', messageCtrl.deleteMessage);

app.listen(server, () => console.log(`Server is running on ${server}`));
