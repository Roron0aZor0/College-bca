
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const mobileNav = document.getElementById('mobileNav');
        const closeMenu = document.querySelector('.close-menu');
        const shopLink = document.getElementById('shopLink');
        const shopDropdown = document.getElementById('shopDropdown');
        let dropdownTimeout;
        hamburgerMenu.addEventListener('click', () => {
            mobileNav.classList.add('active');
        });

        closeMenu.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });

        document.addEventListener('click', (event) => {
            if (!mobileNav.contains(event.target) && !hamburgerMenu.contains(event.target)) {
                mobileNav.classList.remove('active');
            }
        });



// Toggle dropdown visibility on click
shopLink.addEventListener('click', (event) => {
    // Prevent default only if the click is directly on the shopLink
    if (event.target === shopLink) {
        event.preventDefault();
        shopDropdown.classList.toggle('active');
        shopLink.setAttribute('aria-expanded', shopDropdown.classList.contains('active'));
    }
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!shopLink.contains(event.target) && !shopDropdown.contains(event.target)) {
        shopDropdown.classList.remove('active');
        shopLink.setAttribute('aria-expanded', 'false');
    }
});

// Add hover behavior for desktop (optional)
shopLink.addEventListener('mouseenter', () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
        shopDropdown.classList.add('active');
        shopLink.setAttribute('aria-expanded', 'true');
    }
});

shopDropdown.addEventListener('mouseleave', () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
        shopDropdown.classList.remove('active');
        shopLink.setAttribute('aria-expanded', 'false');
    }
});
