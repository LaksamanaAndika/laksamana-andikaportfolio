/**
 * Image storage utility using IndexedDB + localStorage fallback.
 * Allows storing high-resolution original images without hitting localStorage size quotas.
 */

const DB_NAME = 'andika_portfolio_db';
const STORE_NAME = 'profile_images';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveOriginalImage(key: 'hero_png' | 'about_jpg', dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(dataUrl, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {
    // Fallback to localStorage if IndexedDB fails
    try {
      localStorage.setItem(`andika_${key}`, dataUrl);
    } catch (e) {
      console.warn('Storage quota exceeded:', e);
    }
  }

  // Dispatch custom event to notify all components
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('andika_image_updated', { detail: { key, dataUrl } }));
  }
}

export async function getOriginalImage(key: 'hero_png' | 'about_jpg'): Promise<string | null> {
  try {
    const db = await openDB();
    const result = await new Promise<string | null>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
    if (result) return result;
  } catch {
    // Try localStorage fallback
  }

  if (typeof window !== 'undefined') {
    const local = localStorage.getItem(`andika_${key}`);
    if (local) return local;
  }

  return null;
}
