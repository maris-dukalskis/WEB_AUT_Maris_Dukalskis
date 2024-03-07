const { TextBoxPage } = require("../../pageObjects/textbox.page");
const { CheckBoxPage } = require("../../pageObjects/checkbox.page");
const { RadioButtonPage } = require("../../pageObjects/radiobutton.page");
const { WebTablesPage } = require("../../pageObjects/webtables.page");

describe("DemoQA", () => {
    context("Text Box", () => {
      beforeEach(() => {
        TextBoxPage.visit();
      });
  
      it("Enter textfield data", () => {

        // TODO: Implement scenario
        TextBoxPage.usernameField.type("Joe Joe");
        TextBoxPage.emailField.type("Joe.Joe@example.com");
        TextBoxPage.currentAddressField.type("Random address");
        TextBoxPage.permanentAddressField.type("Random address 2");
        TextBoxPage.submitButton.click();

        TextBoxPage.outputNameField.should("have.text","Name:Joe Joe");
        TextBoxPage.outputEmailField.should("have.text","Email:Joe.Joe@example.com");
        TextBoxPage.outputCurrentAddressField.should("have.text","Random address ");
        TextBoxPage.outputPermanentAddressField.should("have.text","Random address 2");
      });

      it("Enter textfield data - incorrect email format - negative case", () => {
        TextBoxPage.emailField.type("Joe.Joe@e@xample.com");
        TextBoxPage.submitButton.click();

        TextBoxPage.emailField.should("have.class", 'field-error');
      });

    });
    context("Check Box", () => {
        beforeEach(() => {
            CheckBoxPage.visit();
        });
        it("Click checkboxes- ", () => {
            CheckBoxPage.expandAllButton.click();
            CheckBoxPage.checkboxes.contains("Notes").click();
            CheckBoxPage.checkboxes.contains("Angular").click();
            CheckBoxPage.checkboxes.contains("Private").click();
            CheckBoxPage.checkboxes.contains("Excel File.doc").click();

            CheckBoxPage.selectedCheckboxes.should("have.text","You have selected :notesangularprivateexcelFile");
        });

  
      });

    context("Radio button", () => {
        beforeEach(() => {
            RadioButtonPage.visit();
        });
        it("Click radio button- yes", () => {
            RadioButtonPage.yesButton.click();
            RadioButtonPage.outputText.should("have.text","Yes");
        });
        it("Click radio button- impressive", () => {
            RadioButtonPage.impressiveButton.click();
            RadioButtonPage.outputText.should("have.text","Impressive");
        });
        it("Click radio button- no", () => {
            RadioButtonPage.noButton.should("be.disabled",true);
        });


    });

    context("Web tables", () => {
        beforeEach(() => {
            WebTablesPage.visit();
        });
        it("Click new web table", () => {
            WebTablesPage.addButton.click();
            WebTablesPage.firstNameField.type("Joe");
            WebTablesPage.lastNameField.type("Joe");
            WebTablesPage.emailField.type("Joe.Joe@example.com");
            WebTablesPage.ageField.type("83");
            WebTablesPage.salaryField.type("10");
            WebTablesPage.departmentField.type("Finance");
            WebTablesPage.submitButton.click();

            WebTablesPage.rows.contains("Joe.Joe@example.com").parent().should("contain.text","Joe");
        });

    });
    
  });