<template>
  <div class="hero h-[890px]">
    <div class="inner relative w-full mx-auto pt-[80px] px-[30px] max-w-[1234px] grid sm:pt-[160px]">
      <div class="relative grid gap-8 mt-10 w-full max-w-lg lg:w-[300px]">
        <h1 class="big-text text-6xl text-white font-bold">
          Design<br class="hidden lg:inline-block" /> and code <br class="hidden lg:inline-block" /><span>Vue</span> apps
        </h1>
        <p>
          Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.
        </p>
        <button class="pro-access relative flex items-center h-[77px] p-3 rounded-3xl cursor-pointer">
          <div
            class="relative flex justify-center items-center w-[55px] h-[55px]"
          >
            <img
              src="@/assets/images/icons/dashed-circle.svg"
              class="dashed-cirlce absolute w-[55px] h-[55px]"
            />
            <div
              class="image-wrapper relative flex justify-center items-center w-[45px] h-[45px] rounded-full"
            >
              <img
                src="@/assets/images/icons/pricing-large.svg"
                class="w-[29px] h-[29px]"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center items-start ml-5">
            <p class="uppercase text-15 font-bold">Get Pro Access</p>
            <p class="text-13 font-light text-[#595c7b]">$19 per month</p>
          </div>
        </button>
        <p class="text-13 text-black text-opacity-70 font-light">
          Purchase includes access to 30+ courses, 100+ premium tutorials, 120+ hours of videos, source files and certificates.
        </p>
      </div>
      <div class="mocks relative hidden lg:block">
        <div class="mock-1 absolute w-[183px] h-[120px] top-[40px] left-[-37px] rounded-xl">
          <img src="@/assets/images/mockups/mockup-card2.svg" />
        </div>
        <div class="mock-2 absolute w-[183px] h-[120px] top-[40px] left-[176px] rounded-xl">
          <img src="@/assets/images/mockups/mockup-card2.svg" />
        </div>
        <div class="mock-3 absolute w-[701px] h-[428px] top-[80px] left-[30px] rounded-xl">
          <img src="@/assets/images/mockups/mockup-content.svg" />
        </div>
        <div class="mock-4 absolute w-[400px] h-[273px] top-[260px] left-[70px] rounded-xl">
          <img src="@/assets/images/mockups/mockup2-bg.svg" />
        </div>
        <div class="mock-5 absolute w-[414px] h-[273px] top-[290px] left-[370px] rounded-xl">
          <img src="@/assets/images/mockups/mockup3-bg.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background: rgba(0, 0, 0, 0) url("@/assets/images/backgrounds/hero-background.jpg") no-repeat scroll 40% -140px / 3000px;
  @media screen and (min-width: 640px) {
    background-position: center top;
  }

  .inner {
    grid-template-columns: auto;
    justify-content: center;
    @media screen and (min-width: 1024px) {
      justify-content: flex-start;
      grid-template-columns: 500px auto;  
    }

    .big-text {
      background: linear-gradient(rgb(115, 0, 64) 0%, rgb(48, 28, 190) 100%);
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .pro-access {
      background: rgba(0, 0, 0, 0) linear-gradient(rgb(255, 255, 255) 0%, rgb(217, 223, 255) 100%) repeat scroll 0% 0%;
      border: medium none;
      box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset, rgba(23, 0, 102, 0.2) 0px 20px 40px, rgba(0, 0, 0, 0.1) 0px 1px 3px;
      transition-property: trasform box-shadow;
      transition-timing-function: ease-in-out;
      transition-duration: 0.25s;

      .dashed-cirlce {
        transition: transform 0.25s ease-in-out;
      }

      .image-wrapper {
        background: rgba(0, 0, 0, 0) linear-gradient(200.44deg, rgb(67, 22, 219) 13.57%, rgb(144, 118, 231) 98.38%) repeat scroll 0% 0%;
        box-shadow: rgba(182, 153, 255, 0.3) 0px 10px 20px;
        transition-property: background box-shadow;
        transition-timing-function: ease-in-out;
        transition-duration: 0.25s;

        img {
          transition: transform 0.25s ease-in-out;
        }
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset, rgba(23, 0, 102, 0.3) 0px 40px 80px, rgba(0, 0, 0, 0.3) 0px 10px 30px;

        .dashed-cirlce {
          transform: rotate(30deg) scale(1.2);
        }

        .image-wrapper {
          background: rgba(0, 0, 0, 0) linear-gradient(200.44deg, rgb(94, 23, 255) 13.57%, rgb(55, 180, 233) 98.38%) repeat scroll 0% 0%;
          box-shadow: rgba(182, 153, 255, 0.3) 0px 10px 20px, rgba(0, 0, 0, 0.3) 0px 0px 20px inset;

          img {
            transform: scale(1.15);
          }
        }
      }
    }

    .mocks {
      > div {
        transform: rotateY(-20deg) rotateX(20deg);
        transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
      }

      .mock-1 {
        background: rgba(0, 0, 0, 0) radial-gradient(218.51% 281.09% at 100% 100%, rgba(253, 63, 51, 0.6) 0%, rgba(76, 0, 200, 0.6) 45.83%, rgba(76, 0, 200, 0.6) 100%) repeat scroll 0% 0%;
      }
      .mock-2 {
        background: rgba(0, 0, 0, 0) linear-gradient(192.64deg, rgb(67, 22, 219) 12.72%, rgb(144, 118, 231) 54.49%, rgb(162, 238, 255) 100.01%) repeat scroll 0% 0%;
      }
      .mock-3 {
        background: rgba(23, 12, 61, 0.3) none repeat scroll 0% 0%;
        box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
      }
      .mock-4,
      .mock-5 {
        box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
        background: rgba(23, 12, 61, 0.2) none repeat scroll 0% 0%;
      }

      &:hover {
        .mock-1 {
          transform: translate(-30px, -30px);
        }
        .mock-2 {
          transform: translate(0px, -30px);
        }
        .mock-3 {
          transform: translate(0px);
        }
        .mock-4 {
          transform: translate(-120px, 60px);
          z-index: 4;
        }
        .mock-5 {
          transform: translate(30px, 30px);
          z-index: 5;
        }
      }
    }
  }
}
</style>