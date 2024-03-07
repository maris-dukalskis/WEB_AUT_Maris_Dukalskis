import { BasePage } from "./base.page";

export class CheckBoxPage extends BasePage{

    static get url(){
        return "/checkbox";
    }

    static get expandAllButton(){
        return cy.get("button[title='Expand all']");
    }

    static get checkboxes(){
        return cy.get(".rct-node");
    }

    static get selectedCheckboxes(){
        return cy.get("div[id='result']");
    }
    

}