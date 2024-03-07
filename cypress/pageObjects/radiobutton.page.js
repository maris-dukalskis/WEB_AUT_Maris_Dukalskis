import { BasePage } from "./base.page";

export class RadioButtonPage extends BasePage{

    static get url(){
        return "/radio-button";
    }

    static get expandAllButton(){
        return cy.get("button[title='Expand all']");
    }

    static get yesButton(){
        return cy.get("label[for='yesRadio']");
    }
    static get impressiveButton(){
        return cy.get("label[for='impressiveRadio']");
    }

    static get noButton(){
        return cy.get("#noRadio");
    }

    static get outputText() {
        return cy.get(".text-success");
      }

}