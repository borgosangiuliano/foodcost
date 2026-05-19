export async function onRequest(context) {
  const slug = context.params.slug || '';
  const slugStr = Array.isArray(slug) ? slug.join('/') : slug;
  
  // Fetch la pagina menu-pubblico.html
  const url = new URL(context.request.url);
  const menuUrl = `${url.origin}/menu-pubblico.html`;
  
  const response = await fetch(menuUrl);
  let html = await response.text();
  
  // Inietta lo slug direttamente nel JS della pagina
  html = html.replace(
    "var slug = window.location.hash.replace(/^#/,'').trim();",
    `var slug = '${slugStr.replace(/'/g,"\\'")}';`
  );
  
  return new Response(html, {
    headers: { 'Content-Type': 'text/html;charset=UTF-8' }
  });
}
