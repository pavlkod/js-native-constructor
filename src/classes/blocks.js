import { row, col, toCSS } from "../js/utils";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }
  toHTML() {
    throw new Error("Метод должен быть реализован");
  }
}

export class NewBlock extends Block {
  constructor(type, value, options) {
    super(value, options);
    this.type = type;
  }
  add() {
    switch (this.type) {
      case "text":
        return new TextBlock(this.value, this.options);
      default:
        return new TitleBlock(this.value, this.options);
    }
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { tag = "h1", styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), toCSS(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    return row(col(`<p>${this.value}</p>`), toCSS(this.options.styles));
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    return row(this.value.map(col).join(""), toCSS(this.options.styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    return row(`<img src=${this.value} />`, toCSS(this.options.styles));
  }
}
