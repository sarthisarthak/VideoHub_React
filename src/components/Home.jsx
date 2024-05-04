import {
  Box,
  Container,
  Heading,
  Image,
  Img,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '3xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Img src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            padding={('4', '16')}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            cupiditate et temporibus recusandae molestias error, molestiae eum
            soluta ducimus ipsum quae cum est consectetur ipsam itaque qui
            impedit dolorum vitae. Provident reiciendis ipsum consectetur, quia
            animi eos laborum, quidem, quod perspiciatis error aliquid optio.
            Itaque inventore dolores, sapiente facilis, repudiandae praesentium
            eaque eveniet minima libero maiores pariatur deleniti, soluta esse
            quas veniam veritatis officia dignissimos impedit ipsam possimus
            non! Fugiat fuga earum reiciendis perferendis commodi consequatur
            assumenda, voluptatibus blanditiis non molestias, exercitationem
            aliquam harum quas ipsa incidunt provident iste deleniti.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the Future!
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming..
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Eat Sleep Play Repeat!
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
