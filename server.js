import express from "express";
import bodyparser from "body-parser";
import qr from "qr-image";
import fs from "fs";
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/generate", (req, res) => {
  try {
    var url = req.body.url;
    console.log(url);

    const filename = `qr_${Date.now()}.png`;
    var qr_svg = qr.image(url, { type: "png" });
    const filePath = `./public/${filename}`;
    qr_svg.pipe(fs.createWriteStream(filePath));
    var qr_file = fs.writeFile("url2.txt", url, (err) => {
      if (err) throw err;
      console.log("URL saved to url2.txt");
    });
    res.render("result", { qrpath: filename, url: url });
  } catch (error) {
    res.send("An error occurred while generating the QR code.");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
