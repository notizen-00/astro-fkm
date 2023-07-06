import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import Unfonts from 'unplugin-fonts/astro';
import { Editor } from '@tinymce/tinymce-react';
import react from "@astrojs/react";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), Unfonts({
    google: {
      families: ['Inter']
    }
  }), 
  react()]
});