  document.addEventListener('DOMContentLoaded', function() {
            const filterToggle = document.querySelector('.filter-toggle');
            const filterClose = document.querySelector('.filter-close');
            const filters = document.querySelector('.filters');
            const overlay = document.querySelector('.overlay');
            const filterOptions = document.querySelectorAll('.filter-option:not(.apply-filters)');
            const applyFilters = document.querySelector('.apply-filters');
            const sortSelect = document.querySelector('#sort-select');
            const paginationButtons = document.querySelectorAll('.pagination-number');

            function toggleFilters() {
                const isExpanded = filterToggle.getAttribute('aria-expanded') === 'true';
                filterToggle.setAttribute('aria-expanded', !isExpanded);
                filters.classList.toggle('active');
                overlay.classList.toggle('active');
                
                if (!isExpanded) {
                    filterClose.focus();
                    document.body.style.overflow = 'hidden';
                } else {
                    filterToggle.focus();
                    document.body.style.overflow = '';
                }
            }

            filterToggle.addEventListener('click', toggleFilters);
            filterClose.addEventListener('click', toggleFilters);
            overlay.addEventListener('click', toggleFilters);

            filterOptions.forEach(option => {
                if (!(option instanceof HTMLAnchorElement)) {
                    option.addEventListener('click', function() {
                        const isPressed = this.getAttribute('aria-pressed') === 'true';
                        this.setAttribute('aria-pressed', !isPressed);
                        this.classList.toggle('active');
                    });
                }
            });

            applyFilters.addEventListener('click', function() {
                if (window.innerWidth <= 1024) {
                    toggleFilters();
                }
                // Add filter application logic here
            });

            sortSelect.addEventListener('change', function() {
                // Add sorting logic here
            });

            paginationButtons.forEach(button => {
                button.addEventListener('click', function() {
                    paginationButtons.forEach(btn => {
                        btn.classList.remove('active');
                        btn.removeAttribute('aria-current');
                    });
                    this.classList.add('active');
                    this.setAttribute('aria-current', 'page');
                });
            });

            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && filters.classList.contains('active')) {
                    toggleFilters();
                }
            });

            // Focus trap for mobile filters
            function trapFocus(e) {
                if (!filters.classList.contains('active')) return;

                const focusableElements = filters.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstFocusable = focusableElements[0];
                const lastFocusable = focusableElements[focusableElements.length - 1];

                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusable) {
                            lastFocusable.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastFocusable) {
                            firstFocusable.focus();
                            e.preventDefault();
                        }
                    }
                }
            }

            document.addEventListener('keydown', trapFocus);
        });