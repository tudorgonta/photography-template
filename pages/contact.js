import { Box, Button, TextField, Typography } from "@mui/material"
import Header from "../components/Header"
import Footer from "../components/Footer"

const contact = () => {
    const handleSubmit = (e, form) => {
        e.preventDefault()
        console.log('submitted')
    }
  return (
    <>
    <Header />
    <Box
        sx={{
            height: '95vh',
            paddingX: '20rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '2rem',
            color: 'white',
            textAlign: 'center',
        }}
    >
        <Typography variant="h4">Get In Touch</Typography>
        <Typography 
            variant="p"
            sx={{
                maxWidth: '50rem',
                margin: '0 auto',
                fontStyle: 'italic',
            }}
        >I am currently available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.</Typography>

        <Box component="form" onSubmit={(e) => handleSubmit(e, onSubmit)} 
            
            sx={{
                '& label.Mui-focused': {
                  color: 'white',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            >
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            name="description"
            label="Message"
            type="text"
            id="description"
            autoComplete="description"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
                mt: 3, mb: 2,
                backgroundColor: 'white',
                color: 'black',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                    backgroundColor: 'white',
                    opacity: '0.8',
                },
             }}
            
          >
            Send
          </Button>
        </Box>
    </Box>
    <Footer />
    </>
  )
}

export default contact