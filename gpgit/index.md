# ![https://sharils.github.io/slides/gpgit/][1]

# GPGit

[1]: data:image/png;base64,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  "https://sharils.github.io/slides/gpgit/"

---

# [FEEL FREE TO ASK](https://app2.sli.do/event/fs9iizqm "FEEL FREE TO ASK")

---

# GPG

## GNU GPLv3

---

# PGP

## Commercial proprietary software

---

# INSTALL GPG

```sh
$ brew install gnupg
Updating Homebrew...
......
$ cat .bashrc
GPG_TTY=$(tty)
export GPG_TTY
```

---

# GENERATE KEY

```sh
$ gpg --generate-key
gpg (GnuPG) 2.2.4; Copyright (C) 2017 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Note : Use "gpg --full-generate-key" for a full featured key generation dialog.

GnuPG needs to construct a user ID to identify your key.

Real name: Alice
Email address: alice@example.com
You selected this USER-ID:
    "Alice <alice@example.com>"

Change (N)ame, (E)mail, or (O)kay/(Q)uit? o
```

----

# GENERATE KEY

```sh
   ┌──────────────────────────────────────────────────────┐
   │ Please enter the passphrase to                       │
   │ protect your new key                                 │
   │                                                      │
   │ Passphrase: ________________________________________ │
   │                                                      │
   │       <OK>                              <Cancel>     │
   └──────────────────────────────────────────────────────┘
```


----

# GENERATE KEY

```sh
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: key 95601890AFD80709 marked as ultimately trusted
gpg: revocation certificate stored as '/Users/alice/.gnupg/openpgp-revocs.d/DA39A3EE5E6B4B0D3255BFEF95601890AFD80709.rev'
public and secret key created and signed.

pub   rsa2048 2018-01-10 [SC] [expires: 2020-01-03]
      DA39A3EE5E6B4B0D3255BFEF95601890AFD80709
uid                      Alice <alice@example.com>
sub   rsa2048 2018-01-10 [E] [expires: 2020-01-03]
```

---

# GET KEY ID

```sh
$ gpg --list-keys
/Users/alice/.gnupg/pubring.kbx
--------------------------------------
pub   rsa2048 2018-01-03 [SC] [expires: 2020-01-03]
      DA39A3EE5E6B4B0D3255BFEF95601890AFD80709
uid           [ultimate] Alice <alice@example.com>
sub   rsa2048 2018-01-03 [E] [expires: 2020-01-03]
```

---

# DISTRIBUTE KEY

```sh
$ gpg --keyserver keyserver.ubuntu.com --send-keys DA39A3EE5E6B4B0D3255BFEF95601890AFD80709
gpg: sending key 95601890AFD80709 to hkp://keyserver.ubuntu.com
```

Note that you can compute the short key id by yourself e.g.

```sh
tail -c 17 <<< DA39A3EE5E6B4B0D3255BFEF95601890AFD80709
```

---

# VERIFY KEY DISTRIBUTION

```sh
$ gpg --keyserver keyserver.ubuntu.com --recv-keys DA39A3EE5E6B4B0D3255BFEF95601890AFD80709
gpg: key 95601890AFD80709: "Alice <alice@example.com>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
```

---

# SIGN ON GIT COMMIT

```sh
$ git config --global commit.gpgsign true
$ git config --global user.signingkey DA39A3EE5E6B4B0D3255BFEF95601890AFD80709
```

---

# ADD TO GITHUB

```sh
$ gpg --export --armor
-----BEGIN PGP PUBLIC KEY BLOCK-----

mQENBFpM0uoBCAC1oDd/QgEtBnOZXPEPQd+ZSY9T8vIgFW7rdDIipMCIVCsDNPH3
s78wiJS43mf93nHhWc8iXezF4M6ibzLGhb3/iFp6Db4oIJfuVsIhLpMc+znRnPJo
SjFwTJ8tNGdYh7Dtbq1W17HeHRIo/am1TG5hjrW90ISZYNqJEKPwKBrczzyr7UAI
oLk3hMDDLCHqVecZAuF+Lp/F61gPNhPUASfLrlUrGzvOn6VAXTRGscsS8287wkQz
rhsncmn5e4Nrx/elsAe16GytOwhRh2BPrcIa5QpwYRpcnyqDw2EVXfa2qRMZR+Je
......
b/E=
=nv7I
-----END PGP PUBLIC KEY BLOCK-----
$ open https://github.com/settings/gpg/new
```

