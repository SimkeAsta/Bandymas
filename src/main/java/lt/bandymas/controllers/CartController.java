package lt.bandymas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.bandymas.entities.CartProduct;
import lt.bandymas.entities.CartProductForClient;
import lt.bandymas.services.CartProductService;

@RestController
@Api(value = "cart")
@RequestMapping(value = "/api/user")
public class CartController {

	private final CartProductService cartService;

	@Autowired
	public CartController(CartProductService cartService) {
		this.cartService = cartService;
	}


	@RequestMapping(path = "/{username}/cart-products", method = RequestMethod.GET)
	@ApiOperation(value = "Get Cart products", notes = "Returns list of user cart products")
	public List<CartProductForClient> getCartProducts(@PathVariable final String username) {
		return cartService.getCartProducts(username);
	}

	@RequestMapping(path = "/{username}/cart-products", method = RequestMethod.POST)
	@ApiOperation(value = "Create product", notes = "Creates product with data")
	@ResponseStatus(HttpStatus.CREATED)
	public void createCartProduct(
			@ApiParam(value = "Product Data", required = true) @Valid @RequestBody final CartProduct cartProduct, @PathVariable final String username) {
		cartService.createCartProduct(cartProduct, username);

	}
	
	
	@RequestMapping(path = "/{username}/cart-products/{productID}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public List<CartProductForClient>  removeFromCart(@PathVariable final String username, @PathVariable final Long productID ) {
		return cartService.removeFromCart(username, productID);
		//return userService.getUsers();
	}
	
}
