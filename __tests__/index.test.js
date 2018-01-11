import execa from 'execa';

describe('webpack-why', () => {
    it('responds to --help', async () => {
        const { stdout } = await execa('./lib/index.js', ['--help']);
        expect(stdout).toMatch(
            /Determine why a module is included in a Webpack bundle./,
        );
    });

    it('shows usage by default', async () => {
        await expect(execa('./lib/index.js')).rejects.toThrow(
            /Determine why a module is included in a Webpack bundle./,
        );
    });

    it('prints dependency trees', async () => {
        const { stdout } = await execa('./lib/index.js', [
            './__fixtures__/multiple-entry-points.json',
            './shared.js',
        ]);
        expect(stdout).toMatchSnapshot();
    });
});
