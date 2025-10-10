/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // Adicione outras variáveis de ambiente aqui se precisar
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
