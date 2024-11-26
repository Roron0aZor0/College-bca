document.addEventListener('DOMContentLoaded', () => {
            const cartItems = document.querySelectorAll('.cart-item');
            const promoForm = document.querySelector('.promo-section');
            const promoInput = document.querySelector('#promoCode');
            const promoMessage = document.querySelector('.promo-message');
            const checkoutBtn = document.querySelector('.checkout-btn');
            let appliedPromo = null;

            const promoCodes = {
                'SUMMER25': { discount: 0.25, message: '25% discount applied!' },
                'FREESHIP': { discount: 0, shipping: true, message: 'Free shipping applied!' },
                'EXTRA10': { discount: 0.10, message: '10% extra discount applied!' }
            };

            function updateItemQuantity(quantityText, change) {
                const currentValue = parseInt(quantityText.textContent);
                const newValue = Math.max(1, currentValue + change);
                if (newValue !== currentValue) {
                    quantityText.textContent = newValue;
                    quantityText.closest('.quantity-controls').classList.add('shake');
                    setTimeout(() => {
                        quantityText.closest('.quantity-controls').classList.remove('shake');
                    }, 500);
                    updateTotals();
                }
            }

            function formatPrice(price) {
                return `$${Math.round(price)}`;
            }

            function updateTotals() {
                let subtotal = 0;
                cartItems.forEach(item => {
                    const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
                    const quantity = parseInt(item.querySelector('.quantity-text').textContent);
                    subtotal += price * quantity;
                });

                let discount = subtotal * 0.2;
                let deliveryFee = 15;

                if (appliedPromo) {
                    if (appliedPromo.discount) {
                        discount += subtotal * appliedPromo.discount;
                    }
                    if (appliedPromo.shipping) {
                        deliveryFee = 0;
                    }
                }

                const total = subtotal - discount + deliveryFee;

                document.querySelector('.subtotal-amount').textContent = formatPrice(subtotal);
                document.querySelector('.discount').textContent = formatPrice(-discount);
                document.querySelector('.delivery-fee').textContent = formatPrice(deliveryFee);
                document.querySelector('.total-amount').textContent = formatPrice(total);

                const elements = document.querySelectorAll('.summary-row');
                elements.forEach(el => {
                    el.classList.add('fade-in');
                    setTimeout(() => el.classList.remove('fade-in'), 300);
                });
            }

            function showPromoMessage(message, isError = false) {
                promoMessage.textContent = message;
                promoMessage.className = `promo-message ${isError ? 'error' : 'success'} fade-in`;
                setTimeout(() => promoMessage.classList.remove('fade-in'), 300);
            }

            cartItems.forEach(item => {
                const decreaseBtn = item.querySelector('.decrease');
                const increaseBtn = item.querySelector('.increase');
                const quantityText = item.querySelector('.quantity-text');

                decreaseBtn.addEventListener('click', () => {
                    updateItemQuantity(quantityText, -1);
                });

                increaseBtn.addEventListener('click', () => {
                    updateItemQuantity(quantityText, 1);
                });
            });

            promoForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const code = promoInput.value.trim().toUpperCase();

                if (!code) {
                    showPromoMessage('Please enter a promo code', true);
                    return;
                }

                if (appliedPromo) {
                    showPromoMessage('A promo code is already applied', true);
                    return;
                }

                const promoDetails = promoCodes[code];
                if (promoDetails) {
                    appliedPromo = promoDetails;
                    showPromoMessage(promoDetails.message);
                    promoInput.value = '';
                    updateTotals();
                } else {
                    showPromoMessage('Invalid promo code', true);
                    promoInput.classList.add('shake');
                    setTimeout(() => promoInput.classList.remove('shake'), 500);
                }
            });

            checkoutBtn.addEventListener('click', () => {
                const items = Array.from(cartItems).map(item => ({
                    id: item.dataset.itemId,
                    quantity: parseInt(item.querySelector('.quantity-text').textContent),
                    price: parseFloat(item.querySelector('.item-price').textContent.replace('$', ''))
                }));

                const checkoutData = {
                    items,
                    promoCode: appliedPromo ? promoInput.value : null,
                    total: parseFloat(document.querySelector('.total-amount').textContent.replace('$', ''))
                };

                checkoutBtn.classList.add('shake');
                setTimeout(() => {
                    checkoutBtn.classList.remove('shake');
                    processCheckout(checkoutData);
                }, 500);
            });

            function processCheckout(data) {
                fetch('/api/checkout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })
                .then(response => {
                    if (!response.ok) throw new Error('Checkout failed');
                    return response.json();
                })
                .then(data => {
                    if (data.success) {
                        window.location.href = data.checkoutUrl;
                    }
                })
                .catch(error => {
                    showPromoMessage('Checkout failed. Please try again.', true);
                    console.error('Error:', error);
                });
            }

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    promoInput.blur();
                }
            });
        });