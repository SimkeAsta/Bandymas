package lt.bandymas.entities;

public class CartProductForClient {
	
	private Long id;
	private String title;
	private String username;
	private String image;
	
	public CartProductForClient() {}
	
	public CartProductForClient(Long id, String title, String username, String image) {
		super();
		this.id = id;
		this.title = title;
		this.username = username;
		this.image = image;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
}
