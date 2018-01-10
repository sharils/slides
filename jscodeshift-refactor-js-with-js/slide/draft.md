jscodeshift draft
=================

[Demo 1: jscodeshift][1]

[1]: https://astexplorer.net/#/gist/e3f97665181bba0c63cfe93a9e6ef9d2/3378c38de4f740071af4f9329136f5a422c3b914 "Link to the opening jscodeshift demo"

Intro
-----

It's basically search and replace at the syntax level instead of at the source text level like below.

```sh
find * -name '\*.{js,jsx}' | \
xargs -n1 sed -i 's/regexp/replacement/'
```

Use Cases
---------

- Reduce coding patterns in your codebase
- Change codebase as domain term changes
- Upgrade codebase as you learn more
- Provide codemods as your API upgrades

Search
------

Use [`` .find(astNodeType, filter = undefined) ``][2] to search.

### Find by astNodeType ###

[Demo 2: Find by astNodeType][3]

`` astNodeType `` can be any `` namedTypes ``. E.g. [j.ObjectExpression][4] See files in [the def directory][5] for more AST node type definitions.

Note: AST node types always begin with an upper case letter. E.g. XMLDefaultDeclaration.

### Find by filter ###

[Demo 3: Find by filter][6]

`` filter `` is an object to filter the found result recursively. E.g. `` { value: { type:"Literal", raw: "0x62" } } ``

[2]: https://github.com/facebook/jscodeshift/blob/2bed715/src/collections/Node.js#L27-L59 "Source code of the .find method"
[3]: https://astexplorer.net/#/gist/aedeb5ee1568081622f7c28f6368836a/b30bfb5d905c5b024a7de215e6865dce913dbc70 "Link to the find by astNodeType demo"
[4]: https://github.com/benjamn/ast-types/blob/bb324df/def/core.js#L205 "Source code of the ObjectExpression definition"
[5]: https://github.com/benjamn/ast-types/tree/bb324df/def "the def directory"
[6]: https://astexplorer.net/#/gist/5c7023307e1343232636752c849db2d4/9a7b7097d7a1e80a1f8c18ceeb69170cf1645254 "Link to the find by filter demo"

Replace
-------

Use `` builders `` to build replacement nodes.

Note: buidlders always begin with a lower case leter. E.g. xmlDefaultDeclaration.

### Modify nodes ###

[Demo 4: Modify nodes][7]

Modify nodes in the path object directly to replace it.

### insertBefore ###

[Demo 5: insertBefore][8]

You can also use `` insertBefore `` to insert codes before the current scope.

### replaceWith ###

[Demo 6: replaceWith][9]

You can also use `` replaceWith `` to replace the whole scope.

### Tagged template literal ###

[Demo 7: Use tagged template literal for replacement][10]

You can also use tagged template literals to build replacement nodes.

[7]: https://astexplorer.net/#/gist/d7bd91eb683b775f887d5d9370d30a6b/28572db283a9c1a38459738da9a42a8731af2abc "Link to the modify nodes demo"
[8]: https://astexplorer.net/#/gist/651c07d99225457d757602181c8cb20c/3ee6d1a8a70d4d0a1ec7c979c8715460ba3d4729 "Link to the insert before demo"
[9]: https://astexplorer.net/#/gist/c29390b2dbeb7137330500abba1b60d0/a2a46e884c5b4a28b56974465d097dc530da8873 "Link to the replace with demo"
[10]: https://astexplorer.net/#/gist/4140f16980833c2365653bd836aef933/0a69f5e9f84bf6347cd6bf8ab509744ab0144147 "Link to the use tagged template literal for replacement demo"

Test
----

```sh
git clone https://github.com/cpojer/js-codemod /tmp/js-codemod
cd /tmp/js-codemod
yarn
yarn test
```

jscodeshift provides modules that integrates with Jest for unit testing. Please see [the official manual][11] for how to do utilise them. In terms of reference, I suggest look into the [cpojer/js-codemod][12] for what unit tests for codemodes look like.

Note: Writing codemod is a very good way for practicing TDD.

Note: If you write unit test for js but you are not using Jest, you are wasting your time.

[11]: https://github.com/facebook/jscodeshift#unit-testing "Link to the official jscodeshift doc about unit testing"
[12]: https://github.com/cpojer/js-codemod "Link to the cpojer/js-codemod repo"

Extend the Collection class
---------------------------

### Use .registerMethods() ###

[Demo 8: Use .registerMethods()][13]

Use `` .registerMethods `` to add more methods to the Collection class.

### Use .registerMethods() for AST node type ###

[Demo 9: Use .registerMethods() for AST node type][14]

It's also possible to add methods to the Collection of a certain AST node type.

[13]: https://astexplorer.net/#/gist/2be9309bd7b0a64819ac0fb3aad4808f/2a821248e04b239d33767630bab5073321000eb8 "Link to the use .registerMethods demo"
[14]: https://astexplorer.net/#/gist/27e0e6e24c1240570df8fbe63fe7ed16/d319217dddd4b55bd86580b04fef0611a286b44e "Link to the use .registerMethods for ast node type demo"

API
---

### Collection ###

