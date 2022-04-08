const express = require('express');


const router = express.Router();

router.get('/movies', function (req, res) {
    const movies = ["rand de basnasti", "the shining", "lord of the rings", "bartman begins"]
    res.send(movies)
});

router.get('/movies/:indexNumber', function(req,res){
    const movies = ["rand de basnasti", "the shining", "lord of the rings", "bartman begins"]
    const indexNumber=req.params.indexNumber;
    const result = movies[(indexNumber-1)]
    if (indexNumber>movies.length){
        res.send("use a valid index")
    }else{
    res.send(result)
    }
});


router.get('/films', function (req, res) {
    const films = [ {
        id: 1,
        name: "The Shining"
       }, 
       {
        id: 2,
        name: "Incendies"
       }, 
       {
        id: 3,
        name: "Rang de Basanti"
       }, 
       {
        id: 4,
        name: "Finding Nemo"
       }]
       
    res.send(films)
});


router.get('/films/:filmId', function (req, res) {
    const filmId=req.params.filmId;
    const films = [ {
        id: 1,
        name: "The Shining"
       }, 
       {
        id: 2,
        name: "Incendies"
       }, 
       {
        id: 3,
        name: "Rang de Basanti"
       }, 
       {
        id: 4,
        name: "Finding Nemo"
    }]
    for(i=0;i<films.length;i++){
        if (filmId==films[i].id){
            res.send(films[i])
            return
        }
    }
    res.send("No movie exists with this id")   
});







module.exports = router;
// adding this comment for no reason