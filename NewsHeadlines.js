// // src/NewsHeadlines.js
// import React, { useEffect, useState } from 'react';
// import { Card, Row, Col, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './NewsHeadlines.css';

// const NewsHeadlines = () => {
//   const [articles, setArticles] = useState([]);
//   const [error, setError] = useState(null);
//   const apiKey = '087a29c1ebc24380903c517fb88e43a7';

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setArticles(data.articles.slice(0, 5));
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchNews();
//   }, [apiKey]);

//   if (error) return <p className="error-message">Unable to fetch news: {error}</p>;

//   return (
//     <Container className="mt-5">
//       <h2 className="mb-4">Latest News</h2>
//       <Row>
//         {articles.map((article, index) => (
//           <Col key={index} md={4} className="mb-4">
//             <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
//               <Card className="h-100">
//                 <Card.Img variant="top" src={article.urlToImage || 'https://via.placeholder.com/150'} />
//                 <Card.Body>
//                   <Card.Title>{article.title}</Card.Title>
//                   <Card.Text>{article.description}</Card.Text>
//                 </Card.Body>
//                 <Card.Footer>
//                   <small className="text-muted">
//                     Source: {article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}
//                   </small>
//                 </Card.Footer>
//               </Card>
//             </a>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default NewsHeadlines;

import React, { useEffect, useState } from 'react';
// Importing necessary hooks from React: useEffect for lifecycle management and useState for state management.

import { Card, Row, Col, Container } from 'react-bootstrap';
// Importing specific components from react-bootstrap for creating responsive layouts and cards.

import 'bootstrap/dist/css/bootstrap.min.css';
// Importing Bootstrap's CSS for styling.

import './NewsHeadlines.css';
// Importing custom CSS for additional styling specific to this component.

const NewsHeadlines = () => {
  const [articles, setArticles] = useState([]);
  // Declaring a state variable 'articles' to store the fetched news articles.
  // 'setArticles' is the function to update 'articles'.

  const [error, setError] = useState(null);
  // Declaring a state variable 'error' to handle any errors that occur during the fetch process.
  // 'setError' is the function to update 'error'.

  const apiKey = '087a29c1ebc24380903c517fb88e43a7';
  // Storing the API key in a constant variable.

  useEffect(() => {
    // useEffect hook to perform side effects in the component. Runs after the component mounts.

    const fetchNews = async () => {
      // Declaring an async function to fetch news data from the API.
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        // Fetching news articles from the News API. The API key and country code are included in the URL.
        
        if (!response.ok) throw new Error('Network response was not ok');
        // Checking if the response is not okay (status is not 200-299), throwing an error if not.
        
        const data = await response.json();
        // Parsing the response as JSON.

        setArticles(data.articles.slice(0, 5));
        // Setting the 'articles' state to the first 5 articles from the fetched data.
      } catch (error) {
        setError(error.message);
        // If an error occurs during the fetch, setting the 'error' state to the error message.
      }
    };

    fetchNews();
    // Calling the fetchNews function to initiate the API request.
  }, [apiKey]);
  // The useEffect hook runs only once when the component mounts because 'apiKey' doesn't change.

  if (error) return <p className="error-message">Unable to fetch news: {error}</p>;
  // If there is an error, display an error message to the user.

  return (
    <Container className="mt-5">

      {/* Using a Bootstrap Container component for layout and margin-top utility class for spacing. */}

      <h2 className="mb-4">Latest News</h2>
      {/* Heading for the news section with a bottom margin utility class for spacing. */}

      <Row>
        {/* Using a Bootstrap Row component to create a responsive grid layout. */}
        {articles.map((article, index) => (
          // Mapping over the 'articles' array to render each article as a card.

          <Col key={index} md={4} className="mb-4">
            {/* Using a Bootstrap Col component for responsive column layout. md={4} means 3 columns per row on medium and larger screens. */}
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">

              {/* Wrapping the Card component in an anchor tag to make it clickable. 
                  target="_blank" opens the link in a new tab.
                  rel="noopener noreferrer" is for security reasons when opening links in a new tab. */}

              <Card className="h-100">
                {/* Using a Bootstrap Card component to display the article details. h-100 class ensures the card takes the full height of its parent. */}
                <Card.Img variant="top" src={article.urlToImage || 'https://via.placeholder.com/150'} />
                {/* Card image at the top. If no image is available, a placeholder image is used. */}
                
                <Card.Body>
                  {/* Card body to contain the main content. */}
                  <Card.Title>{article.title}</Card.Title>
                  {/* Card title displaying the article's title. */}
                  <Card.Text>{article.description}</Card.Text>
                  {/* Card text displaying the article's description. */}
                </Card.Body>
                <Card.Footer>
                  {/* Card footer for additional information. */}
                  <small className="text-muted">
                    Source: {article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}
                    {/* Displaying the source of the article and the publication date. */}
                  </small>
                </Card.Footer>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsHeadlines;
