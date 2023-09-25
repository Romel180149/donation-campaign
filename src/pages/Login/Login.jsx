import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { GlobalContex2, GlobalContext } from "../../main";
import { PieChart } from 'react-minimal-pie-chart';

const Login = () => {


  const globalValue = useOutletContext()
  console.log(globalValue);

  const contextApivalue = useContext(GlobalContext)
  const contextApivalue2 = useContext(GlobalContex2)

  console.log("context vbalue", contextApivalue);
  console.log("context vbalue", contextApivalue2);

  return (
   <div className="w-50 h-60">
   
    <PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
  
  ]}
  
/>;
 
   </div>
  );
};

export default Login;
