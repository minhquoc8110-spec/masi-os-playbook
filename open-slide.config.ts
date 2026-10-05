import type { OpenSlideConfig } from '@open-slide/core';

const openSlideConfig: OpenSlideConfig = {
  // GitHub Pages project site path: https://minhquoc8110-spec.github.io/masi-os-playbook/canary/
  base: '/masi-os-playbook/canary/',
  build: {
    // Canary keeps the runtime UI visible so QA can inspect presenter/export/navigation.
    showSlideBrowser: true,
    showSlideUi: true,
    allowHtmlDownload: true,
  },
};

export default openSlideConfig;
