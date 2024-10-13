'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "605232afb6f0be467e556e9a8cd11f73",
"version.json": "feed28aa11e191965b033a20489584e5",
"index.html": "266d43d672ec0d84b5a2dd765973f283",
"/": "266d43d672ec0d84b5a2dd765973f283",
"main.dart.js": "e68b3d150e41674e979844bc768aabfe",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/icon.png": "621b234ec59be167cc3f8d0ccb66dcfe",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0117cc9d634d92c03bdabc9f1655064f",
"assets/AssetManifest.json": "b093a3e23d89cc2c57e2b09c857dff65",
"assets/NOTICES": "2742d43b94b2f4e505c456a9f9f38e0c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "afa9966545a96cff5f379e620510e1d9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b19c5121c30b9a392ee92d338c7a9775",
"assets/fonts/MaterialIcons-Regular.otf": "7c13156a674423b1490212cce71aa7da",
"assets/assets/kissed_icon.png": "b41fb5ad13613542d7e4366ff91d4418",
"assets/assets/music/4.mp3": "096d35b879e89d08d703c75174b91db5",
"assets/assets/music/1.mp3": "65132e1c3fd0089df9f91ea3ee3ac6e1",
"assets/assets/music/2.mp3": "a05e9f2a2f57b1841b2dbc1c2ba85847",
"assets/assets/music/3.mp3": "dce7d414c9077f6ba770e58ccf386c11",
"assets/assets/kiss_icon.png": "9861ac69bb8fcbc9732a6ae526f7d3d2",
"assets/assets/kiss/1.mp3": "3b0ebba80f1f6a2b6f56e031045a0f28",
"assets/assets/kiss/2.mp3": "ce637123a9b0c4b17e035ff7b587a4d6",
"assets/assets/kiss/3.mp3": "61a3d8ad870822e4cff9e5d8a40a764b",
"assets/assets/shop/9/9.8.png": "ca51864b80c1ad449d4fe4be52819e32",
"assets/assets/shop/9/9.9.png": "050cf4771d18612aec554be887d7dde9",
"assets/assets/shop/9/9.10.png": "2608920fcde3afed049999dc77a89f53",
"assets/assets/shop/9/9.4.png": "7db484e3c815bcb18461485cedf1f811",
"assets/assets/shop/9/9.5.png": "8ecb763bbeef59dccfb624df40539a2f",
"assets/assets/shop/9/9.7.png": "e6ec925fae787cac71c8c381853ea629",
"assets/assets/shop/9/9.6.png": "e740a369d601d1c33f2191b32c7dd0d5",
"assets/assets/shop/9/9.2.png": "dfa08be89e1e0fe871cea39439e79965",
"assets/assets/shop/9/9.3.png": "b7e5774c4403acf89bfd213758a87698",
"assets/assets/shop/9/9.1.png": "53772b0c51b082d691c3ddad920aa942",
"assets/assets/shop/9/9.0.png": "eb8cbed644ae4ada3d6f9fa6e419d4f6",
"assets/assets/shop/0/0.10.png": "2e236ff414eba694694d30b04dcd7d2f",
"assets/assets/shop/0/0.7.png": "61170c16fa738486340c487c9c20e30e",
"assets/assets/shop/0/0.6.png": "ca1fa3b3014364b589bd650e3976c497",
"assets/assets/shop/0/0.4.png": "b0d01d9d5f497aacf71777e5373ef3c0",
"assets/assets/shop/0/0.5.png": "bf369746b54c027c12b089155e53c810",
"assets/assets/shop/0/0.1.png": "f48a0ef2b4ec2c393129ee20c8a8740d",
"assets/assets/shop/0/0.0.png": "34492cd51d53840a53b44e195fcb206e",
"assets/assets/shop/0/0.2.png": "246e9769d731aa3807cec649eccae7a8",
"assets/assets/shop/0/0.3.png": "5e9e0a2ed139cbea9df4f0047e6dde60",
"assets/assets/shop/0/0.8.png": "d958bb366bc89f5d5c1b68ef4ae0b514",
"assets/assets/shop/0/0.9.png": "81cdb94455f49202e98e3d78d39dcf1f",
"assets/assets/shop/11/11.8.png": "7101b365b965ced799872b3e39af1609",
"assets/assets/shop/11/11.9.png": "2f4934d7677c0ba938b95ce0d09bdf48",
"assets/assets/shop/11/11.10.png": "8e24cc3e3f394fd365c2a601000a7a89",
"assets/assets/shop/11/11.2.png": "3f53867908ff3a1bc055ba07facba987",
"assets/assets/shop/11/11.3.png": "3209684213f481865a76d5ed2c008793",
"assets/assets/shop/11/11.1.png": "c733dead7cd9a190e3139e706c90ffb3",
"assets/assets/shop/11/11.0.png": "9bc8ba5db73683b0119adb40441ff77f",
"assets/assets/shop/11/11.4.png": "f4011cc7bf4b39b4e840026a53d4f160",
"assets/assets/shop/11/11.5.png": "c7f225835e64387e444b85774b2b8635",
"assets/assets/shop/11/11.7.png": "4352e1753aa8c56f5c648d3169e4cac5",
"assets/assets/shop/11/11.6.png": "d3e75504d4c19d96fa03a8f2a8a5e556",
"assets/assets/shop/7/7.2.png": "371911762c5b7280d919738feda444cd",
"assets/assets/shop/7/7.3.png": "1830d458d734bf3f73613c99112ca97f",
"assets/assets/shop/7/7.1.png": "ec41ac0cf288881c15b16f0524afdab8",
"assets/assets/shop/7/7.0.png": "c921e5cd66e7595bf8bb509b9b9a87fd",
"assets/assets/shop/7/7.4.png": "010677b4de9bb65cc33b087726cafbe6",
"assets/assets/shop/7/7.5.png": "d9c94d931af513fda9a71dbaf955bbcc",
"assets/assets/shop/7/7.7.png": "90a2516d295b870db4c148de49b479bf",
"assets/assets/shop/7/7.6.png": "952d6f9972a337944637c28449503dde",
"assets/assets/shop/7/7.8.png": "e0225d4d56809bf1a3c127d2a152e1b3",
"assets/assets/shop/7/7.9.png": "10e002b31aefc0b001a81f00aee6cc66",
"assets/assets/shop/7/7.10.png": "79d503fd842bef63aa7becc2e32ce535",
"assets/assets/shop/6/6.1.png": "a9f60022db52713c238d5fb9617a08ae",
"assets/assets/shop/6/6.0.png": "fcba73b16b00e23315aa4f8ee0f6c209",
"assets/assets/shop/6/6.2.png": "ac8a5e26392c53276fc654ac0e932056",
"assets/assets/shop/6/6.3.png": "4645ecb0a7f188b4410b8b2f77fb1a4b",
"assets/assets/shop/6/6.7.png": "d67a1c77280b0b012c95665619ae6dfe",
"assets/assets/shop/6/6.10.png": "f55aa8e4baec7a5585677b3272d002e1",
"assets/assets/shop/6/6.6.png": "13aab930a81e0f82041abd1e9c474331",
"assets/assets/shop/6/6.4.png": "1b3f173409814e7aef898419b883ff1a",
"assets/assets/shop/6/6.5.png": "1f72c62bde5142bc129881f170a68907",
"assets/assets/shop/6/6.8.png": "afd3b2afdaf20ff575b543795a6f33ff",
"assets/assets/shop/6/6.9.png": "a1320dc795ca459a2b185c91e1b53f85",
"assets/assets/shop/1/1.4.png": "929694ad0dbbbad946b024d259b6210d",
"assets/assets/shop/1/1.5.png": "bb3f40980fad9eb7d27ae59a009ea079",
"assets/assets/shop/1/1.7.png": "7e755e2098ff7569e03b66a12c6d6238",
"assets/assets/shop/1/1.6.png": "640c3624ff0b7e10cc2f88923c48da0f",
"assets/assets/shop/1/1.2.png": "d41d5a4a49b629363ae7ce91041c717c",
"assets/assets/shop/1/1.3.png": "10b4501c29afcc8922a6ad8cecba6389",
"assets/assets/shop/1/1.1.png": "53a95cba5d7612820ed0bc9ec31bc89d",
"assets/assets/shop/1/1.0.png": "299e63643646ec6f4251fddeaa7cfb35",
"assets/assets/shop/1/1.10.png": "8162386cc269f163cfbe6d4f17895942",
"assets/assets/shop/1/1.8.png": "53454cb914d935e787e323fa9e7a7447",
"assets/assets/shop/1/1.9.png": "9414df1d2a1bb8e48e9252fadeb3ca8c",
"assets/assets/shop/10/10.8.png": "17f07ddc19d618b7a720c2347242d258",
"assets/assets/shop/10/10.9.png": "47d89cb914f61c43f79222ca28c54344",
"assets/assets/shop/10/10.1.png": "819b70cd3b531e47413bd5298dedf20e",
"assets/assets/shop/10/10.0.png": "962f41bcb2c93f28f0c13f8b1f5479b3",
"assets/assets/shop/10/10.2.png": "d1f19ede91c191395b6be903a8181aaa",
"assets/assets/shop/10/10.3.png": "7450df509721476698cf9ed2ab479f22",
"assets/assets/shop/10/10.7.png": "9585d8c631bae2f96b75cfac4d81cebe",
"assets/assets/shop/10/10.6.png": "c84765b6d87c987a026f6a61d598ad40",
"assets/assets/shop/10/10.4.png": "2be5b16ad431e3bbe493b820b609909f",
"assets/assets/shop/10/10.5.png": "d88808c1f3db77fca8c6b821cf4b56f1",
"assets/assets/shop/10/10.10.png": "b676779554196870c2112d9fad95061f",
"assets/assets/shop/8/8.10.png": "bd14714d60a9730dfb88f1910cd09c5a",
"assets/assets/shop/8/8.8.png": "ccac589cb1fbb1c20f2d7cc15e149aa9",
"assets/assets/shop/8/8.9.png": "d57d2ccd335f63b3166c5ac5efc2a32e",
"assets/assets/shop/8/8.7.png": "bf2992cd96eba4a470691cd01e627350",
"assets/assets/shop/8/8.6.png": "94f28f40d54c1e9a33232a82e3476aa5",
"assets/assets/shop/8/8.4.png": "946195985562e80ba540939d9df59ed1",
"assets/assets/shop/8/8.5.png": "67ebb827ccea16f15d6f63d1b9bdfbe3",
"assets/assets/shop/8/8.1.png": "fa46f93f085297ae1003d3944ae2c1b3",
"assets/assets/shop/8/8.0.png": "046b42342d2a10930d330d0cdedea5ca",
"assets/assets/shop/8/8.2.png": "ea287f85c237a668603019aeb81ef85b",
"assets/assets/shop/8/8.3.png": "a1b509a60ee87de215b9e559ad1f0a9e",
"assets/assets/shop/4/4.3.png": "a2d1027e494fe9cac65f5bc3d5ee491f",
"assets/assets/shop/4/4.2.png": "28a1d25f8134f26da78c3e8fb1ffb33c",
"assets/assets/shop/4/4.0.png": "0b6a44f65348d3f544bd9d0e9e5c7e41",
"assets/assets/shop/4/4.1.png": "da2d7e02606f8923d73c942b8bb70d4c",
"assets/assets/shop/4/4.10.png": "01cfeccfd4ad37a16ba78da1d705ed7e",
"assets/assets/shop/4/4.5.png": "86f83ea6db7d81add66d5a6cb2918e01",
"assets/assets/shop/4/4.4.png": "4bf4358bc6e310f36152907b21912575",
"assets/assets/shop/4/4.6.png": "16be49a7d09839f42c351051e520c9fd",
"assets/assets/shop/4/4.7.png": "3d59bfd2d4d2e1f665832cb9e1725c01",
"assets/assets/shop/4/4.9.png": "653ba8b5507b199cf96872343e93ca87",
"assets/assets/shop/4/4.8.png": "fd5210e02be2e4eb46985126a6ba9da7",
"assets/assets/shop/3/3.6.png": "3b28fdca62c0bd913128814c4bb68a3d",
"assets/assets/shop/3/3.7.png": "bdecbd9340e84a563e42c9300d06ba8d",
"assets/assets/shop/3/3.5.png": "8af0352be88ba196d4bb94888ddac926",
"assets/assets/shop/3/3.4.png": "1de19a329eecbd7b14631f3b9118a2c3",
"assets/assets/shop/3/3.0.png": "7f208020674b7c7320a9d39980192002",
"assets/assets/shop/3/3.1.png": "b38b2b0458a4d94a67a2ca7a9858ce6d",
"assets/assets/shop/3/3.3.png": "1fdf46fc16bc6b5a135e661663be2c97",
"assets/assets/shop/3/3.2.png": "ff196752f381734cbd2eb6701777df4d",
"assets/assets/shop/3/3.10.png": "ae95181528a399880355fafabfc03c04",
"assets/assets/shop/3/3.9.png": "d8ad12eaa9cd2e61e0631bb1c6351b0b",
"assets/assets/shop/3/3.8.png": "26b2530eae2224aa3f2cdd62bc2ca301",
"assets/assets/shop/12/12.9.png": "57d681b190e77c63191a62f0a8123493",
"assets/assets/shop/12/12.8.png": "92452751b7e326a606da8b5b83f5be8c",
"assets/assets/shop/12/12.3.png": "5515635a1740b3ce5b662a3e0c92d9b4",
"assets/assets/shop/12/12.2.png": "5515635a1740b3ce5b662a3e0c92d9b4",
"assets/assets/shop/12/12.0.png": "5515635a1740b3ce5b662a3e0c92d9b4",
"assets/assets/shop/12/12.1.png": "5515635a1740b3ce5b662a3e0c92d9b4",
"assets/assets/shop/12/12.5.png": "5515635a1740b3ce5b662a3e0c92d9b4",
"assets/assets/shop/12/12.4.png": "5515635a1740b3ce5b662a3e0c92d9b4",
"assets/assets/shop/12/12.6.png": "5515635a1740b3ce5b662a3e0c92d9b4",
"assets/assets/shop/12/12.7.png": "5515635a1740b3ce5b662a3e0c92d9b4",
"assets/assets/shop/12/12.10.png": "38b432d118076642cbf6b04288cd4e78",
"assets/assets/shop/2/2.10.png": "ba826f2d977e114b8a7d0144a4056495",
"assets/assets/shop/2/2.5.png": "d52e438f835b2e3916b688b460bb4c31",
"assets/assets/shop/2/2.4.png": "865c7e469c5a6d04b0834395efe44702",
"assets/assets/shop/2/2.6.png": "7527853e6e3135ec353879dcaecfc61b",
"assets/assets/shop/2/2.7.png": "575e364d28e89f1ddc12d92028b13bbc",
"assets/assets/shop/2/2.3.png": "5f236cddbc2583032b2440e9e526bbe2",
"assets/assets/shop/2/2.2.png": "b29f01370e94864455148d58af2eed97",
"assets/assets/shop/2/2.0.png": "8edc1eea731f44c3700b4cc721156e1f",
"assets/assets/shop/2/2.1.png": "a616a735ac4676d62a84e137f683f967",
"assets/assets/shop/2/2.9.png": "0e02cc346a7f2b6c78747c2b0b03bfdc",
"assets/assets/shop/2/2.8.png": "41430ebcf0389b31d07011e2d91b0067",
"assets/assets/shop/5/5.0.png": "d8b8c6170c5095d300ef481bfaefe90a",
"assets/assets/shop/5/5.1.png": "ddc76cc06ac14ca39ad9ea5b4ce32855",
"assets/assets/shop/5/5.3.png": "86191f07a6d3c1d399d949757375fb76",
"assets/assets/shop/5/5.2.png": "e993837cc7605637062741a8a3184259",
"assets/assets/shop/5/5.6.png": "90ee7298873249af0bc2757c910b425e",
"assets/assets/shop/5/5.7.png": "afecbcc1bb60cd8d3c84e80290b194bf",
"assets/assets/shop/5/5.5.png": "8f909fe06c8772d67c47736302259f74",
"assets/assets/shop/5/5.4.png": "ab95d17f26e680c9746069dfe11ad7b9",
"assets/assets/shop/5/5.9.png": "a5a57b63f0d99132038e4821269b874a",
"assets/assets/shop/5/5.10.png": "5b53ee18793e751fb690c8a5d6b5e3ce",
"assets/assets/shop/5/5.8.png": "62b5fdf6fe2a06b7c6cb50a076efdad7",
"assets/assets/logo_effect.mp3": "697e5144ef181747c8934adf091183b8",
"assets/assets/tv/chipi.mp3": "970abfbce6715845c000bfae45fcd98b",
"assets/assets/tv/tv_on.gif": "44b8ce4f03964e424d1496cc9073fdca",
"assets/assets/tv/tv_off.png": "f12b54c84769e035cd6f5382794692e6",
"assets/assets/dance.gif": "facf9aa278130f9f6cb98ae96e33132d",
"assets/assets/lang/zh.json": "48f1344602a456dde53724ca6d49fb5b",
"assets/assets/lang/ms.json": "a7071c71f6d517e7167b15c1ec0603a4",
"assets/assets/lang/ja.json": "de49e0ce7f03cb0fd16642b4baf1e217",
"assets/assets/lang/de.json": "55f0a55e2d17f3e540aa4eb3bf739cf4",
"assets/assets/lang/ru.json": "d94123684530a45916ed22e4b18ffe48",
"assets/assets/lang/pt.json": "930628d0a230573475dce1f1a1eb1922",
"assets/assets/lang/en.json": "44c9facf9a21b448f714b6d9b0ef19cf",
"assets/assets/lang/it.json": "6336bc88040d94808c4524e3e843ea78",
"assets/assets/lang/fr.json": "410e9eeb107edae77f5aeb25bbbae0d4",
"assets/assets/lang/ko.json": "993898e87ade94ebdf03a885913eec74",
"assets/assets/lang/fa.json": "eb9367c13e8e99755a57ac064966388b",
"assets/assets/lang/es.json": "6060316125d96bb7d55e1b3b24e2b639",
"assets/assets/lang/ar.json": "dd4b6871a84c5a66095ed18f41dc9e42",
"assets/assets/logo.png": "2210101479e4a7d175ee2495911a3537",
"assets/assets/cry.gif": "89f327922068d7d6703ca1059a8ebe2a",
"assets/assets/kiss_lip.png": "fed2b7c74f999060c3116c033158267e",
"assets/assets/emotions/boykisser-typing.gif": "5979806843ed3c8f540da5750a75958e",
"assets/assets/emotions/boykisser-speak.mp3": "e85c5501c4325d43727c249d6a266c3b",
"assets/assets/emotions/boykisser-speak.gif": "1267173dd8bde820c2d4f40c04db6633",
"assets/assets/emotions/boykisser-meowing.m4a": "2d6ad6b1eb5eb3e71cbe4b230cb151a6",
"assets/assets/emotions/boykisser-slurp.mp3": "4775ebdca6d66def5b7d1807606cd8f2",
"assets/assets/emotions/boykisser-typing.mp3": "aad34986c97606e3e0993cbf7284d411",
"assets/assets/emotions/boykisser-screamer.jpg": "4764ebe3dfa16a7795fc285d33b6f336",
"assets/assets/emotions/boykisser-slurp.png": "a9c4baa01ec250c48478acfd66a51bf8",
"assets/assets/emotions/boykisser-screamer.mp3": "943e583764dab10e024468ede0d1d99d",
"assets/assets/emotions/boykisser-typing2.gif": "7ce0836c48d39b69b212c351b9ffc2a4",
"assets/assets/emotions/boykisser-meowing.gif": "0a2a6b44fc5b0455d626f456240fe630",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
