import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile1 = () => {
  
    
     const [name , setname]=useState("")

     const [img,   setimg ] =useState("")

     const [images, setimages]=useState([])

     const [data,setdata]=useState({})



     const handlephoto =(e)=>{
        setimg( e.target.files[0])

     }



     const handleFileSelect = (event) => {
        
        setimages(event.target.files);
      };
    
     
     const handlesubmit=(e)=>{
        e.preventDefault();

        let formdata= new FormData()


        formdata.append("name",name)

        formdata.append('photo',img)

        for(let i=0  ; i > images.length ; i++){

            formdata.append("photos", images[i])

        }


        console.log(formdata)


        axios.post('http://localhost:7000/uploadfile', formdata)

        .then(res=>{
            console.log(res)
        })


     }
  


     useEffect(()=>{

        axios.get('http://localhost:7000/getuser')

        .then(res=>{ 
            
            setdata(res.data)

        

        })
     })
  
    return (


    <div>

{/* 
        {
            data.map((elm)=>{
                return   <img src={`http://localhost:7000/images/${elm.img}`} style={{width:'250px', height:"300px"}}/>

            })
        }
 */}
       
        <form encType='multipart/form-data'  style={{display:'flex', flexDirection:'column' ,width:"300px",  margin:"20px"}}>

        
         
         <input type="text"  placeholder='...somthing needed' onChange={(e)=>setname(e.target.value)} style={{padding:"10px"}}  />



         <input type="file" name='photo' accept='.png ,.jpg, .jpeg'   onChange={handlephoto} style={{padding:"10px"}} />



         <input type="file"  accept='.png ,.jpg, .jpeg' name="photos"  onChange={handleFileSelect}  multiple />

         

         <button onClick={handlesubmit} style={{padding:"10px"}}> submit  </button>
      
      
         </form>



    </div>
  )
}

export default Profile1