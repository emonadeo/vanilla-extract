export const webpack = [
  { type: 'mini-css-extract', mode: 'development', snapshotCss: true },
  { type: 'mini-css-extract', mode: 'production', snapshotCss: true },
  { type: 'style-loader', mode: 'development', snapshotCss: false },
] as const;

export const all = [
  ...webpack,
  { type: 'esbuild', mode: 'development', snapshotCss: true },
  { type: 'esbuild', mode: 'production', snapshotCss: true },
  { type: 'esbuild-runtime', mode: 'development', snapshotCss: false },
  { type: 'esbuild-runtime', mode: 'production', snapshotCss: false },
  { type: 'esbuild-next', mode: 'development', snapshotCss: true },
  { type: 'esbuild-next', mode: 'production', snapshotCss: true },
  { type: 'esbuild-next-runtime', mode: 'development', snapshotCss: false },
  { type: 'esbuild-next-runtime', mode: 'production', snapshotCss: false },
  { type: 'vite', mode: 'development', snapshotCss: false },
  { type: 'vite', mode: 'production', snapshotCss: true },
  { type: 'parcel', mode: 'development', snapshotCss: true },
  { type: 'parcel', mode: 'production', snapshotCss: true },
] as const;
