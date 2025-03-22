export const COPY_CLASS_NAME = 'code-copy-btn';

const useCopy = () => {
  const copy = async function (this: HTMLButtonElement) {
    const codeElement = this.nextElementSibling?.querySelector('code');
    if (codeElement) {
      const code = codeElement.textContent || '';

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(code);
        } else {
          // 回退方案
          const textArea = document.createElement('textarea');
          textArea.value = code;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }

        // 更新按钮文本
        const btn = this as HTMLButtonElement;
        btn.textContent = '复制成功！';
        setTimeout(() => {
          btn.textContent = '复制';
        }, 1000);
      } catch (error) {
        console.error('Copy failed', error);
        const btn = this as HTMLButtonElement;
        btn.textContent = '复制失败！';
        setTimeout(() => {
          btn.textContent = '复制';
        }, 1000);
      }
    }
  };

  const registerCopy = () => {
    const copyButtons = document.querySelectorAll(`.${COPY_CLASS_NAME}`);
    copyButtons.forEach((button) => {
      button.addEventListener('click', copy);
    });
  };

  const unregisterCopy = () => {
    const copyButtons = document.querySelectorAll(`.${COPY_CLASS_NAME}`);
    copyButtons.forEach((button) => {
      button.removeEventListener('click', copy);
    });
  };

  return {
    registerCopy,
    unregisterCopy,
  };
};

export default useCopy;
