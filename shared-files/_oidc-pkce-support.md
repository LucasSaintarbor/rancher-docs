Rancher supports the Proof Key for Code Exchange (PKCE) extension (RFC 7636) for OIDC authentication providers. SHA-256 (`S256`) is the only supported PKCE verification method. To enable this feature, your authentication provider must use PKCE with `S256` for authorization requests.

You can enable this feature by selecting **Enable PKCE (S256)** in your authentication provider configuration in Rancher. Enabling `S256` PKCE token verification allows you to mitigate authorization code interception attacks during OIDC authentication flows.
