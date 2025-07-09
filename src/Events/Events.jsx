import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import isMobile from '../ExtraFuncs.js';
import Parallax from "../Parallax/Parallax";
import eventData from "../../data/Events.json";
import Lines from "../Lines/Lines.jsx";
import { LenisComponent } from "../Lenis/Lenis.js";
import "./Events.css";

function Events() {
  const eventHtml =
    (
      eventData.map((ev) => {
        if (ev.id === "") {
          return (
            <div key={ev.id} className="Eventlists">
              <Cards

                id="DetailCard"
                title="Coming Soon"
                description="Stay tuned for our upcoming events!"
                button1="Notify Me"   
              />
            </div>
          );
        }


        if (ev.id % 2 === 0) {
          return (
            <div key={ev.id} className="Eventlists">
              <div className="emptyspace"></div>
              <Cards
                id="DetailCard"
                title={ev.eventName}
                description={ev.eventDescription}
                date={ev.eventDate}
                button1="Roll In"
                button2="Learn More"
              />
            </div>
          );
        } else {
          return (
            <div key={ev.id} className="Eventlists">
              <Cards
                id="DetailCard"
                title={ev.eventName}
                button1="Roll In"
                link1={ev.eventLink}
                button2="Learn More"
                link2={ev.eventLink}
                description={ev.eventDescription}
              />
              <div className="emptyspace"></div>
            </div>
          );
        }
      })
    );

  return (
    <>
      <Nav home notices />
      <Lines />
      <LenisComponent />
      {
        // isMobile() ? null : <Parallax />
      }
      <Parallax />
      <div className="eventTitle">Our Events</div>
      <div className="events">
        <div className="eventContent">{eventHtml}</div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
