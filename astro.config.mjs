import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import Unfonts from 'unplugin-fonts/astro';
import { Editor } from '@tinymce/tinymce-react';
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  site: 'https://fkm.unej.ac.id',
  integrations: [tailwind(), Unfonts({
    google: {
      families: ['Inter']
    }
  }), react(), robotsTxt(), partytown(), sitemap(), compress(), critters()]
});