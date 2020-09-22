# Lambda Labs Generator Base class

This base class has common functions used in multiple generators.

## Using the base class

When creating a new app generator or sub-generator start off with this
template.

``` javascript
const BaseGenerator = require('@lambdalabs/base-generator');

module.exports = class extends BaseGenerator {
  constructor(args, opts) {
    super(args, opts);
  }
}
```

## publish npmjs package

- update package.json version
- add a git tag with the version number `git tag v0.9.30 -m "release note"`
- push repo and tags `git push && git push --tags`
