import React, { useState,useEffect } from "react";
import {  obtenerProductosPorPagina } from "../service/DataService";
import ProductoCard from "../components/ProductoCard";


export default function ProductosListaView() {
  const [productos, setProductos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [limite, setLimite] = useState(6);

  const getProductos = async () => {
      try {
          const prodObtenidos = await obtenerProductosPorPagina(pagina, limite);
          // setProductos(prodObtenidos);
          setProductos([...productos, ...prodObtenidos]);
      } catch (error) {
          console.log(error);
      }
  };
  useEffect(() => {
      getProductos();
  }, [pagina]);

  return (
    <>
      
        <div className="container mb-5 mt-5">
          <div className="row">
            {productos.map((item, i) => {
              return (
                <ProductoCard key={i} item={item} />
              );
            })}
          </div>
          <div className="d-flex justify-content-center">
                <button
                    className="btn btn-outline-dark mt-3"
                    onClick={(e) => {
                      e.preventDefault()
                        setPagina(pagina + 1);
                    }}
                >
                   <i className="fas fa-chevron-circle-down"></i>
                </button>
                
            </div>
        </div>
    </>
  );
}
