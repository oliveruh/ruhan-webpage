import STYLES from './Footer.module.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; {new Date().getFullYear()} Ruhan Monte. Available for projects worldwide. <a href="https://calendar.app.google/99yey4sNeFUYR7ii8" className={STYLES.calendarLink} data-umami-event="click-schedule-meeting-footer" target="_blank" rel="noopener noreferrer">Schedule a meeting!</a></p>
        </div>
    );
}

export default Footer;