import { createGlobalStyle } from "styled-components";

export const GlobalIconfont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1618561417836'); /* IE9 */
  src: url('./iconfont.eot?t=1618561417836#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1618561417836') format('woff'),
  url('./iconfont.ttf?t=1618561417836') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1618561417836#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;
