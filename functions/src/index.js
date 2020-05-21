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

exports.validateEToken = functions.https.onRequest((req, res) => {
  const body = req.body;
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST');
      res.set('Access-Control-Allow-Headers', 'Authorization');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
  } else {
    admin.database().ref('etokens/').once('value', (etokensArray) => {
      for (const etoken of etokensArray) {
        if (etoken.tokenNumber === body.etoken && etoken.vendor === body.vendor) {
          const date = createDate();
          if (date === etoken.date && checkTimeSlot(date, etoken.time, etoken.duration)) {
            res.send({
              'status': 'success',
              'error': 'Valid Token'
            })
          } else {
            res.send({
              'status': 'error',
              'error': 'Invalid Token'
            })
          }
        } else {
          res.send({
            'status': 'error',
            'error': 'Invalid Token'
          })
        }
      }
    });
  }
});
function checkTimeSlot(date, etokenDate, etokenDuration) {
  var correctTimeSlot = false;
  const totalMin = date.getHours() * 60 + date.getMinutes();
  const tokenMin = etokenDate.substr(0, 2) * 60 + etokenDate.substr(2, 4);
  if ((tokenMin + etokenDuration < totalMin && totalMin >= tokenMin)) {
    correctTimeSlot = true;
  }
  correctTimeSlot;
}
function createDate() {
  const date = new Date();
  return date.getUTCFullYear + (date.getUTCMonth + 1) + date.getUTCDate;
}
exports.createConsumer = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');

    console.log("received", req);
    const data = req.body;
  
    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'GET, POST');
      res.set('Access-Control-Allow-Headers', '*');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
    } else {
      admin.database().ref('consumers/').once('value', (consumersArray) => {
        console.log("snapshot for consumers");
        console.log(snapshot);

        if(consumersArray.hasOwnProperty(data.phone)){
          const error = {
            "status": "error",
            "error" : "User Already exists"
          }
          res.send(error);
        }else {
          addConsumer(consumersArray, data);
          res.send({
            "status": "success",
            "error" : "User added successfully."
          });
        }
          
      });
      
    }
});

function addConsumer(consumersArray, data){
  consumersArray.child(data.mobile).set({
      "address" : "1st Main, Bengaluru",
      "email" : "gmaahi68@gmail.com",
      "fname" : "Mansi",
      "idNumber" : "78456454",
      "idType" : "adhaar",
      "lname" : "Gupta",
      "pincode" : "244901"
  });

}