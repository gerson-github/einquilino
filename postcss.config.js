// postcss.config.js
//import tailwindcss from "@tailwindcss/postcss";
//import tailwindcss from "tailwindcss";
// import autoprefixer from "autoprefixer";

// export default {
//   plugins: [tailwindcss(), autoprefixer()],
// };

import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import postcssUrl from "postcss-url";

export default {
  plugins: [
    postcssImport(),
    postcssUrl({ url: "copy", useHash: true }),
    tailwindcss(),
    autoprefixer(),
  ],
};
