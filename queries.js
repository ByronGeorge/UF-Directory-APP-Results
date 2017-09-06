/* Fill out these functions using Mongoose queries*/

/*var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    listingsBoi = require('./listings.json'),
    Listing = require('./ListingSchema.js'),
    config = require('./config.js');

mongoose.connect('mongodb://bgeorgee:database1@ds121674.mlab.com:21674/assignment3');*/


var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   //findOne({query}, selection, callback function)
   Listing.findOne({'name' : 'Library West'}, '_id name code coordinates address', function(err,listing) {
     if(err) return handleError(err);
     console.log('Found: %s', listing);
   })



};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.findOne({'code' : 'CABL'}, '_id name code coordinates address', function(err, result) {
     if(err) return handleError(err);
     console.log('Removing the document %s', result);
     result.remove();



    })
};
var updatePhelpsLab = function() {
  var correctAddress = 'Phelps Lab, Gainesville, FL 32603, United States';
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listing.findOne({'name' : 'Phelps Laboratory'}, '_id name code coordinates address', function(err, result) {

     if(err) return handleError(err);
     result.address = correctAddress;
     result.save();
     console.log('updated the document: %s', result);

   })
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find(function(err, result) {
     console.log(result);
   })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
