let messages = [];
let id = 0;

module.exports = {
    getMessages: (req, res) => {
        res.status(200).send(messages)
    },
    addMessage: (req, res) => {
        const newMessage = {
            id:id,
            text:req.body.text,
            time:req.body.time
        }
        messages.push(newMessage);
        id++;
        res.status(200).send(messages);
    },
    updateMessage: (req, res) => {
        let message = messages.findIndex(e => e.id === +req.params.id);
        messages[message].text = req.body.text;
        res.status(200).send(messages);
    },
    deleteMessage: (req, res) => {
        let index = messages.findIndex(e => e.id === +req.params.id);
        messages.splice(index, 1);
        res.status(200).send(messages);
    }
}