function showTabContent(event, criteria) {
  let i, tabContent, tabTitle;

  // Getting all elements with class="tab-content" and hiding them
  tabContent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  // Getting all elements with class="tab-title" and remove the class "active"
  tabTitle = document.getElementsByClassName('tab-title');
  for (i = 0; i < tabTitle.length; i++) {
    tabTitle[i].className = tabTitle[i].className.replace(' active', '');
  }

  // Show the current tab contents, and add an "active" class to the active tab button...
  document.getElementById(criteria).style.display = 'block';
  event.currentTarget.className += ' active';
}

// getting the default tab content...
let Clicker = document.getElementById('defaultOpen').click();
window.onload = Clicker();
