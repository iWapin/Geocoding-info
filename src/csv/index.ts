import express from "express";
import csvParser from "csv-parser";
import fs from "fs";

interface DadosMunicipio {
  id_municipio: number;
  id_bairro: number;
  uf: string;
  municipio: string;
  bairro: string;
  longitude: number;
  latitude: number;
}

const app = express();
const port = 3000;

// Rota para obter dados do CSV
app.get("/dados", (req, res) => {
  const dados: DadosMunicipio[] = [];

  // Ler o arquivo CSV
  fs.createReadStream("caminho/para/seu/arquivo.csv")
    .pipe(csvParser({ separator: ";" }))
    .on("data", (row) => {
      // Mapear os dados para a interface
      const dadosMunicipio: DadosMunicipio = {
        id_municipio: Number(row.id_municipio),
        id_bairro: Number(row.id_bairro),
        uf: row.uf,
        municipio: row.municipio,
        bairro: row.bairro,
        longitude: Number(row.longitude),
        latitude: Number(row.latitude),
      };

      dados.push(dadosMunicipio);
    })
    .on("end", () => {
      res.json(dados);
    });
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
