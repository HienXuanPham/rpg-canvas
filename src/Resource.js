class Resources {
  constructor() {
    this.toLoad = {
      sky: "/sprites/sky.png",
      ground: "/sprites/ground.png",
      hero: "/sprites/hero-sheet.png",
      shadow: "/sprites/shadow.png",
    };

    this.images = {};

    // Load each image
    Object.keys(this.toLoad).forEach((key) => {
      const img = new Image();
      img.src = this.toLoad[key];
      this.images[key] = {
        image: img,
        isLoaded: false,
      };
      img.onload = () => {
        console.log("Image has finished loading!");
        this.images[key].isLoaded = true;
      };
    });
  }
}

// Create one instance for the whole app to use
export const resources = new Resources();
