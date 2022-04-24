/*
This is an example configuration file.

COPY OR RENAME THIS FILE TO config.js.

Make sure you use real IDs from your HA entities.

Documentation at: https://github.com/resoai/TileBoard
*/

var CONFIG = {
  customTheme: CUSTOM_THEMES.WIN95, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
  transition: TRANSITIONS.ANIMATED, //ANIMATED or SIMPLE (better perfomance)
  entitySize: ENTITY_SIZES.SMALL, //SMALL, BIG are available
  tileSize: 120,
  tileMargin: 6,
  serverUrl: "http://homeassistant.agdon.net:8123",
  wsUrl: "ws://homeassistant.agdon.net:8123/api/websocket",
  authToken:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwMmQ5NmNiMjIxMWQ0Y2E2OGE5NTA4NDU4NWEyN2EyMyIsImlhdCI6MTY1MDc5MzYyMSwiZXhwIjoxOTY2MTUzNjIxfQ.4axuAOSF0OmSTV0U-6sW6tY4fr4fGXXzP11SDFW8WM0", // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
  //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
  //mapboxToken: "XXXXXXXXXX", // Required if you are using Mapbox for device tracker
  debug: false, // Prints entities and state change info to the console.
  pingConnection: true, //ping connection to prevent silent disconnections
  locale: "en-gb", // locale for date and number formats - available locales: it, de, es, fr, pt, ru, nl, pl, en-gb, en-us (default). See readme on adding custom locales.
  // next fields are optional
  events: [],
  timeFormat: 24,
  menuPosition: MENU_POSITIONS.BOTTOM, // LEFT or BOTTOM
  hideScrollbar: true, // horizontal scrollbar
  groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // HORIZONTALLY, VERTICALLY, GRID
  onReady: function () {},

  /*
  header: {
    // https://github.com/resoai/TileBoard/wiki/Header-configuration
    styles: {
      margin: "30px 130px 0",
      fontSize: "28px",
    },
    right: [
      {
        type: HEADER_ITEMS.CUSTOM_HTML,
        html: "St Neots",
      },
      {
        type: HEADER_ITEMS.WEATHER,
        styles: {
          margin: "0",
        },
        icon: "&weather.openweathermap.state",
        state: "&weather.openweathermap.state",
        icons: {
          "clear-day": "clear",
          "clear-night": "nt-clear",
          cloudy: "cloudy",
          exceptional: "unknown",
          fog: "fog",
          hail: "sleet",
          lightning: "chancestorms",
          "lightning-rainy": "tstorms",
          "partly-cloudy-day": "partlycloudy",
          "partly-cloudy-night": "nt-partlycloudy",
          partlycloudy: "partlycloudy",
          pouring: "rain",
          snowy: "snow",
          "snowy-rainy": "sleet",
          wind: "unknown",
          windy: "unknown",
          "windy-variant": "unknown",
        },
        states: {
          "clear-night": "Clear, night",
          cloudy: "Cloudy",
          exceptional: "Exceptional",
          fog: "Fog",
          hail: "Hail",
          lightning: "Lightning",
          "lightning-rainy": "Lightning, rainy",
          partlycloudy: "Partly cloudy",
          pouring: "Pouring",
          rainy: "Rainy",
          snowy: "Snowy",
          "snowy-rainy": "Snowy, rainy",
          sunny: "Sunny",
          windy: "Windy",
          "windy-variant": "Windy",
        },
        fields: {
          // most of that fields are optional
          summary: "&weather.openweathermap.state",
          temperature: "&sensor.openweathermap_temperature.state",
          temperatureUnit:
            "&sensor.openweathermap_temperature.attributes.unit_of_measurement",
          windSpeed: "&sensor.openweathermap_wind_speed.state",
          windSpeedUnit:
            "&sensor.openweathermap_wind_speed.attributes.unit_of_measurement",
          humidity: "&sensor.openweathermap_humidity.state",
          humidityUnit:
            "&sensor.openweathermap_humidity.attributes.unit_of_measurement",
          pressure: "&sensor.openweathermap_pressure.state",
          pressureUnit:
            "&sensor.openweathermap_pressure.attributes.unit_of_measurement",

          list: [
            // custom line
            "Rain: " +
              "&sensor.openweathermap_rain.state " +
              "&sensor.openweathermap_rain.attributes.unit_of_measurement",
            "Snow: " +
              "&sensor.openweathermap_snow.state " +
              "&sensor.openweathermap_snow.attributes.unit_of_measurement",
            "Cloud coverage " +
              "&sensor.openweathermap_cloud_coverage.state" +
              "&sensor.openweathermap_cloud_coverage.attributes.unit_of_measurement",
          ],
        },
      },
    ],
    left: [
      {
        type: HEADER_ITEMS.DATETIME,
        dateFormat: "dd EEEE, LLLL", //https://docs.angularjs.org/api/ng/filter/date
      },
      // {
      //    type: HEADER_ITEMS.DATE,
      //    dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
      // },
      // {
      //    type: HEADER_ITEMS.TIME,
      // },
    ],
  },
  */

  /*screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
       timeout: 300, // after 5 mins of inactive
       slidesTimeout: 10, // 10s for one slide
       styles: { fontSize: '40px' },
       leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
       slides: [
          { bg: 'images/bg1.jpeg' },
          {
             bg: 'images/bg2.png',
             rightTop: [ // put text to the 2nd slide
                {
                   type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                   html: 'Welcome to the <b>TileBoard</b>',
                   styles: { fontSize: '40px' }
                }
             ]
          },
          { bg: 'images/bg3.jpg' }
       ]
    },*/

  pages: [
    {
      title: "Main page",
      bg: "images/bg1.jpeg",
      icon: "mdi-home-outline", // home icon
      groups: [
        {
          title: "First group",
          width: 2,
          height: 4,
          // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
          items: [
            {
              position: [0, 0],
              type: TYPES.WEATHER_LIST,
              width: 2,
              height: 2,
              title: 'Forecast',
              id: {},
              icons: {
                 'clear-day': 'clear',
                 'clear-night': 'nt-clear',
                 'cloudy': 'cloudy',
                 'exceptional': 'unknown',
                 'fog': 'fog',
                 'hail': 'sleet',
                 'lightning': 'chancestorms',
                 'lightning-rainy': 'tstorms',
                 'partly-cloudy-day': 'partlycloudy',
                 'partly-cloudy-night': 'nt-partlycloudy',
                 'pouring': 'rain',
                 'snowy': 'snow',
                 'snowy-rainy': 'sleet',
                 'wind': 'unknown',
                 'windy': 'unknown',
                 'windy-variant': 'unknown'
              },
              hideHeader: false,
              secondaryTitle: 'Wind',
              // dateFormat: 'MMM d',  // default value
              list: [1,2,3,4,5].map(function (id) {
                 var ENTITY_ID = 'weather.openweathermap'
                 return {
                    date: function () {
                       var entityState = this.states[ENTITY_ID];
                       return entityState.attributes.forecast[id].datetime
                    },
                    icon: function () {
                       var entityState = this.states[ENTITY_ID];
                       return entityState.attributes.forecast[id].condition
                    },
                    // iconImage: null,  // replace icon with image
                    primary: function () {
                       var entityState = this.states[ENTITY_ID];
                       var forecast = entityState.attributes.forecast[id]
                       return /*forecast.templow + ' - ' +*/ forecast.temperature + ' °C'
                    },
                    secondary: function () {
                       var entityState = this.states[ENTITY_ID];
                       var forecast = entityState.attributes.forecast[id]
           
                       // Wind speed. Convert m/s to km/h.
                       // return Number.parseInt(forecast.wind_speed * 3.6) + ' km/h'
                       // Or if you prefer precipitation
                       return (forecast.precipitation || 0) + ' mm'
                    }
                 }
              })
           }
          ]
        },

        {
          title: 'Second group',
          width: 1,
          height: 4,
          // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
          items: [
            {
              position: [0, 0],
              height: 2,
              title: "Weather",
              //classes: ['-compact'], // enable this if you want a little square tile (1x1)
              type: TYPES.WEATHER,
              id: "weather.openweathermap",
              state: "&weather.openweathermap.state", // label with weather summary (e.g. Sunny)
              // Resolved value must either match one of the supported icons or be mapped
              // to one using the 'icons' option. See the 'icons' option for more information.
              icon: "&weather.openweathermap.state",
              icons: {
                "clear-day": "clear",
                "clear-night": "nt-clear",
                cloudy: "cloudy",
                exceptional: "unknown",
                fog: "fog",
                hail: "sleet",
                lightning: "chancestorms",
                "lightning-rainy": "tstorms",
                "partly-cloudy-day": "partlycloudy",
                "partly-cloudy-night": "nt-partlycloudy",
                pouring: "rain",
                snowy: "snow",
                "snowy-rainy": "sleet",
                wind: "unknown",
                windy: "unknown",
                "windy-variant": "unknown",
              },
              // A map from sensor's state (key) to human readable and possibly localized strings.
              states: {
                "clear-night": "Clear, night",
                cloudy: "Cloudy",
                exceptional: "Exceptional",
                fog: "Fog",
                hail: "Hail",
                lightning: "Lightning",
                "lightning-rainy": "Lightning, rainy",
                partlycloudy: "Partly cloudy",
                pouring: "Pouring",
                rainy: "Rainy",
                snowy: "Snowy",
                "snowy-rainy": "Snowy, rainy",
                sunny: "Sunny",
                windy: "Windy",
                "windy-variant": "Windy",
              },
              fields: {
                // most of that fields are optional
                summary: "&weather.openweathermap.state",
                temperature: "&sensor.openweathermap_temperature.state",
                temperatureUnit:
                  "&sensor.openweathermap_temperature.attributes.unit_of_measurement",
                windSpeed: "&sensor.openweathermap_wind_speed.state",
                windSpeedUnit:
                  "&sensor.openweathermap_wind_speed.attributes.unit_of_measurement",
                humidity: "&sensor.openweathermap_humidity.state",
                humidityUnit:
                  "&sensor.openweathermap_humidity.attributes.unit_of_measurement",
                pressure: "&sensor.openweathermap_pressure.state",
                pressureUnit:
                  "&sensor.openweathermap_pressure.attributes.unit_of_measurement",

              },
            },
          ]
        },

        {
          title: "Weather",
          width: 2,
          height: 4,
          // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
          items: [
            
          ],
        },
      ],
    },
    {
      title: "Climate",
      bg: "images/bg1.jpeg",
      icon: "mdi-thermometer",
      groups: [
        {
          title: "",
          width: 8,
          height: 4,
          items: [
            {
              position: [0, 0],
              id: "climate.livingroom_thermostat",
              width: 1,
              height: 1,
              title: "Livingroom",
              type: TYPES.CLIMATE,
              unit: "C",
              useHvacMode: false, // Optional: enables HVAC mode (by default uses PRESET mode)
              state: function (item, entity) {
                return "Current " + entity.attributes.current_temperature + "C";
              },
              states: {
                auto: "Automatic",
                heat: "Manual",
                off: "Off",
              },
            },
            {
              position: [1, 0],
              id: "climate.bedroom_1_thermostat",
              width: 1,
              height: 1,
              title: "Bedroom",
              type: TYPES.CLIMATE,
              unit: "C",
              useHvacMode: false, // Optional: enables HVAC mode (by default uses PRESET mode)
              state: function (item, entity) {
                return "Current " + entity.attributes.current_temperature + "C";
              },
              states: {
                auto: "Automatic",
                heat: "Manual",
                off: "Off",
              },
            },
            {
              position: [2, 0],
              id: "climate.bedroom_2_thermostat",
              width: 1,
              height: 1,
              title: "Varina",
              type: TYPES.CLIMATE,
              unit: "C",
              useHvacMode: false, // Optional: enables HVAC mode (by default uses PRESET mode)
              state: function (item, entity) {
                return "Current " + entity.attributes.current_temperature + "C";
              },
              states: {
                auto: "Automatic",
                heat: "Manual",
                off: "Off",
              },
            },
            {
              position: [3, 0],
              id: "climate.shack_thermostat",
              width: 1,
              height: 1,
              title: "Shack",
              type: TYPES.CLIMATE,
              unit: "C",
              useHvacMode: false, // Optional: enables HVAC mode (by default uses PRESET mode)
              state: function (item, entity) {
                return "Current " + entity.attributes.current_temperature + "C";
              },
              states: {
                auto: "Automatic",
                heat: "Manual",
                off: "Off",
              },
            },
          ],
        },
      ],
    },
    {
      title: "Systems",
      bg: "images/bg1.jpeg",
      icon: "mdi-numeric-2-box-outline",
      groups: [
        {
          title: "",
          width: 4,
          height: 3,
          items: [
            {
              position: [0, 0],
              width: 2,
              title: "Short instruction",
              type: TYPES.TEXT_LIST,
              id: {}, // using empty object for an unknown id
              state: false, // disable state element
              list: [
                {
                  title: "Read",
                  icon: "mdi-numeric-1-box-outline",
                  value: "README.md",
                },
                {
                  title: "Ask on forum",
                  icon: "mdi-numeric-2-box-outline",
                  value: "home-assistant.io",
                },
                {
                  title: "Open an issue",
                  icon: "mdi-numeric-3-box-outline",
                  value: "github.com",
                },
              ],
            },
            {
              position: [2, 0],
              width: 2,
              title: "System Status",
              type: TYPES.TEXT_LIST,
              id: {}, // using empty object for an unknown id
              state: false, // disable state element
              list: [
                {
                  title: "Free Memory",
                  icon: "mdi-memory",
                  value: function () {
                    // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                    var freeMemory = 15.444; // Just an example.
                    return this.$scope.filterNumber(freeMemory, 1) + " GB";
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
