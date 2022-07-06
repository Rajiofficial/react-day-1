
import './App.css';
import './newcardcomponent/Cardcomponent.css'
// import Counter from './counter';
// import {useState} from "react";
// import Todoapp from './todoapp'
// import allcomponent from './newcardcomponent/cardcomponent'
import Cardcomponent from './newcardcomponent/Cardcomponent';

  const product=[
    {plan:"free",user:"single user",storage:"5GB storage",project:"unlimited public project",community:"community access",Private_Projects:"unlimited private project" ,price:"0",support:"dedicated phone support",domain:" free subdomain",status_report:"monthly status report"},
    {plan:"plus",user:"s users",storage:"50GB storage",project:"unlimited public project",community:"community access",Private_Projects:"unlimited private project",price:"9",support:"dedicated phone support",domain:"free subdomain",status_report:"monthly status report"},
    {plan:"pro",user:"unlimited user",storage:"150GB storage",project:"unlimited public project",community:"community access",Private_Projects:"unlimited private project",price:"49",support:"dedicated phone support",domain:"unlimited free subdomain",status_report:"monthly status report"},
    
  ]



function App() { 
  return (
<div classname="root">
      { product.map(prod=><Cardcomponent{...prod}/>)}
      
      </div>
      
    



     
  
    
  );
}

export default App;
