import { openDB } from 'idb';

async function initDb() {
  const db = await openDB('text-editor', 1, {
    upgrade(db) {
      // Create a store named 'content' if it doesn't already exist
      if (!db.objectStoreNames.contains('content')) {
        db.createObjectStore('content');
      }
    },
  });
  return db;
}

export async function saveContent(key, value) {
  const db = await initDb();
  const tx = db.transaction('content', 'readwrite');
  const store = tx.objectStore('content');
  await store.put(value, key);
  await tx.done;
}

export async function getContent(key) {
  const db = await initDb();
  return db.transaction('content').objectStore('content').get(key);
}
