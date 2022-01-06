const properties = require('./json/properties.json');
const users = require('./json/users.json');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'bitajanzadeh',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {

  const queryString = `
  SELECT * 
  FROM users
  WHERE email = $1
  `
  return pool
    .query(queryString, [email])
    .then(result => {
      if (result.rows) {
        return result.rows[0];
      } else {
        return null
      }
    })
    .catch((err) => {
      console.log(err.message)
    });
  };

exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {

  const queryString = `
  SELECT * 
  FROM users
  WHERE id = $1
  `
  
  return pool
    .query(queryString, [id])
    .then(result => {
      if (result.rows[0]) {
        return result.rows[0];
      } else {
        return null;
      }
    })
    .catch((err) => {
      console.log(err.message)
    });
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {

  const values = [user.name, user.email, user.password];
  const queryString = `
  INSERT INTO users (name, email, password) 
  VALUES ($1, $2, $3)
  RETURNING *
  `
  return pool
    .query(queryString, values)
    .then (result => result.rows[0])
    .catch((err) => { 
      console.log(err.message)
    });
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  
  const values = [guest_id, limit];

  const queryString = `
  SELECT * 
  FROM reservations
  JOIN users ON guest_id = users.id
  JOIN properties ON property_id = properties.id
  WHERE guest_id = $1
  LIMIT $2;
  `
  return pool
  .query(queryString, values)
  .then(result => {
    if (result.rows[0]) {
      return result.rows;
    } else {
      return null;
    }
  })
  .catch((err) => {
    console.log(err.message)
  });
  
  
  
  //return getAllProperties(null, 2);
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
/* const getAllProperties = function(options, limit = 10) {
  const limitedProperties = {};
  for (let i = 1; i <= limit; i++) {
    limitedProperties[i] = properties[i];
  }
  return Promise.resolve(limitedProperties);
} */

const getAllProperties = (options, limit = 10) => {

  return pool
    .query(`SELECT * FROM properties LIMIT $1`, [limit])
    .then((result) => result.rows)
    .catch((err) => { 
      console.log(err.message)
    });
  };


exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
}
exports.addProperty = addProperty;
