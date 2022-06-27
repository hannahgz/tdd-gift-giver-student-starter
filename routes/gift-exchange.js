const express = require('express')
const router = express.Router()
const GiftExchange = require("../models/gift-exchange")
const { BadRequestError } = require('../utils/errors')



router.post('/pairs', (req, res, next) => {

    try {
        if (!req.body.names || req.body.names == []) {
            throw new BadRequestError();
        }
        const names = req.body.names;
        const pairs = GiftExchange.pairs(names)
        res.status(200).json(pairs)

    } catch (err) {
        next(err)
    }

}) 

router.post('/traditional', (req, res, next) => {

    try {
        if (!req.body.names || req.body.names == []) {
            throw new BadRequestError();
        }
        const names = req.body.names;
        const traditional = GiftExchange.traditional(names)
        res.status(200).json(traditional)

    } catch (err) {
        next(err)
    }

    // try {
    //     if ()
    // }
    // const names = req.body.names;
    // const traditional = GiftExchange.traditional(names)
    // res.send(traditional)
    // res.send('OK');
}) 

module.exports = router


































