const express=require('express')
const multer=require('multer')


const storage=multer.diskStorage({

  destination:(req,file,cb)=>{
    cb(null,'./public')
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname + '-' + Date.now())
  }
})

const upload=multer({storage:storage})
const app=express()
const arrpp=[
  {name:'ti',tuoi:10},
  {name:'tun',tuoi:102},
  {name:'teo',tuoi:101}
  
  
  ]
  

app.listen(3000)
app.set('views','./views')

app.set('view engine','ejs')

app.get('/',(req,res)=>{

  res.render('trangchu')
})

app.get('/learn',(req,res)=>{
res.render('learn',arrpp)
}
)

app.get("/login",(req,res)=>{

  res.render('login')
})

app.post('/login',upload.single('profile'),(req,res)=>
{
 res.send(req.body)
})