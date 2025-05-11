import { Link } from 'react-router';
import products from '../data/products.json';
import useCart from '../../cart/providers/useCart';
import styles from './ProductsPage.module.css';
import type { Product } from '../types/Product';
import { toast } from 'react-toastify';

const ProductsPage = () => {
  const { addProduct } = useCart();

  const handleAddProduct = (product: Product) => { 
    if (addProduct(product)) {
      toast.success("Dodano produkt do koszyka")
    } else {
      toast.info("Produkt jest już w koszyku")
    }
  }

  return (
    <div>
    <h1>Lista produktów</h1>
  
    <ul className={styles.productsList}>
      {products.map(product => (
      <li key={product.id}>              
        <span className={styles.productName}>{product.name}</span>
        <span>
          {product.price.main},{product.price.fractional.toString().padStart(2, '0')} zł
        </span>              
        <button
        onClick={() => handleAddProduct(product)}
        className={styles.productAddBtn}
        >
        Dodaj do koszyka
        </button>
      </li>
      ))}
    </ul>
  
    <div className="actions">
      <Link to="/cart">
      <button>Przejdź do koszyka</button>
      </Link>
    </div>
    </div>
  );
};

export default ProductsPage;