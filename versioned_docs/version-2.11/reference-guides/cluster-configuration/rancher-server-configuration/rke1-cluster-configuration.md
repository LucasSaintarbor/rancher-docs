---
title: RKE Cluster Configuration Reference
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"/>
</head>

<EOLRKE1Warning />

When Rancher installs Kubernetes, it uses [RKE](../../../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md) or [RKE2](https://docs.rke2.io/) as the Kubernetes distribution.

This section covers the configuration options that are available in Rancher for a new or existing RKE Kubernetes cluster.


## Overview

You can configure the Kubernetes options one of two ways:

- [Rancher UI](#configuration-options-in-the-rancher-ui): Use the Rancher UI to select options that are commonly customized when setting up a Kubernetes cluster.
- [Cluster Config File](#rke-cluster-config-file-reference): Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the options available in an RKE installation, except for system_images configuration, by specifying them in YAML.

The RKE cluster config options are nested under the `rancher_kubernetes_engine_config` directive. For more information, see the section about the [cluster config file.](#rke-cluster-config-file-reference)

In [clusters launched by RKE](../../../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md), you can edit any of the remaining options that follow.

For an example of RKE config file syntax, see the [RKE documentation](https://rancher.com/docs/rke/latest/en/example-yamls/).

The forms in the Rancher UI don't include all advanced options for configuring RKE. For the complete reference of configurable options for RKE Kubernetes clusters in YAML, see the [RKE documentation.](https://rancher.com/docs/rke/latest/en/config-options/)

## Editing Clusters with a Form in the Rancher UI

To edit your cluster,

1. In the upper left corner, click **☰ > Cluster Management**.
1. Go to the cluster you want to configure and click **⋮ > Edit Config**.


## Editing Clusters with YAML

Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the options available in an RKE installation, except for system_images configuration, by specifying them in YAML.

RKE clusters (also called RKE1 clusters) are edited differently than RKE2 and K3s clusters.

To edit an RKE config file directly from the Rancher UI,

1. Click **☰ > Cluster Management**.
1. Go to the RKE cluster you want to configure. Click and click **⋮ > Edit Config**. This take you to the RKE configuration form. Note: Because cluster provisioning changed in Rancher 2.6, the **⋮ > Edit as YAML** can be used for configuring RKE2 clusters, but it can't be used for editing RKE1 configuration.
1. In the configuration form, scroll down and click **Edit as YAML**.
1. Edit the RKE options under the `rancher_kubernetes_engine_config` directive.

## Configuration Options in the Rancher UI

:::tip

Some advanced configuration options are not exposed in the Rancher UI forms, but they can be enabled by editing the RKE cluster configuration file in YAML. For the complete reference of configurable options for RKE Kubernetes clusters in YAML, see the [RKE documentation.](https://rancher.com/docs/rke/latest/en/config-options/)

:::

### Kubernetes Version

The version of Kubernetes installed on your cluster nodes. Rancher packages its own version of Kubernetes based on [hyperkube](https://github.com/rancher/hyperkube).

For more detail, see [Upgrading Kubernetes](../../../getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md).

### Network Provider

The [Network Provider](https://kubernetes.io/docs/concepts/cluster-administration/networking/) that the cluster uses. For more details on the different networking providers, please view our [Networking FAQ](../../../faq/container-network-interface-providers.md).

:::caution

After you launch the cluster, you cannot change your network provider. Therefore, choose which network provider you want to use carefully, as Kubernetes doesn't allow switching between network providers. Once a cluster is created with a network provider, changing network providers would require you  tear down the entire cluster and all its applications.

:::

Out of the box, Rancher is compatible with the following network providers:

- [Canal](https://github.com/projectcalico/canal)
- [Flannel](https://github.com/coreos/flannel#flannel)
- [Calico](https://docs.projectcalico.org/v3.11/introduction/)
- [Weave](https://github.com/weaveworks/weave)

<DeprecationWeave />

:::note Notes on Weave:

When Weave is selected as network provider, Rancher will automatically enable encryption by generating a random password. If you want to specify the password manually, please see how to configure your cluster using a [Config File](#rke-cluster-config-file-reference) and the [Weave Network Plug-in Options](https://rancher.com/docs/rke/latest/en/config-options/add-ons/network-plugins/#weave-network-plug-in-options).

:::

### Project Network Isolation

If your network provider allows project network isolation, you can choose whether to enable or disable inter-project communication.

Project network isolation is available if you are using any RKE network plugin that supports the enforcement of Kubernetes network policies, such as Canal or the Cisco ACI plugin.

### Kubernetes Cloud Providers

You can configure a [Kubernetes cloud provider](../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/set-up-cloud-providers.md). If you want to use dynamically provisioned [volumes and storage](../../../how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/create-kubernetes-persistent-storage.md) in Kubernetes, typically you must select the specific cloud provider in order to use it. For example, if you want to use Amazon EBS, you would need to select the `aws` cloud provider.

:::note

If the cloud provider you want to use is not listed as an option, you will need to use the [config file option](#rke-cluster-config-file-reference) to configure the cloud provider. Please reference the [RKE cloud provider documentation](https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/) on how to configure the cloud provider.

:::

### Private Registries

The cluster-level private registry configuration is only used for provisioning clusters.

There are two main ways to set up private registries in Rancher: by setting up the [global default registry](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry.md) through the **Settings** tab in the global view, and by setting up a private registry in the advanced options in the cluster-level settings. The global default registry is intended to be used for air-gapped setups, for registries that do not require credentials. The cluster-level private registry is intended to be used in all setups in which the private registry requires credentials.

If your private registry requires credentials, you need to pass the credentials to Rancher by editing the cluster options for each cluster that needs to pull images from the registry.

The private registry configuration option tells Rancher where to pull the [system images](https://rancher.com/docs/rke/latest/en/config-options/system-images/) or [addon images](https://rancher.com/docs/rke/latest/en/config-options/add-ons/) that will be used in your cluster.

- **System images** are components needed to maintain the Kubernetes cluster.
- **Add-ons** are used to deploy several cluster components, including network plug-ins, the ingress controller, the DNS provider, or the metrics server.

For more information on setting up a private registry for components applied during the provisioning of the cluster, see the [RKE documentation on private registries](https://rancher.com/docs/rke/latest/en/config-options/private-registries/).

Rancher v2.6 introduced the ability to configure [ECR registries for RKE clusters](https://rancher.com/docs/rke/latest/en/config-options/private-registries/#amazon-elastic-container-registry-ecr-private-registry-setup).

### Authorized Cluster Endpoint

Authorized Cluster Endpoint (ACE) can be used to directly access the Kubernetes API server, without requiring communication through Rancher.

:::note

ACE is available on RKE, RKE2, and K3s clusters that are provisioned or registered with Rancher. It's not available on  clusters in a hosted Kubernetes provider, such as Amazon's EKS.

:::

ACE must be set up [manually](../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md#authorized-cluster-endpoint-support-for-rke2-and-k3s-clusters) on RKE2 and K3s clusters. In RKE, ACE is enabled by default in Rancher-launched Kubernetes clusters, using the IP of the node with the `controlplane` role and the default Kubernetes self-signed certificates.

For more detail on how an authorized cluster endpoint works and why it is used, refer to the [architecture section.](../../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-authorized-cluster-endpoint)

We recommend using a load balancer with the authorized cluster endpoint. For details, refer to the [recommended architecture section.](../../rancher-manager-architecture/architecture-recommendations.md#architecture-for-an-authorized-cluster-endpoint-ace)

### Node Pools

For information on using the Rancher UI to set up node pools in an RKE cluster, refer to [this page.](../../../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md)

### NGINX Ingress

If you want to publish your applications in a high-availability configuration, and you're hosting your nodes with a cloud-provider that doesn't have a native load-balancing feature, enable this option to use NGINX Ingress within the cluster.

### Metrics Server Monitoring

Option to enable or disable [Metrics Server](https://rancher.com/docs/rke/latest/en/config-options/add-ons/metrics-server/).

Each cloud provider capable of launching a cluster using RKE can collect metrics and monitor for your cluster nodes. Enable this option to view your node metrics from your cloud provider's portal.

You must have an existing Pod Security Policy configured before you can use this option.

### Docker Version on Nodes

Configures whether nodes are allowed to run versions of Docker that Rancher doesn't officially support.

If you choose to require a supported Docker version, Rancher will stop pods from running on nodes that don't have a supported Docker version installed.

For details on which Docker versions were tested with each Rancher version, refer to the [support maintenance terms.](https://rancher.com/support-maintenance-terms/)

### Docker Root Directory

If the nodes you are adding to the cluster have Docker configured with a non-default Docker Root Directory (default is `/var/lib/docker`),  specify the correct Docker Root Directory in this option.

### Default Pod Security Policy

If you enable **Pod Security Policy Support**, use this drop-down to choose the pod security policy that's applied to the cluster.

### Node Port Range

Option to change the range of ports that can be used for [NodePort services](https://kubernetes.io/docs/concepts/services-networking/service/#nodeport). Default is `30000-32767`.

### Recurring etcd Snapshots

Option to enable or disable [recurring etcd snapshots](https://rancher.com/docs/rke/latest/en/etcd-snapshots/#etcd-recurring-snapshots).

### Agent Environment Variables

Option to set environment variables for [rancher agents](../../../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents.md). The environment variables can be set using key value pairs. If rancher agent requires use of proxy to communicate with Rancher server, `HTTP_PROXY`, `HTTPS_PROXY` and `NO_PROXY` environment variables can be set using agent environment variables.

### Updating ingress-nginx

Clusters that were created before Kubernetes 1.16 will have an `ingress-nginx` `updateStrategy` of `OnDelete`. Clusters that were created with Kubernetes 1.16 or newer will have `RollingUpdate`.

If the `updateStrategy` of `ingress-nginx` is `OnDelete`, you will need to delete these pods to get the correct version for your deployment.

### Cluster Agent Configuration and Fleet Agent Configuration

You can configure the scheduling fields and resource limits for the Cluster Agent and the cluster's Fleet Agent. You can use these fields to customize tolerations, affinity rules, and resource requirements. Additional tolerations are appended to a list of default tolerations and control plane node taints. If you define custom affinity rules, they override the global default affinity setting. Defining resource requirements sets requests or limits where there previously were none.

:::note

With this option, it's possible to override or remove rules that are required for the functioning of the cluster. We strongly recommend against removing or overriding these and any other affinity rules, as this may cause unwanted side effects:

- `affinity.nodeAffinity.requiredDuringSchedulingIgnoredDuringExecution` for `cattle-cluster-agent`
- `cluster-agent-default-affinity` for `cattle-cluster-agent`
- `fleet-agent-default-affinity` for `fleet-agent`

:::

If you downgrade Rancher to v2.7.4 or below, your changes will be lost and the agents will re-deploy without your customizations. The Fleet agent will fallback to using its built-in default values when it re-deploys. If the Fleet version doesn't change during the downgrade, the re-deploy won't be immediate.


## RKE Cluster Config File Reference

Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the [options available](https://rancher.com/docs/rke/latest/en/config-options/) in an RKE installation, except for `system_images` configuration. The `system_images` option is not supported when creating a cluster with the Rancher UI or API.

For the complete reference for configurable options for RKE Kubernetes clusters in YAML, see the [RKE documentation.](https://rancher.com/docs/rke/latest/en/config-options/)

### Config File Structure in Rancher

RKE (Rancher Kubernetes Engine) is the tool that Rancher uses to provision Kubernetes clusters. Rancher's cluster config files used to have the same structure as [RKE config files,](https://rancher.com/docs/rke/latest/en/example-yamls/) but the structure changed so that in Rancher, RKE cluster config items are separated from non-RKE config items. Therefore, configuration for your cluster needs to be nested under the `rancher_kubernetes_engine_config` directive in the cluster config file. Cluster config files created with earlier versions of Rancher will need to be updated for this format. An example cluster config file is included below.

<details id="v2.3.0-cluster-config-file">
  <summary>Example Cluster Config File</summary>

```yaml
#
# Cluster Config
#
docker_root_dir: /var/lib/docker
enable_cluster_alerting: false
enable_cluster_monitoring: false
enable_network_policy: false
local_cluster_auth_endpoint:
  enabled: true
#
# Rancher Config
#
rancher_kubernetes_engine_config: # Your RKE template config goes here.
  addon_job_timeout: 30
  authentication:
    strategy: x509
  ignore_docker_version: true
#
# # Currently only nginx ingress provider is supported.
# # To disable ingress controller, set `provider: none`
# # To enable ingress on specific nodes, use the node_selector, eg:
#    provider: nginx
#    node_selector:
#      app: ingress
#
  ingress:
    provider: nginx
  kubernetes_version: v1.15.3-rancher3-1
  monitoring:
    provider: metrics-server
#
#   If you are using calico on AWS
#
#    network:
#      plugin: calico
#      calico_network_provider:
#        cloud_provider: aws
#
# # To specify flannel interface
#
#    network:
#      plugin: flannel
#      flannel_network_provider:
#      iface: eth1
#
# # To specify flannel interface for canal plugin
#
#    network:
#      plugin: canal
#      canal_network_provider:
#        iface: eth1
#
  network:
    options:
      flannel_backend_type: vxlan
    plugin: canal
#
#    services:
#      kube-api:
#        service_cluster_ip_range: 10.43.0.0/16
#      kube-controller:
#        cluster_cidr: 10.42.0.0/16
#        service_cluster_ip_range: 10.43.0.0/16
#      kubelet:
#        cluster_domain: cluster.local
#        cluster_dns_server: 10.43.0.10
#
  services:
    etcd:
      backup_config:
        enabled: true
        interval_hours: 12
        retention: 6
        safe_timestamp: false
      creation: 12h
      extra_args:
        election-timeout: 5000
        heartbeat-interval: 500
      gid: 0
      retention: 72h
      snapshot: false
      uid: 0
    kube_api:
      always_pull_images: false
      pod_security_policy: false
      service_node_port_range: 30000-32767
  ssh_agent_auth: false
windows_prefered_cluster: false
```
</details>

### Default DNS provider

The table below indicates what DNS provider is deployed by default. See [RKE documentation on DNS provider](https://rancher.com/docs/rke/latest/en/config-options/add-ons/dns/) for more information how to configure a different DNS provider. CoreDNS can only be used on Kubernetes v1.12.0 and higher.

| Rancher version | Kubernetes version | Default DNS provider |
|-------------|--------------------|----------------------|
| v2.2.5 and higher | v1.14.0 and higher | CoreDNS |
| v2.2.5 and higher | v1.13.x and lower | kube-dns |
| v2.2.4 and lower | any | kube-dns |

## Rancher Specific Parameters in YAML

Besides the RKE config file options, there are also Rancher specific settings that can be configured in the Config File (YAML):

### docker_root_dir

See [Docker Root Directory](#docker-root-directory).

### enable_cluster_monitoring

Option to enable or disable [Cluster Monitoring](../../../integrations-in-rancher/monitoring-and-alerting/monitoring-and-alerting.md).

### enable_network_policy

Option to enable or disable Project Network Isolation.

Project network isolation is available if you are using any RKE network plugin that supports the enforcement of Kubernetes network policies, such as Canal or the Cisco ACI plugin.

### local_cluster_auth_endpoint

See [Authorized Cluster Endpoint](#authorized-cluster-endpoint).

Example:

```yaml
local_cluster_auth_endpoint:
  enabled: true
  fqdn: "FQDN"
  ca_certs: |-
    -----BEGIN CERTIFICATE-----
    ...
    -----END CERTIFICATE-----
```

### Custom Network Plug-in

You can add a custom network plug-in by using the [user-defined add-on functionality](https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/) of RKE. You define any add-on that you want deployed after the Kubernetes cluster is deployed.

There are two ways that you can specify an add-on:

- [In-line Add-ons](https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/#in-line-add-ons)
- [Referencing YAML Files for Add-ons](https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/#referencing-yaml-files-for-add-ons)

For an example of how to configure a custom network plug-in by editing the `cluster.yml`, refer to the [RKE documentation.](https://rancher.com/docs/rke/latest/en/config-options/add-ons/network-plugins/custom-network-plugin-example)