/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_POPULARES: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
