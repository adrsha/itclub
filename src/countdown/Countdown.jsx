import { useState, useEffect } from 'react';
import './Countdown.css';
import eventData from '../../data/Events.json';
import confettiImg1 from '/confetti1.gif';
import confettiImg2 from '/confetti2.gif';
import confettiImg3 from '/confetti3.gif';
import confettiSound from '/sound.mp3';
import mouseImg from '/m1.png';

// get the latest event
let latestEvent = eventData[0];
let tempDate;

for (let i = 0; i < eventData.length; i++) {
  tempDate = new Date(eventData[i].eventDate);
  let today = new Date();
  let latestEventDate = new Date(latestEvent.eventDate);
  if (tempDate > today) {
    if (latestEventDate > tempDate) {
      latestEvent = eventData[i];
    }
  }
}

function Countdown(props) {
  // Get the data of the event
  let dateStr = (props.endDate) ? new Date(props.endDate) : new Date(latestEvent.eventDate);
  let deadline = new Date(dateStr);
  const event = latestEvent.eventName;

  let [days, setDays] = useState(0);
  let [hours, setHours] = useState(0);
  let [mins, setMins] = useState(0);
  let [secs, setSec] = useState(0);
  // Countdown
  let today = new Date();
  let time = (deadline.getTime() - today.getTime()) / 1000;
  let tsec = time < 61596237 ? time : null;

  function UpdateDate(tsec) {
    setDays(
      Math.floor(tsec / 86400).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }),
    );
    setHours(
      Math.floor((tsec % 86400) / 3600).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }),
    );
    setMins(
      Math.floor((tsec % 3600) / 60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }),
    );
    setSec(
      Math.floor(tsec % 60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }),
    );
  }
  useEffect(() => {
    UpdateDate(tsec);
    setInterval(() => {
      today = new Date();
      tsec = (deadline.getTime() - today.getTime()) / 1000;
      if (tsec > 0) {
        UpdateDate(tsec);
      }
    }, 1000);
  }, []);

  if (tsec <= 0 && tsec != null && !props.eventStart) {
    let EventStr = ""
    return (
      <div className="countdown confetti">
        <audio id="myAudio">
          <source src={confettiSound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {
          (props.displayDays) ? <div className="countdownObj">Hackathon</div> : <div className="countdownObj">{event}</div>
        }
        {
          EventStr = (props.displayDays) ? "Event has ended !" : <div className="countdownObj">Event is happening Right Now!</div>

        }
        <img
          className="confettiImg"
          id="confetti1"
          src={confettiImg1}
          alt="confetti img"
        />
        <img
          className="confettiImg"
          id="confetti2"
          src={confettiImg2}
          alt="confetti img"
        />
        <img
          className="confettiImg"
          id="confetti3"
          src={confettiImg3}
          alt="confetti img"
        />
      </div>
    );
  }
  else if (props.displayDays && tsec != null) {

      return (

        <>

          <div className="countdown">

            <div className="countdownObj">
            <div className="notcountdown">
            {(props.eventStart) ? <>Time before Hackathon</> : <>Event starts in:</>}
          </div>

              <div className="Rows">

                <div className="hours countObjs">

                  {(parseInt(days)>0) ? (parseInt(hours)+parseInt(days)*24):hours}

                </div>
                </div>
                <div className="Rows">

                <div className="min countObjs">

                  {mins}

                  </div>
                  </div>
                <div className="Rows">

                <div className="sec countObjs">

                  {secs}

                </div>
                
              </div>


            </div>

          </div>

        </>

      )

  } else {
    return tsec > 0 && tsec != null ? (
      <>
        <div className="countdown">
          <div className="countdownObj">
            <div className="Rows">
              <div className="days countObjs">
                {days}
              </div>

              <div className="hours countObjs">
                {hours}
              </div>
            </div>
            <div className="Rows">
              <div className="min countObjs">
                {mins}
              </div>

              <div className="sec countObjs">
                {secs}
              </div>
            </div>
          </div>
          <div className="notcountdown">
            time before
            <br />
            {event}
            <br />
          </div>
          <img className="mouseimg" src={mouseImg} alt="mouse img" />
        </div>
      </>
    ) : (
      <>
        <div className="countdown">
          <div className="countdownObj">
            <div className="dayshour"></div>
                <div className="minsec">[ Event Coming Soon... ]</div>
          </div>
          <div className="notcountdown">
            We are working on the next event!
            <br />
            stay tuned 💻
            <br />
          </div>
          <img className="mouseimg" src={mouseImg} alt="mouse img" />
        </div>
      </>
    );
  }
}

export default Countdown;
