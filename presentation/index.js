// Import React
import React from 'react';
import '../assets/style.css';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

import ResponsiveEmbed from 'react-responsive-embed';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  coatofarms: require('../assets/img/coatofarms.png'),
  glass: require('../assets/img/glass.png'),
  horses: require('../assets/img/horses.png'),
  map: require('../assets/img/map.png'),
  people: require('../assets/img/people.png'),
  coat: require('../assets/img/coat.png'),
  townhall: require('../assets/img/townhall.png')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#2094da',
    quaternary: '#ede6e6'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading className="container" size={1} lineHeight={1} textColor="secondary">
            Karcag
          </Heading>
          <Heading size={6} textColor="secondary">
            lat: 47.30 long: 20.74
          </Heading>
          <Image className="image-float img-half" src={images.map} />
          <Image className="image-float-right img-half" src={images.coatofarms} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading className="" size={6} lineHeight={1} textColor="primary">
            People of Karcag is known to be proud of their tradition and the famous annual lamb-stew competition
          </Heading>
          <Heading size={6} textColor="secondary">
            lat: 47.30 long: 20.74
          </Heading>
          <img className="img-third" src={images.horses} />
          <div className="border" />
          <img className="img-third-middle" src={images.coat} />
          <div className="border" />
          <img className="img-third" src={images.people} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} lineHeight={1} textColor="primary">
            Pálinka
          </Heading>
          <img className="image-float box-right" src={images.glass} />
          <div className="white-text">
            <p>
              A popular saying in Hungary says: what can be used to prepare jam can also be used to produce pálinka. 
            </p>
            <p>
              The traditional double distillation process results in a strong alcohol content of 40 to 70 percent alcohol by volume.
            </p>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" >
            npm install --save react-responsive-embed
          </Heading>
          <div className="video-wrapper">
            <ResponsiveEmbed src='https://www.youtube.com/embed/WCInnnMMRkg' allowfullscreen />
          </div>
          <Heading size={6} textColor="tertiery" caps>
            egészségünkre!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
