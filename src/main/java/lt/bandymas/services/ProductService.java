package lt.bandymas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.bandymas.entities.NewProductCommand;
import lt.bandymas.entities.Product;
import lt.bandymas.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository productRepository;

	@Transactional
	public List<Product> getProducts() {
		return productRepository.findAll();
	}

	@Transactional
	public Product findProductByTitle(String productTitle) {
		// ar reikia atskiros exceptionu klases? 
		return productRepository.findProductByProductTitle(productTitle);
	}

	@Transactional
	public Product addProduct(NewProductCommand cmd) {
		Product product = new Product(null, cmd.getTitle(), cmd.getImage(), cmd.getDescription(), cmd.getPrice(), cmd.getQuantity());
		return productRepository.save(product);
	}

	@Transactional
	public void deleteByTitle(String productTitle) {
		// ar cia reikia pries tai surasti pagal Title, ar Repository jau ir taip zino?
		//jeigu noriu, kad mestu info, kad tokio producto nera, tada tikrintis, jeigu nereikia tokios zinutes, tada nieko.
		productRepository.deleteByProductTitle(productTitle);
	}

	public Product updateProduct(String productTitle, NewProductCommand cmd) {
		Product existingProduct = findProductByTitle(productTitle);
		existingProduct.setProductId(null);
		existingProduct.setProductDescription(cmd.getDescription());
		existingProduct.setProductImage(cmd.getImage());
		existingProduct.setProductPrice(cmd.getPrice());
		existingProduct.setProductQuantity(cmd.getQuantity());
		existingProduct.setProductTitle(cmd.getTitle());
		return existingProduct;
	}

}
