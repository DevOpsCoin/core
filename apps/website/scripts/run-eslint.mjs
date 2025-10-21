import { ESLint } from 'eslint';
process.env.RUSHSTACK_ESLINT_PATCH_DISABLE = '1';

const eslint = new ESLint({
  overrideConfigFile: './eslint.config.cjs',
});

async function run() {
  try {
    const results = await eslint.lintFiles([
      'app/**/*.{ts,tsx,js,jsx}',
      'components/**/*.{ts,tsx,js,jsx}',
      'lib/**/*.{ts,tsx,js,jsx}',
    ]);
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);
    console.log(resultText);
    const errorCount = results.reduce((s, r) => s + r.errorCount, 0);
    if (errorCount > 0) process.exit(1);
    process.exit(0);
  } catch (e) {
    // If ESLint ignores all files or the patcher triggers an unexpected error,
    // print a helpful message and exit with non-zero to indicate attention may be needed.
    if (e && e.message && e.message.includes('All files matched')) {
      console.log('ESLint: no files to lint (all matched files were ignored).');
      process.exit(0);
    }
    console.error('ESLint runner error:');
    console.error(e);
    process.exit(2);
  }
}

run();
