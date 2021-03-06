sap.ui.define([
		'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	"sap/m/MessageToast",
	"sap/m/MessageBox"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel, MessageToast, MessageBox) {
		"use strict";

		return Controller.extend("twm.UI5Module.controller.Main", {
             getparameter: function ( parameterName){
let parameters = new URLSearchParams(window.location.search);
return parameters.get(parameterName);
},
onPress: function(){
    var html = new sap.ui.core.HTML();
                html = this.getView().byId("idhtml");
// var sUrl = "http://10.179.128.107:8000/sap/bc/gui/sap/its/webgui?%7etransaction=SE12&sap-client=400&sap-language=EN";
var sUrl = "http://sisb01.twutil.net:8000/sap/bc/gui/sap/its/webgui";
// var sUrl = "https://sapes5.sapdevcenter.com/sap/bc/gui/sap/its/webgui?~transaction=SE12&sap-client=002&sap-language=EN#";
                window.open(sUrl, "_self");
               
// var sUrl = "https://sisb01.twutil.net:8100/sap/bc/gui/sap/its/webgui?EVBSD-VSTELLE=751538585&sap-language=EN&~transaction=ES62&~OKCode=%2F00";
                // html.setContent("<iframe src=" + sUrl + " width='100%' height='100%'></iframe>");
            
        

},
onPress2: function(){
    var html = new sap.ui.core.HTML();
                html = this.getView().byId("idhtml");
var sUrl = "http://sisb01.twutil.net:8000/sap/bc/gui/sap/its/webgui/?~transaction=*ZTOPT%20P_MDTYPE=EMMACase;P_MD_VAL=0123456;&sap-theme=sap_tradeshow&~OKCODE=ENTE&sap-client=400&sap-language=EN&";
// var sUrl = "http://sisb01.twutil.net:8000/sap/bc/gui/sap/its/webgui";
// var sUrl = "https://sapes5.sapdevcenter.com/sap/bc/gui/sap/its/webgui?~transaction=SE12&sap-client=002&sap-language=EN#";
                // window.open(sUrl, "_self");
                html.setContent("<iframe src=" + sUrl + " width='100%' height='100%'></iframe>");
            
        

},
onPress3: function(){
    var html = new sap.ui.core.HTML();
                html = this.getView().byId("idhtml");
var sUrl = "https://sisb01.twutil.net:8100/sap/bc/gui/sap/its/webgui?sap-client=100&sap-language=EN";
// var sUrl = "http://sisb01.twutil.net:8000/sap/bc/gui/sap/its/webgui";
// var sUrl = "https://sapes5.sapdevcenter.com/sap/bc/gui/sap/its/webgui?~transaction=SE12&sap-client=002&sap-language=EN#";
                // window.open(sUrl, "_self");
                //  sap.m.URLHelper.redirect(sUrl, false)
                html.setContent("<iframe src=" + sUrl + " width='90%' height='100%'></iframe>");
            
        

},
			onInit: function () {





//                 console.log("this is hard coded")
// console.log(this.getparameter("page"));


// this.getView().byId("idinput").setValue(this.getparameter("page"));

// 	this._wizard = this.byId("CreateProductWizard");
// 			this._oNavContainer = this.byId("wizardNavContainer");
// 			this._oWizardContentPage = this.byId("wizardContentPage");

// 			this.model = new JSONModel();
// 			this.model.setData({
// 				productNameState: "Error",
// 				productWeightState: "Error"
// 			});
// 			this.getView().setModel(this.model);
// 			this.model.setProperty("/productType", "Mobile");
// 			this.model.setProperty("/availabilityType", "In Store");
// 			this.model.setProperty("/navApiEnabled", true);
// 			this.model.setProperty("/productVAT", false);
// 			this.model.setProperty("/measurement", "");
// 			this._setEmptyValue("/productManufacturer");
// 			this._setEmptyValue("/productDescription");
// 			this._setEmptyValue("/size");
// 			this._setEmptyValue("/productPrice");
// 			this._setEmptyValue("/manufacturingDate");
//             this._setEmptyValue("/discountGroup");
            
// var ParameterData = this.getOwnerComponent().getComponentData();
// var po = ParameterData.startupParameters.po[0];
            },
           	setProductType: function (evt) {
			var productType = evt.getSource().getTitle();
			this.model.setProperty("/productType", productType);
			this.byId("ProductStepChosenType").setText("Chosen product type: " + productType);
			this._wizard.validateStep(this.byId("ProductTypeStep"));
		},

		setProductTypeFromSegmented: function (evt) {
			var productType = evt.getParameters().item.getText();
			this.model.setProperty("/productType", productType);
			this._wizard.validateStep(this.byId("ProductTypeStep"));
		},

		additionalInfoValidation: function () {
			var name = this.byId("ProductName").getValue();
			var weight = parseInt(this.byId("ProductWeight").getValue());

			if (isNaN(weight)) {
				this.model.setProperty("/productWeightState", "Error");
			} else {
				this.model.setProperty("/productWeightState", "None");
			}

			if (name.length < 6) {
				this.model.setProperty("/productNameState", "Error");
			} else {
				this.model.setProperty("/productNameState", "None");
			}

			if (name.length < 6 || isNaN(weight)) {
				this._wizard.invalidateStep(this.byId("ProductInfoStep"));
			} else {
				this._wizard.validateStep(this.byId("ProductInfoStep"));
			}
		},

		optionalStepActivation: function () {
			MessageToast.show(
				'This event is fired on activate of Step3.'
			);
		},

		optionalStepCompletion: function () {
			MessageToast.show(
				'This event is fired on complete of Step3. You can use it to gather the information, and lock the input data.'
			);
		},

		pricingActivate: function () {
			this.model.setProperty("/navApiEnabled", true);
		},

		pricingComplete: function () {
			this.model.setProperty("/navApiEnabled", false);
		},

		scrollFrom4to2: function () {
			this._wizard.goToStep(this.byId("ProductInfoStep"));
		},

		goFrom4to3: function () {
			if (this._wizard.getProgressStep() === this.byId("PricingStep")) {
				this._wizard.previousStep();
			}
		},

		goFrom4to5: function () {
			if (this._wizard.getProgressStep() === this.byId("PricingStep")) {
				this._wizard.nextStep();
			}
		},

		wizardCompletedHandler: function () {
			this._oNavContainer.to(this.byId("wizardReviewPage"));
		},

		backToWizardContent: function () {
			this._oNavContainer.backToPage(this._oWizardContentPage.getId());
		},

		editStepOne: function () {
			this._handleNavigationToStep(0);
		},

		editStepTwo: function () {
			this._handleNavigationToStep(1);
		},

		editStepThree: function () {
			this._handleNavigationToStep(2);
		},

		editStepFour: function () {
			this._handleNavigationToStep(3);
		},

		_handleNavigationToStep: function (iStepNumber) {
			var fnAfterNavigate = function () {
				this._wizard.goToStep(this._wizard.getSteps()[iStepNumber]);
				this._oNavContainer.detachAfterNavigate(fnAfterNavigate);
			}.bind(this);

			this._oNavContainer.attachAfterNavigate(fnAfterNavigate);
			this.backToWizardContent();
		},

		_handleMessageBoxOpen: function (sMessage, sMessageBoxType) {
			MessageBox[sMessageBoxType](sMessage, {
				actions: [MessageBox.Action.YES, MessageBox.Action.NO],
				onClose: function (oAction) {
					if (oAction === MessageBox.Action.YES) {
						this._handleNavigationToStep(0);
						this._wizard.discardProgress(this._wizard.getSteps()[0]);
					}
				}.bind(this)
			});
		},

		_setEmptyValue: function (sPath) {
			this.model.setProperty(sPath, "n/a");
		},

		handleWizardCancel: function () {
			this._handleMessageBoxOpen("Are you sure you want to cancel your report?", "warning");
		},

		handleWizardSubmit: function () {
			this._handleMessageBoxOpen("Are you sure you want to submit your report?", "confirm");
		},

		productWeighStateFormatter: function (val) {
			return isNaN(val) ? "Error" : "None";
		},

		discardProgress: function () {
			this._wizard.discardProgress(this.byId("ProductTypeStep"));

			var clearContent = function (content) {
				for (var i = 0; i < content.length; i++) {
					if (content[i].setValue) {
						content[i].setValue("");
					}

					if (content[i].getContent) {
						clearContent(content[i].getContent());
					}
				}
			};

			this.model.setProperty("/productWeightState", "Error");
			this.model.setProperty("/productNameState", "Error");
			clearContent(this._wizard.getSteps());
		} 
		});
	});
