## Author 
Stéphanos

# Publish VS Code Extension &#8212; GitHub Action


GitHub action to publish your VS Code Extension to the [Open VSX Registry](https://open-vsx.org/) or the [Visual Studio Marketplace](https://marketplace.visualstudio.com).

> All breaking changes of **v1** are listed in the [changelog](CHANGELOG.md#changelog)

## Usage

To use the GitHub Action, just [reference the action](https://github.com/Stephanoslangate/startCreatExentionVscode) in your workflow file.

### Example

The following example shows a workflow that publishes an extension to the Open VSX Registry as well as to the Visual Studio Marketplace when a new tag was created:

```yaml
on:
  push:
    tags:
      - "*"

name: masseka
```

To package the extension only once and publish the 

**identical** `.vsix` 
file to both registries one can use the following two steps instead:

### Open VSX Registry

To publish to the Open VSX Registry ensure that your [extension's namespace](https://github.com/eclipse/openvsx/wiki/Publishing-Extensions#2-create-the-namespace) was created 


## Input Parameters

You can set any or all of the following input parameters:

|Name |Type |Required? |Default |Description
|-|-|-|-|-
|`pat` |string  |yes |-|The personal access token to the corresponding registry.
|`extensionFile` |string  |no | - |Path to the vsix file to be published. This option will be preferred when set together with `packagePath`.
|`registryUrl` |string  |no |`https://open-vsx.org` |Use the registry API at this base URL
|`packagePath` |string |no | `./` |Path to the extension to be packaged and published. When `extensionFile` is set too `packagePath` is ignored.
|`baseContentUrl` |string |no | - | Prepend all relative links in README.md with this URL.
|`baseImagesUrl` |string |no | - | Prepend all relative image links in README.md with this URL.
|`yarn` |boolean |no | `false` | Use yarn instead of npm while packing extension files.
|`dryRun` |boolean |no | `false` | Set this option to `true` to package your extension but do not publish it. When using this option set the `pat` option to a stub value.
|`noVerify` |boolean| no |`false` | Allow publishing extensions to the visual studio marketplace which use a proposed API (enableProposedApi: true). Similar to vsce's `--noVerify` command line argument.
|`preRelease` |boolean| no |`false` | Mark the extensions release as pre-release. Is only considered when packaging an extension.
|`dependencies` |boolean| no |`true` | Check that dependencies defined in `package.json` exist in `node_modules`. Set to `false` if using pnpm or yarn v2+ with PnP.
|`skipDuplicate` |boolean| no |`false` | Fail silently if version already exists on the marketplace. Equivalent to the `--skip-duplicate` option of the vsce CLI.
|`target` |string| no | - | Target architecture(s) the extension should run on. Separate multiple targets with spaces. E.g.: `'win32-x64 linux-x64'`

## Outputs

The action exposes the following outputs:

|Name |Type |Description
|-|-|-
|`vsixPath` |string |The path to the packaged and published VSIX file.

## Contribution

If you found a bug or are missing a feature do not hesitate to [file an issue](https://github.com/HaaLeo/publish-vscode-extension/issues/new/choose).  
Pull Requests are welcome!
To get started submitting code changes please take a look at the [CONTRIBUTING.md](./CONTRIBUTING.md) file first.

## Support

When you like this extension make sure to [star the repo](https://github.com/HaaLeo/publish-vscode-extension/stargazers). I am always looking for new ideas and feedback.  
In addition, it is possible to [donate via paypal](https://www.paypal.me/LeoHanisch/3eur).