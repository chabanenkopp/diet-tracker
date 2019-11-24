import CONFIG from './config'

const firebase = require('firebase')

firebase.initializeApp(CONFIG)

export default firebase
