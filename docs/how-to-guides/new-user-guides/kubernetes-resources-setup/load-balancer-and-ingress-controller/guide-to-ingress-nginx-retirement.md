---
title: Guide to Ingress NGINX Retirement
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/guide-to-ingress-nginx-retirement"/>
</head>

The Kubernetes SIG Network and the Security Response Committee announced the retirement of the Ingress NGINX project. Upstream best-effort maintenance will continue until March 2026. After this date, there will be no further upstream releases, bug fixes, or security updates. For more information about this announcement, refer to [Ingress NGINX Retirement: What You Need to Know](https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/).

To support users during this transition, SUSE provides extended support timelines and clear migration paths to Traefik. This guide centralizes the information on how to proceed based on your specific deployment scenario.

## Support and timelines

For organizations that cannot migrate immediately, SUSE Rancher Prime LTS provides extended support for RKE2 v1.35.

:::warning
**Extended support for Ingress NGINX**: SUSE Rancher Prime LTS provides patches for critical and important Common Vulnerabilities and Exposures (CVEs) for the Ingress NGINX component through December 2027. No new features will be added during this period.
:::

## Migration paths by environment

For organizations ready to move, SUSE offers a supported path to Traefik. Traefik includes a compatibility layer that can interpret many existing Ingress NGINX annotations. Identify your cluster environment below to find the correct migration approach.

### Standalone RKE2 clusters

For standalone or imported RKE2 clusters currently using Ingress NGINX, follow the official migration guide for standalone RKE2 clusters.

The migration process involves a four-phase strategy:

1. **Dual ingress controller setup:** Enable Traefik alongside Ingress NGINX using temporary, non-conflicting ports.
2. **Parallel migration and validation:** Duplicate Ingress resources and test Traefik's handling of the existing annotations.
3. **Final switchover:** Remove Ingress NGINX and configure Traefik to use the standard ports.
4. **Cleanup:** Delete the legacy Ingress objects.

### Rancher server on RKE2 (local clusters)

When migrating a Rancher local cluster, the Rancher Ingress resource requires specific handling to prevent lockouts. Follow the specific guide for migrating the Rancher Ingress to Traefik on an RKE2 cluster. This guide builds upon the standalone migration phases but includes steps tailored to the Rancher management server.

### Downstream RKE2 clusters (provisioned by Rancher)

For RKE2 clusters provisioned and managed by SUSE Rancher Prime, migration options are integrated directly into the user interface.

Starting in SUSE Rancher Prime v2.14.0 (and targeted for v2.13.5), the cluster configuration interface provides a Dual Mode migration option. This allows you to safely test and migrate traffic from Ingress NGINX to Traefik directly from the cluster management screen.

### Rancher on managed Kubernetes (Amazon EKS, Azure AKS, Google GKE)

If you run SUSE Rancher Prime on a managed Kubernetes service such as Amazon Elastic Kubernetes Service (EKS), Azure Kubernetes Service (AKS), or Google Kubernetes Engine (GKE), the recommendation is to migrate to Traefik.

SUSE Rancher Prime customers can leverage the Application Collection to deploy and manage the Traefik proxy. Community users should migrate to the upstream Traefik distribution.
