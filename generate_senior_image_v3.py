import requests
import os
import sys

def generate_image(prompt, filename):
    # Use the Lovable AI Gateway via the pre-configured secret
    api_key = os.environ.get("LOVABLE_API_KEY")
    if not api_key:
        print("LOVABLE_API_KEY not found")
        sys.exit(1)
    
    # Correct Lovable AI Gateway endpoint for image generation
    url = "https://lovable.dev/api/ai/image"
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
            result = response.json()
            image_url = result.get("url")
            if image_url:
                img_data = requests.get(image_url).content
                output_path = f"src/assets/{filename}"
                with open(output_path, 'wb') as f:
                    f.write(img_data)
                print(f"Successfully saved {filename} to {output_path}")
            else:
                print(f"No URL in response: {result}")
                sys.exit(1)
        else:
            print(f"Error: {response.status_code} - {response.text}")
            sys.exit(1)
    except Exception as e:
        print(f"Exception: {e}")
        sys.exit(1)

if __name__ == "__main__":
    generate_image(
        "Distinguished older man with white hair and beard, luxury barbershop setting, warm lighting, gold accents, professional portrait",
        "service-senior-new.jpg"
    )
