/* Offline copy of the trip site. The page is network-first (so changes arrive), everything in img/ is cache-first,
   fonts are kept after first use. Videos are answered with byte ranges from the cache, since Safari asks for them in pieces. */
const FILES = [["img/bedford.jpg", "ebc39a8f65"], ["img/beekman-ext.jpg", "1f32503981"], ["img/beekman1.jpg", "2c01ca99ca"], ["img/beekman2.jpg", "13fbf2918e"], ["img/beekman3.jpg", "fa72a16d01"], ["img/bkwalk.jpg", "d60372dbe0"], ["img/bkwalk2.jpg", "63b4e10bbe"], ["img/bow1.jpg", "770f51b62c"], ["img/bow2.jpg", "f754af0a65"], ["img/chelsea.jpg", "096f52c225"], ["img/conservatory.jpg", "fd7732868a"], ["img/dumbo-esb.jpg", "3ca0db733c"], ["img/ewr.jpg", "423138bf8a"], ["img/fifth.jpg", "13287e6ea2"], ["img/gct.jpg", "d1bd5dc3c1"], ["img/highline.jpg", "9e15abfbdb"], ["img/intro-cover-poster.jpg", "a0e81b1547"], ["img/intro-cover.mp4", "d6767dcdf3"], ["img/intro-fri-poster.jpg", "8d12c92410"], ["img/intro-fri.mp4", "ba95fa7cc2"], ["img/intro-sat-poster.jpg", "eb9b0205e0"], ["img/intro-sat.mp4", "0168f5ca62"], ["img/intro-thu-poster.jpg", "fd4236e2e0"], ["img/intro-thu.mp4", "ed2250417e"], ["img/intro-tue-poster.jpg", "82f6111aec"], ["img/intro-tue.mp4", "ca96b72376"], ["img/intro-wed-poster.jpg", "497deaf113"], ["img/intro-wed.mp4", "7847b25270"], ["img/jefferson.jpg", "1d7f355dec"], ["img/jfk.jpg", "9a4b107878"], ["img/lake.jpg", "ea58c7760b"], ["img/lichtenstein-art.jpg", "474863a949"], ["img/little.jpg", "243d6a1200"], ["img/lower-manhattan-am.jpg", "7f5919e0d8"], ["img/magnolia.jpg", "27244ebf23"], ["img/mall.jpg", "b36b36daf5"], ["img/met.jpg", "213498299b"], ["img/nyc-aerial-dusk.jpg", "cff99df33b"], ["img/nyc-sunrise.jpg", "20ff66c19e"], ["img/reggio.jpg", "194cfee74e"], ["img/sant-ambroeus-room.jpg", "4c81582b5e"], ["img/seatac.jpg", "41fc370c8b"], ["img/seattle-kerry.jpg", "660eac63a4"], ["img/seattle-rainier.jpg", "46ac6c2560"], ["img/stonewall.jpg", "513af5a20d"], ["img/subway6.jpg", "08332a86e0"], ["img/tribeca.jpg", "e075106b20"], ["img/v/11th-street-cafe.jpg", "6d731fb04a"], ["img/v/240-centre-st.jpg", "0ebda2fb89"], ["img/v/2nd-street.jpg", "c4df60f7c7"], ["img/v/7spring.jpg", "c313f0d248"], ["img/v/9-11-memorial.jpg", "c617833e86"], ["img/v/9th-st-vintage.jpg", "40b1cb8478"], ["img/v/aime-leon-dore.jpg", "abd2d529ab"], ["img/v/airmail.jpg", "27ca5cbc1e"], ["img/v/albanese-meats-poultry.jpg", "c3dc61c575"], ["img/v/american-vintage.jpg", "d904590e06"], ["img/v/atelier-new-york.jpg", "92540d6642"], ["img/v/awake-ny.jpg", "01503b6232"], ["img/v/bar-lola.jpg", "7ff564de1f"], ["img/v/bar-pisellino.jpg", "736b17e1af"], ["img/v/blind-tiger.jpg", "c27026fb09"], ["img/v/blue-note.jpg", "080141b78f"], ["img/v/bobo.jpg", "b04e071f9c"], ["img/v/bode.jpg", "0a41e65926"], ["img/v/bridge-entrance.jpg", "490d0de990"], ["img/v/brooklyn-bridge.jpg", "f5bdecc4f2"], ["img/v/brut-archives.jpg", "6a64ca1b5f"], ["img/v/butterfield-market.jpg", "ab2f2e3db9"], ["img/v/cafe-cluny.jpg", "dea101fa93"], ["img/v/cafe-leon-dore.jpg", "96a0626c36"], ["img/v/cafe-panino-mucho-giusto.jpg", "3889b811d2"], ["img/v/cafe-wha.jpg", "2f9b7d6e39"], ["img/v/casa-magazines.jpg", "6426abf9a6"], ["img/v/chess-forum.jpg", "56b4c8b507"], ["img/v/city-hall-park.jpg", "a18b2a3017"], ["img/v/claud-penny.jpg", "5eb40d2c05"], ["img/v/co-bigelow.jpg", "b354c4367e"], ["img/v/colbo.jpg", "2c57e6d2a4"], ["img/v/comedy-cellar.jpg", "5ff542ff98"], ["img/v/commerce-inn.jpg", "f13375c95c"], ["img/v/country-of.jpg", "13d6dd7b73"], ["img/v/crowley-vintage.jpg", "073701e559"], ["img/v/dante.jpg", "cdc77b730e"], ["img/v/desert-vintage.jpg", "83270e6aa6"], ["img/v/deux-luxe.jpg", "262585f248"], ["img/v/don-angie.jpg", "282e84c10d"], ["img/v/double-chicken-please.jpg", "e0e28776d7"], ["img/v/drake-s.jpg", "4a37e9b216"], ["img/v/duane-park.jpg", "f8be2f0214"], ["img/v/ear-inn.jpg", "dc88a5708e"], ["img/v/elizabeth-street-garden.jpg", "2d90644132"], ["img/v/essx.jpg", "283e61ce43"], ["img/v/faiccos.jpg", "ffacb36461"], ["img/v/fairfax.jpg", "a5cd6a8683"], ["img/v/fedora.jpg", "e5ed347da0"], ["img/v/fellini.jpg", "a8c04f9ae4"], ["img/v/fugazi.jpg", "04eb07140a"], ["img/v/ghostbusters-firehouse.jpg", "004e2aa5f5"], ["img/v/golden-swan.jpg", "c6c178b39c"], ["img/v/goods-for-the-study.jpg", "e0bea9ac78"], ["img/v/greenwich-letterpress.jpg", "248ca6636b"], ["img/v/greenwich-locksmiths.jpg", "85f28736aa"], ["img/v/greenwich-village-comedy-club.jpg", "f1666e5481"], ["img/v/harley-s.jpg", "bd3b0c1853"], ["img/v/holywater.jpg", "326aeb207f"], ["img/v/housing-works-thrift.jpg", "8c2098986f"], ["img/v/humm.jpg", "92f65ceaec"], ["img/v/hungry-llama.jpg", "1cc2ff79ab"], ["img/v/iara.jpg", "bdeae12d39"], ["img/v/iconic-magazines.jpg", "384e38de72"], ["img/v/il-buco.jpg", "566e4f7b17"], ["img/v/jimmy-fairly.jpg", "6a6e2ddd4d"], ["img/v/joe-and-pats.jpg", "49fa370861"], ["img/v/johns-of-bleecker-street.jpg", "17a9fdcb56"], ["img/v/jon-rudnitsky.jpg", "46b5cd4a5d"], ["img/v/julianas.jpg", "45501842c3"], ["img/v/katana-kitten.jpg", "2bc7291a2a"], ["img/v/kevin-dombrowski.jpg", "c428a5e4b8"], ["img/v/khaite.jpg", "0e7f3aa446"], ["img/v/komune.jpg", "21777141d2"], ["img/v/lara-koleji.jpg", "aa389982a5"], ["img/v/lartusi.jpg", "9ebdf9b752"], ["img/v/le-fanion.jpg", "d687d0adf5"], ["img/v/le-labo.jpg", "da48b30b41"], ["img/v/le-petit-village.jpg", "a05314a7eb"], ["img/v/leisure-centre.jpg", "4019dd624f"], ["img/v/leslie-jones.jpg", "e1e5730aea"], ["img/v/lichtenstein-1997.jpg", "9b073c8924"], ["img/v/lindustrie-pizzeria.jpg", "73a9e61d72"], ["img/v/little-rubys.jpg", "484e77020a"], ["img/v/local-hoops.jpg", "e3775742db"], ["img/v/locanda-verde.jpg", "e569adaf68"], ["img/v/loeb-boathouse.jpg", "53cd008919"], ["img/v/lords.jpg", "e5a212a528"], ["img/v/luke-s.jpg", "6da669ebfe"], ["img/v/madame-matovu.jpg", "04d9386cc2"], ["img/v/mamas-too.jpg", "a8b9d07aa0"], ["img/v/marina-franklin.jpg", "f770a0b0d9"], ["img/v/mcnultys.jpg", "8cbb56ff93"], ["img/v/memento-photo-booth.jpg", "ae4fb9d2e5"], ["img/v/mezzrow.jpg", "e7e46558e7"], ["img/v/minetta-tavern.jpg", "73622ea419"], ["img/v/mure-grand.jpg", "43c5040341"], ["img/v/murrays-cheese.jpg", "a70ccd7f68"], ["img/v/new-york-studio-school.jpg", "b7b4f287c3"], ["img/v/nolita.jpg", "12bb655e94"], ["img/v/nyc-thrift.jpg", "27d63a7978"], ["img/v/overstory.jpg", "5676d6ea78"], ["img/v/palma.jpg", "bba37062da"], ["img/v/paquita.jpg", "e95f43406f"], ["img/v/pastis.jpg", "16d769e309"], ["img/v/peasant.jpg", "c7ee24cac3"], ["img/v/pop-up-grocer.jpg", "2ea3c40349"], ["img/v/porto-rico-importing-co.jpg", "41e7330155"], ["img/v/raf-s.jpg", "950e65f1df"], ["img/v/roscioli.jpg", "73c5844391"], ["img/v/saint-jardim.jpg", "d1a3d55f5f"], ["img/v/sant-ambroeus-soho.jpg", "e903982ab9"], ["img/v/scarr-s-pizza.jpg", "06112d78f4"], ["img/v/self-edge.jpg", "924e2e369b"], ["img/v/sezane.jpg", "34e297e37b"], ["img/v/silence-please.jpg", "81037665d3"], ["img/v/sip-and-guzzle.jpg", "3930dfd47b"], ["img/v/smalls-jazz-club.jpg", "be04c23675"], ["img/v/smith-and-mills.jpg", "1811de9f49"], ["img/v/st-patrick-s-old-cathedral.jpg", "86468b66cf"], ["img/v/staple-street-skybridge.jpg", "5b2d78cfe5"], ["img/v/steight.jpg", "6f613fbec0"], ["img/v/survivor-tree.jpg", "14c3c5a89a"], ["img/v/swift-hibernian-lounge.jpg", "20047e9a44"], ["img/v/tarin-thomas.jpg", "8986f27546"], ["img/v/temple-bar.jpg", "9e908c4d44"], ["img/v/the-bitter-end.jpg", "154776c819"], ["img/v/the-drawing-center.jpg", "0dc4a3b326"], ["img/v/the-little-owl.jpg", "cd5f927f43"], ["img/v/the-meadow.jpg", "3804855ab4"], ["img/v/the-oculus.jpg", "f78c911114"], ["img/v/the-stand-west-ext.jpg", "0ba111891c"], ["img/v/the-stand-west-lineup.jpg", "5da5afcc97"], ["img/v/the-stand-west-room.jpg", "ff456571e9"], ["img/v/the-vintage-twin.jpg", "81807f469d"], ["img/v/the-webster.jpg", "0b395a68c7"], ["img/v/thom-browne.jpg", "b27fa40cd4"], ["img/v/three-lives-company.jpg", "847f5be068"], ["img/v/tokio7.jpg", "b875947c47"], ["img/v/torrisi.jpg", "1ce782662c"], ["img/v/urban-backyard.jpg", "f0201fb0ed"], ["img/v/via-carota.jpg", "9cd898fa13"], ["img/v/village-underground.jpg", "5e9e91102e"], ["img/v/walker-street-galleries.jpg", "ddb1346617"], ["img/v/warren-street-hotel.jpg", "1552bbf02e"], ["img/v/waverly-inn.jpg", "8a3c8e86ce"], ["img/v/west-10-west.jpg", "0656eb9d98"], ["img/v/what-goes-around-comes-around.jpg", "95ca95b8ae"], ["img/v/whitney-museum-of-american-art.jpg", "2db44ab1f0"], ["img/v/wythe.jpg", "413a376a90"], ["img/vanguard.jpg", "058effc2a6"], ["img/vessel.jpg", "b3e1607c36"], ["img/whitney-ext.jpg", "ddf0837ceb"], ["img/woolworth.jpg", "209583fc7a"], ["img/wsp.jpg", "589bcf0a73"]];
const CORE = "core-9c8a00c8f7", MEDIA = "media", FONTS = "fonts";
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CORE).then(c => c.addAll(["./", "manifest.webmanifest", "apple-touch-icon.png", "icon-192.png"]))); });
self.addEventListener("activate", e => { e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith("core-") && k !== CORE) await caches.delete(k);
  await self.clients.claim(); })()); });

