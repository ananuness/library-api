// server.js com a responsabilidade de rodar o server em determinada porta

import app from './src/app.js';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server hosting on http://localhost:${port}`);
});