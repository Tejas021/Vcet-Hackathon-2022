
import React ,{useState,useEffect} from 'react'
import TimerCss from   "./Timer.module.css";

const Timer = () => {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
    const [radius, setRadius] = useState(70);

    let interval;

  const startTimer = () => {



    // hr_dot.style.transform = `rotate(${h*30}deg)`; //360/12=30
    // min_dot.style.transform = `rotate(${m*6}deg)`; //360/60=6
    // sec_dot.style.transform = `rotate(${s*6}deg)`;


    const countDownDate = new Date("September 10,2022 01:00:00 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (24 * 60 * 60 * 1000));
      // let days = Math.floor( (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      let hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      let seconds = Math.floor((distance % (60 * 1000)) / 1000);
 
      

    if (hours > 12) {
        hours = hours - 12;
    }
    // // adding zero if single digit
    if (days < 10) {
        days = "0" + days;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes="0" + minutes;
        // console.log("0"+ minutes);
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    
    

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        // setSec(sec_dot);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });

  

 
  return (
    <div className={TimerCss.container}>
       <div className={TimerCss.timer}>
            <div className= {`${TimerCss.content} ${TimerCss.box}`}  >
                <div className={`${TimerCss.dots} ${TimerCss.day_dot}`} style={{transform:`rotate(${timerDays*15}deg)`}}></div>
                <svg >
                    <circle cx="70" cy="70"  r={radius}     ></circle>
                    <circle cx="70" cy="70" r={radius}  style={{strokeDashoffset : `${440 - (440 * timerDays) / 24}`}}></circle>
                </svg>
                <div className= {`${TimerCss.day} ${TimerCss.time}`} >
                    <p>{timerDays}</p>
                    <span>Days</span>
                </div>
            </div>
            <div className= {`${TimerCss.content} ${TimerCss.box}`}>
                <div className={`${TimerCss.dots} ${TimerCss.hr_dot}`}style={{transform:`rotate(${timerHours*30}deg)`}}></div>
                <svg>
                    <circle cx="70" cy="70" r={radius}></circle>
                    <circle cx="70" cy="70" r={radius}  style={{strokeDashoffset : `${440 - (440 * timerHours) / 12}`}} ></circle>
                </svg>
                <div className= {`${TimerCss.hours} ${TimerCss.time}`} >
                    <p>{timerHours}</p>
                    <span>Hours</span>
                </div>
                 
            </div>
            <div className= {`${TimerCss.content} ${TimerCss.box}`}>
                <div className={`${TimerCss.dots} ${TimerCss.min_dot}`}  style={{transform:`rotate(${timerMinutes*6}deg)`}}></div>
                <svg>
                    <circle cx="70" cy="70" r={radius}></circle>
                    <circle cx="70" cy="70" r={radius}  style={{strokeDashoffset : `${440 - (440 * timerMinutes) / 60}`}}></circle>
                </svg>
                <div className= {`${TimerCss.min} ${TimerCss.time}`}>
                      <p>{timerMinutes}</p>
                    <span>Minutes</span>
                </div>
            </div>
            <div className= {`${TimerCss.content} ${TimerCss.box}`}>
                <div className={`${TimerCss.dots} ${TimerCss.sec_dot}`}  style={{transform:`rotate(${timerSeconds*6}deg)`}}></div>
                <svg>
                    <circle cx="70" cy="70" r={radius}></circle>
                    <circle cx="70" cy="70" r={radius} style={{strokeDashoffset : `${440 - (440 * timerSeconds) / 60}`}} ></circle>
                </svg>
                <div className= {`${TimerCss.sec} ${TimerCss.time}`}>
                    <p>{timerSeconds}</p>
                    <span>Seconds</span>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Timer
