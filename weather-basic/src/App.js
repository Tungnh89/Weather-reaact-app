import './index.css';

function App() {
  return (
    <div className="app">
      <div className="nav-bar">
        <div className="icon__nav">
          <i class="fas fa-align-justify"></i>
        </div>
        <div className="icon__nav clock-time">
          10:29
        </div>
        <div className="icon__nav battery">
          <i class="fas fa-battery-full"></i>
        </div>
      </div>

      <div className="weather-city">
        <div className="icon-weather">
          icon3
        </div>

        <div className="city-name">
          Hà Nội
        </div>

        <div className="temperature">
          <span>61&deg;C</span>
        </div>

        <div className="weather-name">
          Nắng nóng
        </div>
      </div>

      <div className="temperature-information">
        <div className="temperature-information_humidity">
          <p>Humidity</p>
          <p>82%</p>
        </div>

        <div className="temperature-information_wind">
          <p>Wind</p>
          <p>4 MPH</p>
        </div>

        <div className="temperature-information_pressure">
          <p>Pressure</p>
          <p>1019 mb</p>
        </div>
      </div>

      <div className="click-weather">
        <button className="btn btn-success">Hà Nội</button>
        <button className="btn btn-warning">Đà Nẵng</button>
        <button className="btn btn-danger">TP.HCM</button>
      </div>

    </div>
  );
}

export default App;
