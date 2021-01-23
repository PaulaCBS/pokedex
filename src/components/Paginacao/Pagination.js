import React from "react";
import './pagination.css';



const Pagination = (props) => {
    const { prev, next } = props
    return (
      <div className="pagination-wraper">
       <button className="btn-previous" onClick={ prev }>Anterior</button>
        <button className="btn-next" onClick={ next }>Próximo</button>
      </div>
    )
  }
  
  export default Pagination