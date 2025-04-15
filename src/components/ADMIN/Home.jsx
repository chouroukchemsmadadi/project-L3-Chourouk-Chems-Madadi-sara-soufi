import React, { useEffect, useState } from "react";
import axios from "axios";


import {  BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { AiFillCalendar } from "react-icons/ai";
import { MdReportProblem } from "react-icons/md";



import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

function Home() {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const [reservationCount, setReservationCount] = useState(0);{/* Route::get('/reservation/count', function () {
    return response()->json(['count' => Reservation::count()]);
});*/}
  const [clientCount, setClientCount] = useState(0);//GET http://localhost:8000/api/client/count

  const [reclamationCount, setReclamationCount] = useState(0);{/* Route::get('/reclamation/count', function () {
    return response()->json(['count' => \App\Models\Reclamation::count()]);
});
  */}


// Get reservation count
  useEffect(() => {
    axios.get("http://localhost:8000/api/reservation/count")
      .then(response => {
        setReservationCount(response.data.count);
      })
      .catch(error => {
        console.error("Error fetching reservation count:", error);
      });
  // Get client count
  axios.get("http://localhost:8000/api/client/count")
  .then(response => {
    setClientCount(response.data.count);
  })
  .catch(error => {
    console.error("Error fetching client count:", error);
  });

}, []);
//get reclamation
axios.get("http://localhost:8000/api/reclamation/count")
.then(response => {
  setReclamationCount(response.data.count);
})
.catch(error => {
  console.error("Error fetching reclamation count:", error);
});





  


  return (
    <main className="main-container">
      {/* Title */}
      <div className="main-title">
        <h3>DASHBOARD ADMIN</h3>
      </div>

      {/* Cards */}
      <div className="main-cards">
          {/* Card 1 */}
      <div className="card">
        <div className="card-inner">
          <h3> NEW RESERVATION </h3>
          <AiFillCalendar className="card_icon" />
        </div>
        <h1> {reservationCount}</h1> 
      </div>

       {/* Card 2 - Reclamation */}
<div className="card">
  <div className="card-inner">
    <h3>RECLAMATION</h3>
    <MdReportProblem className="card_icon" />
  </div>
  <h1>{reclamationCount}</h1>
</div>


        {/* Card 3 */}
        {/* Card New Client */}
        <div className="card">
          <div className="card-inner">
            <h3>NEW CLIENT</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{clientCount}</h1>
        </div>




        {/* Card 4 */}
        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>

      {/* Charts */}
      <div className="charts">
        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        {/* Line Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
