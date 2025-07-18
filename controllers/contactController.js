// controllers/contactController.js
const Contact = require("../models/contactModel");

exports.submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newContact = await Contact.create({ name, email, message });

  res.status(201).json({
    message: "Message sent successfully",
    data: newContact,
  });
};
