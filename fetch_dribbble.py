import urllib.request
import re

url = 'https://dribbble.com/shots/19871911-Landing-Designer-portfolio'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        content = resp.read().decode('utf-8', errors='ignore')
        print(f"Success! Status: {resp.status}, Content Length: {len(content)}")
        
        # Extract title
        title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
        if title_match:
            print("Title:", title_match.group(1))
            
        # Extract og:image
        og_image = re.search(r'<meta\s+property=[\'"]og:image[\'"]\s+content=[\'"](.*?)[\'"]', content, re.IGNORECASE)
        if og_image:
            print("OG Image:", og_image.group(1))
            
        # Extract og:description
        og_desc = re.search(r'<meta\s+property=[\'"]og:description[\'"]\s+content=[\'"](.*?)[\'"]', content, re.IGNORECASE)
        if og_desc:
            print("OG Desc:", og_desc.group(1))
            
        # Extract any shot media / images
        shot_images = re.findall(r'https://cdn\.dribbble\.com/userupload/[^"\'\s]+', content)
        print("Found shot images:", shot_images[:5])
except Exception as e:
    print("Error:", e)
