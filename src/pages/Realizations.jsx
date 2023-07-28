import { useEffect, useState } from "react";
import fetchContenfulData from "../Components/ContentfulFetch";

function Realizations() {
  const [page,setPage] = useState(null);
  
  useEffect(()=>{
    const fetch = async () =>{
      try{
        const response =await fetchContenfulData('projects');
        setPage(response);
      }
      catch(error){
        console.error(`error i fetching data frontend ${error}`)
      }
    }
    fetch();
    console.log(page);
  },[page])

  return(
    <>
    <div>
      <h1>My Data:</h1>
      <ul>
        {page?.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Realizations;
