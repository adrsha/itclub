import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Parallax from "../Parallax/Parallax";
import noticeData from "../../data/Notices.json";
import Lines from "../Lines/Lines.jsx";
import { LenisComponent } from "../Lenis/Lenis.js";
import "./Notices.css";
import { useParams } from "react-router-dom";



function Notices({ detail }) {
  const { noticeId } = useParams();
  let content;
  if (detail && noticeId) {
    const notice = noticeData.find((n) => n.id == noticeId);
    if (!notice) {
      content = (
        <div className="Eventlists">
          <Cards id="DetailCard" title="WRONG PAGE!!" />
        </div>
      );
    } else {
      content = (
        <div className="Eventlists">
          <Cards
            id="DetailCard"
            title={notice.noticeHead}
            description={notice.noticeBody}
            button1="Apply"
            link1={notice.buttonForm}
            button2="Discord"
            link2={notice.buttonDiscord}
          />
        </div>
      );
    }
  } else {
    const hasNonEmptyNotice = noticeData.some(
      (noti) => noti.noticeHead?.trim() !== ""
    );

    if (!hasNonEmptyNotice) {
      content = (
        <div className="Eventlists">
          <Cards
            id="DetailCard"
            title="No Notices"
            description="Currently, there are no notices available."
          />
        </div>
      );
    } else {
      const noticesHtml = noticeData.map((noti) => (
        <div key={noti.id} className="Eventlists">
          <Cards
            id="noticeCard"
            title={noti.noticeHead}
            content={noti.noticeBody}
            link={`/notices/${noti.id}`}
          />
        </div>
      ));
      content = <div className="eventContents">{noticesHtml}</div>;
    }
  }
  return (
    <>
      <Nav home events />
      <Lines />
      <LenisComponent />
      <Parallax />
      <div className="eventTitle">
        {detail ? "Notice Details" : "Notices!!"}
      </div>
      <div className="events">{content}</div>
      <Footer />
    </>
  );
}

export default Notices;
