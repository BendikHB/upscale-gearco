import { defineConfig } from "sanity";
import schemas from "./sanity/schemas";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "skdhhnln",

  dataset: "production",

  title: "Upscale Gear Co",

  apiVersion: "2024-04-19",

  basePath: "/admin",

  plugins: [structureTool()],

  schema: { types: schemas },
});

export default config;
