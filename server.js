const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive');

const app = module.exports = express();

app.use(bodyParser.json())
app.use(cors());

// You need to update connectionString.
const connectionString = 'postgres://postgres:Colour45@localhost/assessbox';
// Use connectSync method to connect to database
const massiveInstance = massive.connectSync({
  connectionString: connectionString
})

app.set('db', massiveInstance);
const db = app.get('db');

const mainCtrl = require('./mainCtrl')

// Initialize user table and vehicle table.
db.init_tables.user_create_seed((err, response) => {
  if (!err) {
    db.init_tables.vehicle_create_seed((err, response) => {
      console.log('tables initialized');
    })
  }
})

// ===== Build enpoints below ============

app.get('/api/users', mainCtrl.getAllUsers);
app.get('/api/vehicles', mainCtrl.getAllVehicles);
app.get('/api/vehicle', mainCtrl.getVehiclesByQuery);
app.get('/api/user/:userId/vehicle', mainCtrl.getVehiclesByUser);
app.get('/api/user/:userId/vehiclecount', mainCtrl.getVehicleCountByUser);
app.get('/api/newervehiclesbyyear', mainCtrl.getNewerVehiclesByYear);

app.post('/api/users', mainCtrl.createUser);
app.post('/api/vehicles', mainCtrl.createVehicle);

app.put('/api/vehicle/:vehicleId/user/:userId', mainCtrl.changeOwnership);

app.delete('/api/user/:userId/vehicle/:vehicleId', mainCtrl.removeOwnership);
app.delete('/api/vehicle/:vehicleId', mainCtrl.removeVehicle);


// ===== Do not change port ===============
const port = 3000;
app.listen(port, () => {
  console.log('Listening on port: ', port);
})
