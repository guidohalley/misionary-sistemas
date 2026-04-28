export const THEME_STORAGE_KEY = "misionary-theme" as const

export type StoredTheme = "light" | "dark"

/** Inline, sin saltos: ejecutar antes del primer paint para evitar flash. */
export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var t=localStorage.getItem(k);var d=document.documentElement;if(t==="light"){d.classList.remove("dark");return;}if(t==="dark"){d.classList.add("dark");return;}if(window.matchMedia("(prefers-color-scheme: dark)").matches){d.classList.add("dark");}else{d.classList.remove("dark");}}catch(e){}})();`
