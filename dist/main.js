!(function(e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var c = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(c.exports, c, c.exports, n), (c.l = !0), c.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var c in e)
          n.d(
            a,
            c,
            function(t) {
              return e[t];
            }.bind(null, c)
          );
      return a;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 0));
})([
  function(e, t, n) {
    'use strict';
    function a() {
      document.addEventListener(
        'click',
        function(e) {
          const t = document.getElementById('contact-container'),
            n = document.getElementById('menu-container'),
            a = document.querySelector('.textHome');
          'home' === e.target.className
            ? ((t.style.display = 'none'),
              (n.style.display = 'none'),
              (a.style.display = 'inherit'))
            : 'menu' === e.target.className
            ? ((a.style.display = 'none'),
              (t.style.display = 'none'),
              (n.style.display = 'inherit'))
            : 'contact' === e.target.className &&
              ((a.style.display = 'none'),
              (t.style.display = 'inherit'),
              (n.style.display = 'none'));
        },
        !1
      );
    }
    n.r(t),
      document.getElementById('content').appendChild(
        (function() {
          const e = document.createElement('div');
          return (e.className = 'main-container'), e;
        })()
      ),
      (function() {
        const e = document.createElement('div');
        (e.className = 'tabscontainer'),
          document.querySelector('.main-container').appendChild(e),
          ['Home', 'Menu', 'Contact'].forEach(t => {
            const n = document.createElement('button');
            n.addEventListener('click', a),
              (n.textContent = t),
              n.classList.add(t.toLowerCase()),
              e.appendChild(n);
          });
      })(),
      (function() {
        const e = document.querySelector('.main-container'),
          t = document.createElement('div'),
          n = document.createElement('h1'),
          a = document.createElement('p'),
          c = document.createElement('p'),
          d = document.createElement('p'),
          i = document.createElement('p'),
          o = document.createElement('p');
        (a.textContent = '-variety of dishes'),
          (c.textContent = '-Fresh eats'),
          (d.textContent = '-Live Music'),
          (o.textContent = 'Open everydays from 10 am with a familar ambient'),
          (o.id = 'openText'),
          (i.id = 'speciality-text'),
          (i.textContent =
            'Try the Speciality of the house Tostada de Ceviche'),
          (t.className = 'textHome'),
          (n.textContent = 'SeaFood Hernandez Restaurant'),
          t.appendChild(n),
          t.appendChild(a),
          t.appendChild(c),
          t.appendChild(d),
          t.appendChild(i),
          t.appendChild(o),
          e.appendChild(t),
          (document.body.style.height = '100px');
      })(),
      (function() {
        const e = document.querySelector('.main-container'),
          t = document.createElement('div');
        (t.id = 'contact-container'), e.appendChild(t);
        const n = document.createElement('p');
        n.id = 'contact-header';
        const a = document.createElement('p');
        a.id = 'contact-zip';
        const c = document.createElement('p');
        c.id = 'contact-email';
        const d = document.createElement('p');
        (n.textContent = 'Direction: Constituyentes Esquina con Allende'),
          (d.textContent = 'Phone: +52 47 41 14 23 52'),
          (d.id = 'contact-phone'),
          (a.textContent = 'ZipCode: 47420'),
          (c.textContent = 'seafood@hernandez.com'),
          (c.id = 'contact-email'),
          t.appendChild(n),
          t.appendChild(d),
          t.appendChild(a),
          t.appendChild(c);
      })(),
      (function() {
        const e = document.querySelector('.main-container'),
          t = document.createElement('div'),
          n = document.createElement('div'),
          a = document.createElement('div'),
          c = document.createElement('div'),
          d = document.createElement('div'),
          i = document.createElement('div'),
          o = document.createElement('div'),
          l = document.createElement('div'),
          m = document.createElement('div'),
          r = document.createElement('div'),
          s = document.createElement('div'),
          p = document.createElement('div'),
          u = document.createElement('div'),
          h = document.createElement('p'),
          C = document.createElement('p'),
          y = document.createElement('p'),
          E = document.createElement('p'),
          f = document.createElement('p'),
          g = document.createElement('p'),
          x = document.createElement('p'),
          v = document.createElement('p'),
          N = document.createElement('p');
        (t.id = 'menu-container'),
          (n.className = 'gridImages-container'),
          (a.className = 'gridImages-container'),
          (c.className = 'gridImages-container'),
          (d.className = 'card-image-container'),
          (h.className = 'images-text'),
          (C.className = 'images-text'),
          (y.className = 'images-text'),
          (E.className = 'images-text'),
          (f.className = 'images-text'),
          (g.className = 'images-text'),
          (x.className = 'images-text'),
          (v.className = 'images-text'),
          (N.className = 'images-text'),
          (d.id = 'img-cocktail-shrimp'),
          (h.textContent = 'Shrimp Cocktail'),
          (C.textContent = 'Octopus Cocktail'),
          (y.textContent = 'Ostions in Shell'),
          (E.textContent = 'Tostada de Ceviche'),
          (g.textContent = 'Tostada de Octopus'),
          (f.textContent = 'Tostada de Shrimps'),
          (x.textContent = 'Fried fish with potatos'),
          (v.textContent = 'Fried Fish'),
          (N.textContent = 'Soup de Shrimps'),
          (i.className = 'card-image-container'),
          (i.id = 'img-cocktail-octopus'),
          (o.className = 'card-image-container'),
          (o.id = 'img-ostions'),
          (l.className = 'card-image-container'),
          (l.id = 'tostada-ceviche'),
          (m.className = 'card-image-container'),
          (m.id = 'tostada-pulpo'),
          (r.className = 'card-image-container'),
          (r.id = 'tostada-camaron'),
          (s.className = 'card-image-container'),
          (s.id = 'fried-fish2'),
          (p.className = 'card-image-container'),
          (p.id = 'fried-fish'),
          (u.className = 'card-image-container'),
          (u.id = 'shrimp-soup'),
          e.appendChild(t),
          t.appendChild(n),
          t.appendChild(a),
          t.appendChild(c),
          n.appendChild(d),
          n.appendChild(i),
          n.appendChild(o),
          a.appendChild(l),
          a.appendChild(m),
          a.appendChild(r),
          c.appendChild(s),
          c.appendChild(p),
          c.appendChild(u),
          d.appendChild(h),
          i.appendChild(C),
          o.appendChild(y),
          l.appendChild(E),
          m.appendChild(g),
          r.appendChild(f),
          s.appendChild(x),
          p.appendChild(v),
          u.appendChild(N),
          (document.body.style.height = '1150px');
      })(),
      (function() {
        const e = document.getElementById('contact-container'),
          t = document.getElementById('menu-container'),
          n = document.querySelector('.textHome');
        (e.style.display = 'none'),
          (t.style.display = 'none'),
          (n.style.display = 'inherit');
      })();
  }
]);
