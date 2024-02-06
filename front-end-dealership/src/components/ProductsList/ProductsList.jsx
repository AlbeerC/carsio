import ProductCard from '../ProductCard/ProductCard';
import './ProductList.scss'

function ProductsList ( {products} ) {

    return (
            <section className='list'>
                {products?.map((product) => (
                    <ProductCard key={product.id}
                        name={product.attributes.name}
                        year={product.attributes.year}
                        price={product.attributes.price}
                        transmission={product.attributes.transmission}
                        image={product.attributes.images.image1}
                        km={product.attributes.km}
                        id={product.id}
                    />
                ))}
            </section>
    )
}

export default ProductsList