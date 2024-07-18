
import { Typography, Box } from "@mui/joy";
import CountdownTimer from "@/component/timer/timer";
import Button from "@/component/button/button";
import Logo from "@/component/logo/logo";

export default function Home() {

  const targetDate = new Date('08/12/2024 23:59:59');
  return (
    <Box sx={{
      overflow: 'hidden'
    }}>
      <main className="flex min-h-screen flex-col items-center justify-center p-20">
        <div className="logo">
          <Logo />
        </div>
        <div>
          <Typography sx={{
            fontSize: {
              xs: '1.0em',
              sm: '1.5em',
              md: '1.8em',
              lg: '2.6em',
              xl: '3.6em'
            },
            fontWeight: "200",
            textShadow: "0 3px 10px rgba(0, 0, 0, 0.78)",
            color: "white",
            margin: {
              xs: '66px -23px 20px -22px',
              sm: '66px -23px 20px -22px',
              md: '23px -23px 20px -22px',
              lg: '23px -23px 20px -22px',
              xl: '66px -23px 20px -22px',
              
            },
            lineHeight: "2.5",
          }} className="text">Something great is on the way</Typography>
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
