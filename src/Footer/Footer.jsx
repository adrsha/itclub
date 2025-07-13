import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footerRow">
        <span>© {currentYear} All Rights Reserved.</span>
        <span className="footerCollege">
          <a
            href="https://www.kecktm.edu.np/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Kathmandu Engineering College</strong>
          </a>
        </span>
      </div>
    </footer>
  );
}
