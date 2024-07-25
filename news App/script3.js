document.addEventListener('DOMContentLoaded', () => {
    
    const url = `https://newsapi.org/v2/everything?q=apple&from=2024-07-24&to=2024-07-24&sortBy=popularity&apiKey=1abf21e31d0a4d67a8f43404ad34c38d
`;
  
    const cardContainer = document.getElementById('cardContainer');
  
    const fetchApi = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
  
        data.articles.forEach(art => {
          const card = document.createElement('div');
          card.classList.add('card');
  
          const truncateTitle = (title, maxLength) => {
            return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
          };
  
          const truncatedTitle = truncateTitle(art.title, 25); // Change 50 to your desired length
  
          const imgElement = `<img src="${art.urlToImage}" alt="Article Image">`;
          const dataValue = `
            <p><strong>By:</strong> ${art.author}</p>
            
            
            <p><strong>Title:</strong> ${truncatedTitle}</p>
            <p><strong>Source:</strong> ${art.source.name}</p>
            <a href="${art.url}" target="_blank"><button type="button">Read Now</button></a>
          `;
  
          card.innerHTML = imgElement + dataValue;
          cardContainer.appendChild(card);
        });
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
  
    fetchApi();
  });
  