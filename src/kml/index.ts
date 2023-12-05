import * as fs from "fs";
import * as parseString from "xml2js";

// Read the KML file content
const kmlContent = fs.readFileSync("cidades.kml", "utf-8");

// Parse the KML content
parseString.parseString(kmlContent, (err, result) => {
  if (err) {
    console.error("Error parsing KML file:", err);
    return;
  }

  const document = result.kml.Document[0];

  console.log("Cidade;UF;Longitude;Latitude");

  // Iterate through each Folder element
  document.Folder.forEach((folder) => {
    // Iterate through each Placemark element
    folder.Placemark.forEach((cidade) => {
      // Extract city name
      const cityName = cidade.name[0].trim();

      // Extract UF
      const description = cidade.description[0];
      const sanitizedDescription = description.replace(
        '<META http-equiv="Content-Type" content="text/html">',
        ""
      );
      const html = parseString.parseStringSync(sanitizedDescription, {
        explicitArray: false,
      });

      const uf = html.html.body.table[1].tr[3].td[1];

      // Extract coordinates
      const coordinates = cidade.MultiGeometry[0].Point[0].coordinates[0]
        .trim()
        .replace(",", ";");

      // Print the result
      console.log(`${cityName};${uf};${coordinates}`);
    });
  });
});
