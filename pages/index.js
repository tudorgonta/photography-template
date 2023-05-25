
import { ImageList, ImageListItem } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import data from '../lib/data.json';


export default function Home() {
  // import data from ../lib/data.json
  const imageArray = [...data]
  console.log(imageArray)
  return (
    <div>
      <Head>
        <title>Daniella</title>
        <meta name="description" content="Photography website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box sx={{overflowY: 'scroll', paddingTop: '4.5rem', justifyContent: 'center' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {imageArray.map((image, index) => (
            <ImageListItem key={index}>
              <Image
                src={image.url}
                srcSet={image.url}
                alt={image.alt}
                width={500}
                height={500}
                loading="lazy"
                style={{objectFit:"cover"}}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Footer />
    </div>
  )
}
