import React, { useState, useEffect } from "react";

const Switcher1 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    // Change the language here based on isChecked value
    changeLanguage(isChecked ? "en" : "kn");
  };

  // This function changes the language using Google Translate
  const changeLanguage = (lang) => {
    const googleTranslateElement = window.google.translate.TranslateElement;
    if (googleTranslateElement) {
      googleTranslateElement({
        pageLanguage: "en",
        includedLanguages: "en,kn", // Include any languages you want
        layout: googleTranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      });

      // Trigger the language change
      const selectLanguage = document.querySelector(".goog-te-combo");
      if (selectLanguage) {
        selectLanguage.value = lang; // Set the selected language
        selectLanguage.dispatchEvent(new Event("change")); // Trigger the change event
      }
    }
  };

  useEffect(() => {
    // Dynamically load Google Translate script
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate once the script is loaded
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div className="flex items-center">
      <span className="mr-2 text-sm font-medium">ENG</span> {/* Left label */}
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div className="block h-8 w-14 rounded-full bg-[#E5E7EB] transition-all duration-300 ease-in-out"></div>
          <div
            className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform duration-300 ${
              isChecked ? "translate-x-6" : ""
            }`}
          ></div>
        </div>
      </label>
      <span className="ml-2 text-sm font-medium">KAN</span> {/* Right label */}
      {/* Google Translate dropdown */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default Switcher1;
