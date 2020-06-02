'use strict';

// $('.thumbnail').on('click', e => {
//   console.log(e.target);
// });

//when a user selects one of teh thumbnail images

//selector for the thumbnail iamge: $('.thumbnail img')

//selector for top image $('.hero img')


function handleThumbnailClicks() {
  //that image should be displayed in teh full-size image container at the top
  $('.thumbnail').click(event => {
    event.preventDefault();
    const thumbSrc = $(event.currentTarget).find('img').attr('src');
    $('.hero img').attr('src', thumbSrc);

    const thumbAlt = $(event.currentTarget).find('img').attr('alt');
    $('.hero img').attr('alt', thumbAlt);
  });
}

$(handleThumbnailClicks);















