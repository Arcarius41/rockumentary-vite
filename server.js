import express from 'express';
import basicAuth from 'express-basic-auth';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000; //port number here

// Add Content Security Policy (CSP) headers
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src *; img-src * data:; script-src * 'unsafe-inline'; style-src * 'unsafe-inline';"
  );
  next();
});




app.use(basicAuth({
  users: { 'ScriptKitty': 'Meow45*' }, //username and password
  challenge: true
}));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
