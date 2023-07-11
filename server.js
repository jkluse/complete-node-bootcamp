import 'dotenv/config';
import { app } from './app.js';

const port = process.env.PORT || 3001;

app.listen(3001, () => {
  console.log(`Listening on port ${port}`);
});
