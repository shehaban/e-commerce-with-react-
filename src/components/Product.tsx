import './product.css'

export type Products = {
  id: number,
  title: string,
  image: string,
  price: number,
  description: string
}

type ProductProps = {
  product: Products; 
};

function Product(props: ProductProps) {
  const {product} = props; 
  return (
    <>
      <div className="card fixed-card p-2 mb-3 shadow-sm" >
        <img src={product.image} className="card-img-top height=50px" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            {product.description}
          </p>
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </>
  );
}
export default Product;
