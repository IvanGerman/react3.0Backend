const FormData = require('../models/FormData');
  

module.exports.getFormData = async function(req, res) { console.log('getFormData');

  try {
    const allFormData = await FormData.find();
    res.status(200).json(allFormData);
  } catch(err) {
    res.status(404).json({
      message: 'an error occured!'
    })
  }     
};

module.exports.postFormData = async function(req, res) {

   //create new FormData record
    const formData = new FormData({
      id: req.body.id,
      formData: req.body.formData
    });
    console.log('formData---',formData);
    try {
      await formData.save();
      res.status(201).json(formData);
    } catch(err) {
      res.status(400).json({
        message: 'error occured'
      })
    } 
};
