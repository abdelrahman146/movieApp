const fs = require("fs");
fs.writeFileSync(
  "./.env",
  `api_key=${process.env.api_key}\nbase_url=${process.env.base_url}\nimages_base_path=${process.env.images_base_path}\n`
);
