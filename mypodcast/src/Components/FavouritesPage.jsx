import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FavouritesPage.css';

export default function FavouritesPage({ favouritePodcasts }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sortedPodcasts, setSortedPodcasts] = useState(favouritePodcasts);
const SortingDropdown = ({ sortOption, onSortChange }) => {
  return (
    <div>
      <label>Sort By: </label>
      <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="date-asc">Oldest-Newest</option>
        <option value="date-desc">Newest-Oldest</option>
      </select>
    </div>
  );
};


  return (
    <div>
      <h1 className='favourite-page-heading'>Your Favourites</h1>
      <div className="container">
        {sortedPodcasts.map((podcast) => (
          <div key={podcast.id} className="podcast-item">
            <img src={podcast.image} alt={podcast.title} />
            <h3 className='favourite-page-podcast-title'>{podcast.title}</h3>
            {isExpanded ? (
              <>
                <p className='favourite-page-podcast-description'>{podcast.description}</p>
                <div className="podcast-details">
                  <p>Genre: {getGenreTitle(parseInt(podcast.genre))}</p>
                  <p>Seasons: {podcast.seasons}</p>
                  <p>Updated: {new Date(podcast.updated).toLocaleDateString('en-GB')}</p>
                </div>
                {podcast.episodes &&
                  podcast.episodes.map((episode) => (
                    <div key={episode.id} className="episode-item">
                      <h5>{episode.title}</h5>
                      <p>{episode.description}</p>
                    </div>
                  ))}
                <button className='favourite-page-show-less-button' onClick={toggleExpansion}>Show Less</button>
              </>
            ) : (
              <>
                <Link className='favourite-page-see-podcast-link' to={`/podcast/${podcast.id}`}>See Podcast Details</Link>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


