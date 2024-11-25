import { Box } from "@mui/joy";

export const Logo = () => {
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
                <img
                    src="https://cerismapk.com/_next/static/media/group-120.ce830838.png"
                    alt="logo"
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
            </Box>
        </>
    );
}