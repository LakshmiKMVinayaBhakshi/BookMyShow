import React from 'react'
import '../Components/TrailSample.css'

const TrailSample = () => {
return (
    <div>
    <section class="movie-container">
    <div class="movie-details">
    <div>
        <h1>Salaar: Cease Fire - Part 1</h1>
        <div class="rating-container">
        <svg viewBox="0 0 24 24"><use href="/chunks/icons/common-icons-c6dce80e.svg#icon-star"></use></svg>
        <span class="rating">8.4/10</span>
        <span class="votes">460.7K Votes</span>
        </div>
    </div>
    <div class="movie-actions">
        <button class="action-button">Book Tickets</button>
        <button class="share-button">
        <svg viewBox="0 0 24 24"><use href="/chunks/icons/synopsis-icons-35023058.svg#icon-share"></use></svg>
        Share
        </button>
    </div>
    </div>
</section>
    </div>
)
}

export default TrailSample