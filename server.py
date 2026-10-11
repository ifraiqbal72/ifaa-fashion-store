"""
IFAA Fashion House - Local Development Server
Zero-dependency server that runs instantly using Python 3.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class IFAAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def guess_type(self, path):
        # Ensure JSX and JS files are served with proper MIME types
        if path.endswith('.jsx'):
            return 'text/javascript'
        if path.endswith('.js'):
            return 'text/javascript'
        return super().guess_type(path)

    def end_headers(self):
        # Enable CORS and disable caching for instant updates
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run_server():
    global PORT
    while PORT < 3010:
        try:
            with socketserver.TCPServer(("", PORT), IFAAHandler) as httpd:
                url = f"http://localhost:{PORT}"
                print("=" * 60)
                print("  [*] IFAA Fashion House Storefront is live!")
                print("=" * 60)
                print(f"  URL:       {url}")
                print(f"  Directory: {DIRECTORY}")
                print("  Press Ctrl+C to stop the server anytime.")
                print("=" * 60)
                
                # Open browser automatically if not in quiet mode
                try:
                    webbrowser.open(url)
                except Exception:
                    pass
                
                httpd.serve_forever()
        except OSError:
            PORT += 1

if __name__ == "__main__":
    try:
        run_server()
    except KeyboardInterrupt:
        print("\nServer gracefully stopped. Thank you for using IFAA!")
        sys.exit(0)
