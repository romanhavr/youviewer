import * as e from './elements';

activateSearchResults = () => {
  e.searchResults.style.color = 'black';
  e.searchResults.style.cursor = 'default';
  e.relatedVideos.style.color = 'grey';
  e.relatedVideos.style.cursor = 'pointer';
};

activateRelatedVideos = () => {
  e.searchResults.style.color = 'grey';
  e.searchResults.style.cursor = 'pointer';
  e.relatedVideos.style.color = 'black';
  e.relatedVideos.style.cursor = 'default';
}