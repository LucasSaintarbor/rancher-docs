---
title: Azure Marketplace Common Issues
---

### Migrating Rancher to a different AKS Cluster

When migrating Rancher to a different AKS cluster by following the steps specified in [Rancher Backups and Disaster Recovery](../../../pages-for-subheaders/backup-restore-and-disaster-recovery.md), Rancher Prime must be reinstalled via the Azure Marketplace on the target AKS cluster after restoring from the backup. Furthermore, the restored Rancher version must not be newer than the version available in the Azure Marketplace.