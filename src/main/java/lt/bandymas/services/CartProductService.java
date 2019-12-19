package lt.bandymas.services;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.bandymas.entities.Cart;
import lt.bandymas.entities.CartProduct;
import lt.bandymas.entities.CartProductForClient;
import lt.bandymas.repositories.CartProductRepository;

@Service
public class CartProductService {

	private CartProductRepository cartRepository;

	@Autowired
	public CartProductService(CartProductRepository cartRepository) {
		this.cartRepository = cartRepository;

	}

	@Transactional
	public void createCartProduct(CartProduct cartProduct, String username) {

		cartProduct.setUsername(username);
		Cart cart = new Cart();
		cart.setUsername(username);
		Set<Cart> carts = new HashSet<>();
		carts.add(cart);
		cartProduct.setCarts(carts);
		cartRepository.save(cartProduct);

	}

	@Transactional(readOnly = true)
	public List<CartProductForClient> getCartProducts(String username) {
		return cartRepository
				.findByUsername(username).stream().map((cartProduct) -> new CartProductForClient(cartProduct.getId(),
						cartProduct.getTitle(), cartProduct.getUsername(), cartProduct.getImage()))
				.collect(Collectors.toList());
	}

	@Transactional
	public List<CartProductForClient> removeFromCart(String username, Long productID) {

		cartRepository.deleteById(productID);

		return getCartProducts(username);
	}
}
