import React, { useState } from 'react'

const Card = ({details, setDetails, value, setValue}) => {
    const [status, setStatus] = useState(Array(details.length).fill(true));
  
    const handleInc = (index)=>{
        const newStatus = [...status];
        newStatus[index] = false;
        setStatus(newStatus);
        setValue(()=>value+1);
    }
    const handleDec = (index)=>{
        const newStatus = [...status]; 
        newStatus[index] = true;   
        setStatus(newStatus);
        setValue(()=>value-1);
        
    }
  return (
  <div >
    <section className="py-5">
     <div className="container px-4 px-lg-5 mt-5">
      <div className="row justify-content-center">
       
        {details.map((element, index)=>( 
            <div className="col-lg-4 col-md-6 mb-5" key={element.id}>
              <div className="card" style={{width: '18rem'}}>
                    <img src={element.image} className="card-img-top" alt="..."/>
                       <div className="card-body text-center">
                           <h5 className="card-title">{element.itemDetails}</h5>
                           <p className="card-text">{element.price}</p>
                           <div className="text-center">
                              {(status[index] ? (<button className="btn btn-primary" onClick={()=>handleInc(index)}>Add to cart</button>) : (<button className="btn btn-primary" onClick={()=>handleDec(index)}>Remove from cart</button>))}
                          </div>
                       </div>
              </div>
            </div>
    ))}
      </div>
     </div>
    </section>
  </div>
  )
}

export default Card