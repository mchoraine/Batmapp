define({ "api": [  {    "type": "get",    "url": "/alerts/",    "title": "Request all alerts informations",    "group": "Alerts",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "alerts",            "description": "<p>List of alerts</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "alert.date",            "description": "<p>Alert creation date</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "alert.criticity",            "description": "<p>Alert criticity</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "alert.type",            "description": "<p>Alert type</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "alert.geoPosition.latitude",            "description": "<p>position of user</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "alert.geoPosition.longitude",            "description": "<p>position of user</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/apiAlert.coffee",    "groupTitle": "Alerts",    "name": "GetAlerts"  },  {    "type": "get",    "url": "/user/:id",    "title": "Request all alerts informations for a user",    "group": "Alerts",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Alert[]",            "optional": false,            "field": "alerts",            "description": "<p>List of alerts</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>User id</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/apiAlert.coffee",    "groupTitle": "Alerts",    "name": "GetUserId"  },  {    "type": "post",    "url": "/alerts/",    "title": "Request create an alert",    "group": "Alerts",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "alerts",            "description": "<p>created</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "alert.date",            "description": "<p>Alert creation date</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "alert.criticity",            "description": "<p>Alert criticity</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "alert.type",            "description": "<p>Alert type</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "alert.geoPosition",            "description": "<p>position of user</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "alert.geoPosition.latitude",            "description": "<p>position of user</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "alert.geoPosition.longitude",            "description": "<p>position of user</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/apiAlert.coffee",    "groupTitle": "Alerts",    "name": "PostAlerts"  },  {    "type": "post",    "url": "/alerts/call-police/:alertID",    "title": "call the police for alert",    "group": "Alerts",    "version": "0.0.0",    "filename": "app/controllers/apiAlert.coffee",    "groupTitle": "Alerts",    "name": "PostAlertsCallPoliceAlertid"  },  {    "type": "post",    "url": "/alerts/call-samu/:alertID",    "title": "call the samu for alert",    "group": "Alerts",    "version": "0.0.0",    "filename": "app/controllers/apiAlert.coffee",    "groupTitle": "Alerts",    "name": "PostAlertsCallSamuAlertid"  },  {    "type": "post",    "url": "/alerts/command",    "title": "Request create an alert from vocal speech",    "group": "Alerts",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "[String]",            "optional": false,            "field": "msg",            "description": "<p>List of speech command</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "result",            "description": "<p>of command</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/apiAlert.coffee",    "groupTitle": "Alerts",    "name": "PostAlertsCommand"  },  {    "type": "post",    "url": "/alerts/ongoing/:alertID",    "title": "set user going on alert",    "group": "Alerts",    "version": "0.0.0",    "filename": "app/controllers/apiAlert.coffee",    "groupTitle": "Alerts",    "name": "PostAlertsOngoingAlertid"  },  {    "type": "post",    "url": "/alerts/resolve/:alertID",    "title": "set the alert resolved",    "group": "Alerts",    "version": "0.0.0",    "filename": "app/controllers/apiAlert.coffee",    "groupTitle": "Alerts",    "name": "PostAlertsResolveAlertid"  },  {    "type": "get",    "url": "/login",    "title": "Request to log the user",    "group": "Users",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>User log-in</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/ApiLogin.coffee",    "groupTitle": "Users",    "name": "GetLogin"  },  {    "type": "get",    "url": "/users/",    "title": "Request all Users informations",    "group": "Users",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "users",            "description": "<p>List of user</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "users.email",            "description": "<p>Users email.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/ApiUser.coffee",    "groupTitle": "Users",    "name": "GetUsers"  },  {    "type": "post",    "url": "/users/",    "title": "Create a user",    "group": "Users",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>User created</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/ApiUser.coffee",    "groupTitle": "Users",    "name": "PostUsers"  },  {    "type": "post",    "url": "/users/update-gcm-token/",    "title": "Update user gcm token",    "group": "Users",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>User with position updated</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>GCM Token</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/ApiUser.coffee",    "groupTitle": "Users",    "name": "PostUsersUpdateGcmToken"  },  {    "type": "post",    "url": "/users/update-position/",    "title": "Update user geoposition and his alerts",    "group": "Users",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>User with position updated</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "latitude",            "description": "<p>User geoPosition : Latitude</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "longitude",            "description": "<p>User geoPosition : Longitude</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/ApiUser.coffee",    "groupTitle": "Users",    "name": "PostUsersUpdatePosition"  },  {    "type": "post",    "url": "/users/upload/",    "title": "Update user image profil",    "group": "Users",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>User with image profil updated</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "File",            "optional": false,            "field": "file",            "description": "<p>Image to use</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/ApiUser.coffee",    "groupTitle": "Users",    "name": "PostUsersUpload"  }] });
