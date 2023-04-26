import React, { useEffect, useState } from 'react'

import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/style.css'




const Phone = () => {



    const [phoneNumber, setPhoneNumber] = useState('');   


    const [defaultCountry, setDefaultCountry] = useState('in');

    
     const [selecdted,setselected ]=useState("")


   

    const handlePhoneInputChange = (value, country) => {


        console.log(value)

        setPhoneNumber(value);

        
        if (country) {

            setDefaultCountry(country.countryCode);
         
            setselected(country.name)

            console.log(country.name)


        }
    };



    return (






        <div>



            <PhoneInput
               
                 value={phoneNumber}
                 onChange={handlePhoneInputChange}
                 defaultCountry={defaultCountry}
               
                 inputExtraProps={{
                    maxLength: 10,
                    placeholder: 'Enter phone number',
                 }}


            />

        </div>


    )
}

export default Phone