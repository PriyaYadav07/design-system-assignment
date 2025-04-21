
export const getAriaProps = (options: {
    disabled?: boolean;
    invalid?: boolean;
    required?: boolean;
  }) => {
    const { disabled, invalid, required } = options;
    return {
      'aria-disabled': disabled ?? false,
      'aria-invalid': invalid ?? false,
      'aria-required': required ?? false,
    };
  };
  
  export const focusElementById = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.focus();
  };
  
 
  export const trapFocus = (element: HTMLElement) => {
    const focusableSelectors = [
      'a[href]',
      'area[href]',
      'button:not([disabled])',
      'input:not([disabled]):not([type="hidden"])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'iframe',
      'object',
      'embed',
      '[contenteditable]',
      '[tabindex]:not([tabindex="-1"])',
    ];
  
    const focusableElements = Array.from(
      element.querySelectorAll<HTMLElement>(focusableSelectors.join(','))
    );
  
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];
  
    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
  
      if (e.shiftKey) {
     
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
    
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
  
    element.addEventListener('keydown', handleFocusTrap);
  };
  