const express = require('express')
const { addListener } = require('nodemon')
const router = express.Router()
const book = require('../router/book')

router.get('/',async(req,res) => {
    try{
          const books = await book.find()
          res.json(books)
    }catch(err){
        res.send('error' + err)
    }
})

router.get('/:id',async(req,res) => {
    try{
          const book = await book.findById(req.params.id)
          res.json(book)
    }catch(err){
        res.send('error' + err)
    }
})

router.post('/',async(req,res) =>{

    const book = new books({
        name : req.body.name,
        pinno:req.body.pinno
    })

    try{
          const a1 = await addListener.save()
          res.json(a1)
    } catch(err){
        res.send('error')
    }
})
router.patch('/:id',async(req,res) =>{

    try{
            const book = await book.findById(req.params.id)
            const a1 = await book.save()
            res.json(a1)
    }catch(err){
        res.send('error')
    }

    })

    router.patch('/:id',async(req,res) =>{

        try{
                const book = await book.remove(req.params.id)
                const a1 = await book.remove()
                res.json(a1)
        }catch(err){
            res.send('error')
        }
    
    
        })
module.exports = router 
