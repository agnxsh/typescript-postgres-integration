import express from "express";

const main = async () => {
  const app = express();
  const PORT = (<any>process.env.PORT) | 5000;
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
};
main().catch((err) => {
  console.error(err);
});
