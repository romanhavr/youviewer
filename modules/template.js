function videoListGridOptions (
  itemEtag,
  itemThumbUrl,
  itemTitle
) {
  return ( 
        `<div
          class="item-list"
          id=${itemEtag}
          onclick="showChosenVideo(this.id)"
        >
          <img
            class="item-list-image"   
            src=${itemThumbUrl}
            alt=${itemTitle}
          >
          <h5
            class="item-title"
            id="item-title"
          >
            ${itemTitle}
          </h5>
        </div>
        `)
};

export default videoListGridOptions();

/* Object.defineProperties(exports, '__esModule', {
  value: true
});
exports.defaults = videoListGridOptions(); */