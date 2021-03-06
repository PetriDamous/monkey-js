// Checks for Internet Explorer browser type
const isIE = /*@cc_on!@*/ false || !!document.documentMode;

/*************************************************
  Property on window obj that holds application
  data
**************************************************/

export function setupGlobalObj() {
  window.cpGlobalObj = {
    browserType: {
      isFirefox: typeof InstallTrigger !== "undefined",
      isIE,
      isEdge: !isIE && !!window.StyleMedia,
      isChrome:
        navigator.userAgent.toLocaleLowerCase().indexOf("chrome") !== -1
          ? true
          : false,
    },
    project_info: {
      CaptivateVersion: null,
      cpInfoAuthor: null,
      cpInfoCompany: null,
      cpInfoCopyright: null,
      cpInfoCourseID: null,
      cpInfoCourseName: null,
    },
    slideData: {
      slidesIdArray: [],
      slidesObjArray: [],
      currentSlide: {},
      prevSlide: {},
      nextSlide: {},
      videoSlides: [],
      viewedVideoSlides: [],
    },
    ccOptions_manual: {
      isCcOnEnter_manual: false,
      isCcDisplay_manual: true,
    },
    ccOptions_auto: {
      isCCRepostion: true,
    },
    developerMode: {
      isDeveloper: true,
      frameSkip: {
        framesRewind: 90,
        framesForward: 600,
      },
    },
  };
}
