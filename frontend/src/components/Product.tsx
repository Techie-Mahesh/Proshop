import { Card } from "react-bootstrap";
import { Link } from "react-router";
import Ratings from "./Ratings";
import type { IProduct } from "./types";

interface ProductProps {
  product: IProduct;
}
const Product: React.FC<ProductProps> = (props) => {
  const { product } = props;
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title ">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text>
          <Ratings
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
