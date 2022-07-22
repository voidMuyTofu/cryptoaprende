/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_POPULARES: string;
  readonly VITE_API_AVANZADO: string;
  readonly VITE_API_INTERMEDIO: string;
  readonly VITE_API_PRINCIPIANTE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
