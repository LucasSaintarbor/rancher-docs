:::warning Deprecation of v3 API tokens
Rancher v2.13 introduced a new token resource in the `ext.cattle.io` API group to serve as the public API for tokens, which was only accessible through `kubectl`.

Starting with Rancher v2.14.0:

- Legacy v3 API tokens (`tokens.management.cattle.io`) are being phased out and scheduled for removal in a future release. If you currently rely on legacy tokens for automation or API access, transition to the new `tokens.ext.cattle.io` tokens to ensure continued compatibility.
- The Rancher dashboard provides basic support for `tokens.ext.cattle.io` (create, view or list, and delete).
:::
