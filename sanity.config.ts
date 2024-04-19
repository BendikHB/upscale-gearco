import { defineConfig } from "sanity";
import schemas from "./sanity/schemas";
import { structureTool } from "sanity/structure";
import { muxInput } from "sanity-plugin-mux-input";

const config = defineConfig({
  projectId: "skdhhnln",

  dataset: "production",

  title: "Upscale Gear Co",

  apiVersion: "2024-04-19",

  basePath: "/admin",

  plugins: [structureTool(), muxInput()],

  schema: { types: schemas },
});

export default config;
