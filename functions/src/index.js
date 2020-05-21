'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
exports.generateToken = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');

  
    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'GET');
      res.set('Access-Control-Allow-Headers', 'Authorization');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
    } else {
      res.send('Hello World!');
    }
});

exports.createVendor = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');

  
    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'GET');
      res.set('Access-Control-Allow-Headers', 'Authorization');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
    } else {
      res.send('Hello World!');
    }
});

function addAvailability(){}

exports.createConsumer = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');

    console.log("received", req);
    const data = req.body;
    console.log("received", req.body.toString());
    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'GET, POST');
      res.set('Access-Control-Allow-Headers', '*');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
    } else {
      admin.database().ref('consumers/').once('value', (consumersArray) => {
        console.log("snapshot for consumers");
        console.log(data.mobile);

        if(consumersArray.hasChild(data.mobile)){
          const error = {
            "status": "error",
            "error" : "User Already exists"
          }
          res.status(200).send(error);
        }else {
          addConsumer(consumersArray, data);
          addUserMapping(data.email, data.mobile);
          res.status(200).send({
            "status": "success",
            "message" : "User added successfully."
          });
        }
          
      });
      
    }
});

function addUserMapping (email, mobile){
  let userName = email.split('@')[0];
  admin.database().ref('userMapping/').once('value', (userMapping) => {
    userMapping.ref.child(`${userName}/`).set(mobile);
  });
}
function addConsumer(consumersArray, data){
  consumersArray.child(`${data.mobile}/`).ref.set({
      "address" : data.address,
      "email" : data.email,
      "fname" : data.fname,
      "idNumber" :data.idNumber,
      "idType" : data.idType,
      "lname" : data.lname,
      "pincode" : data.pincode
  });

}