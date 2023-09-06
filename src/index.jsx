import React from "react";
import ReactDOMClient from "react-dom/client";
import { VisaMonitoringJob } from "./screens/VisaMonitoringJob";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<VisaMonitoringJob />);
