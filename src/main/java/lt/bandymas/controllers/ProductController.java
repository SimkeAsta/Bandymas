package lt.bandymas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lt.bandymas.entities.NewProductCommand;
import lt.bandymas.entities.Product;
import lt.bandymas.services.ProductService;

@RestController
@RequestMapping(value = "/api/products")
public class ProductController {
	
	@Autowired
	private ProductService productService;

	@RequestMapping(method = RequestMethod.GET)
//	@ApiOperation(value = "Get products", notes="Returns all products")
	public List<Product> getProducts() {
		return productService.getProducts();
	}

	@RequestMapping(value = "/{productTitle}", method = RequestMethod.GET)
	public Product getProductByTitle(String productTitle) {
		return productService.findProductByTitle(productTitle);
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
//	@ApiOperation(value = "Create new product", notes="Creates new product with data")
	public Product addProduct
	(
//			@ApiParam(value = "Product Data", required = true)
	@RequestBody final NewProductCommand cmd){
		return productService.addProduct(cmd);
	}

	@RequestMapping(path = "/{productTitle}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteProduct(@PathVariable String productTitle) {
		productService.findProductByTitle(productTitle);
		productService.deleteByTitle(productTitle);
	}

	@RequestMapping(path = "/{productTitle}", method = RequestMethod.PUT)
	public Product updateProductByTitle(@PathVariable("productTitle") String productTitle, @RequestBody final NewProductCommand cmd) {
		return productService.updateProduct(productTitle, cmd);
	}

}
