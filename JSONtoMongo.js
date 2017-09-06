'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */


var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    listingsBoi = require('./listings.json'),
    Listing = require('./ListingSchema.js'),
    config = require('./config.js');

/* Connect to your database */
mongoose.connect(config.db.uri);

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
var i;
var entry;
for(i = 0; i < listingsBoi.entries.length; i++){
  ///console.log("this is the name: %s", listingsBoi.entries[i].name);
  var thoseListings = new Listing({
    code: listingsBoi.entries[i].code,
    name: listingsBoi.entries[i].name,
    coordinates: listingsBoi.entries[i].coordinates,
    address: listingsBoi.entries[i].address
  });

  thoseListings.save(function(err) {
    if (err) throw err;
  });

}





/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
