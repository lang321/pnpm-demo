import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: ['src/index.ts'],
  output: [
    {
      dir: 'lib',
      entryFileNames: '[name].js',
      format: 'es',
      exports: 'named',
    }],
  plugins: [
    resolve(),
    typescript({ tsconfig: '../../tsconfig.json', outDir: './lib' }),
  ],
}
