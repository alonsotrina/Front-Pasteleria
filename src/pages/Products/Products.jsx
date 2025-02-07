import React, { useState } from 'react';
import { CardProduct } from '../../components';
import { products } from "../../utils/constants/products";

const Products = () => {
  // Estado de filtros, orden y paginación
  const [filters, setFilters] = useState({
    azucar: null,
    gluten: null,
    lactosa: null,
    category: null,
    porciones: null,
  });

  const [sortOrder, setSortOrder] = useState("asc"); // ascendente por defecto
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Manejo de cambios en los filtros
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value === "all" ? null : value,
    }));
    setCurrentPage(1); // Reiniciar a la primera página al aplicar filtros
  };

  // Manejo del orden por precio
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Filtrar productos según los filtros seleccionados
  let filteredProducts = products.filter((product) => {
    return (
      (filters.azucar === null || product.azucar === filters.azucar) &&
      (filters.gluten === null || product.gluten === filters.gluten) &&
      (filters.lactosa === null || product.lactosa === filters.lactosa) &&
      (filters.category === null || product.category === filters.category) &&
      (filters.porciones === null || product.porciones.includes(Number(filters.porciones)))
    );
  });

  // Ordenar productos por precio
  filteredProducts = filteredProducts.sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  // Paginación
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="grid grid-cols-5 gap-4">
      {/* Sidebar de Filtros */}
      <aside className="col-span-1 bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Filtros</h2>

        {/* Filtro Azúcar */}
        <label className="block mb-2 text-gray-600">Azúcar:</label>
        <select name="azucar" className="w-full p-2 border rounded" onChange={handleFilterChange}>
          <option value="all">Todos</option>
          <option value="Sí">Con azúcar</option>
          <option value="No">Sin azúcar</option>
        </select>

        {/* Filtro Gluten */}
        <label className="block mt-4 mb-2 text-gray-600">Gluten:</label>
        <select name="gluten" className="w-full p-2 border rounded" onChange={handleFilterChange}>
          <option value="all">Todos</option>
          <option value="Sí">Con gluten</option>
          <option value="No">Sin gluten</option>
        </select>

        {/* Filtro Lactosa */}
        <label className="block mt-4 mb-2 text-gray-600">Lactosa:</label>
        <select name="lactosa" className="w-full p-2 border rounded" onChange={handleFilterChange}>
          <option value="all">Todos</option>
          <option value="Sí">Con lactosa</option>
          <option value="No">Sin lactosa</option>
        </select>

        {/* Filtro Categoría */}
        <label className="block mt-4 mb-2 text-gray-600">Categoría:</label>
        <select name="category" className="w-full p-2 border rounded" onChange={handleFilterChange}>
          <option value="all">Todas</option>
          {[...new Set(products.map((p) => p.category))].map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Filtro Cantidad de Porciones */}
        <label className="block mt-4 mb-2 text-gray-600">Cantidad de Porciones:</label>
        <select name="porciones" className="w-full p-2 border rounded" onChange={handleFilterChange}>
          <option value="all">Todas</option>
          {[...new Set(products.flatMap((p) => p.porciones))].sort((a, b) => a - b).map((portion) => (
            <option key={portion} value={portion}>{portion} personas</option>
          ))}
        </select>
      </aside>

      {/* Sección de Productos */}
      <div className="col-span-4">
        {/* Ordenamiento */}
        <div className="flex justify-end mb-4">
          <label className="mr-2 text-gray-700">Ordenar por precio:</label>
          <select className="p-2 border rounded" onChange={handleSortChange}>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </div>

        {/* Productos */}
        <div className="container-custom grid grid-cols-4 gap-4 my-6">
          {currentProducts.length > 0 ? (
            currentProducts.map((item) => (
              <CardProduct
                key={item.id}
                name={item.name}
                src={item.src}
                href={`/product-detail/${item.id}`}
                category={item.category}
                price={item.price}
              />
            ))
          ) : (
            <div className="col-span-4 text-center text-gray-500">
              No hay productos que coincidan con los filtros seleccionados.
            </div>
          )}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2 mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 border rounded disabled:opacity-50"
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 border rounded ${currentPage === index + 1 ? "bg-gray-200" : ""}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="px-4 py-2 border rounded disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;