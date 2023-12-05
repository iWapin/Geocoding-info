# Extração de Dados de Cidades a partir do KML do IBGE

Este script em Node.js TypeScript extrai dados de cidades (Cidade, UF, Longitude, Latitude) de um arquivo KML fornecido pelo IBGE (Instituto Brasileiro de Geografia e Estatística). O arquivo KML contém informações geográficas para localidades brasileiras.

## Pré-requisitos

- se não estiver o Node.js e o npm instalados em sua máquina. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone ou baixe este repositório.

2. Instale as dependências executando o seguinte comando no terminal:

   ```bash
   npm install xml2js

## Utilização

1. Obtenha o arquivo KML do IBGE:

- URL: IBGE FTP - BR Localidades 2010

2. Extraia dados da cidade:

- Converta o arquivo KML em um arquivo ZIP.
- Extraia o conteúdo e utilize o arquivo cidades.kml.

3. Execute o script:

- Execute o seguinte comando no terminal:

  ```bash
   npm start

3.1 Veja os resultados:

- O script produzirá dados da cidade no formato: Cidade;UF;Longitude;Latitude.

## Referências

- IBGE FTP - BR Localidades 2010
- Fórum Microsoft MSDN - Lista de cidades e estados com latitude e longitude