// fill the media cache in the background; a file whose hash changed is fetched again
let warming = null;
async function warm() {
  const c = await caches.open(MEDIA), have = new Map();
  const old = await c.match("__hashes"); if (old) for (const [k, v] of Object.entries(await old.json())) have.set(k, v);
  const want = new Set(FILES.map(f => f[0]));
  const abs = new Set([...want, "__hashes"].map(f => new URL(f, self.registration.scope).href));
  for (const req of await c.keys()) if (!abs.has(req.url)) await c.delete(req);
  let n = 0;
  for (const [f, h] of FILES) {
    if (have.get(f) === h && await c.match(f)) { n++; continue; }
    try { const r = await fetch(f, { cache: "no-cache" }); if (r.ok && r.status === 200) { await c.put(f, r); have.set(f, h); n++; } } catch (err) {}
  }
  await c.put("__hashes", new Response(JSON.stringify(Object.fromEntries(have))));
  // the page's Google fonts (stylesheet + the font files it names), so the type survives without signal
  try {
    const fc = await caches.open(FONTS), page = await (await caches.match("./")).text();
    for (const css of page.match(/https:\/\/fonts\.googleapis\.com\/css2[^"']+/g) || []) {
      const href = css.replace(/&amp;/g, "&"), r = await fetch(href); if (!r.ok) continue;
      const txt = await r.clone().text(); await fc.put(href, r);
      for (const u of txt.match(/https:\/\/fonts\.gstatic\.com\/[^)'"]+/g) || []) if (!await fc.match(u)) { const f = await fetch(u); if (f.ok) await fc.put(u, f); }
    }
  } catch (err) {}
  return { done: n, total: FILES.length };
}
self.addEventListener("message", e => {
  if (e.data !== "warm") return;
  warming = warming || warm().finally(() => { warming = null; });
  e.waitUntil(warming.then(r => e.source && e.source.postMessage({ offline: r, ver: "9c8a00c8f7" })));
});

async function ranged(req, res) {
  const m = /bytes=(\d*)-(\d*)/.exec(req.headers.get("range") || ""); if (!m) return res;
  const buf = await res.arrayBuffer(), size = buf.byteLength;
  const start = m[1] ? +m[1] : size - +m[2], end = m[1] && m[2] ? Math.min(+m[2], size - 1) : size - 1;
  return new Response(buf.slice(start, end + 1), { status: 206, headers: {
    "Content-Type": res.headers.get("Content-Type") || "video/mp4", "Content-Range": `bytes ${start}-${end}/${size}`,
    "Content-Length": String(end - start + 1), "Accept-Ranges": "bytes" } });
}
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET") return;
  if (req.mode === "navigate") {
    e.respondWith((async () => {
      try { const r = await fetch(req.url, { cache: "no-cache" }); if (r.ok) (await caches.open(CORE)).put("./", r.clone()); return r; } // skip the 10-min browser cache so updates show at once
      catch (err) { return (await caches.match("./")) || Response.error(); }
    })()); return;
  }
  if (url.origin === location.origin && url.pathname.includes("/img/")) {
    e.respondWith((async () => {
      const hit = await (await caches.open(MEDIA)).match(url.origin + url.pathname);
      if (hit) return req.headers.get("range") ? ranged(req, hit) : hit;
      return fetch(req);
    })()); return;
  }
  if (url.origin === location.origin) { e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req))); return; }
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith((async () => {
      const c = await caches.open(FONTS), hit = await c.match(req);
      const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }).catch(() => hit || Response.error());
      return hit || net;
    })());
  }
});
