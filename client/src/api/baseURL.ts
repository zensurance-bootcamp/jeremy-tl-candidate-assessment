// Dynamic API base URL for local development and CodeSpaces
function getApiBaseUrl(): string {
  // Check if we're in CodeSpaces
  if (window.location.hostname.includes('.app.github.dev')) {
    // In CodeSpaces, construct the server URL using the same domain but port 3000
    const currentUrl = new URL(window.location.href);
    const serverHostname = currentUrl.hostname.replace('-5173', '-3000');
    const serverUrl = `${currentUrl.protocol}//${serverHostname}`;
    console.log('Detected CodeSpaces environment. Server URL:', serverUrl);
    return serverUrl;
  }
  
  // Default to localhost for local development
  console.log('Using localhost for local development');
  return "http://localhost:3000";
}

export { getApiBaseUrl };