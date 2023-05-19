
import { ImageList, ImageListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Home() {
  const images = require.context('../public/img', true)
  const imageNames = images.keys()
  const imageArray = imageNames.map((imageName) => ({
    src: images(imageName).default,
    alt: imageName.slice(2, -4), // remove "./" and ".jpg"
  }))
  return (
    <div>
      <Head>
        <title>Daniella</title>
        <meta name="description" content="Photography website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box sx={{overflowY: 'scroll', paddingTop: '4.5rem' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {imageArray.map((image, index) => (
            <ImageListItem key={index}>
              <Image
                src={image.src.src+`?w=248&fit=crop&auto=format`}
                srcSet={image.src.src+`?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={image.alt.alt}
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
