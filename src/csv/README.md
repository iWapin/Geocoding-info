# Leitura de CSV e API Geocoding em Node.js e TypeScript

Este projeto em Node.js TypeScript permite a leitura de dados de um arquivo CSV e disponibiliza esses dados em uma rota utilizando o framework Express. Além disso, inclui informações sobre uma API gratuita de Geocoding.

## Pré-requisitos

Certifique-se de ter o Node.js e npm instalados em sua máquina. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone ou baixe este repositório.
2. Instale as dependências executando o seguinte comando no terminal: `npm install`

## Configuração

Abra o arquivo `index.ts` e ajuste o caminho do arquivo CSV conforme necessário: `fs.createReadStream('caminho/para/seu/arquivo.csv')`

## Execução

Execute o servidor usando o seguinte comando: `npx ts-node index.ts`

O servidor estará acessível em [http://localhost:3000](http://localhost:3000).

## Rota para Obter Dados do CSV

Acesse [http://localhost:3000/dados](http://localhost:3000/dados) para obter os dados do CSV em formato JSON.

## Interface de Dados Municipais

A interface `DadosMunicipio` representa a estrutura esperada dos dados do CSV:

```
interface DadosMunicipio {
  id_municipio: number;
  id_bairro: number;
  uf: string;
  municipio: string;
  bairro: string;
  longitude: number;
  latitude: number;
}
```
## Exemplo

```
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
```

# Free Geocoding API

Converta entre Endereços e Coordenadas Geográficas com API gratuita da Geocoding.

### URLs da API de Geocoding

- Forward Geocode: [https://geocode.maps.co/search?q={address}](https://geocode.maps.co/search?q={address})
- Reverse Geocode: [https://geocode.maps.co/reverse?lat={latitude}&lon={longitude}](https://geocode.maps.co/reverse?lat={latitude}&lon={longitude})

### Limites de Solicitações da API (contas gratuitas)

- 1 solicitação por segundo
- Equivalente a: 86.400 solicitações por dia ou 2.592.000 solicitações por mês