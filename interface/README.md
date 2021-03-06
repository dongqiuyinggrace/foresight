# Interface

This is the interface of the Readiness Platform. It uses [React](https://reactjs.org/) and [Leaflet](http://leafletjs.com/) to display a map of hazard risk indicators.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). There are instructions [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) about running and updating it.


## Notes

- All times should be stored in the state as `ISO8601` strings.

Reducers - handle state change.
Actions - sent to reducers to handle state change.
Orchestrators - contain actions that need to happen in a certain order.
Containers - components connected to state.

## Running locally

Requirements:

- [Node.JS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/en/)

1. Install dependencies with `yarn install`.

2. Copy the example environment file, and change any variables necessary.
```sh
cp .env.example .env
```
Set `REACT_APP_INDICATOR_META_BASE` to the API server serving the metadata.
Set `REACT_APP_GEOSERVER_BASE` to the location of the Geoserver.
Set `REACT_APP_START_TIME` if the app should have a set start time - otherwise it will default to midnight before the current time.

3. Copy the example configuration files, and change anything necessary.

The example files in this directory contain open data. Follow the directions in `setup/interface` for Predictive Services-specific configuration.
```sh
cp config/indicators.json.example config/indicators.json
cp config/layers.json.example config/layers.json
cp config/map_settings.json.example config/map_settings.json
```

4. Run the server with `yarn run start`. It will be available at [localhost:3000](localhost:3000).

## Styleguide

The app has a styleguide generated by [React Styleguidist](https://react-styleguidist.js.org/).

To view this styleguide, run `yarn run styleguide`, and then visit `localhost:6060`.
To build the styleguide, run `yarn run styleguide:build`. You should do this whenever you make a change to a component.

Details on documenting new components are [in the React Styleguidist docs](https://react-styleguidist.js.org/docs/documenting.html).
