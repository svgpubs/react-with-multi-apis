const express = require("express");
const bodyParser = require("body-parser");
const port = 3070;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api2", (req, res) => {
  console.log(`localhost:${port} api is running`);
  const data = {
    result: `Success! from localhost on localhost:${port}!!`,
  };
  res.send(data);
});

app.listen(port, function () {
  console.log(`server running now.. ${port}`);
});
