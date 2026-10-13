import { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = ({ isLive = false }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2027-04-08T00:00:00').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-telemetry-wrapper animate-fade-in">
      {isLive ? (
        <div
          className="telemetry-pill telemetry-live-pill"
          role="status"
          aria-live="polite"
        >
          <span className="live-indicator-wrapper" aria-hidden="true">
            <span className="live-ping-ring" />
            <span className="live-core-dot" />
          </span>
          <span className="live-status-text">CONFERENCE CURRENTLY IN SESSION</span>
        </div>
      ) : (
        <div className="telemetry-pill" role="timer" aria-label="Conference countdown">
          <div className="telemetry-unit">
            <span className="telemetry-value">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="telemetry-label">DAYS</span>
          </div>
          <span className="telemetry-separator" aria-hidden="true">:</span>
          <div className="telemetry-unit">
            <span className="telemetry-value">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="telemetry-label">HRS</span>
          </div>
          <span className="telemetry-separator" aria-hidden="true">:</span>
          <div className="telemetry-unit">
            <span className="telemetry-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="telemetry-label">MIN</span>
          </div>
          <span className="telemetry-separator" aria-hidden="true">:</span>
          <div className="telemetry-unit">
            <span className="telemetry-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="telemetry-label">SEC</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;
