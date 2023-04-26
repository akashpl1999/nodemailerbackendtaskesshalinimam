import { Action } from '@remix-run/router'
import {adddata, ARRAYDATA,ARRAYGET} from './Action'



const initialstate={
    data: [],



}

  const reducer=(state=initialstate, action)=>{

    const {payload, type}=action


    switch(type){

         case ARRAYDATA:
            return{
                ...state, data:payload
            }


            case  ARRAYGET:
                return state

               default:return state 

    }
  }


  export default reducer;
  