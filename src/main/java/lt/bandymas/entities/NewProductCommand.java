package lt.bandymas.entities;

import javax.persistence.Basic;
import javax.validation.constraints.NotNull;

public class NewProductCommand {
	
	@NotNull(message = "Product title is required!")
	@Basic(optional = false)
	private String title;
	private String image;
	private String description;
	private Double price;
	private Integer quantity;

	public NewProductCommand(String title, String image, String description, Double price, Integer quantity) {
		this.title = title;
		this.image = image;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

}
