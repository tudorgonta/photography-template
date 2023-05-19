import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
      <div>
        <Header />
        <Box sx={{ paddingTop: '4.5rem', height: '86vh' }}>
            <Typography variant="h4">About</Typography>
            {/* Box with image on the left (1/4) and text on the right and around rest of the space */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem',
                paddingX: '20rem',
                color: 'white',
                textTransform: 'uppercase',
                backgroundColor: 'black',
                gap: '-2rem',
            }}>
                <Box 
                    sx={{
                        width: '55%',
                        height: '600px',
                        backgroundImage: 'url(https://source.unsplash.com/iFYy9KGG2nE)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} 
                />
                <Box sx={{
                    width: '45%',
                    height: '100%',
                    backgroundColor: '#262626',
                    zIndex: '1',
                    marginLeft: '-1.5rem',
                    textTransform: 'none',
                    fontStyle: 'italic',
                    padding: '2rem',
                    lineHeight: '2rem',
                }}>
                    <Typography variant="p">Welcome to the exquisite world of timeless photography. I am a connoisseur of light, capturing moments with a refined touch. With an unwavering dedication to elegance and artistry, my lens unveils the essence of beauty in every frame. From graceful portraits to captivating landscapes, allow me to escort you through a visual journey that transcends ordinary reality. Step into my gallery and immerse yourself in the ethereal tapestry of my craft.</Typography>
                </Box>  
            </Box>
        </Box>
      </div>
    )
}