- [Collection.registerMethods()][15]
- [Collection.prototype.at()][16]
- [Collection.prototype.filter(callback)][17]
- [Collection.prototype.forEach(callback)][18]
- [Collection.prototype.get()][19]
- [Collection.prototype.getType()][20]
- [Collection.prototype.isOfType()][21]
- [Collection.prototype.length][22]
- [Collection.prototype.map(callback, type)][23]
- [Collection.prototype.nodes()][24]
- [Collection.prototype.size()][25]

[15]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/Collection.js#L313-L361 "Link to the source of Collection.registerMethods"
[16]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/Collection.js#L161-L180 "Link to the source of Collection.prototype.at"
[17]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/Collection.js#L57-L66 "Link to the source of Collection.prototype.filter"
[18]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/Collection.js#L68-L79 "Link to the source of Collection.prototype.forEach"
[19]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/Collection.js#L182-L196 "Link to the source of Collection.prototype.get"
[20]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/Collection.js#L198-L206 "Link to the source of Collection.prototype.getType"
[21]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/Collection.js#L208-L216 "Link to the source of Collection.prototype.isOfType"
[22]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/Collection.js#L121-L128 "Link to the source of Collection.prototype.length"
[23]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/Collection.js#L81-L110 "Link to the source of Collection.prototype.map"
[24]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/Collection.js#L130-L137 "Link to the source of Collection.prototype.nodes"
[25]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/Collection.js#L112-L119 "Link to the source of Collection.prototype.size"

### JSXElement ###

- [Collection.prototype.childElements()][26]
- [Collection.prototype.childNodes()][27]
- [Collection.prototype.findJSXElements()][28]
- [Collection.prototype.findJSXElementsByModuleName()][29]
- [Collection.prototype.getRootName()][30]
- [Collection.prototype.hasAttributes()][31]
- [Collection.prototype.hasChildren()][32]

[26]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/JSXElement.js#L150-L168 "Link to the source of Collection.prototype.childElements"
[27]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/JSXElement.js#L133-L148 "Link to the source of Collection.prototype.childNodes"
[28]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/JSXElement.js#L31-L40 "Link to the source of Collection.prototype.findJSXElements"
[29]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/JSXElement.js#L42-L68 "Link to the source of Collection.prototype.findJSXElementsByModuleName"
[30]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/JSXElement.js#L171-L185 "Link to the source of Collection.prototype.getRootName"
[31]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/JSXElement.js#L73-L109 "Link to the source of Collection.prototype.hasAttributes"
[32]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/JSXElement.js#L111-L125 "Link to the source of Collection.prototype.hasChildren"

### Node ###

- [Collection.prototype.closest()][33]
- [Collection.prototype.closestScope()][34]
- [Collection.prototype.find()][35]
- [Collection.prototype.getVariableDeclarators()][36]
- [Collection.prototype.insertAfter()][37]
- [Collection.prototype.insertBefore()][38]
- [Collection.prototype.replaceWith()][39]

[33]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/Node.js#L71-L92 "Link to the source of Collection.prototype.closest"
[34]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/Node.js#L61-L69 "Link to the source of Collection.prototype.closestScope"
[35]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/Node.js#L27-L59 "Link to the source of Collection.prototype.find"
[36]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/Node.js#L94-L123 "Link to the source of Collection.prototype.getVariableDeclarators"
[37]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/Node.js#L163-L175 "Link to the source of Collection.prototype.insertAfter"
[38]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/Node.js#L149-L161 "Link to the source of Collection.prototype.insertBefore"
[39]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/Node.js#L133-L147 "Link to the source of Collection.prototype.replaceWith"

### VariableDeclarator ###

- [Collection.prototype.findVariableDeclarators()][40]
- [Collection.prototype.renameTo()][41]
- [Collection.prototype.requiresModule()][42]

[40]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/VariableDeclarator.js#L25-L39 "Link to the source of Collection.prototype.findVariableDeclarators"
[41]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/VariableDeclarator.js#L73-L133 "Link to the source of Collection.prototype.renameTo"
[42]: https://github.com/facebook/jscodeshift/blob/2bed715ef9ac849d5aac5c2f49427c37adc0b11a/src/collections/VariableDeclarator.js#L42-L66 "Link to the source of Collection.prototype.requiresModule"

Reference
---------

- [Effective JavaScript Codemods][15]
- [facebook/jscodeshift Github][16]
- [benjamn/recast Github][17]
- [benjamn/ast-types Github][18]
- [cpojer/js-codemod Github][19]
- [jhgg/js-transforms Github][20]

[15]: https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb "Link to the Effective JavaScript Codemods article by Christoph Pojer"
[16]: https://github.com/facebook/jscodeshift "Link to the jscodeshift Github repository"
[17]: https://github.com/benjamn/recast "Link to the recast Github repository"
[18]: https://github.com/benjamn/ast-types "Link to the ast-types Github repository"
[19]: https://github.com/cpojer/js-codemod "Link to the js-codemod Github repository"
[20]: https://github.com/jhgg/js-transforms "Link to the js-transforms Github repository"

jscodeshift In Depth
====================

AST Node Type
-------------

AST node type is the same as `` require("ast-types").namedTypes ``. recast exposes them as `` require("recast").types.namedTypes `` then jscodeshift exposes them again under `` api.jscodeshift ``. This is why `` j.ObjectExpression `` and other AST node types exist.
