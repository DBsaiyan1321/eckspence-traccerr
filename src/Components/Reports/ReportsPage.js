import React, { useContext, useEffect, useState } from "react"; 
import "../../reset.css";
import "./ReportsPage.css";

const ReportsPage = props => { 
    const [day, setDay] = useState([]);
    const [week, setWeek] = useState([]);   
    const [month, setMonth] = useState([])

    console.log(day, week, month);

    // const dayReport = Object.values;
    // const weekReport;
    // const monthReport; 

    return ( 
        <div>
            Reports
            <input type="date" value={day.join("-")} onChange={e => setDay(e.target.value.split("-"))} /> 
            
        </div>
    )
};

export default ReportsPage;