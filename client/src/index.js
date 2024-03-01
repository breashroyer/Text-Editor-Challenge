// Import the functions from the database module for IndexedDB operations
import { saveContent, getContent } from './database';

// Assuming your text editor element has the ID 'editor'
const editor = document.getElementById('editor');

// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then(registration => {
          console.log('Service Worker registered! Scope: ', registration.scope);
        })
        .catch(err => {
          console.log('Service Worker registration failed: ', err);
        });

      // After ensuring the service worker is registered, try to load any saved content
      // This ensures that the load attempt is made after the service worker registration is attempted
      getContent('editor-content').then(content => {
        if (content) {
          editor.value = content;
        }
      }).catch(err => console.error('Failed to load content from DB:', err));
    });
}

// Save content when the user navigates away from the page
window.addEventListener('beforeunload', () => {
  saveContent('editor-content', editor.value);
});
