/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLOUDINARY_UPLOAD_URL: string;
  readonly VITE_PRESET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
