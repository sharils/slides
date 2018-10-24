# ![https://sharils.github.io/slides/gpgit/][1]

# MFA in JS

[1]: data:image/png;base64,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 "https://sharils.github.io/slides/20181117-mfa-in-js"

---

# [FEEL FREE TO ASK][1]

[1]: https://app2.sli.do/event/1dh73s55

Note:

TODO: check event day before attending event

---

# NEWS

----

# [GENTOO, JUNE 2018][1]

> action-item: review 2FA requirements for GitHub org

[1]: https://wiki.gentoo.org/wiki/Project:Infrastructure/Incident_Reports/2018-06-28_Github

----

# [ESLINT, JULY 2018][1]

> Package maintainers should enable npm two-factor authentication. npm has a
> guide here.

[1]: https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes

---

# DEMO

---

# MFA

Multi-factor authentication

----

# SOMETHING YOU KNOW

* Password (argon2, bcrypt)
* Secret question (hash me)

----

# SOMETHING YOU HAVE

* ATM card
* Citizen Personal Certificate

----

# SOMETHING YOU ARE

* Retina
* Fingerprint
* Hand size

----

# SOMEONE YOU KNOW

* [Facebook Trusted Contacts][1]

[1]: https://www.facebook.com/notes/facebook-security/introducing-trusted-contacts/10151362774980766

---

# [WebAuthn][1]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API

---

# U2F

OTP 已死 U2F 永存：JavaScript U2F 兩步驟驗證實戰

* [Slide][1]
* [Video][2]

[1]: https://docs.google.com/presentation/d/14hIW87kyoiMEvuJ-Fn7pdxmzbVMOxPhpFZkjYfx-Mfg/edit#slide=id.p
[2]: https://www.youtube.com/watch?v=rl_-Nw1UHfM

----

# [FLOW DIAGRAM][1]

[1]: https://developers.yubico.com/U2F/Libraries/Using_a_library.html

----

# [WEBSITES][1]

Dropbox, Facebook, Github, Google, etc

[1]: https://www.yubico.com/works-with/catalog/#FIDO-U2F

---

# HARDWARE

----

# [YUBICO YUBIKEY][1]

* $20 to $60 USD ($615 to $1,847 TWD)
* NFC, USB-A, USB-C
* International shipping

[1]: https://www.yubico.com/products/yubikey-hardware/

----

# [GOOGLE TITAN KEY][1]

* $50 USD ($1,539 TWD)
* adapter
* US only

[1]: https://cloud.google.com/titan-security-key/

----

# [U2F ZERO][1]

* Free (DIY)
* Open source

[1]: https://github.com/conorpp/u2f-zero

----

# [DONGLES][1]

[1]: https://www.dongleauth.info/dongles/

---

# PITFALLS

* Mac Calendar
* Mobile phone
* [enable FIDO U2F in Firefox Quantum][1]

[1]: https://www.yubico.com/2017/11/how-to-navigate-fido-u2f-in-firefox-quantum/ "How do I enable FIDO U2F in Firefox Quantum?"

---

# [IMPLEMENTATION][1]

[1]: https://github.com/sharils/slides/tree/master/20181117-mfa-in-js

---

# HTTPS

----

# [LOCAL-CERT-GENERATOR][1]

[1]: https://github.com/dakshshah96/local-cert-generator

----

# [BROWSERSYNC][1]

```sh
browser-sync start --proxy 'localhost:8000'
```

[1]: https://browsersync.io/

----

# CURL

```sh
curl --cacert rootCA.pem https://localhost:8000/u2f/request/1
```

----

# HTTPIE

```sh
http --verify rootCA.pem https://localhost:8000/u2f/request/1
```

----

# INSOMNIA

- Import rootCA.pem to Keychain on OS X

----

# POSTMAN

- [Open issue][1]

[1]: https://github.com/postmanlabs/postman-app-support/issues/3152 "[Feature Request] Add Root and Intermediary CA · Issue #3152 · postmanlabs/postman-app-support"

---

# SERVER

This is required, because the client side code verifies the host name

----

# APP_ID

* protocol
* hostname
* port (optional)

----

# HTTPS

* [CORS preflight request][1]
* From HTTPS
* To HTTP
* On Firefox
* 🚫

[1]: https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request

---

# CLIENT

----

# HTTPS

HTTPS is required to access U2F API

----

# [U2F-API-POLYFILL][1]

Chrome needs this to use the U2F feature

[1]: https://www.npmjs.com/package/u2f-api-polyfill

----

# ~~NPM U2F-API~~

1. Not the same as [u2f-api.js][1]
2. Not the same API as window.u2f

[1]: https://github.com/google/u2f-ref-code/blob/master/u2f-gae-demo/war/js/u2f-api.js

----

# FOCUS ON THE WINDOW

After calling u2f.register, you have to focus on the window. Otherwise nothing
will popup.

----

# ATTACH YOUR U2F KEY

You need to attach your U2F key to you computer, otherwise Chrome and Opera
won't show anything.

---

# [PERFECT PAPER PASSWORDS][1]

[1]: https://www.grc.com/ppp/design.htm

---

# ENDING

----

# Q&A

----

# About

----

# THANK

----

# REFERENCE

* [HTTPS for localhost][1]
* [Security Now! Episode #90 Multifactor Authentication][2]
* [Security Now! Episode #94 The Fourth Factor][3]
* [Using a U2F library][4]
* [Universal 2nd Factor NodeJS Demo][5]
* [How to get HTTPS working on your local development environment in 5 minutes][6]
* [Installing the mitmproxy CA certificate manually][7]
* [Certificates for localhost - Let's Encrypt - Free SSL/TLS Certificates][8]

[1]: https://github.com/dakshshah96/local-cert-generator
[2]: https://www.grc.com/sn/sn-090.htm
[3]: https://www.grc.com/sn/sn-094.htm
[4]: https://developers.yubico.com/U2F/Libraries/Using_a_library.html
[5]: https://github.com/mablay/u2f-demo
[6]: https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec
[7]: https://docs.mitmproxy.org/stable/concepts-certificates/#installing-the-mitmproxy-ca-certificate-manually
[8]: https://letsencrypt.org/docs/certificates-for-localhost/

NOTE: TODO: listen to both
