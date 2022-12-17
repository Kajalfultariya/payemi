import React, { useRef, useState, useEffect } from "react";
import splashbg from "../Static/Images/splash.webp";
import payemi from "../Static/Images/payemi.png";
import { withRouter } from "react-router-dom";

function Splash(props) {
  const userStatus = localStorage.getItem("user_status");
  function getDifferenceInHours(date1, date2) {
    const dateOne = localStorage.getItem("login_time");
    const dateOneObj = new Date(dateOne);
    const dateTwoObj = new Date();
    const milliseconds = Math.abs(dateTwoObj - dateOneObj);
    const hours = milliseconds / 36e5;
    return hours;
  }

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      // if (loading === false) {
      if (localStorage.getItem("access_token")) {
        var hours = getDifferenceInHours(
          localStorage.getItem("login_time"),
          new Date()
        );
        if (parseInt(hours) >= 24) {
          localStorage.removeItem("access_token");
          window.location.href = "/sign-in";
          //  props.history.push('sign-in')
        } else {
          //  props.history.push('category');
          window.location.href = "/home";
        }
      } else {
        // props.history.push('sign-in');
        window.location.href = "/sign-in";
      }
      // }
    }, 2000);
  }, []);

  return (
    <div
      className="splashbg d-flex align-center justify-center"
      style={{ backgroundImage: `url(${splashbg})` }}
    >
      <div className="pt-5 text-center">
        <div className="mb-3">
          <svg
            width="109"
            height="90"
            viewBox="0 0 109 90"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fillRule="nonzero" fill="none">
              <path
                d="M104.038 76.398a3.805 3.805 0 0 1-4.576 2.836 3.805 3.805 0 0 1-2.835-4.576 3.805 3.805 0 0 1 4.576-2.836 3.805 3.805 0 0 1 2.835 4.576zM99.437 52.923a3.805 3.805 0 0 1-4.576 2.835 3.805 3.805 0 0 1-2.835-4.576 3.805 3.805 0 0 1 4.576-2.835 3.8 3.8 0 0 1 2.835 4.576z"
                fill="#17CE7B"
              />
              <g transform="translate(9.6 1)">
                <circle
                  stroke="#FFF"
                  stroke-width="1.92"
                  fill="#FFF"
                  cx="42.208"
                  cy="42.259"
                  r="42.131"
                />
                <path
                  d="M21.734 77.613c-.006.013-.019.025-.025.045.064.012.121.038.185.05l-.16-.095z"
                  fill="#E9EFF4"
                />
                <path
                  d="M27.507 55.782c-.013.372-.23.698-.422 1.012a10.208 10.208 0 0 0-1.472 4.601c-.115 1.555-.045 3.469-1.395 4.23-.775.43-1.856.353-2.375 1.082-.16.218-.237.493-.313.755-.282 1.03-.57 2.061-.852 3.092a.661.661 0 0 1-.704.486l-.736-.077c.506.16.858.845.557 1.319-.486-.256-1.126.044-1.395.537-.256.487-.218 1.075-.077 1.613.442 1.58 1.792 2.86 3.386 3.238-.275.525-1.127.295-1.639-.057-3.686-2.496-6.476-6.298-7.744-10.567-.448-1.504-.736-3.104-1.612-4.403-.736-1.094-1.844-1.894-2.573-2.989-1.03-1.574-1.223-3.61-2.413-5.05-.666-.818-1.696-1.83-1.107-2.706.237-.359.742-.704.544-1.088-.064-.122-.199-.199-.307-.308-.404-.428-.122-1.107.076-1.657.308-.89.032-.275-.076-1.223-.02-.153-.48-1.958-.48-1.958-.922-.864-1.076-1.92-1.543-3.098-.294-.761-1.005-.972-1.504-1.721-.736-.896-.595-3.123-.697-3.61a2.166 2.166 0 0 1-.007-.704c2.317-15.667 9.952-20.973 9.856-20.749-.192.39.135.877.544 1.018.115.038.237.064.359.07.377.026.64.384.588.762-.044.3-.025.614.064.902.39.039.512-.492.628-.87.467-1.446 1.145-2.893 2.579-3.59a.577.577 0 0 1 .205-.058c.78-.122 1.196-.422 1.568-1.005.198-.32.524-.633.864-.793.403-.192.87.102.915.55.019.16.032.314.051.474.41-.103.82-.205 1.229-.314.429-.109.8.237.8.672 0 .192.045.39.134.557.275.512.96.774 1.504.563-.006.448-.41.794-.774 1.056-.922.698-2.746 2.266-2.746 2.266a.197.197 0 0 1-.083.019c-.685.064-1.408-.429-2.144-.333-.448.058-.998.058-1.26.512-.04.058-.2.858-.084.794.237-.135.467-.27.698-.404a.659.659 0 0 1 .8.11c.21.21.492.447.748.646a.668.668 0 0 1 .192.844c-.403.736-.985 1.447-1.715 1.62-.211.05-.429-.045-.589-.199-.262-.25-.812-.486-.819-.755-.934-.077-1.088.147-1.555.947-.474.807-.838 1.735-1.62 2.247-.473.326-1.055.448-1.574.716-.505.276-.972.8-.864 1.364.045.268.218.512.212.793-.032.512-.628.755-1.03 1.088-.686.57-.858 1.62-1.588 2.125-.531.371-1.242.365-1.856.557-.62.192-1.242.806-.992 1.408-.307.102-.864 3.142-.755 2.483.102-.595-.128.966.224 1.555a.663.663 0 0 1 .09.429c-.11.851-.116.838-.225 1.69-.032.179.263 1.67.436 1.81.486.423 1.216.692 1.248 1.326.032.78 1.318 2.137 1.881 1.644.295-.268.544-.608.915-.742.384-.14.8-.038 1.19.064 1.21.333 2.497.704 3.31 1.658.41.486.665 1.094 1.152 1.497 1.107.935 2.976.525 3.987 1.562.678.704.685 1.766.537 2.771-.038.275-.262.454-.524.525-.43.109-.781.64-.538 1.05.294-.327.64-.666 1.069-.666.435-.013.819.589.493.87.69-.883 2.284-.633 2.803.314a.675.675 0 0 0 .531.352c.749.051 1.504.109 2.26.166.262.02.498.192.575.448.352 1.203 3.04 1.415 2.976 2.835zM28.678 6.272a.737.737 0 0 1-.422-1.197c.275-.333.563-.678.934-.864 1.626-.832 3.52-.909 5.344-.966 4.154-.128 8.308-.256 12.461-.39-.96.524-1.926 1.055-2.893 1.587-.787.435-1.676.876-2.54.627-.02.691.614 1.337 1.305 1.331-1.709 1.056-4.077-.026-5.875.864-.755.371-1.363 1.075-2.195 1.203-.48.077-.98-.051-1.453.051-.8.173-1.306.928-1.894 1.498-.762.73-1.933 1.203-2.893.634-.583-.346-.883-1.082-.608-1.703.3-.685 1.005-.678 1.555-.966.416-.211.742-.781.429-1.127-.135-.147-.359-.21-.48-.37-.051-.058-.365-.129-.775-.212zM73.043 13.574c-.153.02-.313.013-.48-.032-.717-.153-1.26-.704-1.869-1.107-1.043-.691-2.361-.934-3.596-.71-.448.083-.864-.307-.794-.755.032-.212.045-.423.032-.634l-.218.077c-2.496-1.447-5.427-2.95-8.147-1.978-.627.23-1.197.57-1.837.794-.678.237-1.427.333-2.01.755-.588.422-.902 1.344-.396 1.85.429.428 1.114.313 1.715.37.199.02.403.097.583.212.428.282.37.934-.096 1.152-2.093.98-4.192 1.965-6.285 2.95a.663.663 0 0 0-.173 1.082c.46.442.768 1.05.838 1.683a.671.671 0 0 1-.768.743c-.62-.103-1.241-.39-1.875-.43-1.286-.063-2.515 1.07-2.54 2.356-.039 1.286 1.145 2.477 2.431 2.458.807-.007 1.664-.058 2.42-.23a.619.619 0 0 0 .467-.48c.16-.718.678-1.345 1.203-1.882 1.197-1.204 2.912-2.292 4.518-1.696.525.192.973.544 1.408.896.807.64 1.613 1.28 2.42 1.926a.66.66 0 0 0 .89-.058l.006-.006a.667.667 0 0 1 .96.006c.339.359.678.71 1.017 1.076a.563.563 0 0 0 .211.153c1.677.73 4.333-1.952 4.103-2.528-.122-.313-.423-.563-.48-.896-.122-.665.825-1.126 1.446-.819.154.077.288.173.403.288.378.371 1.005.224 1.12-.294.02-.103.045-.199.064-.301.416 1.1.967 2.15 1.632 3.13.301.441-.038 1.043-.576 1.023a10.455 10.455 0 0 0-3.302.39c-.55.154-.653.916-.16 1.204.5.3 1.088.454 1.677.435.448-.013.947-.115 1.286.173.256.218.327.57.371.896.084.48.16.966.244 1.44.083.486-.378.877-.852.736-.87-.256-1.868-.218-2.803-.237-1.03-.025-2.189-.25-2.899-.915-.352-.326-.94-.173-1.069.282-.038.14-.07.281-.083.428a.669.669 0 0 1-.87.564c-.954-.301-1.863-.75-2.31-1.543a.685.685 0 0 0-.666-.345c-.973.09-2.01-.557-2.26-1.517-.102-.39-.134-.87-.48-1.075-.21-.122-.48-.103-.723-.077-2.067.243-4.128.467-6.182.71-1.127.135-2.285.269-3.277.82-.902.492-1.638 1.42-1.677 2.431a.632.632 0 0 1-.307.5 12.795 12.795 0 0 0-4.275 4.48c-.346.588-.64 1.267-.506 1.932.096.512.435.954.544 1.46.18.87-.313 1.708-.525 2.566-.588 2.438 1.261 4.736 2.976 6.58.807.857 1.748 1.791 2.925 1.836.736.032 1.427-.294 2.112-.563 1.965-.775 6.221.14 6.816.262.589.122 1.229-.07 1.799.135 1.305.467 1.126 2.38.537 3.628l.903-.172c-.077.192-.148.384-.224.576-.122.313.006.69.313.825 1.357.602 1.843 2.624 1.472 4.186-.41 1.766-1.453 3.385-1.485 5.197-.006.992.295 1.952.602 2.892.717 2.24 1.427 4.474 2.144 6.72.096.295.378.5.685.468 1.817-.205 2.995-2.535 4.806-3.31.743-.326 1.62-.39 2.202-.946.333-.314.403-.884.256-1.293a.679.679 0 0 1 .275-.807c.557-.364.954-.998.973-1.67.013-.275-.032-.557.006-.826.064-.39.314-.736.55-1.068 1.517-2.176 2.497-4.66 3.476-7.117.256-.66.512-1.306.768-1.965.973-2.451 1.933-4.89 2.905-7.34.18-.455.359-.91.544-1.364.18-.442-.166-.896-.64-.896a2.303 2.303 0 0 1-1.433-.518c-.794-.647-1.203-1.632-1.824-2.439-.525-.697-1.229-1.312-1.479-2.163-.14-.486-.115-1.011-.198-1.517-.192-1.094-.915-2.01-1.408-3.001-.211-.423-.307-.768-.288-1.088.032-.66.928-.839 1.248-.263 1.498 2.682 2.682 5.075 3.955 7.879.186.416.743.53 1.063.204.166-.172.364-.32.576-.428.39-.212.825-.295 1.241-.468 1.088-.48 1.837-1.632 1.837-2.81-.013-1.183-.762-2.335-1.856-2.802-.544-.23-1.165-.301-1.677-.621-.512-.301-.883-.999-.563-1.504.3-.48 1.037-.467 1.542-.199.506.276.877.743 1.35 1.056.346.23.743.378 1.114.59 2.01 1.151 2.51 3.775 2.932 6.06.23 1.229.486 2.451.793 3.648.013-.256.007-.525.007-.78.012-11.105-4.27-21.172-11.27-28.686zm3.86 13.844c-.276-.02-.532-.199-.756-.372-.358-.288-.723-.62-.832-1.068-.121-.532.135-1.146-.153-1.62-.135-.23-.372-.37-.57-.53a2.987 2.987 0 0 1-1.05-1.665c-.121-.57.058-1.331.64-1.427.276-.045 1.728 3.046 2.26 3.334.53.276 1.056.794.972 1.383-.172.064-.332.121-.505.192-.18.179-.039.505.153.685.192.179.436.358.448.627 0 .275-.32.48-.608.46z"
                  stroke="#FFF"
                  stroke-width=".957"
                  fill="#3A2D78"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="m77.178 56.736-.692.486c.237.845-.243 1.83-1.056 2.164-.428.172-1.004.25-1.145.69-.122.378.166.756.211 1.146.064.647-.544 1.133-.98 1.62-.434.48-.671 1.388-.089 1.676.135.07.288.084.442.096.633.058 1.325.077 1.843-.294 1.485-1.056.077-3.93 1.536-5.011.211-.154.467-.263.582-.493.346-.691-.928-1.37-.652-2.08z"
                  fill="#E9EFF4"
                />
              </g>
              <path
                d="M100.333 40.706s-56.09 12.787-76.896 11.302C12.154 51.202 9.17 47.47 8.78 44.782c-.538-3.692.685-10.067.685-10.067s-5.556 7.815-5.19 9.479c.364 1.657 9.593 36.524 23.084 38.29 40.326 5.28 58.822-32.204 58.822-32.204l15.552-2.893-1.401-6.681z"
                fill="#3A2D78"
              />
              <path
                d="M7.738 40.507c-1.402 2.221-3.335 6.183 1.126 9.722 8.205 6.509 25.722 5.241 48.211 1.568 23.015-3.763 43.904-8.237 43.904-8.237l7.328 37.414s-28.697 6.733-56.845 8.11c-33.9 1.657-50.01-5.882-51.13-16.116-.447-4.058 2.362-7.373 5.658-9.818 1.216-.384 1.485 1.005 1.485 1.005-1.984 1.773-3.545 3.571-3.45 4.768.762 9.709 30.01 14.535 47.834 8.493 0 0-43.001 4.397-50.49-12.582-3.001-6.81.8-12.116 5.517-15.79.27-.21 1.255 1.16.967 1.44-2.861 2.746-4.928 5.594-4.135 7.457 4.224 9.92 32.768 11.27 47.2 7.206C6.573 67.118-1.165 54.933 1.05 44.744c.69-3.18 3.852-6.106 7.136-7.84-.333 1.696-.301 2.4-.448 3.603z"
                fill="#FFF"
              />
              <path
                d="M54.208 85.39c22.778 0 50.573-6.988 50.573-6.988L98.707 47.4s-27.136 6.842-46.918 8.838c0 0 12.505.18 45.286-6.099.583 3.616 4.787 24.211 5.223 25.69-7.021 3.533-48.09 9.561-48.09 9.561z"
                fill="#3A2D78"
              />
              <path
                d="M84.026 70.466a8.643 8.643 0 0 1-10.746 5.843 8.643 8.643 0 0 1-5.843-10.746 8.643 8.643 0 0 1 10.745-5.843c4.576 1.35 7.194 6.163 5.844 10.746z"
                fill="#3A2D78"
              />
              <path
                d="M78.803 64.245a.265.265 0 0 0-.198-.045l-1.402.237c-.173-.435-.41-.8-.723-1.095l1.914-.326a.265.265 0 0 0 .224-.307l-.141-.839a.297.297 0 0 0-.103-.179.265.265 0 0 0-.198-.045l-6.822 1.152a.265.265 0 0 0-.224.307l.185 1.089a.28.28 0 0 0 .109.172c.058.045.128.058.198.045l1.19-.198c1.153-.199 1.94-.013 2.356.557l-3.386.576a.265.265 0 0 0-.224.307l.141.838a.265.265 0 0 0 .307.224l3.501-.595c-.045.467-.269.858-.665 1.165-.404.307-.96.525-1.684.646l-.921.154a.28.28 0 0 0-.173.109c-.045.057-.058.128-.045.198l.18 1.043c.012.07.044.128.102.167 1.241.94 2.867 2.265 4.877 3.993.057.058.134.077.224.064l1.6-.269c.115-.019.185-.083.21-.185.04-.109.014-.199-.082-.275-1.927-1.69-3.43-2.938-4.506-3.757.909-.269 1.613-.698 2.112-1.287.5-.588.742-1.292.736-2.099l1.376-.23a.265.265 0 0 0 .224-.307l-.14-.839a.465.465 0 0 0-.129-.166z"
                fill="#FFF"
              />
            </g>
          </svg>
        </div>
        <div>
          <img src={payemi} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Splash);