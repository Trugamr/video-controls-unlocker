// Inject script to bring video controls above overlay so they can be clicked
const style = document.head.querySelector('style[data-injected-by-vcu=true]')
if (!style) {
  const element = document.createElement('style')
  element.innerText =
    '::-webkit-media-controls { z-index: 9999; position: relative; }'
  element.dataset.injectedByVcu = 'true'
  document.head.appendChild(element)
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
          video.controls = true
        }
      }
    }
  }
})

// Start listening for mutatin changes on body
observer.observe(document.body, { childList: true, subtree: true })

// Empty export to make this file a module
export {}
