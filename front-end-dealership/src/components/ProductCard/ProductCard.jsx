import { Card, CardBody, Heading, Image,} from "@chakra-ui/react";
import './ProductCard.scss'
import { Link } from "react-router-dom";

function ProductCard ( {name, year, price, transmission, image, km, id} ) {

    return (
        <Card maxW="md" className="card">
            <CardBody>
            <Image src={image} alt={name} borderRadius="lg" />
            <Heading size="lg">{name} {year}</Heading>
            <div className="texts">
                <h3>$US{price}</h3>
                <div className="features">
                    <p>{km}km</p>
                    <p>{transmission}</p>
                </div>
            </div>
            </CardBody>
        <Link to={`/detail/${id}`}>Ver info</Link>
      </Card>
    )
}

export default ProductCard