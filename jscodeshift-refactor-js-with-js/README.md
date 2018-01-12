jscodeshift: Refactor JS w/ JS
==============================

```sh
git clone --depth=1 git@github.com:sharils/slides.git /tmp/slides
cd /tmp/slides/jscodeshift-refactor-js-with-js
yarn
open slide/index.html
```

Demo 1: jscodeshift
-------------------

```sh
git diff
cd /tmp/slides/jscodeshift-refactor-js-with-js
yarn jscodeshift -t demo-1/demo-1-transform.js demo-1/__testFixtures__/demo-1-transform.input.js
git diff
git checkout .
```
