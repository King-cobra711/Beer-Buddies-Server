const app = require("./index.js");
const port = process.env.PORT || 3001;

app.listen(port, () => {
  // console.log(`running on port ${PORT}`);
  console.log(`running on port 3001`);
});
