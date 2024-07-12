
import { Typography, Box } from "@mui/joy";
import CountdownTimer from "@/component/timer/timer";
import Button from "@/component/button/button";

export default function Home() {

  const targetDate = new Date('08/12/2024 23:59:59');
  return (
    <Box sx={{ 
      backgroundImage:'url(/assets/images/Background.png)',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center',
      backgroundSize:"cover"
     }}>
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="logo">
        </div>
        <div>
          <Typography sx={{
            fontSize: "2.8rem",
            fontWeight: "200",
            textShadow: "0 3px 10px rgba(0, 0, 0, 0.78)",
            color: "white",
            margin: '66px 0 20px 0',
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
