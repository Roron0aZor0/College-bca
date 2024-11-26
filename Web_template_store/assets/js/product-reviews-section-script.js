let currentPage = 1;
let isLoading = false;
let hasMore = true;

async function loadMoreReviews() {
    if (isLoading || !hasMore) return;

    const loadMoreBtn = document.querySelector('.load-more-btn');
    loadMoreBtn.setAttribute('aria-busy', 'true');
    isLoading = true;

    try {
        const response = await fetch(`/api/reviews?page=${currentPage}`);
        const data = await response.json();

        if (data.reviews.length === 0) {
            hasMore = false;
            loadMoreBtn.style.display = 'none';
            return;
        }

        const reviewsGrid = document.querySelector('.reviews-grid');
        data.reviews.forEach(review => {
            const reviewElement = createReviewElement(review);
            reviewsGrid.appendChild(reviewElement);
        });

        currentPage++;
    } catch (error) {
        console.error('Error loading reviews:', error);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Failed to load reviews. Please try again.';
        errorMessage.setAttribute('role', 'alert');
        document.querySelector('.reviews-grid').appendChild(errorMessage);
    } finally {
        isLoading = false;
        loadMoreBtn.setAttribute('aria-busy', 'false');
    }
}

function createReviewElement(review) {
    const article = document.createElement('article');
    article.className = 'review-card';
    article.setAttribute('role', 'article');

    article.innerHTML = `
        <div class="rating" aria-label="${review.rating} out of 5 stars">
            ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
        </div>
        <p class="review-text">${escapeHtml(review.text)}</p>
        <div class="reviewer">
            <img src="${review.avatarUrl}" alt="" class="avatar" aria-hidden="true">
            <div class="reviewer-info">
                <span class="name">${escapeHtml(review.name)}</span>
                <span class="date">${formatDate(review.date)}</span>
            </div>
        </div>
    `;

    return article;
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewText = document.getElementById('reviewText');
    const charCount = document.getElementById('reviewHelp');

    reviewText.addEventListener('input', () => {
        const remaining = reviewText.maxLength - reviewText.value.length;
        charCount.textContent = `${reviewText.value.length}/${reviewText.maxLength} characters`;
    });

    reviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(reviewForm);
        const submitBtn = reviewForm.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) throw new Error('Failed to submit review');

            closeReviewModal();
            reviewForm.reset();
            
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Review submitted successfully!';
            successMessage.setAttribute('role', 'alert');
            document.querySelector('.reviews-container').insertAdjacentElement('afterbegin', successMessage);

            setTimeout(() => successMessage.remove(), 3000);
        } catch (error) {
            console.error('Error submitting review:', error);
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Failed to submit review. Please try again.';
            errorMessage.setAttribute('role', 'alert');
            reviewForm.insertAdjacentElement('afterbegin', errorMessage);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Review';
        }
    });
});

function openReviewModal() {
    const modal = document.getElementById('reviewModal');
    modal.showModal();
    document.querySelector('.review-modal .close-btn').focus();
}

function closeReviewModal() {
    const modal = document.getElementById('reviewModal');
    modal.close();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('reviewModal');
        if (modal.open) closeReviewModal();
    }
});

let currentSort = 'latest';
let currentFilters = new Set();

function toggleFilter() {
    const filterContent = document.querySelector('.filter-content');
    const filterBtn = document.querySelector('.filter-btn');
    const isExpanded = filterContent.classList.contains('active');
    
    // Close sort dropdown if open
    document.querySelector('.sort-content').classList.remove('active');
    document.querySelector('.sort-btn').setAttribute('aria-expanded', 'false');
    
    filterContent.classList.toggle('active');
    filterBtn.setAttribute('aria-expanded', !isExpanded);
    
    if (!isExpanded) {
        const firstFilterOption = filterContent.querySelector('button');
        if (firstFilterOption) firstFilterOption.focus();
    }
}

