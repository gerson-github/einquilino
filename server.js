// server.js
import express from "express";

const app = express();

app.get("/api/produtos", (req, res) => {
  res.json([
    { id: 1, nome: "Produto A" },
    { id: 2, nome: "Produto B" },
  ]);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
