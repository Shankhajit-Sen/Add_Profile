// Full Documentation - https://docs.turbo360.com
const express = require('express')
const router = express.Router()

/*  This is the home route. It renders the index.mustache page from the views directory.
  Data is rendered using the Mustache templating engine. For more
  information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
})

router.post('/addprofile',(req, res) =>{
  const body=req.body
  body['languages']=req.body.languages.split(', ')
  profiles[body.username]=body
  res.redirect('/profile/'+body.username)
      // res.json({
    // confirmation:'Success',
    // data:body
  //})
})

const profiles={
      
        shankha:  {
          image:'/images/me.png',
          name:'shankhajit sen',
          company:'self',
          languages:['c','c++','js']
          },
        
          sam:  {
            image:'/images/sam.png',
            name:'samarth pandey',
            company:'learner',
            languages:['c','c++']
          },
          aritro:  {
            image:'/images/aritro.png',
            name:'aritro podder',
            company:'chutiya',
            languages:['c']
          },
          pratistha:  {
            image:'/images/pratistha.png',
            name:'Pratistha Srivastva',
            company:'Google',
            languages:['c','c++','js','python']
          },
          shrestha:  {
            image:'/images/shrestha.png',
            name:'shrestha Goswami',
            company:'KIIT',
            languages:['c','c++']
        },
            mana:  {
              image:'/images/mana.png',
              name:'manali dasgupta',
              company:'amazon',
              languages:['c','c++','js','python']
          }
      }

/*  This route render json data */
router.get('/json', (req, res) => {
  res.json({
    confirmation: 'success',
    app: process.env.TURBO_APP_ID,
    data: 'this is a sample json route.'
  })
})

//query
router.get('/query', (req, res) => {
  const name=req.query.name
  const occupation=req.query.occupation
  
  const data= {
    name: name,
    occupation: occupation
  }
  res.render('profile.mustache',data)
  
  // res.json({
  //   name: name,
  //   occupation: occupation
  // })
})
//parameter
router.get('/:path', (req, res) => {
  const path=req.params.path
  res.json({
    data: path
  })
})

router.get('/:profile/:username', (req, res) => {
  const name=req.params.profile
  const username=req.params.username
  const currentprofile=profiles[username]
  if(currentprofile== null)
{
res.json({
  confirmation:'Fail',
  message:'Profile '+ username + ' Not found'
})
return
}

res.render('profile', currentprofile)
  // res.json({
  //   confirmation:'success',
  //   profile:currentprofile
  //   })
})


/*  This route sends text back as plain text. */
router.get('/send', (req, res) => {
  res.send('This is the Send Route')
})

/*  This route redirects requests to Turbo360. */
router.get('/redirect', (req, res) => {
  res.redirect('https://www.turbo360.co/landing')
})

module.exports = router
