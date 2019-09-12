/* eslint-disable class-methods-use-this */
import { Selector, t } from 'testcafe';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

class HomePage {
  get btnAdd() { return Selector('#addItem'); }

  get inputName() { return Selector('#input-name'); }

  get inputDescription() { return Selector('#text-area-description'); }

  get btnSave() { return Selector('#btn-save-form'); }

  get btnCancelForm() { return Selector('#btn-cancel-form'); }

  get itemIndexOne() { return Selector('#item1'); }

  get itemIndexOneDelete() { return Selector('#item1 > #kid'); }

  async addAnItem(label) {
    await t
      .wait(1000)
      .click(this.btnAdd)
      .wait(1000)
      .typeText(this.inputName, `Test-${label}`)
      .wait(1000)
      .typeText(this.inputDescription, lorem)
      .wait(1000)
      .click(this.btnSave)
      .wait(1000)
      .click(this.btnCancelForm)
      .wait(1000);
  }

  async editItem(label, description) {
    await t
      .wait(1000)
      .click(this.itemIndexOne)
      .wait(1000)
      .typeText(this.inputName, `Test-${label}`)
      .wait(1000)
      .typeText(this.inputDescription, (lorem + description))
      .wait(1000)
      .click(this.btnSave)
      .wait(3000);
  }

  async deleteItem() {
    await t
      .wait(2000)
      .hover(this.itemIndexOne)
      .wait(1000)
      .click(this.itemIndexOne)
      .wait(3000);
  }
}

export default new HomePage();
