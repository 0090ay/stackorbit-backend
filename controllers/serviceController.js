const Service = require("../models/serviceModel");

// Get all services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services", error });
  }
};

// Create a new service
const createService = async (req, res) => {
  try {
    const { title, description, price, image } = req.body;

    const newService = new Service({ title, description, price, image });
    await newService.save();

    res.status(201).json({ message: "Service created", service: newService });
  } catch (error) {
    res.status(500).json({ message: "Error creating service", error });
  }
};

module.exports = {
  getAllServices,
  createService,
};
