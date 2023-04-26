// function foo(){
//     console.log("hello")
//     setImmediate(()=>{
//         foo()
//     })
// }

// console.log(foo())  

//json token

const express=require("express")
const cors=require("cors")

const mongoose=require("mongoose")

const port =process.env.PORT || 7000;

const jwt=require("jsonwebtoken") 

const jwtsecretkey='anmika123'

const http =require("http")

const path = require('path');


const app = express();




app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))



const conceted=async()=>{



    try{

        await mongoose.connect('http://mongose ',{useNewurlParser:true})

        console.log("connected")


     }catch(err){

        console.log(err)

    }
}
conceted()




const authintication =async(req,res,next)=>{

    const authheader= await req.headers['authorization']
    const token =authheader && authheader.split('')[1]

    if(!token){
        res.status(400).json({err:"err token"})
    }

     jwt.verify(token, jwtsecretkey, (err,data)=>{
        
     })

}


 app.get('/', (req,res)=>{

} )

app.post('/', (req,res)=>{


    console.log(req.body)

     datamodel.find({id:req.body.id}, (err, data)=>{
        if(err){

            res.status(500).json({err:'err accured'})


        }else if(data){


            let token= jwt.sign(data, jwtsecretkey, {expiresIn:36000})

            res.status(200).json({token}) 


        }
     })
    
} )



app.listen(port,(err)=>{
    if(err)throw err;
    console.log(`node is runing on ${port}`)
})  



const server = http.createServer((req,res)=>{

    if(req.method =="GET"){

        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('get complted')

        

    }else if(req.method =="POST"){

        let body=""


        req.on('data', (chunk)=>{

            body+=chunk.toString()

        })

        req.on("end" ,()=>{
            const data= JSON.parse(body)
            console.log(data)
            res.writeHead(200, {'Content-Type':'text/plain'})
            res.end("done")

        })






        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end("post complited")

    }else if(req.method =="PUT"){

        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end("put complited")

    }

})





 server.listen(port, (err)=>{

    if(err) throw err;

    console.log(`node is runing on ${port}`)

 })

 