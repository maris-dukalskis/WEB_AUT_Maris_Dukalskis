import { BasePage } from "./base.page";

export class TextBoxPage extends BasePage{
    static get url(){
        return"/text-box";
    }
    static get usernameField(){
        return cy.get("input[id='userName']");
    }
    static get emailField(){
        return cy.get("input[id='userEmail']");
    }
    static get currentAddressField(){
        return cy.get("textarea[id='currentAddress']");
    }
    static get permanentAddressField(){
        return cy.get("textarea[id='permanentAddress']");
    }

    static get outputNameField(){
        return  cy.get("#output #name");
    }
    static get outputEmailField(){
        return  cy.get("#output #email");
    }
    static get outputCurrentAddressField(){
        return  cy.get("#output #currentAddress");
    }
    static get outputPermanentAddressField(){
        return  cy.get("#output #permanentAddress");
    }

}