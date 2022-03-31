        const { del } = require('express/lib/application');
        const { redirect } = require('express/lib/response');
const { findByIdAndUpdate } = require('../models/artist');
        const Artist = require('../models/artist')
        
        module.exports = {
        index,
        show,
        new: newArtist,
        create,
        delete: deleteArtist,
        edit, 
        update
        }

        function index(req, res) {
        Artist.find({}, function(err, artists) {
        res.render('artists/index', { title: 'All Artists', artists });
        });
        }

        function show(req, res) {
         Artist.findById(req.params.id, function(err, artist) {
            res.render('artists/show', { title: 'Artist Detail', artist});
         })
        }

        function newArtist(req, res) {
        res.render('artists/new', { title: 'Add Artist' });
        }
        
        function create(req,res) {
        // convert nowShowing's checkbox of nothing or "on" to boolean
        req.body.onInstagram = !!req.body.onInstagram;
        for (let key in req.body) {
        if(req.body[key] === '') delete req.body[key]
        }
        const artist = new Artist(req.body);
        artist.save(function(err) {
        // one way to handle errors
        if (err) return res.render('artists/new');
        // for now, redirect right back to new.ejs
        res.redirect(`/artists/${artist._id}`);
         });
         }

         function deleteArtist(req, res) {
                Artist.findByIdAndRemove(req.params.id, function(err){
                console.log(err)
                res.redirect('/artists');
                });
              }

        function edit(req, res) {
          Artist.findById(req.params.id, function(err, artist){
            res.render('artists/edit', {title: 'All Artists', artist})
          })
              }

        function update (req,res) { 
          req.body.onInstagram = !!req.body.onInstagram;
          for (let key in req.body) {
          if(req.body[key] === '') delete req.body[key]
          }
          console.log(req.body)
              Artist.findByIdAndUpdate(req.params.id, req.body, function(err, artist){
                console.log(err)
                res.redirect('/artists')
              })
              }
        

        
      
  

