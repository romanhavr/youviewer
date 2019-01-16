import * as e from './elements';
import { formatDateTimeToInputValue } from './modules/date-time-formatting'; 

// setting default values
e.searchInput.value = '4k';
e.content.style.minHeight = window.innerHeight - 210 + 'px';
e.searchResults.style.cursor = 'default';
e.searchResults.style.color = 'black';
e.relatedVideos.style.color = 'grey';
e.relatedVideos.style.display = 'none';

let nowDT = new Date();
export let minTime = '2005-04-24T00:00';
export let maxTime = formatDateTimeToInputValue(nowDT);
e.timeBefore.value = maxTime;
e.timeBefore.min = e.timeAfter.value;
e.timeBefore.max = maxTime;
e.timeAfter.value = minTime;
e.timeAfter.min = minTime;
e.timeAfter.max = e.timeBefore.value;