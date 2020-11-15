export const row = (content, styles = "") => `<div class="row" style="${styles}">${content}</div>`;

export const col = content => `<div class="col-sm">${content}</div>`;

export const toCSS = (styles = {}) => {
  if (styles && typeof styles === "string") {
    return styles;
  }
  return Object.keys(styles)
    .map(key => `${key}: ${styles[key]}`)
    .join(";");
};

export const block = (type, title = type) => {
  return `
    <form name="${type}">
        <h5>${title}</h5>
        <div class="form-group">
          <input class="form-control" name="value" placeholder="значение"/>
        </div>
        <div class="form-group">
          <input class="form-control" name="styles" placeholder="стили: color: #000"/>
        </div>
        <button type="submit" class="btn btn-primary">Добавить</button>
    </form>
    <hr/>
    `;
};
