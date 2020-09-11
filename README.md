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