<section class="product-review-section" role="region" aria-label="Product review section">
<div class="reviews-container" role="main">
    <nav class="nav-tabs" role="navigation" aria-label="Product information tabs">
        <button class="tab" aria-selected="false" role="tab" onclick="switchTab('product')">Product Details</button>
        <button class="tab active" aria-selected="true" role="tab" onclick="switchTab('reviews')">Rating & Reviews</button>
        <button class="tab" aria-selected="false" role="tab" onclick="switchTab('faqs')">FAQs</button>
    </nav>

    <div class="divider" role="separator"></div>

    <div class="reviews-header">
        <h1>All Reviews</h1>
        <div class="controls">
            <div class="filter-dropdown">
                <button class="filter-btn" aria-expanded="false" aria-haspopup="true" onclick="toggleFilter()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 21v-7m0-4V3m8 18v-4m0-7V3m8 18v-7m0-4V3M1 14h6m5-7h6m-6 11h6"/>
                    </svg>
                    Filter
                </button>
                <div class="dropdown-content filter-content" role="menu" aria-label="Filter options">
                    <button role="menuitem" onclick="applyFilter('rating', 5)">5 Stars</button>
                    <button role="menuitem" onclick="applyFilter('rating', 4)">4 Stars & Up</button>
                    <button role="menuitem" onclick="applyFilter('rating', 3)">3 Stars & Up</button>
                    <button role="menuitem" onclick="applyFilter('verified')">Verified Purchases</button>
                    <button role="menuitem" onclick="applyFilter('withPhotos')">With Photos</button>
                </div>
            </div>
            
            <div class="sort-dropdown">
                <button class="sort-btn" aria-expanded="false" aria-haspopup="true" onclick="toggleSort()">
                    <span class="sort-label">Latest</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M6 8L2 4h8z"/>
                    </svg>
                </button>
                <div class="dropdown-content sort-content" role="menu" aria-label="Sort options">
                    <button role="menuitem" onclick="applySort('latest')">Latest</button>
                    <button role="menuitem" onclick="applySort('oldest')">Oldest</button>
                    <button role="menuitem" onclick="applySort('highest')">Highest Rating</button>
                    <button role="menuitem" onclick="applySort('lowest')">Lowest Rating</button>
                    <button role="menuitem" onclick="applySort('helpful')">Most Helpful</button>
                </div>
            </div>
            
            <button class="write-review-btn" aria-label="Write a review" onclick="openReviewModal()">
                Write a Review
            </button>
        </div>
    </div>

    <div class="reviews-grid" role="feed" aria-label="Product reviews">
        <div class="review-card" role="article">
            <div class="rating">★★★★★</div>
            <p class="review-text">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
            <div class="reviewer">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5117e52a2a21e874e3c23c7f5bc9adaaa234b7a89568ffe27670b309d41be103?placeholderIfAbsent=true&apiKey=dbcd455589c54b21bf07151885fb030e" alt="Atharva Sawant's profile picture" class="avatar">
                <div class="reviewer-info">
                    <span class="name">Atharva Sawant</span>
                    <span class="date">10/09/2024</span>
                </div>
            </div>
        </div>
        <!-- Additional review cards would be dynamically added here -->
        <div class="review-card" role="article">
            <div class="rating">★★★★★</div>
            <p class="review-text">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
            <div class="reviewer">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5117e52a2a21e874e3c23c7f5bc9adaaa234b7a89568ffe27670b309d41be103?placeholderIfAbsent=true&apiKey=dbcd455589c54b21bf07151885fb030e" alt="Atharva Sawant's profile picture" class="avatar">
                <div class="reviewer-info">
                    <span class="name">Atharva Sawant</span>
                    <span class="date">10/09/2024</span>
                </div>
            </div>
        </div>

        <div class="review-card" role="article">
            <div class="rating">★★★★★</div>
            <p class="review-text">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
            <div class="reviewer">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5117e52a2a21e874e3c23c7f5bc9adaaa234b7a89568ffe27670b309d41be103?placeholderIfAbsent=true&apiKey=dbcd455589c54b21bf07151885fb030e" alt="Atharva Sawant's profile picture" class="avatar">
                <div class="reviewer-info">
                    <span class="name">Atharva Sawant</span>
                    <span class="date">10/09/2024</span>
                </div>
            </div>
        </div>

        <div class="review-card" role="article">
            <div class="rating">★★★★★</div>
            <p class="review-text">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
            <div class="reviewer">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5117e52a2a21e874e3c23c7f5bc9adaaa234b7a89568ffe27670b309d41be103?placeholderIfAbsent=true&apiKey=dbcd455589c54b21bf07151885fb030e" alt="Atharva Sawant's profile picture" class="avatar">
                <div class="reviewer-info">
                    <span class="name">Atharva Sawant</span>
                    <span class="date">10/09/2024</span>
                </div>
            </div>
        </div>

    </div>

    <button 
        class="load-more-btn" 
        onclick="loadMoreReviews()" 
        aria-label="Load more reviews"
        data-page="1"
    >
        <span class="btn-text">Load More Reviews</span>
        <span class="loading-spinner" aria-hidden="true"></span>
    </button>

    <dialog id="reviewModal" class="review-modal" aria-labelledby="modalTitle">
        <form id="reviewForm" class="review-form" method="dialog">
            <div class="modal-header">
                <h2 id="modalTitle">Write a Review</h2>
                <button type="button" class="close-btn" aria-label="Close modal" onclick="closeReviewModal()">×</button>
            </div>

            <div class="rating-section">
                <fieldset>
                    <legend>Rating</legend>
                    <div class="star-rating" role="radiogroup" aria-label="Rate product from 1 to 5 stars">
                        <input type="radio" id="star5" name="rating" value="5" aria-label="5 stars"/>
                        <label for="star5">★</label>
                        <input type="radio" id="star4" name="rating" value="4" aria-label="4 stars"/>
                        <label for="star4">★</label>
                        <input type="radio" id="star3" name="rating" value="3" aria-label="3 stars"/>
                        <label for="star3">★</label>
                        <input type="radio" id="star2" name="rating" value="2" aria-label="2 stars"/>
                        <label for="star2">★</label>
                        <input type="radio" id="star1" name="rating" value="1" aria-label="1 star"/>
                        <label for="star1">★</label>
                    </div>
                </fieldset>
            </div>

            <div class="review-content">
                <label for="reviewText">Your Review</label>
                <textarea 
                    id="reviewText" 
                    name="reviewText"
                    required
                    minlength="10"
                    maxlength="500"
                    aria-describedby="reviewHelp"
                    placeholder="Share your experience..."
                ></textarea>
                <div id="reviewHelp" class="char-count" aria-live="polite">0/500 characters</div>
            </div>

            <div class="photo-upload">
                <label for="photoUpload">Add Photos (Optional)</label>
                <input 
                    type="file" 
                    id="photoUpload" 
                    name="photos[]"
                    accept="image/*" 
                    multiple 
                    aria-describedby="photoHelp"
                    onchange="handlePhotoUpload(event)"
                />
                <div id="photoHelp" class="helper-text">Up to 5 photos allowed</div>
                <div class="preview-grid" role="group" aria-label="Photo previews"></div>
            </div>

            <div class="form-actions">
                <button type="submit" class="submit-btn">Submit Review</button>
                <button type="button" class="cancel-btn" onclick="closeReviewModal()">Cancel</button>
            </div>
        </form>
    </dialog>
</div>
</section>