jscodeshift: Refactor JS w/ JS
==============================

----

![jscodeshift: Refactor JS w/ JS][1]
[https://hackmd.io/p/H1Hcn6da-][2]

[1]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAFKAQMAAABB54RGAAAABlBMVEX///8AAABVwtN+AAABT0lEQVRoge2ZwQ3DIAxFLWUARmJ1RsoASDRgG5w2ao/8Sv8fEgyPk4VtjAhFURRF/ZuaqYrk87gGZ59NPl2IQqFqpGqjPIDLjKtEYdDka7l7Vzf1T3c2UVT0mj7sQApRdPTS4ZuIoqLj58Di4ypRFHQWJMGn5UftQnQTGpSbRc7nZaL7UfPf8OTZzV7s97JfP0ShUOXNnQO4mUTR0D4TypCmpt6rC1Ek1I3pxFvlSBQMnUHTUlyqnuzSY+1CdCu6GokeNH30kQ2J7kbL4FexrzF01CdPQZPoZjQ26UXUNIooGppiD9FeWDSQVrmJ6HY0btL+lCU2D6REgVDz4q1eDJ2qQhQKVcPvYusJc0ROEaJY6HwK08S2er+a8Yhiono/Gy3FVv3ORhQU1Rdm8aOZv7xIE92Fjl/IaUdbFwCiYKhpJra3ip8oEkpRFEVR/6EX9iVWbQmqunIAAAAASUVORK5CYII=
[2]: https://hackmd.io/p/H1Hcn6da-#/

----

[Questions Here](https://app2.sli.do/event/1icklv09)
====================================================

----

Please Pull My Plug On Time
===========================

---

Prologue
========

----

Scene I
=======

[Demo][1]
----------------

[AST Explorer][2]

[1]: https://github.com/sharils/slides/tree/master/jscodeshift-refactor-js-with-js#demo-1-jscodeshift "Link to Demo 1 README"
[2]: https://astexplorer.net/#/gist/e3f97665181bba0c63cfe93a9e6ef9d2/18bd48494fe082e4734969f8a22fa3fde333e488 "Link to the opening jscodeshift demo"

----

Use Cases
=========

- Reduce coding patterns in your codebase
- Change codebase as domain term changes
- [Upgrade codebase as you learn more][1]
- [Provide codemods as your API upgrades][2]

[1]: https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options "react-redux connect"
[2]: https://reactjs.org/docs/typechecking-with-proptypes.html "We provide a codemod script to automate the conversion."

---

Act I: Find
===========

----

Scene I
=======

[Find by astNodeType][1]
------------------------

[AST Explorer][2]

[1]: https://github.com/sharils/slides/blob/master/jscodeshift-refactor-js-with-js/demo-2/demo-2-transform.js#L5 "Link to find by astNodeType source"
[2]: https://astexplorer.net/#/gist/aedeb5ee1568081622f7c28f6368836a/b30bfb5d905c5b024a7de215e6865dce913dbc70 "Link to the find by astNodeType demo"

----

Scene II
========

[Find by filter][1]
-------------------

[AST Explorer][2]

[1]: https://github.com/sharils/slides/blob/master/jscodeshift-refactor-js-with-js/demo-3/demo-3-transform.js#L5 "Link to the find by filter source"
[2]: https://astexplorer.net/#/gist/5c7023307e1343232636752c849db2d4/9a7b7097d7a1e80a1f8c18ceeb69170cf1645254 "Link to the find by filter demo"

---

Act II: Replace
===============

----

Scene I
=======

[Modify nodes][1]
-----------------

[AST Explorer][2]

[1]: https://github.com/sharils/slides/blob/master/jscodeshift-refactor-js-with-js/demo-4/demo-4-transform.js#L10-L12 "Link to the modify nodes source"
[2]: https://astexplorer.net/#/gist/d7bd91eb683b775f887d5d9370d30a6b/28572db283a9c1a38459738da9a42a8731af2abc "Link to the modify nodes demo"

----

Scene II
========

[insertBefore][1]
-----------------

[AST Explorer][2]

[1]: https://github.com/sharils/slides/blob/master/jscodeshift-refactor-js-with-js/demo-5/demo-5-transform.js#L32-L45 "Link to the insert before source"
[2]: https://astexplorer.net/#/gist/651c07d99225457d757602181c8cb20c/3ee6d1a8a70d4d0a1ec7c979c8715460ba3d4729 "Link to the insert before demo"

----

Scene III
=========

[replaceWith][1]
----------------

[AST Explorer][2]

[1]: https://github.com/sharils/slides/blob/master/jscodeshift-refactor-js-with-js/demo-6/demo-6-transform.js#L7-L13 "Link to the replace with source"
[2]: https://astexplorer.net/#/gist/c29390b2dbeb7137330500abba1b60d0/a2a46e884c5b4a28b56974465d097dc530da8873 "Link to the replace with demo"

----

Scene IV
========

[ast-types][1]
--------------

[1]: https://github.com/benjamn/ast-types/blob/master/def/es6.js#L36 "Link to ast-type definition"

----

Scene V
=======

[Tagged template literal][1]
----------------------------

[AST Explorer][2]

[1]: https://github.com/sharils/slides/blob/master/jscodeshift-refactor-js-with-js/demo-7/demo-7-transform.js#L7-L10 "Link to the tagged template literal source"
[2]: https://astexplorer.net/#/gist/4140f16980833c2365653bd836aef933/0a69f5e9f84bf6347cd6bf8ab509744ab0144147 "Link to the tagged template literal demo"

---

Act III: Test
=============

----

Scene I
=======

[defineTest][1]
---------------

[1]: https://github.com/sharils/slides/find/master "Link to demo 1"

----

Scene II
========

[defineInlineTest][1]
---------------------

[1]: https://github.com/facebook/jscodeshift/blob/master/sample/__tests__/reverse-identifiers-test.js#L28-L35 "Link to defineInlineTest source"

---

Act IV: Extend
==============

----

Scene I
=======

[registerMethods][1]
--------------------

[AST Explorer][2]

[1]: https://github.com/sharils/slides/blob/master/jscodeshift-refactor-js-with-js/demo-8/demo-8-transform.js#L23-L25 "Link to the use .registerMethods source"
[2]: https://astexplorer.net/#/gist/2be9309bd7b0a64819ac0fb3aad4808f/2a821248e04b239d33767630bab5073321000eb8 "Link to the use .registerMethods demo"

----

Scene II
========

[registerMethods for AST node type][1]
--------------------------------------

[AST Explorer][2]

[1]: https://github.com/sharils/slides/blob/master/jscodeshift-refactor-js-with-js/demo-9/demo-9-transform.js#L39 "Link to the use .registerMethods source"
[2]: https://astexplorer.net/#/gist/27e0e6e24c1240570df8fbe63fe7ed16/d319217dddd4b55bd86580b04fef0611a286b44e "Link to the use .registerMethods for ast node type demo"

---

Epilogue
========

----

Scene I
=======

Is it safe?
-----------

As long as you have backups

----

Scene II
========

Is there any API reference?
--------------------------

[Yes][1]

[1]: https://github.com/sharils/slides/blob/master/jscodeshift-refactor-js-with-js/slide/draft.md#api "Link to API reference"

----

Scene III
=========

What's your name?
-----------------

[Folio][1]

[1]: https://www.facebook.com/groups/f2e.tw/permalink/1419612148076146/

----

Scene IV
========

What's her name?
----------------

Winnie

----

Scene V
=======

Why don't we use RegExp?
------------------------

If you are not [Chuck Norris][1]. [Then the seven angels who had the seven trumpets prepared to sound them. — Revelation 8.6][2]

[1]: https://www.ptt.cc/bbs/movie/M.1296897059.A.7B7.html "Chuck Norris facts"
[2]: https://stackoverflow.com/a/1732454 "Then the seven angels who had the seven trumpets prepared to sound them. — Revelation 8:6"

---

Reference
=========

- [Evolving Complex Systems Incrementally][1]
- [Effective JavaScript Codemods][2]
- [facebook/jscodeshift Github][3]
- [benjamn/recast Github][4]
- [benjamn/ast-types Github][5]
- [cpojer/js-codemod Github][6]
- [jhgg/js-transforms Github][7]

[1]: https://www.youtube.com/watch?v=d0pOgY8__JM "Christoph Nakazawa: Evolving Complex Systems Incrementally | JSConf EU 2015 - YouTube"
[2]: https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb "Link to the Effective JavaScript Codemods article by Christoph Pojer"
[3]: https://github.com/facebook/jscodeshift "Link to the jscodeshift Github repository"
[4]: https://github.com/benjamn/recast "Link to the recast Github repository"
[5]: https://github.com/benjamn/ast-types "Link to the ast-types Github repository"
[6]: https://github.com/cpojer/js-codemod "Link to the js-codemod Github repository"
[7]: https://github.com/jhgg/js-transforms "Link to the js-transforms Github repository"

---

Q&A
===
