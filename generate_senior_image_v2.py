import requests
import os
import sys

def generate_image(prompt, filename):
    # The developer prompt says LOVABLE_API_KEY is available as a secret.
    # The gateway usually expects a POST to /api/v1/ai/image with a prompt.
    # I'll try to use the correct domain if the previous one was wrong, 
    # but the logs showed a Cloudflare challenge, which means I might need to try a different approach
    # or ensure I'm using the right tool.
    
    # Wait, the instructions say: 
    # "Front-load platform capabilities: Use Lovable Cloud and Lovable AI Gateway by default."
    # The tool 'ai_gateway--create' says it ensures the key exists.
    # I will try to use the gateway URL correctly or check if there's a specific tool.
    
    api_key = os.environ.get("LOVABLE_API_KEY")
    if not api_key:
        print("LOVABLE_API_KEY not found")
        sys.exit(1)
    
    # Try the alternate endpoint or just one more time with a slightly different setup
    url = "https://api.lovable.ai/v1/ai/image"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    payload = {
        "prompt": prompt,
        "aspect_ratio": "1:1"
    }
    
    print(f"Generating image for prompt: {prompt}")
    try:
        response = requests.post(url, headers=headers, json=payload, timeout=60)
        if response.status_code == 200:
            image_url = response.json().get("url")
            if image_url:
                img_data = requests.get(image_url).content
                with open(f"src/assets/{filename}", 'wb') as f:
                    f.write(img_data)
                print(f"Successfully saved {filename}")
            else:
                print("No URL in response")
                sys.exit(1)
        else:
            print(f"Error: {response.status_code} - {response.text}")
            sys.exit(1)
    except Exception as e:
        print(f"Exception: {e}")
        sys.exit(1)

if __name__ == "__main__":
    generate_image(
        "Portrait of a smiling distinguished elderly man with white hair and white beard in a modern luxury barbershop, sophisticated style, golden hour lighting, high resolution photography",
        "service-senior-new.jpg"
    )
