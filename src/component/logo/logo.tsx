import { Box } from "@mui/joy";
import Image from 'next/image';
import logoImg from '../../assets/images/Group 120.png';

const logo = () => {
    return (
        <>
            <Box sx={{
                width: {
                    xs: 300,
                    sm: 350,
                    md: 400,
                    lg: 450,
                    xl: 500
                },
                height: {
                    xs: 100,
                    sm: 120,
                    md: 140,
                    lg: 160,
                    xl: 170
                },
            }}>
                <Image src={logoImg} alt="logo" />
            </Box>
        </>
    )
}

export default logo