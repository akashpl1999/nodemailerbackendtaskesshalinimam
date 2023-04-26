export const ARRAYDATA="ARRAYDATA"

export const ARRAYGET="ARRAYGET"



export const adddata=(data)=>{
    return {
        type:ARRAYDATA,
        payload:data
    }
}

export const getdata=()=>{
    return {
        type:ARRAYGET
        
    }
}