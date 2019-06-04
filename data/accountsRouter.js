const express = require('express');

const Accounts = require('./accounts-model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const accounts = await Accounts.find(req.params.name);
        if (accounts) {
            res.status(200).json(accounts);
        } else {
            res.status(404).json({ message: 'accounts not found ' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error getting' })
    }
})
router.get('/:id', async (req, res) => {
    try {
        const accounts = await Accounts.findById(req.params.id);
        if (accounts) {
            res.status(200).json(accounts);
        } else {
            res.status(404).json({ message: 'accounts not found ' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error getting' })
    }
})


router.post ('/', async (req, res)=>{
    try{
    const newacc = await Accounts.add(req.body)
    res.status(201).json(newacc)
    }catch(error){
        res.status(500).json({ message: 'error adding'})
    }
    
})

router.put('/:id', async (req, res) => {
    try {
        const edit = Accounts.update(req.params.id, req.body);
        if (edit) {
            res.status(200).json(edit);
        } else {
            res.status(404).json({ message: 'need more info' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error updating' })
    }
})

router.delete('/:id', async (req, res) => {
    const count = await Accounts.remove(req.params.id);
    try {
        if (count > 0) {
            res.status(200).json({ message: 'account deleted' })
        } else {
            res.status(404).json({ message: 'account not found' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error deleting account' })
    }
})


module.exports = router;