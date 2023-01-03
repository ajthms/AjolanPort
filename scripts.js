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
  {
    src: 'https://cdn.midjourney.com/f9a27b9f-51ab-487b-b76e-4bc91aa40537/grid_0.png',
    alt: 'Tree In The Ocean',
  },
  {
    src: 'https://cdn.midjourney.com/4d4cc233-7e04-423e-87d8-5cacecbccc30/grid_0.png',
    alt: 'The TV Man',
  },
  {
    src: 'https://cdn.midjourney.com/37be6797-c7c7-43d6-851b-3cb15cf9e6c8/grid_0.png',
    alt: 'Old Man Ajolan',
  },
  {
    src: 'https://cdn.midjourney.com/3ee4ac76-9502-44bd-bd19-2721878c2cb5/grid_0.png',
    alt: 'Baby Bat',
  },
  {
    src: 'https://cdn.midjourney.com/fdcee11f-0cab-4ca3-a82d-62c50d5a7f71/grid_0.png',
    alt: 'Tiger And Geisha',
  },
  {
    src: 'https://cdn.midjourney.com/c96ecf53-6be4-4b9b-97c6-8b2e621b6bc8/grid_0.png',
    alt: 'Dog In Rover',
  },
  {
    src: 'https://cdn.midjourney.com/95caf7a1-951c-4ca5-a861-ee7dd223c301/grid_0.png',
    alt: 'Cereal Bowl Full Of Planets',
  },
  {
    src: 'https://cdn.midjourney.com/9bafdb77-8970-47e4-973a-1ede927cfae2/grid_0.png',
    alt: 'Abstract Octopus',
  },
  {
    src: 'https://cdn.midjourney.com/66fea00a-127a-4f5d-bd0c-8ae0046d25e0/grid_0.png',
    alt: 'Rhino Man',
  },
  {
    src: 'https://cdn.midjourney.com/8008a943-9e97-47b6-aa2c-eefaa638cf1e/grid_0.png',
    alt: 'Scarab Samurai',
  },
  {
    src: 'https://cdn.midjourney.com/396a6936-8917-4044-89f6-2982172a3562/grid_0.png',
    alt: 'Hairless Cat Geisha',
  },
  {
    src: 'https://cdn.midjourney.com/39a15861-8f80-4ea8-a66f-ee955f850888/grid_0.png',
    alt: 'Chibi Grass Elemental',
  },
  {
    src: 'https://cdn.midjourney.com/5adde446-fc4e-4248-89b7-acab9ddc9826/grid_0.png',
    alt: 'Little Green Alien',
  },
  {
    src: 'https://cdn.midjourney.com/15d81177-68ad-4c58-be91-0c06643dca9e/grid_0.png',
    alt: 'Sour Apple',
  },
  {
    src: 'https://cdn.midjourney.com/fdd30c0a-adf1-48a2-8023-b9e594238e3e/grid_0.png',
    alt: 'Gold Chain Gorilla',
  },
  {
    src: 'https://cdn.midjourney.com/6481d8c7-9c07-439b-ba9d-bf7b665724de/grid_0.png',
    alt: 'The Wyrm',
  },
  {
    src: 'https://cdn.midjourney.com/5ddb919e-e41a-46dd-af7e-079878817894/grid_0.png',
    alt: 'Man In Red Trench Coat',
  },
  {
    src: 'https://cdn.midjourney.com/e8296c99-2713-4f0f-a32d-ef6ea1b69bc2/grid_0.png',
    alt: 'Sensei',
  },
  {
    src: 'https://cdn.midjourney.com/3298bb55-c93b-4dc6-bbbd-a99bf39e0889/grid_0.png',
    alt: 'Cat Yin Yang',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1001858886917177415/1056763164869529600/beach_DBH1.png',
    alt: 'Beach Scene',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1001858886917177415/1056763162730434651/beach_DBH7.png?fbclid=IwAR1eETLBcGOBdKxSF-RA8qfJdmJioqOr01HpJSKUKfFTwl6BQ_Sx5oIC050',
    alt: 'Eyeball',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1001858886917177415/1056763162088701992/beach_DBH8.png?fbclid=IwAR31WKRF_DjXwz85FllWjo5yc1ykE-ljuNuDQnR7WwTkLnv9XeiggKuJXVc',
    alt: 'Surreal Cube Landscape',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1001858886917177415/1056763161589583882/bike_big1.png?fbclid=IwAR0lKVdI2U1DUe_ZI7TnmJuSvE1kSb3BLyNoSstRZPnwla04bIt5UV8wB0k',
    alt: 'Motorcycle Business Man',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1001858886917177415/1056763159421132850/skull.png?fbclid=IwAR1VFfKrVB4vfA9sP7n3-GUxEg81G89708EjH22n2z9TKAYrp7DCFlKobIw',
    alt: 'Nature Skull',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1001858886917177415/1056763020950380554/armored_core.png?fbclid=IwAR13m_4Pr1CVHYuxhW46SA7r75vQ_RDtYEXctr0OrgXDjXXlcvYczm29uxo',
    alt: 'Emerald Mech',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1001858886917177415/1056763019847270411/cat.png?fbclid=IwAR3hwB7EqnunAIosqQX4gXwQl1a5j2NVm4ylUSwv9dY95FFDcGjcfC9dpg4',
    alt: 'Cat In Leaves',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1001858886917177415/1056763019402682418/cool_dog.jpg?fbclid=IwAR1guUl_VxiIJn7bbOMYIA4UI9Dox6MdeCTviqSw9nbz9ZwTkgxA8FGRV5I',
    alt: 'Dog In Sunglasses',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1001858886917177415/1056763018479935498/elemts.png',
    alt: 'Elementals',
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

