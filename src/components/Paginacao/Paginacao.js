import React from "react";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';



export default function Paginacao({ gotoNextPage, gotoPrevPage }) {
    return (
      <>
        {gotoPrevPage && <button className="btn-previous" onClick={gotoPrevPage}>Anterior</button>}
        {gotoNextPage && <button className="btn-next" onClick={gotoNextPage}>Próximo</button>}
      </>
    )
  }
  
