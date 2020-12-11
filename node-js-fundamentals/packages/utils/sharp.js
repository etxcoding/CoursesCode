const sharp = require('sharp');

sharp('me.jpeg').resize(80).grayscale().toFile('me-resized.jpeg');
