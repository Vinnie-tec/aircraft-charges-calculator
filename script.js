document.getElementById("calculate-btn").addEventListener("click", () => {
    const aircraftSelect = document.getElementById("aircraft");
    const weight = parseFloat(aircraftSelect.value); // Aircraft weight in tons
    const aircraftName = aircraftSelect.options[aircraftSelect.selectedIndex].text;
    const isInternational = aircraftSelect.options[aircraftSelect.selectedIndex].dataset.international === "true";
    const distance = parseFloat(document.getElementById("distance").value); // Distance in kilometers
  
    // Validation for distance
    if (isNaN(distance) || distance <= 0) {
      document.getElementById("result").innerHTML = "<p>Please enter a valid distance.</p>";
      return;
    }
  
    // Constants
    const TNC_RATE_NAIRA = 6000; // Fixed rate for TNC (Domestic)
    const ENC_RATE_NAIRA = 2000; // Fixed rate for ENC (Domestic)
    const TNC_RATE_DOLLARS = 20; // Fixed rate for TNC (International)
    const ENC_RATE_DOLLARS = 5; // Fixed rate for ENC (International)
  
    // Calculate charges
    let TNC, ENC, totalCharges, currency;
    if (isInternational) {
      TNC = TNC_RATE_DOLLARS * weight;
      ENC = ENC_RATE_DOLLARS * distance * weight;
      totalCharges = TNC + ENC;
      currency = "USD";
    } else {
      TNC = TNC_RATE_NAIRA * weight;
      ENC = ENC_RATE_NAIRA * distance * weight;
      totalCharges = TNC + ENC;
      currency = "NGN";
    }
  
    // Display results
    document.getElementById("result").innerHTML = `
      <h2>Calculation Results</h2>
      <p><strong>Aircraft:</strong> ${aircraftName}</p>
      <p><strong>Aircraft Weight:</strong> ${weight} tons</p>
      <p><strong>Distance:</strong> ${distance} km</p>
      <p><strong>Terminal Navigation Charges (TNC):</strong> ${currency} ${TNC.toFixed(2)}</p>
      <p><strong>En-route Charges (ENC):</strong> ${currency} ${ENC.toFixed(2)}</p>
      <p><strong>Total Charges:</strong> ${currency} ${totalCharges.toFixed(2)}</p>
    `;
  });
  