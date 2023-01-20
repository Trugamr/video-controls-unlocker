function attachVideoControls(video: HTMLVideoElement) {
  video.controls = true
  // Remove sibling overlay element that blocks interaction for video on instagram
  video.nextSibling?.remove()
}

// Observe changes to dom to find dynamically loaded elements
const observer = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    // Filter out every element node for every mutation
    for (const addedNode of mutation.addedNodes) {
      if (addedNode instanceof Element) {
        const videos = addedNode.querySelectorAll('video')

        // Enable controls for every video element found
        for (const video of videos) {
          attachVideoControls(video)
        }
      }
    }
  }
})

observer.observe(document.body, { childList: true, subtree: true })

// Empty export to make this file a module
export {}
