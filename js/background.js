const images = [
  "road.jpg",
  "mountain.jpg",
  "ocean.jpg",
  "cliff.jpg",
  "buildings.jpg",
];

const todaysImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${todaysImage}')`;
