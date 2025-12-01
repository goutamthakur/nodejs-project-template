const express = require("express");

const { ServerConfig, HelmetConfig, LimiterConfig } = require("./config");
const apiRoutes = require("./routes");
const jobs = require("./jobs");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(LimiterConfig.limiter);

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
