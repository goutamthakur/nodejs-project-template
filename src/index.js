const express = require("express");

const { ServerConfig, HelmetConfig } = require("./config");
const apiRoutes = require("./routes");
const jobs = require("./jobs");

const app = express();

app.use(HelmetConfig);

app.use("/api", apiRoutes);

app.use("/health", (req, res) => {
  res.send("OK");
});

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
  // Schedule background jobs like cron etc
  jobs.initCronJobs();
});
