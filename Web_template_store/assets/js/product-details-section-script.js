document.addEventListener('DOMContentLoaded', function() {
            const colorButtons = document.querySelectorAll('.color-button');
            const sizeButtons = document.querySelectorAll('.size-button');
            const quantityButtons = document.querySelectorAll('.quantity-button');
            const quantityDisplay = document.querySelector('.quantity-control span');
            const addToCartButton = document.querySelector('.add-cart-button');
            
            let quantity = 1;

            function updateQuantityDisplay() {
                quantityDisplay.textContent = quantity;
            }

            colorButtons.forEach(button => {
                button.addEventListener('click', () => {
                    colorButtons.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
                    button.setAttribute('aria-pressed', 'true');
                });
            });

            sizeButtons.forEach(button => {
                button.addEventListener('click', () => {
                    sizeButtons.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
                    button.setAttribute('aria-pressed', 'true');
                });
            });

            quantityButtons[0].addEventListener('click', () => {
                if (quantity > 1) {
                    quantity--;
                    updateQuantityDisplay();
                }
            });

            quantityButtons[1].addEventListener('click', () => {
                quantity++;
                updateQuantityDisplay();
            });

            addToCartButton.addEventListener('click', () => {
                const selectedColor = document.querySelector('.color-button[aria-pressed="true"]')?.getAttribute('aria-label');
                const selectedSize = document.querySelector('.size-button[aria-pressed="true"]')?.textContent;
                
                if (selectedColor && selectedSize) {
                    const cartItem = {
                        product: 'One Life Graphic T-shirt',
                        color: selectedColor,
                        size: selectedSize,
                        quantity: quantity,
                        price: 260
                    };
                    
                    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                    cart.push(cartItem);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    
                    addToCartButton.textContent = 'Added to Cart';
                    setTimeout(() => {
                        addToCartButton.textContent = 'Add to Cart';
                    }, 2000);
                }
            });

            function handleKeyboardNavigation(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    if (event.target.classList.contains('color-button') || 
                        event.target.classList.contains('size-button') ||
                        event.target.classList.contains('quantity-button') ||
                        event.target.classList.contains('add-cart-button')) {
                        event.preventDefault();
                        event.target.click();
                    }
                }
            }

            document.addEventListener('keydown', handleKeyboardNavigation);
        });