document.addEventListener('DOMContentLoaded', function() {
  // Process both regular pre elements and Pygments-generated code blocks
  processCodeBlocks('div.highlight pre');
  processCodeBlocks('pre:not(.highlight pre)');
  
  function processCodeBlocks(selector) {
    const codeBlocks = document.querySelectorAll(selector);
    
    codeBlocks.forEach(function(codeBlock, index) {
      // Skip if this code block is already wrapped
      if (codeBlock.parentNode.classList.contains('code-block-wrapper')) {
        return;
      }
      
      // Create a div to wrap the code block and the copy button
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper relative';
      
      // Clone the code block
      const clonedCodeBlock = codeBlock.cloneNode(true);
      
      // Detect language from class
      let language = '';
      
      // Check if it's a Pygments-generated code block
      const parentDiv = codeBlock.parentNode;
      if (parentDiv && parentDiv.classList.contains('highlight')) {
        // Try to get language from the parent's class
        const classes = parentDiv.className.split(' ');
        for (const cls of classes) {
          if (cls.startsWith('language-')) {
            language = cls.replace('language-', '');
            break;
          }
        }
      }
      
      // If we couldn't find the language, try to find it in the code element
      if (!language) {
        const codeElement = clonedCodeBlock.querySelector('code');
        if (codeElement && codeElement.className) {
          const classes = codeElement.className.split(' ');
          for (const cls of classes) {
            if (cls.startsWith('language-')) {
              language = cls.replace('language-', '');
              break;
            }
          }
        }
      }
      
      // Set the language as a data attribute on the pre element
      if (language) {
        clonedCodeBlock.setAttribute('data-language', language);
      }
      
      // Create the copy button
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button absolute top-2 right-2 bg-opacity-80 bg-gray-700 hover:bg-purple-700 text-white rounded p-1 text-xs opacity-70 hover:opacity-100 transition-all';
      copyButton.innerHTML = '<i class="fas fa-copy"></i>';
      copyButton.setAttribute('aria-label', 'Copy code to clipboard');
      copyButton.setAttribute('title', 'Copy code to clipboard');
      
      // Add a unique ID to the code block for clipboard targeting
      const uniqueId = `code-${Math.random().toString(36).substr(2, 9)}`;
      clonedCodeBlock.id = uniqueId;
      
      // Add the code block and button to the wrapper
      wrapper.appendChild(clonedCodeBlock);
      wrapper.appendChild(copyButton);
      
      // Replace the original code block with the wrapper
      if (parentDiv && parentDiv.classList.contains('highlight')) {
        // For Pygments blocks, we need to replace the parent div's content
        const newHighlightDiv = document.createElement('div');
        newHighlightDiv.className = parentDiv.className;
        newHighlightDiv.appendChild(wrapper);
        parentDiv.parentNode.replaceChild(newHighlightDiv, parentDiv);
      } else {
        // For regular pre blocks, replace directly
        codeBlock.parentNode.replaceChild(wrapper, codeBlock);
      }
      
      // Add click event to the copy button
      copyButton.addEventListener('click', function() {
        // Get the text content of the code element if it exists, otherwise use the pre element
        let code = clonedCodeBlock.textContent || '';
        
        navigator.clipboard.writeText(code).then(function() {
          // Visual feedback that the code was copied
          const originalText = copyButton.innerHTML;
          copyButton.innerHTML = '<i class="fas fa-check"></i>';
          copyButton.classList.add('bg-green-500');
          copyButton.classList.remove('bg-gray-700', 'hover:bg-purple-700');
          
          // Reset after 2 seconds
          setTimeout(function() {
            copyButton.innerHTML = originalText;
            copyButton.classList.remove('bg-green-500');
            copyButton.classList.add('bg-gray-700', 'hover:bg-purple-700');
          }, 2000);
        }).catch(function(err) {
          console.error('Could not copy text: ', err);
          
          // Visual feedback that the copy failed
          copyButton.innerHTML = '<i class="fas fa-times"></i>';
          copyButton.classList.add('bg-red-500');
          copyButton.classList.remove('bg-gray-700', 'hover:bg-purple-700');
          
          // Reset after 2 seconds
          setTimeout(function() {
            copyButton.innerHTML = '<i class="fas fa-copy"></i>';
            copyButton.classList.remove('bg-red-500');
            copyButton.classList.add('bg-gray-700', 'hover:bg-purple-700');
          }, 2000);
        });
      });
    });
  }
}); 