---

# VERIFY SIGNATURE

```sh
$ mkdir -p /tmp/gpgit && cd /tmp/gpgit && git init
Initialized empty Git repository in /private/tmp/gpgit/.git/
$ touch hello && git add hello && git commit -m 'Verify git show --show-signature'
[master (root-commit) d78ff13] Verify git show --show-signature
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 hello
```

----

# VERIFY SIGNATURE

```sh
$ git show --show-signature
commit 7324d0475f22d42c180ac0eab2ded0bd6e86c830 (HEAD -> master)
gpg: Signature made Thu Jan 11 23:42:19 2018 CST
gpg:                using RSA key DA39A3EE5E6B4B0D3255BFEF95601890AFD80709
gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
gpg: next trustdb check due at 2020-01-03
gpg: Good signature from "Alice <alice@example.com>" [ultimate]
Author: Alice <alice@example.com>
Date:   Thu Jan 11 23:42:19 2018 +0800

    Add verify key

diff --git a/hello-gpg b/hello-gpg
new file mode 100644
index 0000000..e69de29
```

---

# SIGN ON TAG

```sh
$ git tag -s 1.0.0 -m 'GPGit 1.0.0' && git show --show-signature 1.0.0 | cat
tag 1.0.0
Tagger: sharils <sharils@users.noreply.github.com>
Date:   Sat Jan 13 09:28:48 2018 +0800

GPGit 1.0.0
-----BEGIN PGP SIGNATURE-----

iQEzBAABCAAdFiEEJqlGM5RksVxB3xOUOE3cuaxtebUFAlpZYNAACgkQOE3cuaxt
ebVRwgf/Y7UWSuSHUaFjDUvI2iMb9d1A4vmyIaj0+v+EwIx5DyZ3x4UED+ZJdNnF
......
-----END PGP SIGNATURE-----

commit d75aa910811ba18c524e30d1a4e3d6c40b54ee36
gpg: Signature made Fri Jan 12 00:00:35 2018 CST
gpg:                using RSA key 26A946339464B15C41DF1394384DDCB9AC6D79B5
gpg: Good signature from "sharils <sharils@users.noreply.github.com>" [ultimate]
Author: sharils <sharils@users.noreply.github.com>
Date:   Fri Jan 12 00:00:35 2018 +0800
......
```

---

# SIGNATURE ON GITHUB

## [COMMITS][1]

[1]: https://github.com/nodejs/node/commits/master

---

# SIGNATURE ON GITHUB

## [TAG][1]

[1]: https://github.com/nodejs/node/tags

---

# GIT-CRYPT

## Transparent file encryption in git

---

# INSTALL GIT-CRYPT

```sh
$ brew install git-crypt
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 1 tap (homebrew/core).
==> Updated Formulae
digdag

==> Downloading https://homebrew.bintray.com/bottles/git-crypt-0.6.0.high_sierra.bottle.tar.gz
######################################################################## 100.0%
==> Pouring git-crypt-0.6.0.high_sierra.bottle.tar.gz
🍺  /usr/local/Cellar/git-crypt/0.6.0: 9 files, 294.4KB
```

---

# INIT GIT-CRYPT

```sh
$ git-crypt init
Generating key...
$ echo 'secretfile filter=git-crypt diff=git-crypt' >> .gitattributes && git add .gitattributes && git commit -m 'Add .gitattributes'
[master 28e8099] Add .gitattributes
 1 file changed, 2 insertions(+)
 create mode 100644 .gitattributes
$ echo 'top secret' >> secretfile && git add secretfile && git commit -m 'Add secretfile'
[master 16e0911] Add secretfile
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 secretfile
```

---

# GRANT PERMISSION

```sh
$ git-crypt add-gpg-user DA39A3EE5E6B4B0D3255BFEF95601890AFD80709
[master d75aa91] Add 1 git-crypt collaborator
 2 files changed, 4 insertions(+)
 create mode 100644 .git-crypt/.gitattributes
 create mode 100644 .git-crypt/keys/default/0/DA39A3EE5E6B4B0D3255BFEF95601890AFD80709.gpg
 ```

