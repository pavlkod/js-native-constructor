import { block } from "../js/utils";
import { NewBlock } from "../classes/blocks";

export class Sidebar {
  constructor(selector, update) {
    this.$el = document.getElementById(selector);
    this.update = update;
    this.init();
  }
  init() {
    this.$el.insertAdjacentHTML("afterbegin", this.template);
    this.$el.addEventListener("submit", this.addBlock.bind(this));
  }
  addBlock(event) {
    event.preventDefault();
    const { name, value, styles } = event.target;

    const newBlock = new NewBlock(name, value.value, { styles: styles.value });
    const block = newBlock.add();

    this.update(block);
    this.clearForm(value, styles);
  }
  clearForm(...input) {
    input.forEach(item => (item.value = ""));
  }
  get template() {
    return [block("text", "Текстовый блок"), block("title", "Блок-заголовок")].join("");
  }
}
