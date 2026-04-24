# 🛒 FakeStore CLI

A command-line application built with Node.js that allows you to manage products using the FakeStore API.

## 🚀 Features

* Get all products
* Get a product by ID
* Create a new product
* Delete a product

## 🛠️ Technologies

* Node.js
* JavaScript (ESModules)
* Fetch API

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/fakestore-cli.git
cd fakestore-cli
```

Install dependencies (if needed):

```bash
npm install
```

## ▶️ Usage

Run commands using:

```bash
npm run start <METHOD> <RESOURCE> [DATA]
```

### 📌 Examples

Get all products:

```bash
npm run start GET products
```

Get a product by ID:

```bash
npm run start GET products/5
```

Create a new product:

```bash
npm run start POST products "T-Shirt" 300 clothing
```

Delete a product:

```bash
npm run start DELETE products/3
```

## ⚙️ Project Structure

```
.
├── index.js
└── package.json
```

## 📚 API Reference

This project uses the FakeStore API:
https://fakestoreapi.com/

## ✍️ Author

Marco Novas

## 📄 License

This project is for educational purposes.
