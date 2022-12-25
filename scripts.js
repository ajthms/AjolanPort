const gallery = document.querySelector('#photo-container'); 
const photosWithOnclick = document.querySelectorAll(".photo")         
const photos = [
  {
    src: 'https://cdn.midjourney.com/9bde66a1-46db-4c24-a057-1bec0436ab3a/grid_0.png',
    alt: 'Watermelon Splash',
  },
  {
    src: 'https://cdn.midjourney.com/9e264307-a134-4222-8c08-a0beb4907771/grid_0.png',
    alt: 'Monkey King',
  },
  {
    src: 'https://cdn.midjourney.com/84ed464b-25fc-41c4-b025-748048d5fc87/grid_0.png',
    alt: 'Cherry Blossom',
  },
  {
    src: 'https://cdn.midjourney.com/65c425af-b9f4-48bb-9c9e-69ca61d63270/grid_0.png',
    alt: 'Castle In The Sky',
  },
]
          
photos.forEach(photo => {
  const img = document.createElement("img")
  img.src = photo.src
  img.alt = photo.alt
  img.className = 'photo'
  img.addEventListener('click', () => createLightbox(photo));
  if (gallery){
    gallery.append(img)
  }
})

function createLightbox(photo) {
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  const img = document.createElement('img');
  img.src = photo.src;
  img.alt = photo.alt;
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);
  lightbox.addEventListener('click', () => {
    lightbox.remove();
  });

}

photosWithOnclick.forEach(photo => {
  const thisPhoto = {
    src: photo.src,
    alt: photo.alt,
  }
  photo.addEventListener('click', () => createLightbox(thisPhoto));
})

console.log("photosWithOnclick")