
import classes from './floatingBtn.module.scss';
import Box from '@mui/material/Box';
import { Fab } from '@mui/material';
import {IoMdNavigate} from 'react-icons/io';

const FloatingBtn: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={classes.float}>
        <Box  sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" onClick={handleScrollToTop}>
                <IoMdNavigate  /> 
            </Fab>
            
            </Box>
    </div>
    
  );
};

export default FloatingBtn;