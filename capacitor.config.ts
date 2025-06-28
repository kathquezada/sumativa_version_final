import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'FoodRecipe',
  webDir: 'www',
  server: {
    cleartext: true  // ⚠️ permite llamadas HTTP (no seguras) desde Android
  }
};

export default config;
