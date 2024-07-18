import Button from '@mui/joy/Button';

const button = () => {
    return (
        <>
            <Button sx={{
                width: {
                    sm: 480,
                    md: 580,
                    lg: 680,
                    xl: 904,
                },
                height: {
                    sm: 90,
                    md: 110,
                    lg: 140,
                    xl: 160,
                },
                fontSize: {
                    sm: '1.8em',
                    md: '2.3em',
                    lg: '2.6em',
                    xl: '4.5em',
                },
                color: "white",
                textShadow: "2px 2px 5px black",
                borderRadius: "100px",
                border: '3px solid white',
                boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.45)",
                textTransform: 'capitalize',
                '&:hover': {
                    backgroundColor: 'transparent'
                }
            }}
                variant="outlined" >Coming soon</Button>

        </>
    )
}

export default button