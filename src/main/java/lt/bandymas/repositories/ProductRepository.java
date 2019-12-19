package lt.bandymas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.bandymas.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	
	Product findProductByProductTitle(String productTitle);

	void deleteByProductTitle(String productTitle);


}
