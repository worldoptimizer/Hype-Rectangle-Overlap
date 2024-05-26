# Hype-Rectangle-Overlap
Simple check if two rectangles overlap


### How to Use the Hype Rectangle Overlap Extension

#### Example Usage:

- **Using Selectors**:
  ```javascript
  if (hypeDocument.doRectanglesOverlap('.rect1', '.rect2')) {
    console.log('Rectangles overlap!');
  } else {
    console.log('Rectangles do not overlap.');
  }
  ```
- **Using HTMLElements**:
  ```javascript
  var element1 = hypeDocument.getElementById('rect1');
  var element2 = hypeDocument.getElementById('rect2');
  if (hypeDocument.doRectanglesOverlap(element1, element2)) {
    console.log('Rectangles overlap!');
  } else {
    console.log('Rectangles do not overlap.');
  }
  ```

- **Using the new `querySelector` and `querySelectorAll` methods**:
  ```javascript
  var rect1 = hypeDocument.querySelector('.rect1');
  var rect2 = hypeDocument.querySelector('.rect2');
  if (hypeDocument.doRectanglesOverlap(rect1, rect2)) {
    console.log('Rectangles overlap!');
  } else {
    console.log('Rectangles do not overlap.');
  }

  var rects = hypeDocument.querySelectorAll('.rect');
  for (var i = 0; i < rects.length - 1; i++) {
    for (var j = i + 1; j < rects.length; j++) {
      if (hypeDocument.doRectanglesOverlap(rects[i], rects[j])) {
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
