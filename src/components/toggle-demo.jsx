import React, { useState } from "react";

const ToggleDemo = () => {
  //   console.log(React); object {}
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      style={{
        background: isDarkMode ? "#1a1a2e" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#1a1a2e",
        padding: 24,
        borderRadius: 12,
        transition: "all 0.3s",
      }}
    >
      {/* Toggle pattern — prev state bilan */}
      {/* previous state - oldingi state */}
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <button onClick={() => setIsVisible((prevState) => !prevState)}>
        {isVisible ? "Yashirish" : "Ko'rsatish"}
      </button>

      {isVisible && <p>Yashirin matn! 🎉</p>}
    </div>
  );
};

export default ToggleDemo;
