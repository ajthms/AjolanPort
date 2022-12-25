        
          const gallery = document.querySelector('.photo-container');
          
          const images = gallery.querySelectorAll('.photo');
          images.forEach(image => {
            image.addEventListener('click', () => {
             const lightbox = document.createElement('div');
              lightbox.classList.add('lightbox');
              const img = document.createElement('img');
              img.src = image.src;
              lightbox.appendChild(img);
              document.body.appendChild(lightbox);
              lightbox.addEventListener('click', () => {
                // Close the lightbox when clicked again
                lightbox.remove();
              });
            });
          });

          const photoContainer= document.getElementById('photo-container')
          
          const photos = [
            {
            src: 'https://cdn.midjourney.com/9bde66a1-46db-4c24-a057-1bec0436ab3a/grid_0.png',
            alt: 'Watermelon Splash',
            },

          ]
          
photos.forEach(photo => {
  const img = document.createElement("img")
  img.src = photo.src
  img.alt = photo.alt
  img.className = 'photo'
  img.addEventListener('click', () =>console.log('CLICKED'))
  photoContainer.append(img)
})

