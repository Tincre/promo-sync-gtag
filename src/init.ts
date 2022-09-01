export function loadGtag(
  w: any,
  d: any,
  s: any,
  l: any,
  i: any,
  resolve: any,
  reject: any
) {
  const srcRoot = 'https://sync.tincre.dev/gtm.js';
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = `${srcRoot}?id=` + i + dl;
  j.parentNode.insertBefore(j, f);
  j.addEventListener('load', resolve);
  j.addEventListener('error', reject);
}
