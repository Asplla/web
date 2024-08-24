<template>
  <div class="iptv-banner-warp ">
    <svg aria-hidden="true" class="iptv-banner-bg">
      <defs>
        <pattern x="50%" y="-1" id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none"></path>
        </pattern>
      </defs>
      <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" stroke-width="0"></rect>
    </svg>
    <div aria-hidden="true" class="iptv-banner-halo">
      <div class="halo-c" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%);"></div>
    </div>
    <div class="relative pt-120 px-20 600:px-40 960:px-64 1024:flex 1024:px-40 1200:px-80 1440:px-120 transition-all duration-200">
      <div class="max-w-576 shrink-0 1024:pt-32">
        <svg aria-hidden="true" viewBox="0 0 808 808" version="1.1" width="44" height="44" class="result-success-logo" data-view-component="true">
          <g xmlns="http://www.w3.org/2000/svg">
            <path class="st0" d="M723.8,84.4C647.5,8.5,537.9,0,404,0C269.9,0,160.1,8.6,83.9,84.7S0,270.4,0,404.4S7.7,648,84,724.1   S269.9,808,404,808s243.8-7.7,320-83.9s84-185.8,84-319.8C808,270.2,800.2,160.5,723.8,84.4z M395.8,432.8   c-35.3,55.5-83.3,103.4-140,138.8c-18.9,11.4-41.6,11.4-60.6,1.3c-18.9-10.1-30.3-29-31.5-50.5c0-21.4,11.4-41.6,30.3-51.7   c29-17.7,55.5-40.4,77-66.9c-22.7-26.5-47.9-47.9-77-66.9c-29-16.4-37.8-53-21.4-80.7c16.4-27.7,54.2-36.6,82-20.2   c56.8,35.3,103.4,82,140,137.5C407.2,391.2,407.2,415.1,395.8,432.8z M596.4,555.2H452.6c-26.5,0-47.9-12.6-47.9-37.8   s21.4-37.8,47.9-37.8h143.8c26.5,0,47.9,12.6,47.9,37.8C644.3,542.5,622.9,555.2,596.4,555.2z"/>
          </g>
        </svg>
        <h1 class="text-60 leading-none tracking-tight font-bold mt-40 text-black dark:text-white">iptv-sources</h1>
        <p class="leading-32 text-18 mt-24">Autoupdate iptv sources.</p>
      </div>
      <div class="flex mt-64 mx-auto max-w-672 640:mt-96 1024:flex-none 1024:max-w-none 1024:mt-0 1024:mr-0 1024:ml-40 1280:ml-[128px]">
        <div class="relative bg-cover bg-no-repeat flex-none w-[930px] h-[528px] 640:max-w-[1024px] 1024:max-w-none">
          <img alt="App screenshot" src="@/assets/img/iptv/iptv_banner_content.jpg" width="2432" height="1442" class="absolute top-3 left-4  w-[918px] h-[516px] border-6 border-gray-900">
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="tsx" setup>
</script>
<style scoped>
 @import '@/assets/iptv.css';
</style>