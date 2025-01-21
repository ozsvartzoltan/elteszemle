const { google } = require("googleapis");

export default async function handler(req, res) {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    "elteszemle@windy-skyline-436920-u8.iam.gserviceaccount.com",
    process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
    [
      "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDUsYeo+hpUG6Me\nW88rQGuwTg2J6Ly690tL/ZD2BphA9RLK7+Xfdb3fTu7K/PLGM97ei4HqpaYaaLz2\nRrpJhGATZi//ljRuevAVXzvGZJ8bJK3YVBNZxyuhYvMDGNhxarLX87BCGbn3xXiF\n500YjZabMdHyGrt27g6YBxgE+0KGuvQf9PiEt/vZfq7AfAtZEYPn7EQPiWcEL9Zn\nNYeCMMsO+3yBXGcPQYz+dEVylIF9YadTZP2Ev4eUOUKoMGb906mkbHegoTgWSLz6\nWNSnR5pTMEsNYbPYM1iRoXoxcIoKF7qX8jSFsIpAR7StQZhOlRJmZ2m/2nllNxZf\nWm6eSFtXAgMBAAECggEAIUZo7+G47sGoIl7AqYaZkmqTqai0phd8OzY/UI41kawF\ntaQUdYJJIz+JEk7CeImy62Qt/hTOSMFsFqd4C3pfQYmyJq1MJKCtINrWUjJ5xdhW\nLkrxABGt3MDLPgfMDOphcnGYeK7nrkDBm0lVgWrdTghcTSErhO63b8dkVZstjEA4\nWc/DHPVmOKLfS7E3n4tpYQPSFuUmkJ/RjOb8NuIJe6vpPy7k9dYh++tuVDTXJq9W\nq5RbEWWYFQC/iIuFIIppvTT0InfqfQ600rs2kiz4cxWwQAdSM5Xu1tls10rm5VX8\np3UZ2b1PiPl1uLq7+LAwDYV6JQTjBppgmkp5zBszgQKBgQDvZJjr1sDe6OaoqnD7\nI8IP8kiOqoNdSDJslX1ig5Nn3l/CO25ZWFvxDA3qRfynQ4rNgJeJJnxkFDxDkyKK\nW8pGOnB309eWpAfP5vRMasvSNp3g/uuk6xLfAJcmx9wG4wNnWvuzgUwYpvs3V1WK\nFlSzbjpP88FWoZnTG9KgayZflwKBgQDjcsYd48JZvJuFYqh7B1Fgn5f+7vFHIxMO\nd5hoKaD/rGqRLEivV0p8T4vTzhvgOuz2w4V0bKCiDKOSUCC4mih96jRLUYr2Fuoq\nCZRJ+wcwZx+zmF8ufRDVh77auQK+HzE9GumJqQEc7JfZ/P+jXqx3GJjFvdcrHcPI\noLXR4WlaQQKBgQDZHVWL33OBN52qrxpUyzOAHu8rZP5LJeWFkXbsWATimU4j7J7C\nLV8FmTctmFfyo1FJ3CyTWPJMGgYmC1WyQlmLpAjIxLqshwwGxKIghGNiveImY0z4\nf7LXycNMisrE/DLkFCJfxQ5s9VS19mFAIcykB36fcKWSmnHWg09d6pAc9QKBgQCi\nMSBSBC59a1/DuFzIjqlbK7Np2d44iix2rpYCAV2LtNmxeFDEqIy3JMpjWaDLP3nn\nZfnu0d+ibzzdg0IyIcwqLi7oXtenMSP+oiIat2WjAIa8vTVyo0Cz5D8XHcN07C1i\nk6RhxCDFDXojuqRZTZPSwbl/mSas2mbY1LGTXxiPgQKBgHY+JJ0Llds4g5ljEk+Z\nM9m+J6MrjfVGunVt6pZBMrrCAIZO9t1me5p1E9EOeEtJSVds5y5tjqMlze7xmhXL\nNE2eEY4HG6+enXRkxOWRnTG0Hki2bcTG+nkTuT8yKjs9PdAFUPiMtXwzIgLzKsL/\nog9+EWbc7RoqR6b1NU79eE62",
    ]
  );

  const sheets = google.sheets({ version: "v4", auth });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: "windy-skyline-436920-u8-d6e30cfd3d0d",
      range: "Sheet1!A1:D10", // Változtasd meg az igényeid szerint
    });

    res.status(200).json({ data: response.data.values });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hiba történt az adatok lekérésekor." });
  }
}
