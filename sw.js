importScripts('workbox-sw.prod.v2.0.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "bower_components/font-roboto/roboto.html",
    "revision": "7f543cb85b069cd7b8b06d2a077cef7c"
  },
  {
    "url": "bower_components/iron-a11y-announcer/iron-a11y-announcer.html",
    "revision": "032ddccbe04fadf233db599b63b171b9"
  },
  {
    "url": "bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html",
    "revision": "e416e843a80e32d5ac1cf3d99f92a290"
  },
  {
    "url": "bower_components/iron-ajax/iron-ajax.html",
    "revision": "cdb34647662aa97819437b199ca0dc3e"
  },
  {
    "url": "bower_components/iron-ajax/iron-request.html",
    "revision": "2cd86cb426f03e5ac050e5b9534ca01e"
  },
  {
    "url": "bower_components/iron-autogrow-textarea/iron-autogrow-textarea.html",
    "revision": "aeea0368744d0ea69abca77c0fc73364"
  },
  {
    "url": "bower_components/iron-behaviors/iron-button-state.html",
    "revision": "9fb410eb4dd2cf074011b4d7565fe520"
  },
  {
    "url": "bower_components/iron-behaviors/iron-control-state.html",
    "revision": "26408b231f3184ed4c861a77090782d0"
  },
  {
    "url": "bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html",
    "revision": "308cda98232643a0bbfe3caffeb5fedf"
  },
  {
    "url": "bower_components/iron-dropdown/iron-dropdown-scroll-manager.html",
    "revision": "4941bb1f98c18a580867935163391b6c"
  },
  {
    "url": "bower_components/iron-dropdown/iron-dropdown.html",
    "revision": "69de7cbbb5154bc46a1faf232c0826e2"
  },
  {
    "url": "bower_components/iron-fit-behavior/iron-fit-behavior.html",
    "revision": "fc0c50a581a28e9269400ddd3e98f802"
  },
  {
    "url": "bower_components/iron-flex-layout/iron-flex-layout.html",
    "revision": "ff9477722c978e3fdd3fbf292cc3f2fc"
  },
  {
    "url": "bower_components/iron-form-element-behavior/iron-form-element-behavior.html",
    "revision": "8ea5b57ab9067df1c61dc124c496120b"
  },
  {
    "url": "bower_components/iron-form/iron-form.html",
    "revision": "6465458e93ab6075fba22e74a43834e8"
  },
  {
    "url": "bower_components/iron-icon/iron-icon.html",
    "revision": "d4b7a82c9ccbbeca2b0c89f4e53ffb05"
  },
  {
    "url": "bower_components/iron-icons/hardware-icons.html",
    "revision": "bed35995d8903657ea0fb48e376495b2"
  },
  {
    "url": "bower_components/iron-icons/iron-icons.html",
    "revision": "b06b48bbd24e44ce5f592c008e254376"
  },
  {
    "url": "bower_components/iron-iconset-svg/iron-iconset-svg.html",
    "revision": "acf544611f84b0de9873f6de8a06d6fc"
  },
  {
    "url": "bower_components/iron-image/iron-image.html",
    "revision": "e67fcf29fb671e47103ba5bb1f15c2fd"
  },
  {
    "url": "bower_components/iron-input/iron-input.html",
    "revision": "a5d349036184737889ebb3d2ab4fa754"
  },
  {
    "url": "bower_components/iron-menu-behavior/iron-menu-behavior.html",
    "revision": "796284c1be88a7a993720082f161ce21"
  },
  {
    "url": "bower_components/iron-menu-behavior/iron-menubar-behavior.html",
    "revision": "6bc2e5b89b8f9119e4268129b31d39fb"
  },
  {
    "url": "bower_components/iron-meta/iron-meta.html",
    "revision": "048f486e348206798370e3e2a61f27ee"
  },
  {
    "url": "bower_components/iron-overlay-behavior/iron-focusables-helper.html",
    "revision": "b935952337df172121dae50aa75d0ff6"
  },
  {
    "url": "bower_components/iron-overlay-behavior/iron-overlay-backdrop.html",
    "revision": "a70e5917cb2f5bb64e53e44b2f0cd764"
  },
  {
    "url": "bower_components/iron-overlay-behavior/iron-overlay-behavior.html",
    "revision": "7227fe9e747518edb9676d3d5bce48ff"
  },
  {
    "url": "bower_components/iron-overlay-behavior/iron-overlay-manager.html",
    "revision": "dfcf04b2b9b17dceb9176c5d4a1233b8"
  },
  {
    "url": "bower_components/iron-range-behavior/iron-range-behavior.html",
    "revision": "5f20f9664f966e5707b1aa9ac8299518"
  },
  {
    "url": "bower_components/iron-resizable-behavior/iron-resizable-behavior.html",
    "revision": "26731b518fc39146a6ef617bf2446cab"
  },
  {
    "url": "bower_components/iron-selector/iron-multi-selectable.html",
    "revision": "d4765be6d51eb9e5e170b7191b222aec"
  },
  {
    "url": "bower_components/iron-selector/iron-selectable.html",
    "revision": "033c526023ee6429bb66dab8407497f5"
  },
  {
    "url": "bower_components/iron-selector/iron-selection.html",
    "revision": "d38a136db111dc594d0e9b27c283a47a"
  },
  {
    "url": "bower_components/iron-validatable-behavior/iron-validatable-behavior.html",
    "revision": "3fb306c07a03ea899a4a29b582e75567"
  },
  {
    "url": "bower_components/jquery/dist/jquery.js",
    "revision": "09dd64a64ba840c31a812a3ca25eaeee"
  },
  {
    "url": "bower_components/neon-animation/animations/fade-in-animation.html",
    "revision": "32e6403f666f0a23bf0a12d9d13ac7e0"
  },
  {
    "url": "bower_components/neon-animation/animations/fade-out-animation.html",
    "revision": "0b7783df10a3455dd3079d5dabfc1882"
  },
  {
    "url": "bower_components/neon-animation/neon-animatable-behavior.html",
    "revision": "ff071e084f0046cb0d74204891f95fc5"
  },
  {
    "url": "bower_components/neon-animation/neon-animation-behavior.html",
    "revision": "7bea601b65a14b9d7389d806db6cbfec"
  },
  {
    "url": "bower_components/neon-animation/neon-animation-runner-behavior.html",
    "revision": "0d0e9eeccf315df7c0c6330049c2cd45"
  },
  {
    "url": "bower_components/neon-animation/web-animations.html",
    "revision": "b9b5d0a4f7234c3c7c21b5078cdf77d5"
  },
  {
    "url": "bower_components/paper-behaviors/paper-button-behavior.html",
    "revision": "1e6e9794c87cb389d4191911ec554890"
  },
  {
    "url": "bower_components/paper-behaviors/paper-checked-element-behavior.html",
    "revision": "09e7946122f1403d25ba8489acf210f9"
  },
  {
    "url": "bower_components/paper-behaviors/paper-inky-focus-behavior.html",
    "revision": "ea41e4250bc3ea30e659071b61e0df33"
  },
  {
    "url": "bower_components/paper-behaviors/paper-ripple-behavior.html",
    "revision": "ed51cc379e55570173529cd58ca00b59"
  },
  {
    "url": "bower_components/paper-button/paper-button.html",
    "revision": "75b7eeb8537f75878109d678fd6fd47a"
  },
  {
    "url": "bower_components/paper-card/paper-card.html",
    "revision": "da4beb349731a16851be752d9f3e04f0"
  },
  {
    "url": "bower_components/paper-checkbox/paper-checkbox.html",
    "revision": "af6a49c5841c8802bbbb489695b02731"
  },
  {
    "url": "bower_components/paper-dropdown-menu/paper-dropdown-menu-icons.html",
    "revision": "4c48b1e338ed304011fb2070a299b12d"
  },
  {
    "url": "bower_components/paper-dropdown-menu/paper-dropdown-menu-shared-styles.html",
    "revision": "5937bb21d75c1f6a3b6a3b71cb310580"
  },
  {
    "url": "bower_components/paper-dropdown-menu/paper-dropdown-menu.html",
    "revision": "076470166920533b45921878d4d40025"
  },
  {
    "url": "bower_components/paper-fab/paper-fab.html",
    "revision": "775ca98d7c1538ea9d46e4621a33bdfb"
  },
  {
    "url": "bower_components/paper-icon-button/paper-icon-button.html",
    "revision": "d4deec8dbd0995906bff155f2f1be093"
  },
  {
    "url": "bower_components/paper-input/paper-input-addon-behavior.html",
    "revision": "9f7c79f09b3e662a7a0a0ec2210c5331"
  },
  {
    "url": "bower_components/paper-input/paper-input-behavior.html",
    "revision": "f64c17333d2b269948f4421fc6e85bd5"
  },
  {
    "url": "bower_components/paper-input/paper-input-char-counter.html",
    "revision": "3afc53a558e36ccdbb0718b8da52b33a"
  },
  {
    "url": "bower_components/paper-input/paper-input-container.html",
    "revision": "d90f28b41fbe59cfaae6433e4998716d"
  },
  {
    "url": "bower_components/paper-input/paper-input-error.html",
    "revision": "270d241c108123335bf6dbe30d9e768f"
  },
  {
    "url": "bower_components/paper-input/paper-input.html",
    "revision": "66a89eddb35c26f75fa78e894b0773af"
  },
  {
    "url": "bower_components/paper-input/paper-textarea.html",
    "revision": "32b0efdb1f18cc263c757b49b1d1db94"
  },
  {
    "url": "bower_components/paper-item/paper-item-behavior.html",
    "revision": "e8eebea30adc0d64efc784080d6ab6f7"
  },
  {
    "url": "bower_components/paper-item/paper-item-shared-styles.html",
    "revision": "a0b1e1b7020a5f28df19f661a998665a"
  },
  {
    "url": "bower_components/paper-item/paper-item.html",
    "revision": "b0613096efa66d97a309df05c873bc66"
  },
  {
    "url": "bower_components/paper-listbox/paper-listbox.html",
    "revision": "6fc75e3aca5cc2ae63a88f9f5f4689d0"
  },
  {
    "url": "bower_components/paper-menu-button/paper-menu-button-animations.html",
    "revision": "494ce3a3d3cd95ed5dd66feff0235150"
  },
  {
    "url": "bower_components/paper-menu-button/paper-menu-button.html",
    "revision": "b7d8a4ae6d0d18bb81214a9c7742b87c"
  },
  {
    "url": "bower_components/paper-progress/paper-progress.html",
    "revision": "ff1995d03d7a25757715eb27a8d51b21"
  },
  {
    "url": "bower_components/paper-radio-button/paper-radio-button.html",
    "revision": "246d7332a791b559ef9dd6451354f217"
  },
  {
    "url": "bower_components/paper-radio-group/paper-radio-group.html",
    "revision": "035f7b61f69760ebfbc186faab6b9228"
  },
  {
    "url": "bower_components/paper-ripple/paper-ripple.html",
    "revision": "2dd5636235492ffa1865097755a07c7a"
  },
  {
    "url": "bower_components/paper-styles/color.html",
    "revision": "2b6b926e5bd4005bdbdcd15a34a50b95"
  },
  {
    "url": "bower_components/paper-styles/default-theme.html",
    "revision": "9480969fcd665e90201b506a4737fa1a"
  },
  {
    "url": "bower_components/paper-styles/element-styles/paper-material-styles.html",
    "revision": "b0a38bd2eb6f4c4844d4903a46268c92"
  },
  {
    "url": "bower_components/paper-styles/shadow.html",
    "revision": "2fbe595f966eebe419b9b91611d6392a"
  },
  {
    "url": "bower_components/paper-styles/typography.html",
    "revision": "772d86cecdd75864b7d5f6760255665c"
  },
  {
    "url": "bower_components/paper-tabs/paper-tab.html",
    "revision": "9411043c954395b1483bbeb663d5f4c4"
  },
  {
    "url": "bower_components/paper-tabs/paper-tabs-icons.html",
    "revision": "7efb13dd67a114aef864eb7bc28284b7"
  },
  {
    "url": "bower_components/paper-tabs/paper-tabs.html",
    "revision": "10f6ef1bfaf2423507adb438c8c32037"
  },
  {
    "url": "bower_components/polymer/lib/elements/array-selector.html",
    "revision": "9091550b2b7d574e7d340d704d79aa23"
  },
  {
    "url": "bower_components/polymer/lib/elements/custom-style.html",
    "revision": "015a0544213f5b900e30277eaa73e443"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-bind.html",
    "revision": "6ef27a542436c541d06eaab3c61bc0a8"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-if.html",
    "revision": "737af34eddca21761753e9532657e66c"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-module.html",
    "revision": "fee5ce6afef8571b9ed1fd64fea0bf4c"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-repeat.html",
    "revision": "c82b35907ad381c1c1453e3d98d26355"
  },
  {
    "url": "bower_components/polymer/lib/legacy/class.html",
    "revision": "815cf0265d844b1209609c76833a2df2"
  },
  {
    "url": "bower_components/polymer/lib/legacy/legacy-element-mixin.html",
    "revision": "05277f7ecd13570a0da6954c3b79714f"
  },
  {
    "url": "bower_components/polymer/lib/legacy/mutable-data-behavior.html",
    "revision": "ef4983277eb0ce0bda3fa3319da49180"
  },
  {
    "url": "bower_components/polymer/lib/legacy/polymer-fn.html",
    "revision": "586629197d105f270e1e366ea4cbddb6"
  },
  {
    "url": "bower_components/polymer/lib/legacy/polymer.dom.html",
    "revision": "26953f14a8ec27bb05b996e57c07ee72"
  },
  {
    "url": "bower_components/polymer/lib/legacy/templatizer-behavior.html",
    "revision": "4e4e7daa069703e1ba95758389c7d4a2"
  },
  {
    "url": "bower_components/polymer/lib/mixins/element-mixin.html",
    "revision": "08bfb98361a6fa676c016e56154110e9"
  },
  {
    "url": "bower_components/polymer/lib/mixins/gesture-event-listeners.html",
    "revision": "7f35f61e57ea510704ed3fc90a654627"
  },
  {
    "url": "bower_components/polymer/lib/mixins/mutable-data.html",
    "revision": "6d79ae84fab84b02860b84c1e4dee7ac"
  },
  {
    "url": "bower_components/polymer/lib/mixins/property-accessors.html",
    "revision": "1b9d5d205c0ed72e60ee79266ae9f720"
  },
  {
    "url": "bower_components/polymer/lib/mixins/property-effects.html",
    "revision": "b9697536844e366b782c5454db92d981"
  },
  {
    "url": "bower_components/polymer/lib/mixins/template-stamp.html",
    "revision": "00080ff04f01f5281359f24559063c76"
  },
  {
    "url": "bower_components/polymer/lib/utils/array-splice.html",
    "revision": "a5684c8bb3535470b711aee329bbd428"
  },
  {
    "url": "bower_components/polymer/lib/utils/async.html",
    "revision": "1216958e69ef68e1c04f4bd8b07132bc"
  },
  {
    "url": "bower_components/polymer/lib/utils/boot.html",
    "revision": "5b5a9f4f5e0c3f8ead3cd7a182306a76"
  },
  {
    "url": "bower_components/polymer/lib/utils/case-map.html",
    "revision": "61c3f85b8314adf2d309fdf3e97fddba"
  },
  {
    "url": "bower_components/polymer/lib/utils/debounce.html",
    "revision": "b31948ffb7911e27f3d2573fdd61a7c8"
  },
  {
    "url": "bower_components/polymer/lib/utils/flattened-nodes-observer.html",
    "revision": "92168fa2ad196ee079e968c5b94dce05"
  },
  {
    "url": "bower_components/polymer/lib/utils/flush.html",
    "revision": "bc448b1d1560f5c81b040cd0272ad369"
  },
  {
    "url": "bower_components/polymer/lib/utils/gestures.html",
    "revision": "2249b029857291a544cf9ad308e61626"
  },
  {
    "url": "bower_components/polymer/lib/utils/import-href.html",
    "revision": "22df1781c5efbed6ce578a1e37f97790"
  },
  {
    "url": "bower_components/polymer/lib/utils/mixin.html",
    "revision": "4feff237e285f7536ff0d7234ee495e2"
  },
  {
    "url": "bower_components/polymer/lib/utils/path.html",
    "revision": "112b4c58b4832d42d5bafed8cb5c512d"
  },
  {
    "url": "bower_components/polymer/lib/utils/render-status.html",
    "revision": "3e2668cc49e35ac770217e2d52695b19"
  },
  {
    "url": "bower_components/polymer/lib/utils/resolve-url.html",
    "revision": "0ca3297a6a00175f976ae84425368f9b"
  },
  {
    "url": "bower_components/polymer/lib/utils/settings.html",
    "revision": "bfa8689f54ff341797eefef72f8a6da5"
  },
  {
    "url": "bower_components/polymer/lib/utils/style-gather.html",
    "revision": "793ac9c77bfd77e0c7dcc0db549a34f0"
  },
  {
    "url": "bower_components/polymer/lib/utils/templatize.html",
    "revision": "fc516311f251edaa98a6609211c0dd5c"
  },
  {
    "url": "bower_components/polymer/lib/utils/unresolved.html",
    "revision": "a1ede4a050418cf897d096dcc8b3bc01"
  },
  {
    "url": "bower_components/polymer/polymer-element.html",
    "revision": "b2e7dd936aaf08f01c67236ac6f96c33"
  },
  {
    "url": "bower_components/polymer/polymer.html",
    "revision": "b20eb4dd015d93b8153cc6c3d79662c4"
  },
  {
    "url": "bower_components/pouchdb/dist/pouchdb.js",
    "revision": "41173a5f77c3e3c64e539a259e42712c"
  },
  {
    "url": "bower_components/shadycss/apply-shim.html",
    "revision": "f220299c2be1b5040111843d640b70a5"
  },
  {
    "url": "bower_components/shadycss/apply-shim.min.js",
    "revision": "9cfbbf627603a5a3073f4fc9b97712d1"
  },
  {
    "url": "bower_components/shadycss/custom-style-interface.html",
    "revision": "0a68ea0f3af7bcb1ca6617e512f720cb"
  },
  {
    "url": "bower_components/shadycss/custom-style-interface.min.js",
    "revision": "9d7ccbd58300a6ef52a9108de2b6cb7f"
  },
  {
    "url": "bower_components/underscore/underscore.js",
    "revision": "f893e294cde60c2462cb19b35aac431b"
  },
  {
    "url": "bower_components/vaadin-icons/vaadin-icons.html",
    "revision": "173daf578d583b448f9dd03c594797dc"
  },
  {
    "url": "bower_components/web-animations-js/web-animations-next-lite.min.js",
    "revision": "fa336dd9110f3e62dd0f6663cc910b3a"
  },
  {
    "url": "bower_components/webcomponentsjs/custom-elements-es5-adapter.js",
    "revision": "a5043c1d0dd16d84558ee6cc2276212e"
  },
  {
    "url": "bower_components/webcomponentsjs/gulpfile.js",
    "revision": "0366da1f0f7858c9af2daa3ef7d950ea"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-hi-ce.js",
    "revision": "906534893bff07b0c0b308724c0181bb"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-hi-sd-ce.js",
    "revision": "eb78f39a4fd73c3ffe22d2f37ce5ca77"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-hi.js",
    "revision": "cfa7d1d8e693a34ddef6370113ff1520"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-lite.js",
    "revision": "40e6395790776160002812380044f3f2"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-loader.js",
    "revision": "f13bbbbf647b7922575a7894367ddaaf"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-sd-ce.js",
    "revision": "b1f76f6a530bb42555d599e0f8cb7acc"
  },
  {
    "url": "fonts/fonts.css",
    "revision": "d78c84c48aa3686ed454300ec5c2a7b8"
  },
  {
    "url": "forms.json",
    "revision": "4833dcda17b4e72a2e3ada522cad0468"
  },
  {
    "url": "forms/egra-demo/form.html",
    "revision": "34471a3a81483c42106f5201ff9a855a"
  },
  {
    "url": "forms/egra-demo/item-1.html",
    "revision": "fde08f78635d6b92885ccb289637a434"
  },
  {
    "url": "forms/egra-demo/item-2.html",
    "revision": "2bbfe86385fe82b3d7d54ed352340bed"
  },
  {
    "url": "forms/egra-demo/item-3.html",
    "revision": "6d8966aa34bb57aefae6c719a848ca7d"
  },
  {
    "url": "forms/form-1/form.html",
    "revision": "37e007c1d0b58ef12530d054a0392b88"
  },
  {
    "url": "forms/form-1/item-1.html",
    "revision": "77f0251093a783484d4590a9206c31c7"
  },
  {
    "url": "forms/form-1/item-2.html",
    "revision": "2990f1e764c060a54b00233405f0b991"
  },
  {
    "url": "forms/form-1/item-3.html",
    "revision": "ee506b782a28ce308b56988f217d0eb8"
  },
  {
    "url": "forms/form-1/item-4.html",
    "revision": "f940d589310ea6b7bd319145e5f0cec7"
  },
  {
    "url": "forms/form-1/item-5.html",
    "revision": "eceec60c7df4d9267724569f4eac7e01"
  },
  {
    "url": "index.html",
    "revision": "82ba35dbcc89fb38d4aa66034b6261d2"
  },
  {
    "url": "src/tangy-form-app/tangy-form-app.html",
    "revision": "feda8cbfcb81520825f98696ff893088"
  },
  {
    "url": "src/tangy-form/tangy-form-item.html",
    "revision": "b0cf84e7004e844bde58ff00a7ea1f93"
  },
  {
    "url": "src/tangy-form/tangy-form-response-model.js",
    "revision": "01d6f6823cdf6ad470c8ef393642a045"
  },
  {
    "url": "src/tangy-form/tangy-form.html",
    "revision": "bea5545e838ed34c7ff5589c08852ccb"
  },
  {
    "url": "src/tangy-gps/tangy-gps.html",
    "revision": "0ba558d950eca4e42f007d2f293869db"
  },
  {
    "url": "src/tangy-location/loc.js",
    "revision": "3599abd863eb88bd87f558e28b6fbd29"
  },
  {
    "url": "src/tangy-location/tangy-location.html",
    "revision": "c900ab4322c4e9f379dda1c846fa2f1c"
  },
  {
    "url": "src/tangy-timed/tangy-timed.html",
    "revision": "0b1b76c1b68e69cfbf0ad2a941fec4d1"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
