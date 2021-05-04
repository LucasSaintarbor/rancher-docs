---
title: Rancher CVEs and Resolutions
weight: 300
---

Rancher is committed to informing the community of security issues in our products. Rancher will publish CVEs (Common Vulnerabilities and Exposures) for issues we have resolved.

| ID | Description | Date | Resolution |
|----|-------------|------|------------|
| [CVE-2018-20321](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-20321) |  Any project member with access to the `default` namespace can mount the `netes-default` service account in a pod and then use that pod to execute administrative privileged commands against the Kubernetes cluster.  | 29 Jan 2019 | [Rancher v2.1.6](https://github.com/rancher/rancher/releases/tag/v2.1.6) and [Rancher v2.0.11](https://github.com/rancher/rancher/releases/tag/v2.0.11) - Rolling back from these versions or greater have specific [instructions]({{<baseurl>}}/rancher/v2.5/en/upgrades/rollbacks/).  |
| [CVE-2019-6287](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-6287) | Project members continue to get access to namespaces from projects that they were removed from if they were added to more than one project. | 29 Jan 2019  |  [Rancher v2.1.6](https://github.com/rancher/rancher/releases/tag/v2.1.6) and [Rancher v2.0.11](https://github.com/rancher/rancher/releases/tag/v2.0.11)  |
| [CVE-2019-11202](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-11202) | The default admin, that is shipped with Rancher, will be re-created upon restart of Rancher despite being explicitly deleted. | 16 Apr 2019  |  [Rancher v2.2.2](https://github.com/rancher/rancher/releases/tag/v2.2.2), [Rancher v2.1.9](https://github.com/rancher/rancher/releases/tag/v2.1.9) and [Rancher v2.0.14](https://github.com/rancher/rancher/releases/tag/v2.0.14)  |
| [CVE-2019-12274](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-12274) | Nodes using the built-in node drivers using a file path option allows the machine to read arbitrary files including sensitive ones from inside the Rancher server container. | 5 Jun 2019  |  [Rancher v2.2.4](https://github.com/rancher/rancher/releases/tag/v2.2.4), [Rancher v2.1.10](https://github.com/rancher/rancher/releases/tag/v2.1.10) and [Rancher v2.0.15](https://github.com/rancher/rancher/releases/tag/v2.0.15)  |
| [CVE-2019-12303](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-12303) |  Project owners can inject extra fluentd logging configurations that makes it possible to read files or execute arbitrary commands inside the fluentd container. Reported by Tyler Welton from Untamed Theory. | 5 Jun 2019  |  [Rancher v2.2.4](https://github.com/rancher/rancher/releases/tag/v2.2.4), [Rancher v2.1.10](https://github.com/rancher/rancher/releases/tag/v2.1.10) and [Rancher v2.0.15](https://github.com/rancher/rancher/releases/tag/v2.0.15)   |
| [CVE-2019-13209](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-13209) |  The vulnerability is known as a [Cross-Site Websocket Hijacking attack](https://www.christian-schneider.net/CrossSiteWebSocketHijacking.html). This attack allows an exploiter to gain access to clusters managed by Rancher with the roles/permissions of a victim. It requires that a victim to be logged into a Rancher server and then access a third-party site hosted by the exploiter. Once that is accomplished, the exploiter is able to execute commands against the Kubernetes API with the permissions and identity of the victim. Reported by Matt Belisle and Alex Stevenson from Workiva. | 15 Jul 2019  |   [Rancher v2.2.5](https://github.com/rancher/rancher/releases/tag/v2.2.5), [Rancher v2.1.11](https://github.com/rancher/rancher/releases/tag/v2.1.11) and [Rancher v2.0.16](https://github.com/rancher/rancher/releases/tag/v2.0.16) |
| [CVE-2019-14436](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14436) |  The vulnerability allows a member of a project that has access to edit role bindings to be able to assign themselves or others a cluster level role granting them administrator access to that cluster. The issue was found and reported by Michal Lipinski at Nokia. | 5 Aug 2019  | [Rancher v2.2.7](https://github.com/rancher/rancher/releases/tag/v2.2.7) and [Rancher v2.1.12](https://github.com/rancher/rancher/releases/tag/v2.1.12) |
| [CVE-2019-14435](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14435) |  This vulnerability allows authenticated users to potentially extract otherwise private data out of IPs reachable from system service containers used by Rancher. This can include but not only limited to services such as cloud provider metadata services. Although Rancher allow users to configure whitelisted domains for system service access, this flaw can still be exploited by a carefully crafted HTTP request. The issue was found and reported by Matt Belisle and Alex Stevenson at Workiva. | 5 Aug 2019  | [Rancher v2.2.7](https://github.com/rancher/rancher/releases/tag/v2.2.7) and [Rancher v2.1.12](https://github.com/rancher/rancher/releases/tag/v2.1.12) |
| [CVE-2021-25313](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-25313)  | A security vulnerability was discovered on all Rancher 2 versions. When accessing the Rancher API with a browser, the URL was not properly escaped, making it vulnerable to an XSS attack. Specially crafted URLs to these API endpoints could include JavaScript which would be embedded in the page and execute in a browser. There is no direct mitigation. Avoid clicking on untrusted links to your Rancher server.   |  2 Mar 2021  | [Rancher v2.5.6](https://github.com/rancher/rancher/releases/tag/v2.5.6), [Rancher v2.4.14](https://github.com/rancher/rancher/releases/tag/v2.4.14), and [Rancher v2.3.11](https://github.com/rancher/rancher/releases/tag/v2.3.11) |