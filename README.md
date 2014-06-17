hijack_rsa.min.js
=================

Sample chrome extension to hijack crypto lib

This proof of concept demonstrates that browser based JS encryption is ultimately
flawed as the execution environment can be manipulated externally. Extensions and
backdoored web browser binaries are the most obvious candidates for this.

WebCrypto might remediate this somewhat by providing crypto primitives to the JS
execution environment that cannot be tampered with by extensions. Web browser
will still need to be trusted however and this extends to trusting their auto
update mechanism implictly. Including the required DNS, IP networ, and PKI
infrastructures.
