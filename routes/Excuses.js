const express = require('express')
const router= express.Router()
const Excuse = require('../models/dbExcuses')

router.get('/', async (req,res) => {
    // res.send("get all")
    const excuses = await Excuse.find() //findOne if you want to get the latest one back
    res.json(excuses)
})

router.post('/new', async (req,res) => {
    // res.json(req.body)
    const newexcuse = new Excuse(req.body) 
    const savedexcuse= await newexcuse.save()
    res.json(savedexcuse)
})

// find by ID
router.get('/get/:id', async (req,res) => {
    const excusesid = await Excuse.findById({_id: req.params.id}) //findOne if you want to get the latest one back
    res.json(excusesid)
})

// delete ID
router.delete('/delete/:id', async (req,res) => {
    const updateid = await Excuse.findByIdAndDelete({_id: req.params.id}) //findOne if you want to get the latest one back
    res.json(updateid)
})

router.get('/random', async (req,res) =>{
    const count= await Excuse.countDocuments();
    const random = Math.floor(Math.random() * count);
    const e = await Excuse.findOne().skip(random);
    res.json(e);
})

    // router.post('/batch', async (req, res) => {

    //     const newexcusebatch = new Excuse(req.body.batch) 
    //     const savedexcusebatch= await newexcusebatch.save()
    //     res.json(savedexcusebatch);
    //       });


//when using another file need to export the module over to index.js so the comp knows where to link to
module.exports = router;