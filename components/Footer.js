import { Box } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <Box sx={{
        bottom: 0,
        width: '100%',
        paddingX: '1.5rem',
        backgroundColor: 'black',
        color: 'white',
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        Made with <FavoriteIcon sx={{ marginX: '0.5rem'}}/> by
    </Box>
  )
}

export default Footer