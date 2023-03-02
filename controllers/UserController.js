// const userService =require("../dbservice/userService")
const Location = require("../models/locator");

const createData = async (req, res) => {
  console.log("!!!!",req.query)
  const timeNow = new Date();
  console.log(timeNow);
  const timestamp = timeNow;
  try {
    const data = await Location.create({
      ...req.query,
      timestamp,
    });
    res
      .send({
        message: "Successfully Created",
        data: data,
      })
      .status(200);
  } catch (error) {
    res
      .send({
        message: "Some Error on Server",
        error,
      })
      .status(400);
  }
};
const getAllData = async (req, res) => {
  console.log(req);
  try {
    const data = await Location.find({});
    res
      .json({
        message: "Related Data is Successfully Find",
        data: data,
      })
      .status(200);
  } catch (error) {
    res
      .send({
        message: "Some Error on Server",
        error,
      })
      .status(400);
  }
};
const getOneData = async (req, res) => {
  try {
    const data = await Location.find({
      name: req.params.name,
    });
    res
      .json({
        message: "Related Data is Successfully Find",
        data: data,
      })
      .status(200);
  } catch (error) {
    res
      .send({
        message: "Some Error on Server",
        error,
      })
      .status(400);
  }
};
const updateData = async (req, res) => {
  console.log("####",req.query)
  const timeNow = new Date();
  console.log(timeNow);
  const timestamp = timeNow;
  const {longitude,
  latitude,
  altitude} = req.query

  try {
    const data = await Location.updateOne(
      {
        name: req.query.name,
      },
      {
        $set: {
          longitude,
          latitude,
          altitude,
          timestamp,
        },
      }
    );
    res
      .json({
        message: "Related Data is Successfully Find",
        data: data,
      })
      .status(200);
  } catch (error) {
    console.log(error);
    res
      .send({
        message: "Some Error on Server",
        error,
      })
      .status(400);
  }
};

module.exports = { getAllData, createData, updateData, getOneData };
