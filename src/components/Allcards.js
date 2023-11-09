import React from 'react';
import Card from './Card';

function Allcards() {
  const cardInfo = [
    {
      id: 1,
      title: 'Comparing Pi to Bitcoin',
      text: 'Discover the comparisons between Pi Network and Bitcoin, along with their distinctive features.',
      price: 10.99,
      videoUrl: 'https://www.youtube.com/embed/B8XqOayNxMU',
    },
    {
      id: 2,
      title: 'Mine Pi and Earn Money',
      text: 'Discover how you can mine Pi and earn real money using your mobile phone.',
      price: 12.99,
      videoUrl: 'https://www.youtube.com/embed/lzrl9yJd26I',
    
    },
    {
      id: 3,
      title: 'What is Pi Network?',
      text: 'Explore Pi Coin and its impact on the cryptocurrency world, understanding its role in reshaping the industry.',
      price: 9.99,
      videoUrl: 'https://www.youtube.com/embed/2xRrVxiKAzg',
    },
    {
      id: 4,
      title: 'Pi Technology Revolution',
      text: 'Discover the groundbreaking technology revolution, which is shaping digital currencies.',
      price: 11.99,
      videoUrl: 'https://www.youtube.com/embed/5c8hXgK5TVQ',
    },
    {
      id: 5,
      title: 'Pi Network Mainnet',
      text: 'Stay updated on the Pi Network mainnet and its exciting developments.',
      price: 8.99,
      videoUrl: 'https://www.youtube.com/embed/fuYazEHNzTg',
    },
    {
      id: 6,
      title: 'Mining Pi with Mobile Apps',
      text: 'Learn everything about mining Pi using Pi Network mobile apps and nodes.',
      price: 14.99,
      videoUrl: 'https://www.youtube.com/embed/qBDCz3-CAQY',
    },
    {
      id: 7,
      title: 'Pi Technology Revolution',
      text: 'Discover the groundbreaking technology revolution, which is shaping digital currencies.',
      price: 11.99,
      videoUrl: 'https://www.youtube.com/embed/5c8hXgK5TVQ',
    },
    {
      id: 8,
      title: 'Pi Network Mainnet',
      text: 'Stay updated on the Pi Network mainnet and its exciting developments.',
      price: 8.99,
      videoUrl: 'https://www.youtube.com/embed/fuYazEHNzTg',
    },
    {
      id: 9,
      title: 'Mining Pi with Mobile Apps',
      text: 'Learn everything about mining Pi using Pi Network mobile apps and nodes.',
      price: 14.99,
      videoUrl: 'https://www.youtube.com/embed/qBDCz3-CAQY',
    },
    {
      id: 10,
      title: 'Pi Network Mainnet',
      text: 'Stay updated on the Pi Network mainnet and its exciting developments.',
      price: 8.99,
      videoUrl: 'https://www.youtube.com/embed/fuYazEHNzTg',
    },
  ];

  return (
    <div className='mt-5 text-center'>
      {cardInfo.map((info, index) => (
        <Card
          key={info.id}
          id={info.id}
          videoUrl={info.videoUrl} 
          title={info.title}
          text={info.text}
          price={info.price}
        />
      ))}
    </div>
  );
}

export default Allcards;










