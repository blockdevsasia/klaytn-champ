
var admin = require('firebase-admin')
var serviceAccount = require('./.gcpServiceAccount.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dlt-champ.firebaseio.com',
  databaseAuthVariableOverride: {
    uid: 'my-service-worker'
  }
})

function retrieveFirebaseId (idToken) {
  return admin.auth().verifyIdToken(idToken)
}
exports.retrieveFirebaseId = retrieveFirebaseId
