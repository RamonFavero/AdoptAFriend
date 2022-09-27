import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import {Auth0Provider} from '@auth0/auth0-react';

ReactDOM.render(
<Auth0Provider
domain="ramonfavero.us.auth0.com"
clientId="Eh9leVP1FDZN2DPm2koHQbi0zU01snNp"
redirectUri={window.location.origin}
>
<App />
</Auth0Provider>
, document.getElementById("root"));