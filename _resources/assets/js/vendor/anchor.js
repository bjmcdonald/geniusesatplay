/**
 * Anchor JS
 * ------------------------------------------------------------------------------
 *
 * A JavaScript utility for adding deep anchor links (like these) to existing
 * page content. AnchorJS is lightweight, accessible, and has no dependencies
 *
 * @link https://github.com/bryanbraun/anchorjs
 */

window.Anchors = require('anchor-js');

// set elements where Anchor JS will be used
var anchors = '.post h1, .post h2, .post h3, .post h4, .post h5, .post h6';

// initialize Anchor JS to all post headers
if ( $( anchors ).length ) {
    Anchors.add();
    Anchors.remove("[data-anchor='false']");
}
