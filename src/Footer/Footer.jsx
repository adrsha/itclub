import "./Footer.css";
export default function Footer(params) {
  // get year
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footerText">© {currentYear} All Rights Reserved.<hr/>
        <span style={{ color: "var(--primary-color)" }}>
          <a href="https://www.kecktm.edu.np/" target="_blank" rel="noopener noreferrer">
             <strong>Kathmandu Engineering College</strong>
          </a>
        </span>
      </div>
     
    </footer>
  );
}
