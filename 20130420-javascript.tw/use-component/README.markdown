Using bower install
===================

Install library
---------------

### bower install ###
This installs or updates libraries according to the component.json file.

### bower install jquery ###
If jQuery is in the dependency list in the component.json file, it'll update
jQuery according to the file. Otherwise it will install or update jQuery to the
latest version without touching the component.json file.

### bower install --save jquery ###
With the --save switch, this updates component.json file as well.

Semantic Versioning and Update
------------------------------

### bower install --save jquery#1.5.1 ###
This installs jQuery 1.5.1.

### bower install --save jquery#'<1.5.1' ###
This installs jQuery less than version 1.5.1 which is 1.5. Single quotes are
required.

### bower install --save jquery#'<=1.5.1' ###
This installs jQuery less than or equal to version 1.5.1 which is 1.5.1. Single
quotes are required.

### bower install --save jquery#'>1.5.1' ###
This installs jQuery greater than version 1.5.1 which is 2.0.0. Single quotes
are required.

### bower install --save jquery#'>=1.5.1' ###
This installs jQuery greater than or equal to version 1.5.1 which is 2.0.0.
Single quotes are required.

### bower install --save jquery#~1.5.1 ###
This installs jQuery greater than or equal to version 1.5.1 but less than 1.6.0
which is 1.5.2.

### bower install --save jquery#1.5.x ###
This installs jQuery greater than or equal to version 1.5.0 but less than 1.6.0
which is 1.5.2.

### bower install --save jquery#~1.5 ###
This has the same meaning as 'bower install --save jquery#1.5.x'.

### bower install --save jquery#1.x ###
This installs jQuery greater than or equal to version 1.0 but less than 2.0
which is 1.9.1.

### bower install --save jquery#~1 ###
This has the same meaning as 'bower install --save jquery#1.x'.
