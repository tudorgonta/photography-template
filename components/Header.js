import { Box, Typography } from '@mui/material'
import Link from 'next/link'

const Header = () => {
  return (
    <Box sx={{
        position: 'fixed',
        zIndex: 1,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem',
        paddingX: '2rem',
        color: 'white',
        textTransform: 'uppercase',
        width: '100%',
      }}>
        <Typography 
            component={Link} 
                href='/' 
                variant="h4"
                sx={{
                    cursor: 'pointer',
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': {
                        color: 'grey',
                    },
                    transition: 'color 0.2s ease-in-out',
                    
            }}
            >ELIZABETE LAMA</Typography>
        {/*  Nav links */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginRight: '6rem',
        }}>
            <Typography 
                component={Link} 
                href='/about' 
                variant="h6"
                sx={{
                    cursor: 'pointer',
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': {
                        color: 'grey',
                    },
                    transition: 'color 0.2s ease-in-out',
                    
                }}
            >About</Typography>
            <Typography 
                component={Link} 
                href='/contact' 
                variant="h6"
                sx={{
                    cursor: 'pointer',
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': {
                        color: 'grey',
                    },
                    transition: 'color 0.2s ease-in-out',
                    
                }}
            >Contact</Typography>
        </Box>
      </Box>
  )
}

export default Header