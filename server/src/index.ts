import express from 'express';
import cors from "cors";
import dataRouter from "./data/data.routes"
// import residentRouter from "./resident/resident.routes"
// import adminRouter from "./admin/admin.routes"
// import securityRouter from "./security/security.routes"

const app = express();

  app.use(cors());

  app.use(express.json());

app.get('/', (req, res) => {
  res.send('GateKeeper Server Running...');
});
app.use("/data", dataRouter);
// app.use("/resident", residentRouter);
// app.use('/security', securityRouter);
// app.use('/admin', adminRouter);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});