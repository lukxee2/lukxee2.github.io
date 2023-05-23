// // Function to update badge status and background color
// function updateBadgeStatus(badgeElement, isOnline) {
//     if (isOnline) {
//     // No need to do anything, the default value is online
//     } else {
//     badgeElement.textContent = 'Offline';
//     badgeElement.classList.remove('bg-green');
//     }
// }

// // Function to check URL status
// function checkURLStatus(url, badgeElement) {
//     const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
//     fetch(proxyUrl)
//       .then(response => response.json())
//       .then(data => {
//         const success = data.status.http_code === 200;
//         updateBadgeStatus(badgeElement, success);
//       })
//       .catch(() => {
//         updateBadgeStatus(badgeElement, false);
//       });

//   }

// // Get all badge elements
// const badgeElements = document.querySelectorAll('.badge');

// // Iterate over each badge element
// badgeElements.forEach(badgeElement => {
//     const linkElement = badgeElement.parentElement.querySelector('.link');
//     const url = linkElement.href;

//     checkURLStatus(url, badgeElement);
// });  