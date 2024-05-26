/*!
 * Hype Rectangle Overlap Extension
 * Copyright (2024) Max Ziebell, (https://maxziebell.de). MIT-license
 */

/*
 * Version-History
 * 1.0.0 Inital release under MIT-license
 */

// Ensure the extension isn't redefined
if ("HypeRectangleOverlap" in window === false) {
  window['HypeRectangleOverlap'] = (function () {

	/**
	 * Check if two rectangles overlap.
	 * 
	 * @param {String|HTMLElement} selectorOrElement1 - The selector string or the first rectangle element.
	 * @param {String|HTMLElement} selectorOrElement2 - The selector string or the second rectangle element.
	 * @param {HypeDocument} hypeDocument - The Hype document instance.
	 * @returns {Boolean} True if rectangles overlap, otherwise false.
	 */
	function doRectanglesOverlap(selectorOrElement1, selectorOrElement2, hypeDocument) {
	  var rect1 = hypeDocument.resolveElement(selectorOrElement1);
	  var rect2 = hypeDocument.resolveElement(selectorOrElement2);

	  if (!rect1 || !rect2) {
		return false;
	  }

	  // Get bounding boxes
	  var rect1Bounds = rect1.getBoundingClientRect();
	  var rect2Bounds = rect2.getBoundingClientRect();

	  // Calculate overlap
	  var overlap = !(rect1Bounds.right < rect2Bounds.left || 
					  rect1Bounds.left > rect2Bounds.right || 
					  rect1Bounds.bottom < rect2Bounds.top || 
					  rect1Bounds.top > rect2Bounds.bottom);
	  return overlap;
	}

	/**
	 * Resolve the element based on the selector string or the element itself.
	 * 
	 * @param {String|HTMLElement} selectorOrElement - The selector string or the element.
	 * @returns {HTMLElement} The resolved DOM element.
	 */
	function resolveElement(selectorOrElement) {
	  var currentSceneElement = document.getElementById(this.currentSceneId());

	  if (typeof selectorOrElement === 'string') {
		return currentSceneElement.querySelector(selectorOrElement);
	  } else if (selectorOrElement instanceof HTMLElement) {
		return selectorOrElement;
	  }
	  return null;
	}

	// Hype Document Load handler
	function HypeDocumentLoad(hypeDocument, element, event) {
	  // Expose the overlap function on the Hype document instance
	  hypeDocument.doRectanglesOverlap = function(selectorOrElement1, selectorOrElement2) {
		return doRectanglesOverlap(selectorOrElement1, selectorOrElement2, hypeDocument);
	  };
	  
	  // Add resolveElement, querySelector, and querySelectorAll methods to hypeDocument
	  hypeDocument.resolveElement = resolveElement;
	  hypeDocument.querySelector = function(selector) {
		var currentSceneElement = document.getElementById(this.currentSceneId());
		return currentSceneElement.querySelector(selector);
	  };

	  hypeDocument.querySelectorAll = function(selector) {
		var currentSceneElement = document.getElementById(this.currentSceneId());
		return currentSceneElement.querySelectorAll(selector);
	  };
	}

	// Register event listeners
	if ("HYPE_eventListeners" in window === false) {
	  window.HYPE_eventListeners = Array();
	}
	window.HYPE_eventListeners.push({"type": "HypeDocumentLoad", "callback": HypeDocumentLoad});

	// Public API for the extension
	return {
	  version: '1.0.0',
	  doRectanglesOverlap: doRectanglesOverlap,
	  resolveElement: resolveElement
	};

  })();
}
