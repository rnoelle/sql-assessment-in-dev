const app = require('./server');
const db = app.get('db');

module.exports = {

  getAllUsers(req, res) {
    db.get_all_users(function(err, users) {
      if (err) return res.status(500).send(err);
      res.status(200).send(users);
    })
  },
  getAllVehicles(req, res) {
      db.get_all_vehicles(function(err, vehicles) {
        if (err) return res.status(500).send(err);
        res.status(200).send(vehicles);
      })

  },
  getNewerVehiclesByYear(req, res) {
    db.get_newer_vehicles_by_year(function (err, vehicles) {
      if (err) return res.status(500).send(err);
      res.status(200).send(vehicles);
    })
  },
  getVehicleCountByUser(req, res) {
    db.get_vehicle_count_by_user(req.params.userId, function (err, count) {
      if (err) return res.status(500).send(err);
      res.status(200).send(count);
    })
  },
  getVehiclesByQuery(req, res) {
    if (req.query.userEmail) {
      db.get_vehicles_by_email(req.query.userEmail, function (err, vehicles) {
        if (err) return res.status(500).send(err);
        res.status(200).send(vehicles)
      })
    } else if (req.query.userFirstStart) {
      db.get_vehicles_by_starting_letters(req.query.userFirstStart+'%', function (err, vehicles) {
          if (err) return res.status(500).send(err);
          res.status(200).send(vehicles)
      })
    }
  },
  createUser(req, res) {
    db.create_user(req.body.name, req.body.email, function(err, user) {
      if (err) return res.status(500).send(err);
      res.status(200).send(user);
    })
  },
  createVehicle(req, res) {
    db.create_vehicle(req.body.make, req.body.model, req.body.year, req.body.user_id,
      function(err, user) {
      if (err) return res.status(500).send(err);
      res.status(200).send(user);
    })
  },
  getVehiclesByUser(req, res) {
    db.get_vehicles_by_owner(req.params.userId, function (err, vehicles) {
      if (err) return res.status(500).send(err);
      res.status(200).send(vehicles);
    })
  },
  changeOwnership(req, res) {
    db.change_ownership(req.params.vehicleId, req.params.userId, function (err, vehicle) {
      if (err) return res.status(500).send(err);
      res.status(200).send(vehicle);
    })
  },
  removeOwnership(req, res) {
    db.remove_ownership(req.params.vehicleId, req.params.userId, function (err, vehicle) {
      if (err || vehicle.length === 0) return res.status(500).send(err || 'ids did not match');
      res.status(200).send(vehicle);
    })
  },
  removeVehicle(req, res) {
    db.remove_vehicle(Number(req.params.vehicleId), function (err, vehicle) {
      if (err) return res.status(500).send(err);
      res.status(500).send(vehicle);
    })
  }

}
