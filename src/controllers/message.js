const Message = require('../models/Message');
  

module.exports.getMessages = async function(req, res) { console.log('getMessages');

  try {
    const allMessages = await Message.find();
    res.status(200).json(allMessages);
  } catch(err) {
    res.status(404).json({
      message: 'an error occured!'
    })
  }     
};

module.exports.postMessage = async function(req, res) {

   //create new message
    const message = new Message({
      id: req.body.id,
      message: req.body.message
    });

    try {
      await message.save();
      res.status(201).json(message);
    } catch(err) {
      res.status(400).json({
        message: 'error occured'
      })
    }
  
};
