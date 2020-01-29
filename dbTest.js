let db = require('./models')

let medications = [
    {
        brand: 'Altace',
        generic: 'ramipril',
        link: 'https://www.goodrx.com/altace',
        image: '/img/altace.JPG',
    },
   { 
       brand: 'Amaryl',
       generic: 'glimepiride',
       link: 'https://www.goodrx.com/amaryl',
       image: '/img/amaryl.JPG'
   },
   {
       brand: 'Ambien',
       generic: 'zolpidem',
       link: 'https://www.goodrx.com/ambien',
       image: '/img/ambien.JPG'
   },
   {
        brand: 'Ativan',
        generic: 'lorazepam',
        link: 'https://www.goodrx.com/ativan',
        image: '/img/ativan.JPG'
   },
   {
        brand: 'Calan SR',
        generic: 'verapamil SR',
        link: 'https://www.goodrx.com/calan-sr',
        image: '/img/calan-sr.JPG'
   },
   {
        brand: 'Cardizem',
        generic: 'diltiazem ER',
        link: 'https://www.goodrx.com/cardizem',
        image: '/img/cardizem.JPG'
   },
   {
        brand: 'Celexa',
        generic: 'citalopram',
        link: 'https://www.goodrx.com/celexa',
        image: '/img/celexa.JPG'
   },
   {
        brand: 'Coumadin',
        generic: 'warfarin',
        link: 'https://www.goodrx.com/coumadin',
        image: '/img/coumadin.JPG'
   },
   {
        brand: 'Diabeta',
        generic: 'glyburide',
        link: 'https://www.goodrx.com/diabeta',
        image: '/img/diabeta.JPG'
   },
   {
       brand: 'Efexor',
       generic: 'venlafaxine',
       image: '/img/effexor.JPG'
   },
   {
       brand: 'Flonase',
       generic: 'fluticasone',
       image: '/img/flonase.JPG'
   },
   {
       brand: 'Fosamax',
       generic: 'alendronate',
       image: '/img/fosamax.JPG'
   },
   {
       brand: 'Glucophage',
       generic: 'metformin',
       image: '/img/glucophage.JPG'
   },
   {
       brand: 'Glucotrol',
       generic: 'glipizide',
       image: '/img/glucotrol.JPG'
   },
   {
       brand: 'Hytrin',
       generic: 'terazosin',
       image: '/img/hytrin.JPG'
   },
   {
       brand: 'Imitrex',
       generic: 'sumatriptan',
       image: '/img/imitrex.JPG'
   },
   {
       brand: 'Lasix',
       generic: 'furosemide',
       image: '/img/lasix.JPG'
   },
   {
       brand: 'Lopid',
       generic: 'gemfibrozil',
       image: '/img/lopid.JPG'
   },
   {
       brand: 'Mevacor',
       generic: 'lovastatin',
       image: '/img/mevacor.JPG'
   }
   {
       brand: 'Micronase',
       generic: 'glyburide',
       image: '/img/micronase.JPG',
   },
   {
       brand: 'Norvasc',
       generic: 'amlodipine',
       image: '/img/norvasc.JPG'
   },
   {
       brand: 'Paxil',
       generic: 'paroxetine',
       image: '/img/paxil.JPG'
   },
   {
       brand: 'Pepcid',
       generic: 'famotidine',
       image: '/img/pepcid.JPG'
   },
   {
       brand: 'Pravachol',
       generic: 'pravastatin',
       image: '/img/pravachol.JPG'
   },
   {
       brand: 'Prilosec',
       generic: 'omeprazole',
       image: '/img/prilosec.JPG'
   },
   {
       brand: 'Prinivil',
       generic: 'lisinopril',
       image: '/img/prinivil.JPG'
   },
   {
       brand: 'Procardia',
       generic: 'nifedipine',
       image: '/img/procardia.JPG'
   },
   {
       brand: 'Procardia XL',
       generic: 'nifedipine XL',
       image: '/img/procardia-xl.JPG'
   },
   {
       brand: 'Proventil',
       generic: 'albuterol',
       image: '/img/proventil.JPG'
   },
   {
       brand: 'Prozac',
       generic: 'fluoxetine',
       image: '/img/prozac.JPG'
   },
   {
       brand: 'Retin-A',
       generic: 'tretinoin',
       image: '/img/retin-a.JPG'
   },
   {
       brand: 'Risperdal',
       generic: 'risperidone',
       image: '/img/risperdal.JPG'
   },
   {
       brand: 'sonata',
       generic: 'zaleplon',
       image: '/img/sonata.JPG'
   },
   {
       brand: 'synthroid',
       generic: 'levothyroxine',
       image: '/img/synthroid.JPG'
   },
   {
       brand: 'timoptic',
       generic: 'timolol',
       image: '/img/timoptic.JPG'
   },
   {
       brand: 'Toprol XL',
       generic: 'metoprolol ext-release',
       image: '/img/toprol-xl.JPG'
   },
   {
       brand: 'Tylenol with codeine',
       generic: 'acetaminophen w/codeine',
       image: '/img/tylenol-with-codeine.JPG'
   },
   {
       brand: 'Ultram',
       generic: 'tramadol',
       image: '/img/ultram.JPG'
   },
   {
       brand: 'Vasotec',
       generic: 'enalapril',
       image: '/img/vasotec.JPG'
   },
   {
       brand: 'Ventolin',
       generic: 'albuterol',
       image: '/img/ventolin.JPG'
   },
   {
       brand: 'Wellbutrin',
       generic: 'buproprion',
       image: '/img/wellbutrin.JPG'
   },
   {
       brand: 'Wellbutrin XL',
       generic: 'buproprion ext-release',
       image: '/img/wellbutrin-xl.JPG'
   },
   {
       brand: 'Xanax',
       generic: 'alprazolam',
       image: '/img/xanax.JPG'
   },
   {
       brand: 'Yasmin',
       generic: 'drospirenone/ethinyl estradiol',
       image: '/img/yasmin.JPG'
   },
   {
       brand: 'Zantac',
       generic: 'ranitidine',
       image: '/img/zantac.JPG'
   },
   {
       brand: 'Zestril',
       generic: 'lisinopril',
       image: '/img/zestril.JPG'
   },
   {
       brand: 'Zocor',
       generic: 'simvastatin',
       image: '/img/zocor.JPG'
   },
   {
       brand: 'Zolofot',
       generic: 'sertraline',
       image: '/img/zoloft.JPG'
   },
   {
       brand: 'Zovirax',
       generic: 'acyclovir',
       image: '/img/zovirax.JPG'
   }
]

db.Medication.insertMany(medications)
.then( () => {
    console.log('hit then after insertMany')
    process.exit()
})
.catch( err => {
    console.log('Error', err)
    process.exit()
})