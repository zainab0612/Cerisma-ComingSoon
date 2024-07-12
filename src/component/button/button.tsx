import Button from '@mui/joy/Button';

const button = () => {
    return (
        <>
            <Button sx={{
                width: "904px",
                height: "163px",
                fontSize: '4.5rem',
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