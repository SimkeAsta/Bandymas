package lt.bandymas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.bandymas.entities.CartProduct;

public interface CartProductRepository extends JpaRepository<CartProduct, Long> {

	void deleteById(Long id);
	void deleteByUsername(String username);
	List<CartProduct> findByUsername(String username);
	
}