---

# VERIFY LOCKED

```sh
$ git clone . /tmp/crypt && cd /tmp/crypt
Cloning into '/tmp/crypt'...
done.
$ cat secretfile
GITCRYPT?jD?I!?????$&b?8D?m?
```

Note: You can also use git status to verify encryption status right after commit

---

# UNLOCK SECRETFILE

```sh
$ git-crypt unlock && cat secretfile
top secret
```

---

# UPDATE SECRETFILE

```sh
$ echo 'update secret' >> secretfile && git commit -m 'Update secretfile' secretfile
[master 54e2e75] Update secretfile
 1 file changed, 0 insertions(+), 0 deletions(-)
```

---

# REVOKE PERMISSIONS

```sh
$ git revert d75aa91
[master 6ba2787] Revert "Add 1 git-crypt collaborator"
 2 files changed, 4 deletions(-)
 delete mode 100644 .git-crypt/.gitattributes
 delete mode 100644 .git-crypt/keys/default/0/26A946339464B15C41DF1394384DDCB9AC6D79B5.gpg
$ git-crypt unlock
Error: no GPG secret key available to unlock this repository.
To unlock with a shared symmetric key instead, specify the path to the symmetric key as an argument to 'git-crypt unlock'.
```

---

# [KEYBASE](https://keybase.io/)

## ENCRYPTED PERSONAL OR TEAM REPOSITORY AND OTHERS

---

# CAUTION

## KEYBASE CLIENT SHOULD BE INSTALLED IN AT LEAST TWO MACHINES

---

# SIGN UP

![login](./login.png "login")

----

# SIGN UP

![join-keybase](./join-keybase.png "join-keybase")

----

# SIGN UP

![activate](./activate.png "activate")

---

# ADD A GPG KEY

![add-a-pgp-key](./add-a-pgp-key.png "add-a-pgp-key")

----

# ADD A GPG KEY

![i-need-a-public-key](./i-need-a-public-key.png "i-need-a-public-key")

----

# ADD A GPG KEY

![ok-got-it](./ok-got-it.png "ok-got-it")

----

# ADD A GPG KEY

![let-the-math-begin](./let-the-math-begin.png "let-the-math-begin")

----

# ADD A GPG KEY

![done-post-to-keybase](./done-post-to-keybase.png "done-post-to-keybase")

---

# KEYBASE GIT COMMANDS

```sh
$ keybase git
NAME:
   keybase git - Manage git repos

USAGE:
   keybase git <command> [arguments...]

COMMANDS:
   create	Create a personal or team git repository.
   delete	Delete a personal or team git repository.
   list		List the personal and team git repositories you have access to.
   gc		Run garbage collection on a personal or team git repository.
   settings	View and change team repo settings
   help, h	Shows a list of commands or help for one command
```

---

# CREATE KEYBASE GIT REPOSITORY

```sh
$ keybase git create reponame
Repo created! You can clone it with:
  git clone keybase://private/alice/reponame
```

---

# CLONE A KEYBASE REPO

```sh
$ git clone keybase://private/alice/reponame /tmp/reponame
Cloning into '/tmp/reponame'...
Initializing Keybase... done.
Syncing with Keybase... done.
Syncing encrypted data to Keybase: (100.00%) 2.22/2.22 KB... done.
warning: You appear to have cloned an empty repository.
```

---

# Q&A

---

# Thank

---

# Reference

- [Introduction to GPG Encryption and git-crypt - Samsung Open Source Group Blog][1]
- [Git - Signing Your Work][2]
- [bash - keyserver timed out when trying to add a GPG public key - Unix & Linux Stack Exchange][3]
- [git-crypt - transparent file encryption in git][4]

[1]: https://web.archive.org/web/20180113005646/https://blogs.s-osg.org/introduction-gpg-encryption-git-crypt/
[2]: https://web.archive.org/web/20171222033413/https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work
[3]: https://web.archive.org/web/20161120004044/http://unix.stackexchange.com:80/questions/75892/keyserver-timed-out-when-trying-to-add-a-gpg-public-key
[4]: https://www.agwa.name/projects/git-crypt/
