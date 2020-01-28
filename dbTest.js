let db = require('./models')

let medications = [{
    brand: 'Altace',
    generic: 'ramipril',
    link: 'https://www.goodrx.com/altace',
    image: '/img/altace.webp',
}, { 
    brand: 'Amaryl',
    generic: 'glimepiride',
    link: 'https://www.goodrx.com/amaryl',
    image: '/img/amaryl.webp'
}, {
    brand: 'Ambien',
    generic: 'zolpidem',
    link: 'https://www.goodrx.com/ambien',
    image: '/img/ambien.webp'
}, {
    brand: 'Ativan',
    generic: 'lorazepam',
    link: 'https://www.goodrx.com/ativan',
    image: '/img/ativan.webp'
}, {
    brand: 'Calan SR',
    generic: 'verapamil SR',
    link: 'https://www.goodrx.com/calan-sr',
    image: '/img/calan-sr.webp'
}, {
    brand: 'Cardizem',
    generic: 'diltiazem ER',
    link: 'https://www.goodrx.com/cardizem',
    image: '/img/cardizem.webp'
}, {
    brand: 'Celexa',
    generic: 'citalopram',
    link: 'https://www.goodrx.com/celexa',
    image: '/img/celexa.webp'
}, {
    brand: 'Coumadin',
    generic: 'warfarin',
    link: 'https://www.goodrx.com/coumadin',
    image: '/img/coumadin.webp'
}, {
    brand: 'Diabeta',
    generic: 'glyburide',
    link: 'https://www.goodrx.com/diabeta',
    image: '/img/diabeta.webp'
}, {
    brand: 'Dilantin',
    generic: 'phenytoin'
}]

db.Medication.insertMany(medications)
.then( () => {
    console.log('hit then after insertMany')
    process.exit()
})
.catch( err => {
    console.log('Error', err)
    process.exit()
})