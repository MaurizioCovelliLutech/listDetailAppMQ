sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.View2", {
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("RouteView2").attachPatternMatched(this._onRouteMatched, this);
        },

        onRouteMatched: function (oEvent) {
            var sCarrid = oEvent.getParameter("arguments").carrid;
            var oView = this.getView();
            var oModel = oView.getModel();
            
            var aConnections = oModel.getProperty("/UX_C_Connection_TP").filter(function (connection) { //da testare
                return connection.Carrid === sCarrid;
            });

            oView.setModel(new JSONModel({
                Connections: aConnections
            }), "connections");
            
            oView.bindElement({   //capire se va bene questo 
                path: "/UX_C_Carrier_TP/" + sCarrid,
                model: "UX_C_Carrier_TP"
            });
        }
    });
});
