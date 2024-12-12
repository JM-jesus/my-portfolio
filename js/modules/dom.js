export function initLoader() {
  const showLoader = () => {
    const loaderContainer = document.querySelector(".container__loader");
    loaderContainer.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  const hideLoader = () => {
    const loaderContainer = document.querySelector(".container__loader");
    loaderContainer.style.display = "none";
    document.body.style.overflow = "auto";
  };
  showLoader();

  const minLoaderTime = 2000;
  const [navigationTiming] = performance.getEntriesByType("navigation");
  const pageLoadTime =
    navigationTiming.responseStart - navigationTiming.requestStart;
  const timeToWait = Math.max(minLoaderTime, pageLoadTime);
  setTimeout(() => {
    hideLoader();
  }, timeToWait);
}
