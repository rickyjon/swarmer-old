'use strict'
const fs = require('fs');
const bencode = require('bencode');

const torrent = fs.readFileSync('puppy.torrent');
console.log(torrent.toString('utf8'));