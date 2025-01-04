# Aircraft Charge Calculator

## Overview

The **Aircraft Charge Calculator** is a simple, user-friendly web application designed to calculate the total charges for airline operators based on aircraft weight and flight distance. The calculator takes into account various aircraft types, each with a unique weight in tons. The two main charges calculated are:

- **Terminal Navigation Charge (TNC)**: Based on aircraft weight.
- **En-route Charge (ENC)**: Based on aircraft weight and flight distance.

This tool helps airlines, ground operations, and other stakeholders in the aviation industry easily calculate the charges for their scheduled flights, both domestic and international. The charges are calculated in Naira (NGN) for domestic flights and in US Dollars (USD) for international flights.

## Features

- **Aircraft Type Selection**: Choose from a variety of aircraft types, each assigned with a specific weight in tons.
- **Distance Input**: Enter the route distance in kilometers for accurate charge calculations.
- **Dynamic Currency Conversion**: Charges for domestic flights are calculated in Naira (NGN), and for international flights, the charges are calculated in US Dollars (USD).
- **Simple and Intuitive Interface**: The application is easy to use with a straightforward design and real-time calculations.
- **Detailed Results**: View the breakdown of the Terminal Navigation Charge (TNC), En-route Charge (ENC), and the total charges based on the selected aircraft and flight distance.

## Technologies Used

- **HTML**: Structure and layout of the webpage.
- **CSS**: Styling and UI design for a modern, glassy interface.
- **JavaScript**: Logic for charge calculation, dynamic UI updates, and currency handling.
- **Responsive Design**: The application works seamlessly on both desktop and mobile devices.

## How It Works

1. **Select Aircraft Type**: Choose an aircraft type from a dropdown menu. The application supports both domestic (Nigerian) and international airlines.
2. **Enter Route Distance**: Input the distance of the flight in kilometers.
3. **Calculate Charges**: Click the "Calculate Charges" button, and the tool will compute the following:
    - **TNC (Terminal Navigation Charges)**: `TNC = 6000 * Aircraft Weight (in tons)`
    - **ENC (En-route Charges)**: `ENC = 2000 * Distance (in km) * Aircraft Weight (in tons)`
4. **View Results**: The results are displayed showing TNC, ENC, and the total charges in the appropriate currency (NGN or USD).

## Example

### Aircraft: OverLand Airways (10 tons)
- **Distance**: 500 km
- **TNC**: 6000 * 10 = ₦60,000
- **ENC**: 2000 * 500 * 10 = ₦10,000,000
- **Total Charges**: ₦10,060,000

### Aircraft: Ethiopian Airlines (25 tons, International)
- **Distance**: 2000 km
- **TNC**: 6000 * 25 = $150
- **ENC**: 2000 * 2000 * 25 = $100,000
- **Total Charges**: $100,150

## Installation

1. Clone the repository or download the project files:
[git clone https://github.com/Vinnie-tec/aircraft-charges-calculator.git]

2. Open the `index.html` file in your browser to view the web app.

## Future Enhancements

- Add more aircraft types to the list, with updated weights.
- Implement more advanced features like saving user preferences for quick future calculations.
- Include an option to export or print the calculated results.
- Integrate more advanced currency conversion mechanisms based on live exchange rates.


## Contact

Developed by **Agboola Vincent**, an I.T. student from Ibadan Airport, Oyo State, Nigeria.
