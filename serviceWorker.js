/* declare the assets to store in the cache */
/* staticDevCoffee is the name of the cache */
const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "index.html",
  "css/style.css",
  "js/app.js",
  "images/coffee1.jpg",
  "images/coffee2.jpg",
  "images/coffee3.jpg",
  "images/coffee4.jpg",
  "images/coffee5.jpg",
  "images/coffee6.jpg",
  "images/coffee7.jpg",
  "images/coffee8.jpg",
  "images/coffee9.jpg",
]
/* attach a listener to self, which is the service worker itself */
/* it enables us to listen to life cycle events and do something in return */
/* the service worker has several life cycles, and one of them is the install event */
/* it runs when a service worker is installed */
/* triggered as soon as the worker executes */
/* it's only called once per service worker */
/* waitUntil() - waits for the action to finish */
/* open() - create our cache by passing its name as an argument to caches.open( */
/* then it returns a promise which helps us store our assets in the cache with cache.addAll(assets) */
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
/* respondWith() - to prevent the browser's default response */
/* it returns a promise because the fetch action can take time to finish */
/* once the cache ready, we apply the caches.match(fetchEvent.request). It will check if something in the cache matches fetchEvent.request */
/* by the way, fetchEvent.request is just our array of assets */
/* then, it returns a promise. And finally, we can return the result if it exists or the initial fetch if not */
/* Now 1-1, our assets can be cached and fetched by the service worker which increases the load time of our images quite a bit */
/* 1-2, most important, it makes our app available in offline mode */
/* 2-1 But a service worker alone can't do the job. We need to register it in our project */
// service worker成功注册，并且用户浏览了另一个页面或者刷新了当前的页面，service worker将开始接收到fetch事件。
// 拦截网络请求并使用缓存，缓存命中，返回缓存资源，否则返回一个实时从网络请求fetch的结果
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
