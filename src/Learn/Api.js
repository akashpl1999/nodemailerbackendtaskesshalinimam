import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api = () => {

    const [data, setData] = useState([])
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);
  

   

    useEffect(() => {

        axios.get('https://api.npoint.io/20c1afef1661881ddc9c')
        .then((res) => {
            console.log(res.data)
            setData(res.data.teamsList)
        })

      }, []);
    

      const handleScroll = () => {
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
        if (bottom) {
          setStart(end);
          setEnd(end + 10);
          setData(prevData => prevData.concat(data.slice(start, end)));
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [data]);
    

    return (


        <div>





            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}  >
                {
                    data?.map((data) => {
                       
                        return (
                            <>
                            <div style={{ width: '200px', height: "200px", backgroundColor: "lightcyan", margin: '10px' }}>

                                <p>{data.OfficialName}</p>
                                <p>{data.ShortName}</p>
                                <p>{data.TID}</p>
                                <p>{data.WebName}</p>

                            </div>




                            </>

                            
                                

                        )
                    })
                }

            </div>

        </div >

    )
}

export default Api