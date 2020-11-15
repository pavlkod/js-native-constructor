export class Site {
  constructor(selector) {
    this.$el = document.getElementById(selector);
  }
  render(model) {
    this.$el.textContent = "";
    model.forEach(item => {
      this.$el.insertAdjacentHTML("beforeend", item.toHTML());
    });
  }
}
