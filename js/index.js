let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:  41.649830139453755, lng: 45.0490443875 },
    zoom: 7,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");
  locationButton.style.backgroundColor = "#fff";
  locationButton.style.border = "1px solid #fff";
  locationButton.style.borderRadius = "5px";
  locationButton.style.boxShadow = "0 1px 3px rgba(0,0,0,.3)";
  locationButton.style.color = "rgb(25,25,25)";
  locationButton.style.cursor = "pointer";
  locationButton.style.fontFamily = "Roboto,Arial,sans-serif";
  locationButton.style.fontSize = "15px";
  locationButton.style.lineHeight = "32px";
  locationButton.style.margin = "6px 0 20px";
  locationButton.style.padding = "0 3px";
  locationButton.style.textAlign = "center";
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  locationButton.title = "Click to find your current location";
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Your current location");
          infoWindow.open(map);
          map.setCenter(pos);


          infoWindow.open(map);
          // Configure the click listener.
          map.addListener("click", (mapsMouseEvent) => {
            // Close the current InfoWindow.
            infoWindow.close();

            // Create a new InfoWindow.
            infoWindow = new google.maps.InfoWindow({
              position: mapsMouseEvent.latLng,
            });
            const crossPoint = mapsMouseEvent.latLng.toJSON();

            let lat = crossPoint.lat;
            let lng = crossPoint.lng;

            const url = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=" + lat + "&lon=" + lng + "";
            fetch(url).then(res => res.json()).then(function (data) {
              const contentString =

                '<div id="content">' +
                "<p>" + "<strong><u>Point Location:</u> </strong>" +
                "<p>lat: " + lat + " lng: " + lng + "</p>" +
                '<p id="heading" class="firstHeading"><strong>Weather:</strong></p>' +
                '<div id="bodyContent">' +
                "<ul id='foo'>" +
                " <div> <u> Time: " + data.properties.timeseries[0].time + " </u> " +
                "<div> Temperature: " + data.properties.timeseries[0].data.instant.details.air_temperature + " C </div>" +
                "<div> Pressure: " + data.properties.timeseries[0].data.instant.details.air_pressure_at_sea_level + " hPA </div>" +
                "<div> Wind speed: " + data.properties.timeseries[0].data.instant.details.air_pressure_at_sea_level + " m/s </div>" +
                "<div> Humidity: " + data.properties.timeseries[0].data.instant.details.relative_humidity
                + " % </div> " +
                // "<div> Summary: " + data.properties.timeseries[0].data.next_12_hours.summary.symbol_code + "</div>" +
                "</div> <br />" +
                " <div> <u> Time: " + data.properties.timeseries[12].time + " </u> " +
                "<div> Temperature: " + data.properties.timeseries[12].data.instant.details.air_temperature + " C </div>" +
                "<div> Pressure: " + data.properties.timeseries[12].data.instant.details.air_pressure_at_sea_level + " hPA </div>" +
                "<div> Wind speed: " + data.properties.timeseries[12].data.instant.details.air_pressure_at_sea_level + " m/s </div>" +
                "<div> Humidity: " + data.properties.timeseries[12].data.instant.details.relative_humidity
                + " % </div> " +
                // "<div> Summary: " + data.properties.[12].data.next_12_hours.summary.symbol_code + "</div>" +
                "</div> <br />" +
                " <div> <u> Time: " + data.properties.timeseries[24].time + " </u> " +
                "<div> Temperature: " + data.properties.timeseries[24].data.instant.details.air_temperature + " C </div>" +
                "<div> Pressure: " + data.properties.timeseries[24].data.instant.details.air_pressure_at_sea_level + " hPA </div>" +
                "<div> Wind speed: " + data.properties.timeseries[24].data.instant.details.air_pressure_at_sea_level + " m/s </div>" +
                "<div> Humidity: " + data.properties.timeseries[24].data.instant.details.relative_humidity
                + " % </div>" +
                // "<div> Summary: " + data.properties.timeseries[24].data.next_12_hours.summary.symbol_code + "</div>" +
                " </div> <br />" +
                " <div> <u> Time: " + data.properties.timeseries[36].time + " </u> " +
                "<div> Temperature: " + data.properties.timeseries[36].data.instant.details.air_temperature + " C </div>" +
                "<div> Pressure: " + data.properties.timeseries[36].data.instant.details.air_pressure_at_sea_level + " hPA </div>" +
                "<div> Wind speed: " + data.properties.timeseries[36].data.instant.details.air_pressure_at_sea_level + " m/s </div>" +
                "<div> Humidity: " + data.properties.timeseries[36].data.instant.details.relative_humidity
                + " % </div> " +
                // "<div> Summary: " + data.properties.timeseries[36].data.next_12_hours.summary.symbol_code + "</div>" +
                "</div> <br />" +
                " <div> <u> Time: " + data.properties.timeseries[48].time + " </u> " +
                "<div> Temperature: " + data.properties.timeseries[48].data.instant.details.air_temperature + " C </div>" +
                "<div> Pressure: " + data.properties.timeseries[48].data.instant.details.air_pressure_at_sea_level + " hPA </div>" +
                "<div> Wind speed: " + data.properties.timeseries[48].data.instant.details.air_pressure_at_sea_level + " m/s </div>" +
                "<div> Humidity: " + data.properties.timeseries[48].data.instant.details.relative_humidity
                + " % </div> " +
                // "<div> Summary: " + data.properties.timeseries[48].data.next_12_hours.summary.symbol_code + "</div>" +
                "</div> <br />" +
                " <div> <u> Time: " + data.properties.timeseries[60].time + " </u> " +
                "<div> Temperature: " + data.properties.timeseries[60].data.instant.details.air_temperature + " C </div>" +
                "<div> Pressure: " + data.properties.timeseries[60].data.instant.details.air_pressure_at_sea_level + " hPA </div>" +
                "<div> Wind speed: " + data.properties.timeseries[60].data.instant.details.air_pressure_at_sea_level + " m/s </div>" +
                "<div> Humidity: " + data.properties.timeseries[60].data.instant.details.relative_humidity
                + " % </div> " +
                // "<div> Summary: " + data.properties.timeseries[12].data.next_12_hours.summary.symbol_code + "</div>" +
                "</div> <br />" +
                " <div> <u> Time: " + data.properties.timeseries[72].time + " </u> " +
                "<div> Temperature: " + data.properties.timeseries[72].data.instant.details.air_temperature + " C </div>" +
                "<div> Pressure: " + data.properties.timeseries[72].data.instant.details.air_pressure_at_sea_level + " hPA </div>" +
                "<div> Wind speed: " + data.properties.timeseries[72].data.instant.details.air_pressure_at_sea_level + " m/s </div>" +
                "<div> Humidity: " + data.properties.timeseries[72].data.instant.details.relative_humidity
                + " % </div> " +
                // "<div> Summary: " + data.properties.timeseries[72].data.next_12_hours.summary.symbol_code + "</div>" +
                "</div> <br />" +
                // " <div> <u> Time: " + data.properties.timeseries[87].time + " </u> " +
                // "<div> Temperature: " + data.properties.timeseries[87].data.instant.details.air_temperature + " C </div>" +
                // "<div> Pressure: " + data.properties.timeseries[87].data.instant.details.air_pressure_at_sea_level + " hPA </div>" +
                // "<div> Wind speed: " + data.properties.timeseries[87].data.instant.details.air_pressure_at_sea_level + " m/s </div>" +
                // "<div> Humidity: " + data.properties.timeseries[87].data.instant.details.relative_humidity
                //   + " % </div> " +
                "</div> <br />"
                + "<div> <strong><i>Weathermap - made for smart people</i></strong> </div>"

              "</div>"
              // console.log(contentString);
              // TO DO: add other variable and make validation if time period does not exists.
              infoWindow.setContent(contentString);
              infoWindow.open(map);
            });
          });
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}



function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;
