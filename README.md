# Free Geocoding API

Converta entre Endereços e Coordenadas Geográficas com API gratuita da Geocoding.

### URLs da API de Geocoding

- Forward Geocode: [https://geocode.maps.co/search?q={address}](https://geocode.maps.co/search?q={address})
- Reverse Geocode: [https://geocode.maps.co/reverse?lat={latitude}&lon={longitude}](https://geocode.maps.co/reverse?lat={latitude}&lon={longitude})

### Limites de Solicitações da API (contas gratuitas)

- 1 solicitação por segundo
- Equivalente a: 86.400 solicitações por dia ou 2.592.000 solicitações por mês

# Dados Geográficos Essenciais

Este repositório disponibiliza arquivos `.csv` contendo:

- Coordenadas de latitude e longitude dos [municípios](latitude_longitude_cidades.csv) do Brasil.
- Coordenadas de latitude e longitude de diversos [bairros](latitude_longitude_bairros.csv) brasileiros.

Se identificar qualquer irregularidade, como dados incorretos ou ausentes, por favor, crie uma [Issue](https://github.com/iWapin/Geocoding-info/issues) ou [Pull Request](https://github.com/iWapin/Geocoding-info/pulls). Agradecemos antecipadamente!

## Aviso!

Atualmente, a base inclui `5.568` municípios e `36.982` bairros. Não podemos assegurar a precisão contínua desses dados, pois estão sujeitos a alterações.

A listagem de bairros está disponível somente para os maiores municípios do Brasil. As demais cidades são representadas por um único bairro denominado "Centro".

## Origem dos Dados

Os dados foram inicialmente extraídos do [FTP do IBGE](ftp://geoftp.ibge.gov.br/organizacao_territorial/localidades/Google_KML/BR%20Localidades%202010%20v1.kml) e outro exemplo do [Localidades do IBGE](https://www.ibge.gov.br/geociencias/organizacao-do-territorio/estrutura-territorial/27385-localidades.html) e posteriormente comparados com uma lista de municípios e CEPs obtida do site [Free Geocoding API](https://geocode.maps.co/).

### Discrepâncias

Durante o processo de comparação entre essas duas fontes, diversas correções foram realizadas, incluindo:

- Adição de municípios novos
- Correção de erros de ortografia
- Atualização de cidades que mudaram de nome

Exemplos:

- Ipauçu-SP foi ajustada para Ipaussu-SP
- Governador Lomanto Júnior-BA foi alterada para Barro Preto-BA
- Etc.

