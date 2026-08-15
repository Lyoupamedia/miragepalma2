import requests
import os
import sys

def generate_image(prompt, filename):
    api_key = os.environ.get("LOVABLE_API_KEY")
    if not api_key:
        print("LOVABLE_API_KEY not found")
        sys.exit(1)
    
    url = "https://lovable.ai/api/v1/ai/image"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    payload = {
        "prompt": prompt,
        "aspect_ratio": "1:1"
    }
    
    print(f"Generating image for prompt: {prompt}")
    response = requests.post(url, headers=headers, json=payload)
    
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

if __name__ == "__main__":
    generate_image(
        "Close-up portrait of a distinguished older man with white hair and a well-groomed white beard getting a professional haircut in a luxury barbershop, cinematic lighting, gold and dark amber tones, professional photography",
        "service-senior-new.jpg"
    )
