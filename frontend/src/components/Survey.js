// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button'

// const Survey = (item) => {
//     const [imageData, setImageData] = useState([
//         { id: 1, likes: 0, dislikes: 0 },
//         { id: 2, likes: 0, dislikes: 0 },
//         { id: 3, likes: 0, dislikes: 0 }
//       ]);
    
//       // Event handler for when the "Like" button is clicked for a specific image
//       const handleLike = (id) => {
//         setImageData(prevImageData => prevImageData.map(item =>
//           item.id === id ? { ...item, likes: item.likes + 1 } : item
//         ));
//       };
    
//       // Event handler for when the "Dislike" button is clicked for a specific image
//       const handleDislike = (id) => {
//         setImageData(prevImageData => prevImageData.map(item =>
//           item.id === id ? { ...item, dislikes: item.dislikes + 1 } : item
//         ));
//       };

//   return (
//     <div>
//       <div>
//       <Button variant="success" size="sm" onClick={() => handleLike(item.id)}>
//         </Button>{' '}
//         <span>{handleLike}</span>
//         <Button variant="danger" size="sm" onClick={() => handleDislike(item.id)}>
//         </Button> {' '}
//          <span>{handleDislike}</span>
//       </div>
//       </div>
//   );
// };

// export default Survey;
