<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>SHOP.CO Header</title>
    <?php wp_head(); ?>
</head>
<body>
    <header class="header">
        <a href="#" class="logo">SHOP.CO</a>
        <nav class="nav-menu">
            <div class="nav-item" id="shopLink" aria-haspopup="true" aria-expanded="false">
                <span>Shop</span>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/14ed5ed8f3847fa65a065d83ac586b0d74256c280cc30d7e49087b493f2afd6d?placeholderIfAbsent=true&apiKey=dbcd455589c54b21bf07151885fb030e" alt="" class="nav-icon" />
                <div class="dropdown" id="shopDropdown" role="menu" aria-labelledby="shopLink">
                    <div class="dropdown-category">
                        <h2 class="dropdown-category-title">Men's Clothing</h2>
                        <a href="http://localhost/wordpress-w/index.php/product-detail/" class="dropdown-item" role="menuitem">T-Shirts</a>
                        <a href="#" class="dropdown-item" role="menuitem">Jeans</a>
                        <a href="#" class="dropdown-item" role="menuitem">Jackets</a>
                    </div>
                    <div class="dropdown-category">
                        <h2 class="dropdown-category-title">Women's Clothing</h2>
                        <a href="#" class="dropdown-item" role="menuitem">Dresses</a>
                        <a href="#" class="dropdown-item" role="menuitem">Skirts</a>
                        <a href="#" class="dropdown-item" role="menuitem">Blouses</a>
                    </div>
                    <div class="dropdown-category">
                        <h2 class="dropdown-category-title">Accessories</h2>
                        <a href="#" class="dropdown-item" role="menuitem">Bags</a>
                        <a href="#" class="dropdown-item" role="menuitem">Jewelry</a>
                        <a href="#" class="dropdown-item" role="menuitem">Watches</a>
                    </div>
                    <div class="dropdown-category">
                        <h2 class="dropdown-category-title">Footwear</h2>
                        <a href="#" class="dropdown-item" role="menuitem">Sneakers</a>
                        <a href="#" class="dropdown-item" role="menuitem">Boots</a>
                        <a href="#" class="dropdown-item" role="menuitem">Sandals</a>
                    </div>
                </div>
            </div>
            <a href="#" class="nav-item">On Sale</a>
            <a href="#" class="nav-item">New Arrivals</a>
            <a href="#" class="nav-item">Brands</a>
        </nav>
        <form class="search-bar" role="search">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b71be806cad247c2ae8e97543645be5ece22cfc3a6880f0dd892b9e484723710?placeholderIfAbsent=true&apiKey=dbcd455589c54b21bf07151885fb030e" alt="" class="search-icon" />
            <label for="search-input" class="visually-hidden">Search for products</label>
            <input type="search" id="search-input" class="search-input" placeholder="Search for products..." />
        </form>
        <div class="user-actions">
            <button aria-label="User account" class="action-icon">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/04d3164e73a51145113e81d3f191e0e5617b83f865d8256bec05833aa1bde2dd?placeholderIfAbsent=true&apiKey=dbcd455589c54b21bf07151885fb030e" alt="" />
            </button>
            <button aria-label="Shopping cart" class="action-icon">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/48347744c8ced9840ee7d91f6f976b09c56e63cf39c86e02276ac9a4d234695d?placeholderIfAbsent=true&apiKey=dbcd455589c54b21bf07151885fb030e" alt="" />
            </button>
        </div>
    </header>
    <header class="mobile-header">
        <div class="mobile-logo-container">
            <button class="hamburger-menu" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <a href="#" class="mobile-logo">SHOP.CO</a>
            <div class="mobile-actions">
                <button aria-label="Search" class="action-icon">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8938a0d4b5d9ade9ab043ff8d5c3d8c5ce053779ec8e114be78617d8e60766?apiKey=dbcd455589c54b21bf07151885fb030e&" alt="" />
                </button>
                <button aria-label="User account" class="action-icon">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/04d3164e73a51145113e81d3f191e0e5617b83f865d8256bec05833aa1bde2dd?apiKey=dbcd455589c54b21bf07151885fb030e&" alt="" />
                </button>
                <button aria-label="Shopping cart" class="action-icon">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/48347744c8ced9840ee7d91f6f976b09c56e63cf39c86e02276ac9a4d234695d?apiKey=dbcd455589c54b21bf07151885fb030e&" alt="" />
                </button>
            </div>
        </div>
    </header>
    <nav class="mobile-nav" id="mobileNav">
        <button class="close-menu" aria-label="Close menu">&times;</button>
        <a href="#" class="mobile-nav-item">Shop</a>
        <a href="#" class="mobile-nav-item">On Sale</a>
        <a href="#" class="mobile-nav-item">New Arrivals</a>
        <a href="#" class="mobile-nav-item">Brands</a>
    </nav>
    
</body>
</html>