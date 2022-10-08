export   function addMeta(page_meta){
    document.title = page_meta.title;
      Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
        page_meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');
  
        Object.keys(tagDef).forEach(key => {
          tag.setAttribute(key, tagDef[key]);
        });
        tag.setAttribute('data-vue-router-controlled', '');
  
        return tag;
      }).forEach(tag => document.head.appendChild(tag));
    }



