"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("clientsw.js").then((function(e){console.log("Service Worker registered! Scope: ",e.scope)})).catch((function(e){console.log("Service Worker registration failed: ",e)}))}));