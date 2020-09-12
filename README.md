<h1 align="center">
	<img
		width="600"
		alt="Aromed"
		src="/images/logo.png">
</h1>

<h3 align="center">
	A web-based Appointment Booking System for Channeling Centers.
</h3>

<p align="center">
<a href="https://www.npmjs.com/package/react"><img src="https://img.shields.io/badge/Made%20with-React-blue"></a>
<a href="https://github.com/AromedMedical/aromed-system/graphs/contributors/"><img src="https://img.shields.io/github/contributors/AromedMedical/aromed-system.svg"></a>
<a href="https://www.gnu.org/licenses/gpl-3.0"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg"></a>
</p>

## Getting Started

### Prerequisites

Install the latest versions of [Node.js](https://github.com/nodejs/node) and [react](https://github.com/facebook/react)

### Installing

1. Clone the respository:

    ```
    git clone git@github.com:AromedMedical/aromed-web.git
    ```

2. Select one Project:

    **Select Admin Project**
    ```
    cd aromed-admin-frontend
    ```
    
    **Select Client Project**
    ```
    cd aromed-client-frontend
    ```
3. Update Firebase Configurations

    + Rename `.env.example` to `.env`
    
    + Add following configurations,
    ```
    REACT_APP_API_KEY=
    REACT_APP_AUTH_DOMAIN=
    REACT_APP_DATABASE_URL=
    ```
    
3. Install packages:

    **Using npm**
    ```
    npm install
    ```
    
    **Using yarn**
    ```
    yarn
    ```
4. Run the server:

    **Using npm**
    ```
    npm start
    ```
    
    **Using yarn**
    ```
    yarn start
    ```
    
## Running the tests
Unit testing is done using [Jest Framework](https://jestjs.io) and [Enzyme](https://enzymejs.github.io/enzyme)

   **Using npm**
   ```
   npm test
   ```
   **Using yarn**
   ```
   yarn run test
   ```

## Deployment
This project is hosted on firebase. First, the app should be build before deploying.

1. Build the App

   **Using npm**
   ```
   npm run build
   ```
   **Using yarn**
   ```
   yarn run build
   ```

2. Deploy to firebase

   ```
   firebase deploy
   ```

## Built With

* [Bootstrap](https://github.com/twbs/bootstrap)
* [React](https://github.com/facebook/react)
* [FireBase](https://firebase.google.com)

## Authors

See the detailed list of [contributors](https://github.com/AromedMedical/aromed-web/contributors) who contributed to this project.

## License

This project is licensed under the [GPL-3 License.](https://github.com/AromedMedical/aromed-web/blob/master/LICENSE)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)