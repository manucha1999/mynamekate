// ทำให้แอปเปิดได้แม้ไม่มีอินเทอร์เน็ต
// เมื่อออนไลน์จะโหลดเวอร์ชันล่าสุดเสมอ (เนื้อหาใหม่จึงขึ้นทันที) และเก็บสำเนาไว้ใช้ตอนออฟไลน์
const CACHE = "bookapp-v5";
const CORE = ["./", "./index.html", "./content.js", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png", "./data/sassadee/chud1-01.js", "./data/sassadee/chud2-01.js", "./data/sassadee/chud3-01.js", "./data/sassadee/chud4-01.js", "./data/sassadee/chud5-01.js", "./data/sassadee/chud6-01.js", "./data/sassadee/law100-01.js", "./data/sassadee/law100-02.js", "./data/sassadee/p1000-01.js", "./data/sassadee/p1000-02.js", "./data/sassadee/p1000-03.js", "./data/sassadee/p1000-04.js", "./data/sassadee/p1000-05.js", "./data/sassadee/p1000-06.js", "./data/sassadee/p1000-07.js", "./data/sassadee/p1000-08.js", "./data/sassadee/p1000-09.js", "./data/sassadee/p1000-10.js", "./data/sassadee/p1000-11.js", "./data/sassadee/p1000-12.js", "./data/sassadee/p1000-13.js", "./data/sassadee/p1000-14.js", "./data/sassadee/p1000-15.js", "./data/sassadee/p1000-16.js", "./data/sassadee/p1000-17.js", "./data/sassadee/p1000-18.js", "./data/sassadee/p1000-19.js", "./data/sassadee/p1000-20.js", "./data/sassadee/p500-01.js", "./data/sassadee/p500-02.js", "./data/sassadee/p500-03.js", "./data/sassadee/p500-04.js", "./data/sassadee/p500-05.js", "./data/sassadee/p500-06.js", "./data/sassadee/p500-07.js", "./data/sassadee/p500-08.js", "./data/sassadee/p500-09.js", "./data/sassadee/p500-10.js", "./data/sassadee/p600a-01.js", "./data/sassadee/p600a-02.js", "./data/sassadee/p600a-03.js", "./data/sassadee/p600a-04.js", "./data/sassadee/p600a-05.js", "./data/sassadee/p600a-06.js", "./data/sassadee/p600b-01.js", "./data/sassadee/p600b-02.js", "./data/sassadee/p600b-03.js", "./data/sassadee/p600b-04.js", "./data/sassadee/p600b-05.js", "./data/sassadee/p600b-06.js", "./data/sassadee/prac200-01.js", "./data/sassadee/prac200-02.js", "./data/sassadee/prac200-03.js", "./data/sassadee/prac200-04.js"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // ฟอนต์จาก Google: ใช้ของในเครื่องก่อน
  if (url.hostname.includes("fonts.googleapis.com") || url.hostname.includes("fonts.gstatic.com")) {
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }))
    );
    return;
  }

  if (url.origin !== location.origin) return;

  // ไฟล์ของแอป: ลองโหลดจากเน็ตก่อน ถ้าไม่มีเน็ตใช้ของในเครื่อง
  e.respondWith(
    fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copy));
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match("./index.html")))
  );
});
