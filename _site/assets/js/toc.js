// Table of Contents Generator
document.addEventListener('DOMContentLoaded', function() {
  generateTableOfContents();
});

function generateTableOfContents() {
  var content = document.querySelector('.post-content') || document.querySelector('.page-content') || document.querySelector('article') || document.querySelector('.content');
  if (!content) {
    console.log('No content container found for TOC generation');
    return;
  }
  
  var headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  // Only show TOC if there are more than 3 headings
  if (headings.length <= 3) return;
  
  var toc = document.createElement('div');
  toc.className = 'toc';
  toc.innerHTML = '<h2>목차</h2>';
  
  var ul = document.createElement('ul');
  var currentLevel = 1;
  var stack = [ul];
  
  headings.forEach(function(heading, index) {
    // Add ID to heading if it doesn't have one
    if (!heading.id) {
      heading.id = 'heading-' + index;
    }
    
    var level = parseInt(heading.tagName.charAt(1));
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + heading.id;
    a.textContent = heading.textContent;
    a.setAttribute('data-heading-id', heading.id);
    li.appendChild(a);
    
    // Handle nested lists based on heading levels
    if (level > currentLevel) {
      // Create nested ul for deeper levels
      while (level > currentLevel) {
        var newUl = document.createElement('ul');
        if (stack[stack.length - 1].lastElementChild) {
          stack[stack.length - 1].lastElementChild.appendChild(newUl);
        } else {
          stack[stack.length - 1].appendChild(newUl);
        }
        stack.push(newUl);
        currentLevel++;
      }
    } else if (level < currentLevel) {
      // Go back to appropriate level
      while (level < currentLevel && stack.length > 1) {
        stack.pop();
        currentLevel--;
      }
    }
    
    stack[stack.length - 1].appendChild(li);
  });
  
  toc.appendChild(ul);
  
  // Insert TOC at the beginning of content
  content.insertBefore(toc, content.firstChild);
  
  // Add smooth scrolling functionality
  addSmoothScrolling(toc);
  
  // Add scroll highlighting
  addScrollHighlighting(toc, headings);
}

function addSmoothScrolling(toc) {
  toc.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      var targetId = e.target.getAttribute('href').substring(1);
      var target = document.getElementById(targetId);
      
      if (target) {
        var headerHeight = document.querySelector('.site-header').offsetHeight || 80;
        var targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
}

function addScrollHighlighting(toc, headings) {
  function highlightCurrentSection() {
    var scrollTop = window.pageYOffset;
    var headerHeight = document.querySelector('.site-header').offsetHeight || 80;
    var links = toc.querySelectorAll('a');
    
    // Remove all active classes
    links.forEach(function(link) {
      link.classList.remove('active');
    });
    
    // Find the current section
    var currentHeading = null;
    for (var i = 0; i < headings.length; i++) {
      var heading = headings[i];
      var headingTop = heading.offsetTop - headerHeight - 50;
      
      if (scrollTop >= headingTop) {
        currentHeading = heading;
      } else {
        break;
      }
    }
    
    // Highlight the current section
    if (currentHeading) {
      var link = toc.querySelector('a[data-heading-id="' + currentHeading.id + '"]');
      if (link) {
        link.classList.add('active');
      }
    }
  }
  
  // Throttle scroll events for better performance
  var scrollTimeout;
  window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(highlightCurrentSection, 50);
  });
  
  // Initial highlight
  highlightCurrentSection();
}