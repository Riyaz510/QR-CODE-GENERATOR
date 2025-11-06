# 🧾 QR Code Generator

A simple and elegant **QR Code Generator Web App** built using **Node.js**, **Express**, and **EJS**.  
It allows users to enter any URL and instantly generate a downloadable QR code image.

---

## 🚀 Features

✅ Generate QR codes instantly from any URL  
✅ Clean and modern UI using HTML & CSS  
✅ Automatically saves generated QR images in the `/public` folder  
✅ Download your QR code directly from the browser  
✅ Fast, lightweight, and easy to use

---

## 🛠️ Tech Stack

| Layer | Technology Used |
|-------|------------------|
| **Frontend** | HTML, CSS, EJS |
| **Backend** | Node.js, Express.js |
| **Library** | [qr-image](https://www.npmjs.com/package/qr-image) |
| **File Handling** | Node.js File System (fs) |

---

## 📦 Installation & Setup

Follow these steps to run the project locally 👇

1️⃣ Clone this repository
```bash
git clone https://github.com/<your-username>/qr-code-generator.git
cd qr-code-generator
```bash

2️⃣ Install dependencies
```bash
npm install
or 
npm install express body-parser qr-image ejs
```bash

3️⃣ Start the server
```bash
node server.js
```bash

or, if you have nodemon installed:
```bash
nodemon server.js
```bash

4️⃣ Open in browser

Visit: 👉 http://localhost:3000

📁 Project Structure
qr-code-generator/
│
├── public/               # Stores generated QR images
│
├── views/                # EJS templates
│   ├── index.ejs         # Homepage (input form)
│   └── result.ejs        # Result page (QR code display)
│
├── server.js             # Main backend logic
├── package.json          # Dependencies & scripts
├── .gitignore            # Ignored files/folders (like node_modules)
└── README.md             # Documentation

🎯 How It Works

- User enters a URL on the homepage.

- The app uses the qr-image library to generate a PNG QR code.

- The QR code is saved in the public/ folder.

- The user is redirected to the result page where the QR code is displayed.

- Option to download the QR code or generate another.

📄 License
This project is licensed under the MIT License.
You’re free to use, modify, and distribute this project with attribution.