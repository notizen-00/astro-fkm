import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import { Editor } from '@tinymce/tinymce-react';
import react from "@astrojs/react";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), 
  react()]
});