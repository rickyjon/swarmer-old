'use strict'
const fs = require('fs');
const bencode = require('bencode');

var args = process.argv.splice(2);
var torrent; 
var file = args[0];
try {
		torrent = fs.readFileSync(file);
		console.log(torrent.toString('utf8'));
} catch(e) {
		console.log(e)
}
