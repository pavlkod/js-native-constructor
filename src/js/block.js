import { row, col, toCSS } from "./utils";

const title = block => {
  const { tag = "h1", styles } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), toCSS(styles));
};

const text = block => row(col(`<p>${block.value}</p>`));

const columns = block => row(block.value.map(col).join(""), toCSS(block.options.styles));

const image = block => row(`<img src=${block.value} />`, toCSS(block.options.styles));

export const block = {
  title,
  text,
  columns,
  image,
};
