import * as e from './elements';
import { minTime, maxTime } from './defaults';

// Handling search actions
// And validation
searchSort = () => {
  if (!e.timeAfter.value) {
    e.timeAfterValid.style.display = 'none';
    e.timeBeforeValid.style.display = 'none';
    e.timeAfter.value = minTime;
  } else {
    if (e.timeAfter.value > e.timeBefore.value) {
      e.timeAfter.value = minTime;
      e.timeBeforeValid.style.display = 'inline';
      e.timeAfterValid.style.display = 'inline';
    } else {
      e.timeBeforeValid.style.display = 'none';
      e.timeAfterValid.style.display = 'none';
    }
  };
  if (!e.timeBefore.value) {
    e.timeBefore.value = maxTime;
  };

  search()
}

e.searchInput.onkeyup = (e) => {
  if (e.key === 'Enter') {
    activateSearchResults();
    searchSort()
  }
}

e.searchButton.onclick = 
  e.sortButton.onclick = () => {
    activateSearchResults();
    searchSort();
}

// Handling sorting visibility
e.sortingVisibilityArrow.onclick = () => {
  if (e.sorting.style.display !== 'block') {
    e.sortingVisibilityArrow.innerHTML = 'Sorting: &#9660;';
    e.sorting.style.display = 'block';
  } else {
    e.sortingVisibilityArrow.innerHTML = 'Sorting: &#9668;';
    e.sorting.style.display = 'none';
  }
}