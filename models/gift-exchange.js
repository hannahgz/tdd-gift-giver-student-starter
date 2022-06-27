const { BadRequestError } = require("../utils/errors.js");

class GiftExchange {
   static pairs(names) {
    if(names.length % 2 == 1) {
        throw new BadRequestError("Number of names can't be odd!");
    }

    const mixArray = (array) => {
        for (let index = array.length - 1; index > 0; index--) {
            const toMix = Math.floor(Math.random() * (index+1));
            const temp = array[index]
            array[index] = array[toMix]
            array[toMix] = temp
        }
    }

    mixArray(names)
    
    let pairings = []

    for (let index = 0; index < names.length; index++) {
        if (index % 2 == 0) {
            pairings.push([names[index], names[index+1]])
        }
    }

    return pairings;

   }

   static traditional(names) {
    if(names.length % 2 == 1) {
        throw new BadRequestError("Number of names can't be odd!");
    }

    const mixArray = (array) => {
        for (let index = array.length - 1; index > 0; index--) {
            const toMix = Math.floor(Math.random() * (index+1));
            const temp = array[index]
            array[index] = array[toMix]
            array[toMix] = temp
        }
    }

    mixArray(names)

    let result = []

    for (let index = 0; index < names.length; index++) {
        if (index == names.length -1) {
            result.push(`${names[index]} is giving a gift to ${names[0]}` )
        } else {
            result.push(`${names[index]} is giving a gift to ${names[index+1]}` )
        }
    }
    return result;
   }
}



module.exports = GiftExchange