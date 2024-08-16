<template>
  <div class="layout">
    <div class="result-success">
      <svg aria-hidden="true" viewBox="0 0 453.54 396.85" version="1.1" width="64" height="64" class="result-success-logo" data-view-component="true">
          <g>
            <rect x="167.34" y="102.62" width="110.95" height="248.31"></rect>
            <g>
              <polygon points="0,0 115.45,0 149.93,396.85 35.98,396.85 "></polygon>
              <polygon points="453.54,0 338.1,0 303.61,396.85 417.56,396.85 "></polygon>
            </g>
          </g>
        </svg>
        <div class="result-success-title">Xu's Cloud</div>
        <div class="result-success-describe">非公开访问页面，请关闭浏览器</div>
        <div class="result-success-btns">
          <t-button href="https://status.wxss.fit" theme="primary" size="large">
            <template #icon><data-icon /></template>
            系统运行状态
          </t-button>
        </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
  import { DataIcon } from 'tdesign-icons-vue-next';
</script>
