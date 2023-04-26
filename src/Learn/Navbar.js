import React ,{useState} from 'react'
import './Navbar.css'

const Navbar = () => {


     const [isopen,setisopen]=useState(false)


    return (


        <div className='nav-main'>


            <nav className='nav-sub'>


                <div className='nav-heading'>
                    <h1>Logo</h1>

                </div>



                <div className='nav-link'>

                   <button className='btn' onClick={()=>setisopen(!isopen)}>open</button>

                    <ul className={isopen ? 'open':''}>

                        <li>Home</li>
                        <li>Blogs</li>
                        <li>Contacts</li>
                        <li>Order</li>

                    </ul>




                </div>



            </nav>






        </div>
    )
}

export default Navbar