
const Location = require('../models/locator')

async function getAllData() {
    return await Location.find();
}



async function updateData(){

}

async function saveUser(user){
    await user.save()
}

// async function create



module.exports = { getAllData,updateData,saveUser }