function toggleSort() {
    const sortContent = document.querySelector('.sort-content');
    const sortBtn = document.querySelector('.sort-btn');
    const isExpanded = sortContent.classList.contains('active');
    
    // Close filter dropdown if open
    document.querySelector('.filter-content').classList.remove('active');
    document.querySelector('.filter-btn').setAttribute('aria-expanded', 'false');
    
    sortContent.classList.toggle('active');
    sortBtn.setAttribute('aria-expanded', !isExpanded);
    
    if (!isExpanded) {
        const firstSortOption = sortContent.querySelector('button');
        if (firstSortOption) firstSortOption.focus();
    }
}

function applySort(sortType) {
    currentSort = sortType;
    const sortLabel = document.querySelector('.sort-label');
    const sortMap = {
        'latest': 'Latest',
        'oldest': 'Oldest',
        'highest': 'Highest Rating',
        'lowest': 'Lowest Rating',
        'helpful': 'Most Helpful'
    };
    
    sortLabel.textContent = sortMap[sortType];
    toggleSort(); // Close dropdown
    loadReviews(); // Refresh reviews with new sort
}

function applyFilter(filterType, value) {
    const filterKey = value ? `${filterType}-${value}` : filterType;
    
    if (currentFilters.has(filterKey)) {
        currentFilters.delete(filterKey);
    } else {
        currentFilters.add(filterKey);
    }
    
    loadReviews(); // Refresh reviews with new filters
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.filter-dropdown') && !e.target.closest('.sort-dropdown')) {
        document.querySelector('.filter-content').classList.remove('active');
        document.querySelector('.sort-content').classList.remove('active');
        document.querySelector('.filter-btn').setAttribute('aria-expanded', 'false');
        document.querySelector('.sort-btn').setAttribute('aria-expanded', 'false');
    }
});

// Keyboard navigation for dropdowns
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelector('.filter-content').classList.remove('active');
        document.querySelector('.sort-content').classList.remove('active');
        document.querySelector('.filter-btn').setAttribute('aria-expanded', 'false');
        document.querySelector('.sort-btn').setAttribute('aria-expanded', 'false');
    }
});

// Rest of the existing JavaScript remains unchanged

const reviewModal = document.getElementById('reviewModal');
const reviewForm = document.getElementById('reviewForm');
const reviewText = document.getElementById('reviewText');
const charCount = document.querySelector('.char-count');

function openReviewModal() {
    reviewModal.showModal();
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        document.querySelector('.star-rating input[value="5"]').focus();
    }, 100);
}

function closeReviewModal() {
    reviewModal.close();
    document.body.style.overflow = 'auto';
    resetForm();
}

function resetForm() {
    reviewForm.reset();
    document.querySelector('.preview-grid').innerHTML = '';
    updateCharCount();
}

function updateCharCount() {
    const count = reviewText.value.length;
    charCount.textContent = `${count}/500 characters`;
}

function handlePhotoUpload(event) {
    const files = Array.from(event.target.files).slice(0, 5);
    const previewGrid = document.querySelector('.preview-grid');
    previewGrid.innerHTML = '';

    files.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = e => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = `Review photo ${index + 1}`;
            img.classList.add('preview-image');
            previewGrid.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
}

reviewText.addEventListener('input', updateCharCount);

reviewForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const rating = formData.get('rating');
    const reviewText = formData.get('reviewText');
    const photos = formData.getAll('photos[]');

    if (!rating) {
        alert('Please select a rating');
        return;
    }

    try {
        const response = await submitReview({
            rating,
            reviewText,
            photos
        });

        if (response.ok) {
            closeReviewModal();
            loadReviews();
        }
    } catch (error) {
        console.error('Error submitting review:', error);
        alert('Failed to submit review. Please try again.');
    }
});

reviewModal.addEventListener('click', e => {
    if (e.target === reviewModal) {
        closeReviewModal();
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && reviewModal.open) {
        closeReviewModal();
    }
});

async function submitReview(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ ok: true });
        }, 1000);
    });
}

function loadReviews() {
    // Implementation would fetch and render reviews
}

function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
    });
    
    const selectedTab = document.querySelector(`[onclick="switchTab('${tabName}')"]`);
    selectedTab.classList.add('active');
    selectedTab.setAttribute('aria-selected', 'true');
}

// Initialize focus trap for modal
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

