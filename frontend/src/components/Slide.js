import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Collection(item) {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
  return (
    <Carousel>
      <Carousel.Item>
        < img src='https://assets.vogue.com/photos/65a6fee3c457ed16fcf80234/master/w_2240,c_limit/00001-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'alt={`Image ${item.id}`} />
      </Carousel.Item>
      <Carousel.Item>
      < img src='https://assets.vogue.com/photos/65a6fee68a6140457fbdc73d/master/w_2240,c_limit/00002-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'alt={`Image ${item.id}`} />
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6fee49b725645fbf8f269/master/w_2240,c_limit/00003-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'alt={`Image ${item.id}`}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6fee86d9bcf4661725d06/master/w_2240,c_limit/00004-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'alt={`Image ${item.id}`}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6feeb0e81cb573c8f8e54/master/w_2240,c_limit/00005-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'alt={`Image ${item.id}`}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6ff04b7983dd7f0ff647b/master/w_2240,c_limit/00018-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'alt={`Image ${item.id}`}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6ff0ce2516e2adb9833b7/master/w_2240,c_limit/00023-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6ff1f6d9bcf4661725d0a/master/w_2240,c_limit/00032-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6ff390e81cb573c8f8e59/master/w_2240,c_limit/00046-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6ff3d25ce9d17391f84a9/master/w_2240,c_limit/00049-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6ff5f0b1fb12a1522e1de/master/w_2240,c_limit/00066-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6ff5d9b725645fbf8f273/master/w_2240,c_limit/00065-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6ff62b7f5a1d0ae146366/master/w_2240,c_limit/00067-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6ff6f7e0fb686df0c1354/master/w_2240,c_limit/00073-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6ff2cc6cf5ced21488937/master/w_2240,c_limit/00038-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6fef15e09179af6b94dbe/master/w_2240,c_limit/00008-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6fef05e09179af6b94dbc/master/w_2240,c_limit/00009-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://assets.vogue.com/photos/65a6ff35e2516e2adb9833c2/master/w_2240,c_limit/00042-louis-vuitton-fall-2024-menswear-credit-gorunway.jpg'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Collection;