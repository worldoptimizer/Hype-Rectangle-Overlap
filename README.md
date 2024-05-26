# Hype-Rectangle-Overlap
Simple check if two rectangles overlap


### How to Use the Hype Rectangle Overlap Extension

#### Example Usage:

- **Using Selectors**:
  ```javascript
  // Check if two rectangles overlap using CSS selectors
  if (hypeDocument.doRectanglesOverlap('.rect1', '.rect2')) {
    console.log('Rectangles overlap!');
  } else {
    console.log('Rectangles do not overlap.');
  }
  ```
- **Using HTMLElements**:
  ```javascript
  // Get elements by their unique IDs
  var element1 = hypeDocument.getElementById('rect1');
  var element2 = hypeDocument.getElementById('rect2');
  
  // Check if the elements overlap
  if (hypeDocument.doRectanglesOverlap(element1, element2)) {
    console.log('Rectangles overlap!');
  } else {
    console.log('Rectangles do not overlap.');
  }
  ```

- **Using the new `querySelector` method**:
  ```javascript
  // Use hypeDocument.querySelector to find elements within the current scene
  var rect1 = hypeDocument.querySelector('.rect1');
  var rect2 = hypeDocument.querySelector('.rect2');
  
  // Check if the elements overlap
  if (hypeDocument.doRectanglesOverlap(rect1, rect2)) {
    console.log('Rectangles overlap!');
  } else {
    console.log('Rectangles do not overlap.');
  }
  ```

- **Using the new `querySelectorAll` method**:
  ```javascript
  // Get all elements with the class 'rect' in the current scene
  var rects = hypeDocument.querySelectorAll('.rect');
  
  // Loop through each rectangle
  for (var i = 0; i < rects.length; i++) {
    // Compare the current rectangle with every other rectangle
    for (var j = 0; j < rects.length; j++) {
      // Ensure we don't compare the rectangle with itself
      if (i !== j && hypeDocument.doRectanglesOverlap(rects[i], rects[j])) {
        console.log('Rectangles overlap between', rects[i], 'and', rects[j]);
      }
    }
  }
  ```

#### Limitations:

1. **Element Visibility**:
   - The extension checks for overlap based on the bounding rectangles of the elements. If the elements are hidden (e.g., `display: none`), they won't be considered for overlap checking.

2. **Element Transformations**:
   - CSS transformations (like `scale`, `rotate`, etc.) applied to elements might affect the bounding rectangle calculation, potentially leading to inaccurate overlap detection.
