import '@fancyapps/ui/dist/fancybox/fancybox.css';
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/github.css';
import { MarkedExtension, RendererObject, Tokens } from 'marked';
import { markedHighlight } from 'marked-highlight';

import { tagPurify } from '@/utils';

export const MARKED_HIGHLIGHT_CONFIG = markedHighlight({
  langPrefix: 'hljs language-',
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
});

export const MARKED_RENDERER_CONFIG: RendererObject = {
  code(code: Tokens.Code, language?: string) {
    const validLanguage = hljs.getLanguage(language || '') ? language : 'plaintext';

    return `
      <div class="relative group">
        <button
          class="hover:cursor-pointer
          absolute right-2 top-2 opacity-0
          group-hover:opacity-100 transition-opacity
          duration-200 px-2 py-1 rounded text-sm
          bg-white/10 hover:bg-white/20 text-gray-400
          hover:text-gray-300"
          onclick="(function(btn){
            const code = btn.parentElement.querySelector('code').textContent;
            if (navigator.clipboard && window.isSecureContext) {
              navigator.clipboard.writeText(code).then(() => {
                btn.textContent = '复制成功！';
                setTimeout(() => btn.textContent = '复制', 1000);
              });
            } else {
              const textArea = document.createElement('textarea');
              textArea.value = code;
              textArea.style.position = 'fixed';
              textArea.style.left = '-999999px';
              document.body.appendChild(textArea);
              textArea.select();
              try {
                document.execCommand('copy');
                btn.textContent = '复制成功！';
                setTimeout(() => btn.textContent = '复制', 1000);
              } catch (error) {
                console.error('Copy failed', error);
                btn.textContent = '复制失败！';
                setTimeout(() => btn.textContent = '复制', 1000);
              } finally {
                textArea.remove();
              }
            }
          })(this)">
          复制
        </button><pre><code class="hljs language-${validLanguage}">${code.text}</code></pre>
      </div>`;
  },
  codespan({ text }) {
    const escaped = tagPurify(text);
    return `<code class="inline-code">${escaped}</code>`;
  },
  html({ text }) {
    return tagPurify(text);
  },
  image({ href, title, text }) {
    if (href?.match(/\.(mp4|webm|ogg)$/i)) {
      return `
        <a 
          href="${href}" 
          data-fancybox="gallery"
          data-type="video"
        >
          <video class="w-full rounded-lg">
            <source src="${href}" type="video/${href.split('.').pop()}" />
          </video>
        </a>
      `;
    }
    return `
      <a 
        href="${href}" 
        data-fancybox="gallery"
      >
        <img 
          src="${href}" 
          alt="${text || ''}" 
          title="${title || ''}"
          class="cursor-zoom-in rounded-lg"
          loading="lazy"
        />
      </a>
    `;
  },
  link({ href, title, tokens }) {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" title="${title}">${tokens?.[0]?.raw}</a>`;
  },
  heading({ text, depth }) {
    const id = text.toLowerCase().replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, '-');
    return `<h${depth} id="${id}">${text}</h${depth}>`;
  },
};

export const MARKED_CONFIG: MarkedExtension = {
  gfm: true,
  breaks: true,
  renderer: MARKED_RENDERER_CONFIG,
};
