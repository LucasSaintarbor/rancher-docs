import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import './VersionBanner.css';

export default function VersionBanner() {
  const { siteConfig } = useDocusaurusContext();
  const currentVersion = useDocsVersion()?.version;
  const bannerConfig = siteConfig.customFields?.versionBanners?.[currentVersion];

  const [visible, setVisible] = useState(bannerConfig?.enabled);

  if (!visible || !bannerConfig?.enabled) return null;

  return (
    <div 
      className="version-banner" 
      style={{ backgroundColor: bannerConfig.backgroundColor, color: bannerConfig.textColor }}
    >
      {bannerConfig.message}
      {bannerConfig.url && (
        <a href={bannerConfig.url} className="banner-link" target="_blank" rel="noopener noreferrer">
          {bannerConfig.linkText || '(Learn More)'}
        </a>
      )}
      {bannerConfig.dismissible && (
        <button className="close-btn" onClick={() => setVisible(false)}>✖</button>
      )}
    </div>
  );
}

