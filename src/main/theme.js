// Theme variants 
const themeVariant = [
  {
    name: 'All',
    link: './search-page.html',
  },
  {
    name: 'Images',
    link: './img.html',
  },
  {
    name: 'Video',
    link: './video.html',
  }
];

function displayTab() {
  const tabs = themeVariant.map((theme) => {
    return `
      <a href="${theme.link}" class="px-6 py-[.3em] hover:bg-yellow-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 dark:text-[#fcfcfc]
       bg-yellow-200 dark:bg-[#2f2f2b] dark:border border-gray-700 rounded-full">${theme.name}</a>
    `;
  }).join(''); // Join the array elements into a string
  
  document.getElementById('suggestion-tab').innerHTML = tabs; // Set the innerHTML of the element
}

displayTab();





// On page load or when changing themes
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Toggle theme when the button is clicked
  const light = document.getElementById('theme-toggle-light');
  const dark = document.getElementById('theme-toggle-dark');
  light.addEventListener('click', () => {
    if (document.documentElement.classList.contains('light')) {
      localStorage.theme = 'light'; // Explicitly set light mode
    } else{
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light'; // Explicitly set dark mode
    }
  });

  dark.addEventListener('click', () => {
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'; // Explicitly set light mode
    }
  });

  let container = document.getElementById('container');
  let themeBtns = document.querySelectorAll('.theme');
  let themeOptions = document.querySelector('.theme-options'); // Assuming the theme options are the next sibling element
  let secContainer = document.getElementById('second-input-container')

  themeBtns.forEach(themeBtn => {
    themeBtn.addEventListener('click', (e) => {  
      if (themeOptions.classList.contains('hidden')) {
        themeOptions.classList.replace('hidden', 'flex');
      } else {
        themeOptions.classList.replace('flex', 'hidden');
      }
    });
  });
  
  container.addEventListener('scroll', function(e) {
    var scrollTop = container.scrollTop;
    
  
    if (scrollTop > 0) {

      themeBtns.forEach(themeBtn => {
        themeBtn.classList.remove('hidden');

        var navbar = document.getElementById('navbar');
        scrollTop = container.scrollTop;
        navbar.classList.replace('hidden', 'block');
       
  
      });
      secContainer.classList.replace('flex', 'hidden')
    } else {
      themeBtns.forEach(themeBtn => {
        navbar.classList.replace('block', 'hidden');
  
      });

      secContainer.classList.replace('hidden', 'flex')
    }
  });
  


 themeOptions.addEventListener('mouseleave', ()=>{

  if (themeOptions.classList.contains('flex')) {
    themeOptions.classList.replace('flex', 'hidden')
  }
 })


 // Assuming you have a container with an ID of 'container'

 


