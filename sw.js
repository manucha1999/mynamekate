// ทำให้แอปเปิดได้แม้ไม่มีอินเทอร์เน็ต
// เมื่อออนไลน์จะโหลดเวอร์ชันล่าสุดเสมอ (เนื้อหาใหม่จึงขึ้นทันที) และเก็บสำเนาไว้ใช้ตอนออฟไลน์
const CACHE = "bookapp-v4";
const CORE = ["./", "./index.html", "./content.js", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png", "./data/sassadee/chud1-01.json", "./data/sassadee/chud2-01.json", "./data/sassadee/chud3-01.json", "./data/sassadee/chud4-01.json", "./data/sassadee/chud5-01.json", "./data/sassadee/chud6-01.json", "./data/sassadee/law100-01.json", "./data/sassadee/law100-02.json", "./data/sassadee/p1000-01.json", "./data/sassadee/p1000-02.json", "./data/sassadee/p1000-03.json", "./data/sassadee/p1000-04.json", "./data/sassadee/p1000-05.json", "./data/sassadee/p1000-06.json", "./data/sassadee/p1000-07.json", "./data/sassadee/p1000-08.json", "./data/sassadee/p1000-09.json", "./data/sassadee/p1000-10.json", "./data/sassadee/p1000-11.json", "./data/sassadee/p1000-12.json", "./data/sassadee/p1000-13.json", "./data/sassadee/p1000-14.json", "./data/sassadee/p1000-15.json", "./data/sassadee/p1000-16.json", "./data/sassadee/p1000-17.json", "./data/sassadee/p1000-18.json", "./data/sassadee/p1000-19.json", "./data/sassadee/p1000-20.json", "./data/sassadee/p500-01.json", "./data/sassadee/p500-02.json", "./data/sassadee/p500-03.json", "./data/sassadee/p500-04.json", "./data/sassadee/p500-05.json", "./data/sassadee/p500-06.json", "./data/sassadee/p500-07.json", "./data/sassadee/p500-08.json", "./data/sassadee/p500-09.json", "./data/sassadee/p500-10.json", "./data/sassadee/p600a-01.json", "./data/sassadee/p600a-02.json", "./data/sassadee/p600a-03.json", "./data/sassadee/p600a-04.json", "./data/sassadee/p600a-05.json", "./data/sassadee/p600a-06.json", "./data/sassadee/p600b-01.json", "./data/sassadee/p600b-02.json", "./data/sassadee/p600b-03.json", "./data/sassadee/p600b-04.json", "./data/sassadee/p600b-05.json", "./data/sassadee/p600b-06.json", "./data/sassadee/prac200-01.json", "./data/sassadee/prac200-02.json", "./data/sassadee/prac200-03.json", "./data/sassadee/prac200-04.json"];

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
