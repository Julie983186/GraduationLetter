import fs from "fs";
import path from "path";

const folder = "./public/images/na";

const files = fs
  .readdirSync(folder)
  .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

files.forEach((file, index) => {
  const ext = path.extname(file);

  const newName = `${String(index + 1).padStart(2, "0")}${ext}`;

  fs.renameSync(
    path.join(folder, file),
    path.join(folder, newName)
  );
});

console.log("完成重新命名");