const express = require("express");
const app = express();
const sequelize = require("./db");
const api = require("./routes");
const volleyball = require("volleyball")
const cors = require("cors")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin:true,
    credentials: true,
  }),
);
app.use(volleyball);
app.use("/api", api);

sequelize.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log(`Server listening at port ${3001}`);
  });
});
