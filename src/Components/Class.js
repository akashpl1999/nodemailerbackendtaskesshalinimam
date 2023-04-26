import react from "react"


class login extends React.Component{
    constructor(props){
        super(props);

        this.state={

            email:"",
            password:""

        };

         this.handleinputchange= this.handleinputchange.bind(this)
         this.handlesubmit=this.handlesubmit.bind(this)

          }



         handleinputchange(event){

            const value= event.target.value
            const name=  event.target.name


            this.setState={
                [name]:value
            }

         }


         handlesubmit(event){
            alert("done")
         }
         

}