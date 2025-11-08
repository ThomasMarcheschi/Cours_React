function Clock({ showClock, onUnmout }) {
  const [hour, setHour] = React.useState(() =>
    new Date().toLocaleTimeString("fr-FR", { hour12: false })
  );

  React.useEffect(() => {
    if (showClock) {
      setTimeout(() => {
        setHour(new Date().toLocaleTimeString("fr-FR", { hour12: false }));
      }, 1000);
    } else {
      return () => {
        onUnmout(hour);
      };
    }
  });

  return (
    <div>
      <p>{hour}</p>
    </div>
  );
}

function App() {
  const [showClock, setShowClock] = React.useState(true);

  const onUnmout = (timer) => {
    clearTimeout(timer);
  };

  return (
    <div>
      <Clock showClock={showClock} onUnmout={onUnmout} />
      {!showClock ? <p>C'est démonté</p> : ""}
      <button onClick={() => setShowClock(!showClock)}>
        {showClock ? "Arret" : "Départ"}
      </button>
    </div>
  );
}
