# React Image Carousel

A simple and customizable image carousel component for React. This component allows you to display a carousel of images with support for auto-sliding, manual navigation, and optional captions.

## Installation

You can install `react-i-image-carouse` using npm or yarn.

### Using npm:

```bash
npm install react-i-image-carouse
```

### Using yarn:

```bash
yarn add react-i-image-carouse
```

## Usage

To use the `react-i-image-carouse` component, import it into your React project and provide an array of image URLs to display.

### Example:

```jsx
import React from "react";
import ImageCarousel from "react-i-image-carouse";
import "react-i-image-carouse/dist/index.css"; // Import the CSS for styling

const App = () => {
  const images = [
    "https://via.placeholder.com/600x300",
    "https://via.placeholder.com/600x300/ff0000",
    "https://via.placeholder.com/600x300/00ff00",
  ];

  return (
    <div>
      <h1>My Image Carousel</h1>
      <ImageCarousel images={images} interval={3000} />
    </div>
  );
};

export default App;
```

## Props

| Prop           | Type      | Default Value | Description                                                                         |
| -------------- | --------- | ------------- | ----------------------------------------------------------------------------------- |
| `images`       | `Array`   | `[]`          | An array of image URLs to display in the carousel.                                  |
| `interval`     | `Number`  | `5000`        | The time interval (in milliseconds) for auto-sliding between images.                |
| `showCaptions` | `Boolean` | `false`       | Whether or not to display captions for each image.                                  |
| `captions`     | `Array`   | `[]`          | An array of captions corresponding to each image. Used if `showCaptions` is `true`. |
| `autoplay`     | `Boolean` | `true`        | Enable or disable auto-sliding of images.                                           |

## Example with Captions

```jsx
import React from "react";
import ImageCarousel from "react-i-image-carouse";
import "react-i-image-carouse/dist/index.css";

const App = () => {
  const images = [
    "https://via.placeholder.com/600x300",
    "https://via.placeholder.com/600x300/ff0000",
    "https://via.placeholder.com/600x300/00ff00",
  ];
  const captions = [
    "This is the first image",
    "This is the second image",
    "This is the third image",
  ];

  return (
    <div>
      <h1>Image Carousel with Captions</h1>
      <ImageCarousel
        images={images}
        captions={captions}
        showCaptions={true}
        interval={3000}
      />
    </div>
  );
};

export default App;
```

## Customization

You can easily style the carousel by overriding the default CSS or by providing custom class names.

### Example of custom CSS:

```css
/* In your styles.css */
.carousel-container {
  max-width: 80%;
  margin: 0 auto;
}

.carousel-image {
  border-radius: 10px;
}
```

Then, apply the classes to your component via props:

```jsx
<ImageCarousel
  images={images}
  interval={3000}
  className="carousel-container"
  imageClassName="carousel-image"
/>
```

## Contributing

If you’d like to contribute to this project, feel free to open an issue or submit a pull request. Contributions are always welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Notes:

- The example assumes your `react-i-image-carouse` is ready to handle both images and optional captions.
- The `autoplay` feature and `interval` prop should allow auto-sliding images, and you can customize the appearance through CSS.
- The `contributing` section is a simple guideline for anyone who wants to contribute.
