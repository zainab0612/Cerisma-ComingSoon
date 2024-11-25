import { Box } from "@mui/joy";
import Image from 'next/image';
import logoImg from '../../assets/images/Logo.png';

const logo = () => {
    return (
        <>
            <Box sx={{
                width: {
                    xs: 200,
                    sm: 240,
                    md: 280,
                    lg: 330,
                    xl: 350
                },
                height: {
                    xs: 80,
                    sm: 90,
                    md: 100,
                    lg: 110,
                    xl: 120
                },
                marginLeft: {
                    xs: '0px',
                    sm: '-20px',
                    md: '-20px',
                    lg: '-40px',
                    xl: '-55px'
                },
            }}>
                <Image src={logoImg} alt="logo" />
            </Box>
        </>
    )
}

export default logo