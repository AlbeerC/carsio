import './ProductsContainer.scss';
import ProductsList from '../ProductsList/ProductsList';
import Loading from '../Loading/Loading';
import { useFetch } from '../../hooks/useFetch';
import { FaFilter } from "react-icons/fa";
import { Checkbox } from '@chakra-ui/react';
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from 'react';

function ProductsContainer() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data, setData, originalData, error, loading } = useFetch(apiUrl);

  const [search, setSearch] = useState('');
  const [openMenus, setOpenMenus] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    year: [],
    color: [],
    transmission: [],
  });

  //Aplica los filtros cuando el estado que filtra los productos o el estado que contiene siempre contiene todos los productos cambian
  useEffect(() => {
    applyAndSetData();
  }, [selectedFilters, originalData]);


  //Copia el estado actual del cualquier menú, y cambia el estado del menú de la categoría correspondiente. Si el menú esta abierto, al clickear se cierra, o viceversa
  const handleCategoryClick = (categoryId) => {
    setOpenMenus((prevMenus) => ({
      ...prevMenus,
      [categoryId]: !prevMenus[categoryId],
    }));
  };

  //Setea en el estado lo escrito en el input para luego pasar el estado y la función al value y el onChange del input
  const handleSearch = (e) => {
    setSearch(e.target.value);
    filter(e.target.value);
  };

  //Si el input está vacío, setea los datos originales. Si no está vacío, filtra por nombre o color y setea la constante que contiene los productos filtrados
  const filter = (searchTerm) => {
    if (!searchTerm) {
      setData(originalData);
    } else {
      const searchResults = originalData.data.filter((element) => {
        return (
          element.attributes.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          element.attributes.color.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      setData({ data: searchResults });
    }
  };

  //Usa la función applyFilter para aplicar los filtros a cada categoría
  const applyAndSetData = () => {
    const filteredProducts = originalData?.data.filter((element) => {
      return (
        applyFilter('brand', element.attributes.brand) &&
        applyFilter('year', element.attributes.year) &&
        applyFilter('color', element.attributes.color) &&
        applyFilter('transmission', element.attributes.transmission)
      );
    });

    setData({ data: filteredProducts });
  };

  //Si no hay elementos seleccionados, asume que todos los elementos pasan los filtros. Si hay valores seleccionados, se verifica si la longitud de selectedValues es cero (no hay filtros seleccionados) o si el valor actual (value) está incluido en los filtros seleccionados. Si es así, se devuelve true, lo que significa que el elemento actual pasa el filtro.
  const applyFilter = (category, value) => {
    const selectedValues = selectedFilters[category];

    if (!selectedValues) {
      return true;
    }

    return selectedValues.length === 0 || selectedValues.includes(value);
  };

  //Agrega o elimina un valor del filtro según el estado actual del filtro
  const toggleFilter = (category, value) => {
    const updatedFilters = { ...selectedFilters };
  
    // Verifica si la propiedad 'category' está definida en updatedFilters
    if (updatedFilters[category]) {
      const index = updatedFilters[category].indexOf(value);
      if (index !== -1) {
        // Elimina si ya está seleccionado
        updatedFilters[category].splice(index, 1);
      } else {
        // Si no está seleccionado, se agrega a los filtros
        updatedFilters[category].push(value);
      }
    }
  
    setSelectedFilters(updatedFilters);
  };

  // Funciones para el onChange de cada checkbox
  const handleColorFilter = (color) => {
    toggleFilter('color', color);
  };

  const handleBrandFilter = (brand) => {
    toggleFilter('brand', brand);
  };

  const handleYearFilter = (year) => {
    toggleFilter('year', year);
  };

  const handleTransmissionFilter = (transmission) => {
    toggleFilter('transmission', transmission);
  };


  if (loading) {
    return <Loading />;
  }

  const filteredData = data?.data || [];

  return (
    <main className='products-container'>
      <input type="search" value={search} placeholder='Busca por nombre, marca, color' onChange={handleSearch}/>
      <section className="flex">
        <article className="filters">
            <div className="top">
                <FaFilter />
                <p>Filtros</p>
            </div>
            <div className="selects">
                {/* Color */}
                <div className="select">
                  <div className={`category ${openMenus['color'] ? 'open' : ''}`} onClick={() => handleCategoryClick('color')}>
                      <p>Color</p>
                      <IoIosArrowDown />
                  </div>
                  <div className={`checks ${openMenus['color'] ? 'open' : ''}`}>
                      <Checkbox size='lg' onChange={() => handleColorFilter('Negro')}>Negro</Checkbox>
                      <Checkbox size='lg' onChange={() => handleColorFilter('Gris')}>Gris</Checkbox>
                      <Checkbox size='lg' onChange={() => handleColorFilter('Blanco')}>Blanco</Checkbox>
                      <Checkbox size='lg' onChange={() => handleColorFilter('Rojo')}>Rojo</Checkbox>
                      <Checkbox size='lg' onChange={() => handleColorFilter('Azul')}>Azul</Checkbox>
                  </div>
                </div>
                {/* Brand */}
                <div className="select">
                  <div className={`category ${openMenus['marca'] ? 'open' : ''}`} onClick={() => handleCategoryClick('marca')}>
                      <p>Marca</p>
                      <IoIosArrowDown />
                  </div>
                  <div className={`checks ${openMenus['marca'] ? 'open' : ''}`}>
                      <Checkbox size='lg' onChange={() => handleBrandFilter('Toyota')}>Toyota</Checkbox>
                      <Checkbox size='lg' onChange={() => handleBrandFilter('Fiat')}>Fiat</Checkbox>
                      <Checkbox size='lg' onChange={() => handleBrandFilter('Ford')}>Ford</Checkbox>
                      <Checkbox size='lg' onChange={() => handleBrandFilter('Peugeot')}>Peugeot</Checkbox>
                      <Checkbox size='lg' onChange={() => handleBrandFilter('Nissan')}>Nissan</Checkbox>
                      <Checkbox size='lg' onChange={() => handleBrandFilter('Volkswagen')}>Volkswagen</Checkbox>
                      <Checkbox size='lg' onChange={() => handleBrandFilter('Chevrolet')}>Chevrolet</Checkbox>
                      <Checkbox size='lg' onChange={() => handleBrandFilter('Renault')}>Renault</Checkbox>
                  </div>
                </div>
                {/* Year */}
                <div className="select">
                  <div className={`category ${openMenus['año'] ? 'open' : ''}`} onClick={() => handleCategoryClick('año')}>
                      <p>Año</p>
                      <IoIosArrowDown />
                  </div>
                  <div className={`checks ${openMenus['año'] ? 'open' : ''}`}>
                      <Checkbox size='lg' onChange={() => handleYearFilter('2023')}>2023</Checkbox>
                      <Checkbox size='lg' onChange={() => handleYearFilter('2022')}>2022</Checkbox>
                      <Checkbox size='lg' onChange={() => handleYearFilter('2021')}>2021</Checkbox>
                      <Checkbox size='lg' onChange={() => handleYearFilter('2020')}>2020</Checkbox>
                      <Checkbox size='lg' onChange={() => handleYearFilter('2019')}>2019</Checkbox>
                      <Checkbox size='lg' onChange={() => handleYearFilter('2018')}>2018</Checkbox>
                      <Checkbox size='lg' onChange={() => handleYearFilter('2017')}>2017</Checkbox>
                      <Checkbox size='lg' onChange={() => handleYearFilter('2016')}>2016</Checkbox>
                  </div>
                </div>
                {/* Transmission */}
                <div className="select">
                  <div className={`category ${openMenus['transmission'] ? 'open' : ''}`} onClick={() => handleCategoryClick('transmission')}>
                      <p>Transmisión</p>
                      <IoIosArrowDown />
                  </div>
                  <div className={`checks ${openMenus['transmission'] ? 'open' : ''}`}>
                      <Checkbox size='lg' onChange={() => handleTransmissionFilter('Manual')}>Manual</Checkbox>
                      <Checkbox size='lg' onChange={() => handleTransmissionFilter('Automático')}>Automática</Checkbox>
                  </div>
                </div>

            </div>
        </article>
      {loading ? (<Loading />) : (
        <div>
          {filteredData.length === 0 ?
            <p className='not-found'>No se han encontrado resultados</p> :
            <ProductsList products={filteredData} />}
        </div>
      )}
      {error && <h2>{error.message}</h2>}
      </section>
    </main>
  );
}

export default ProductsContainer;