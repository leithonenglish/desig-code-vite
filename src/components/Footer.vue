<template>
  <div class="relative w-full h-[640px]">
    <div class="absolute top-0 w-full h-[800px] overflow-hidden">
      <div class="absolute top-[350px] w-full h-[800px] bg-lucky-point"></div>
      <div class="wave absolute top-[30px] w-full h-[600px]">
        <svg width="1440" height="699"  fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="wave2">
              <path d="M1043 16C986.5 8.47162 971.769 70.9109 909 35.9999C830.581 -7.61479 789.5 16 668 16C546.5 16 483.744 68.7285 397.5 36.0001C327.97 9.61469 283 55.9999 181.5 15.9999C80 -24.0001 0.258789 25.9999 0.258789 25.9999C0.258789 112.822 0.25879 339.5 0.25879 339.5L1504.12 339.5L1504.12 25.9999C1504.12 25.9999 1324.5 23.9999 1267 15.9999C1209.5 7.99991 1192.09 34.2131 1156.5 15.9999C1115.21 -5.1325 1099.5 23.5284 1043 16Z" fill="url(#paint0_linear)"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wave {
  z-index: -1;
  transform-origin: left top;
  background: linear-gradient(rgba(19, 12, 62, 0.8) 0%, rgb(30, 19, 87) 28%);
  clip-path: url(#wave2);

  @media screen and (min-width: 1440px) {
    transform: scale(1.5);
    left: -1px;
  }

  @media screen and (min-width: 2200px) {
    transform: scale(2);
  }
}
</style>