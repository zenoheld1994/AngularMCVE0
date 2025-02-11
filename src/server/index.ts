import express from 'express';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({'message': 'Hello World!'});
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});