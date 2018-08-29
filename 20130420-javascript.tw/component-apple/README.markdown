Defining a Package
==================

component.json
--------------
You need to create a component.json file if you don't have one. To create one,
you run 'bower init' in your console.

If you use bower in Cygwin, you'll find 'bower init' broken. To work around
this issue, you simply install then uninstall a package. Then you will end up
with a component.json file and an empty components folder.

Commit component.json
---------------------
A component.json file must be in the commit history to be visible to bower. So
remember to commit your component.json file.

Semantic Versioning
-------------------
With component.json file in the commit history is still not enough. You need to
tag your commit as the same version in the component.json file.
