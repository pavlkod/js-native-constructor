import image from "../assets/vanila.png";
import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from "../classes/blocks";

const model = [
  new TitleBlock("Заголовок: Конструктор блоков на чистом JS", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #151b3b, #192145, #2cd8ff)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new TextBlock(
    "<b>Текстовый блок:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis, tempore saepe expedita dolor amet quasi excepturi earum tenetur natus dolorum voluptas repellendus, odit provident fugit velit corrupti labore, consequuntur libero perspiciatis impedit suscipit numquam recusandae. Deserunt, saepe autem dolorum voluptates animi labore dolorem beatae deleniti quia, aliquam possimus, voluptas ipsum nemo minus esse dicta rerum exercitationem sed. In, labore officiis dolores optio voluptas, ratione amet iusto dicta nisi aperiam odio! Dolor, molestiae rem! Iste modi commodi officiis temporibus consequuntur fuga libero repudiandae ex repellendus! Atque, illo qui rem mollitia eveniet praesentium! Sequi quasi nam quas amet quos dicta dolorum.",
    {
      styles: {
        padding: "1rem",
      },
    }
  ),
  new ColumnsBlock(["Native JS", "ООП и SOLID", "UI"], {
    styles: {
      background: "linear-gradient(to right, #151b3b, #192145, #2cd8ff)",
      color: "#fff",
      padding: "1.5rem",
    },
  }),
  new ImageBlock(image, {
    styles: {
      "justify-content": "center",
      padding: "15px",
    },
  }),
];
export { model };
