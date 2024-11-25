
import { Typography, Box } from "@mui/joy";
import CountdownTimer from "@/component/timer/timer";
import Button from "@/component/button/button";
import Logo from "@/component/logo/logo";

const Home = () => {

  const targetDate = new Date('02/01/2025 22:59:59');

  return (
    <Box sx={{
      overflow: 'hidden',
    }}>
      <main className="flex min-h-screen flex-col items-center justify-center p-16">
        <div className="logo">
          <Logo />
        </div>
        <div>
          <Typography sx={{

            fontSize: {
              xs: '1.0em',
              sm: '1.5em',
              md: '1.8em',
              lg: '2.2em',
              xl: '2.6em'
            },
            fontWeight: "200",
            textShadow: "0 3px 10px rgba(0, 0, 0, 0.78)",
            color: "white",
            margin: {
              xs: '55px -23px 15px -22px',
              sm: '55px -23px 15px -22px',
              md: '55px -23px 15px -22px',
              lg: '55px -23px 15px -22px',
              xl: '65px -23px 10px -22px',

            },
            lineHeight: "2",
          }}>Something great is on the way</Typography>
        </div>

        <div>
          <Button />
        </div>
        <div>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </main>
    </Box>
  );
}
export default Home
