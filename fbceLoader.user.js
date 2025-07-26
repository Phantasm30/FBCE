// ==UserScript==
// @name FBCE Nabi ver Loader
// @namespace https://www.bondageprojects.com/
// @version 0.1
// @description Customize the expressions used by FBC
// @author Sidious
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant none
// @run-at document-end
// ==/UserScript==
/* eslint-disable camelcase */

(function () {
    "use strict";
    const script = document.createElement("script");
    script.src = `https://phantasm30.github.io/FBCE/FBCE.js?timestamp=${Date.now()}`;
    script.type = "module";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
})();
