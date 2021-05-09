const turbo=require('turbo360')({site_id:process.env.Turbo_app_id})
const vertex=require('vertex360')({site_id:process.env.Turbo_app_id})
const router=vertex.router()



router.get('/', (req, res) => {
    res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
  })

router.post('/user', (req,res) => {
    const body=req.body
    res.json({
        confirmation: 'success',
        data: body
    })
})



module.exports = router