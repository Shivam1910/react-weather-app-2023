// //http://openweathermap.org/img/w/01d.png

// const WeatherCard = ({ city }) => {
//   return (
//     <div style={styles.weatherCard}>
//       <p style={styles.city}>
//         {city.name} - {city.sys.country}
//       </p>
//       <p style={styles.weather.main}>{city.weather[0].main}</p>
//       <img
//         src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
//         alt={city.weather[0].description}
//         style={styles.icon}
//       />
//       <p style={styles.weather.sub}>{city.weather[0].description}</p>
//       <p style={styles.weather.main}>
//         {city.main.temp_max} <span>&#x2103;</span> Max
//       </p>
//       <p style={styles.weather.main}>
//         {city.main.temp_min} <span>&#x2103;</span> Min
//       </p>
//     </div>
//   );
// };

// export default WeatherCard;
// const styles = {
//   weatherCard: {
//     width: "15rem",
//     height: "15rem",
//     borderRadius: "10px",
//     padding: "5px",
//     boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//     background:
//       "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     paddingTop: 20,
//   },
//   icon: {},
//   city: {
//     color: "#fff",
//     fontSize: 20,
//     fontWeight: 600,
//   },
//   weather: {
//     main: {
//       color: "#fff",
//       fontSize: 16,
//       fontWeight: 600,
//     },
//     sub: {
//       color: "#fff",
//       fontSize: 10,
//     },
//   },
// };

const WeatherCard = ({ city }) => {
  return (
    <div style={styles.weatherCard}>
      <p style={styles.city}>
        {city.name}, {city.sys.country}
      </p>
      <p style={styles.weatherMain}>{city.weather[0].main}</p>
      <img
        src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
        alt={city.weather[0].description}
        style={styles.icon}
      />
      <p style={styles.weatherSub}>{city.weather[0].description}</p>
      <div style={styles.tempContainer}>
        <p style={styles.temperature}>
          {city.main.temp_max}&#x2103; <span style={styles.tempLabel}>Max</span>
        </p>
        <p style={styles.temperature}>
          {city.main.temp_min}&#x2103; <span style={styles.tempLabel}>Min</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;

const styles = {
  weatherCard: {
    width: "18rem",
    height: "18rem",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    background:
      "linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
  },
  icon: {
    width: "80px",
    height: "80px",
  },
  city: {
    fontSize: "22px",
    fontWeight: 700,
    marginBottom: "10px",
    textAlign: "center",
  },
  weatherMain: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "8px",
    textAlign: "center",
  },
  weatherSub: {
    fontSize: "14px",
    fontWeight: 400,
    textTransform: "capitalize",
    marginBottom: "15px",
    textAlign: "center",
  },
  tempContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 10px",
  },
  temperature: {
    fontSize: "16px",
    fontWeight: 600,
  },
  tempLabel: {
    fontSize: "12px",
    fontWeight: 400,
    marginLeft: "4px",
  },
};

