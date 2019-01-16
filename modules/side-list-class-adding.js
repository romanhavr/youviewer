import * as e from './elements';

// Adding classes for side list displaing
function sideClassAdd() {
  for (let itemImg of e.itemListImages) {
    itemImg.classList.add('item-list-image-side')
  };
  for (let itemDiv of e.itemListDiv) {
    itemDiv.classList.add('item-list-side')
  };
};

export default sideClassAdd();