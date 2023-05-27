// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Fotos = () => {
//   const [resident, setResident] = useState([]);

//   useEffect(()=>{
//     axios
//     .get("/api/residents")
//     .then((res)=> setResident(res.data))
//   },[])

//   return <div>
//     {
//         !resident ? null : (
//             resident.map((res)=> (
//                 <img key={res.id} src={res.photo} alt={res.id} />
//             ))
//         )
//     }
//   </div>;
// };

// export default Fotos;
