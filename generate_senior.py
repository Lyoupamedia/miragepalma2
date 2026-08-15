import requests
import os
import sys

def generate_image(prompt, filename):
    # Using the standardized Lovable Cloud Image Generation Gateway
    # This requires the LOVABLE_API_KEY from the sandbox secrets.
    api_key = os.environ.get("LOVABLE_API_KEY")
    if not api_key:
        print("LOVABLE_API_KEY not found in environment secrets.")
        sys.exit(1)
    
    # Endpoint for Lovable Cloud AI Gateway
    url = "https://lovable.dev/api/v1/ai/image"
    
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
        # Step 1: Request image generation
        response = requests.post(url, headers=headers, json=payload, timeout=60)
        
        # If we hit a 302 or redirect, the tool 'curl' might handle it, but here we expect JSON
        if response.status_code == 200:
            result = response.json()
            image_url = result.get("url")
            
            if image_url:
                # Step 2: Download the generated image
                img_response = requests.get(image_url)
                if img_response.status_code == 200:
                    output_path = f"src/assets/{filename}"
                    with open(output_path, 'wb') as f:
                        f.write(img_response.content)
                    print(f"Successfully saved image to {output_path}")
                else:
                    print(f"Failed to download image from {image_url}")
                    sys.exit(1)
            else:
                print(f"No image URL found in response: {result}")
                sys.exit(1)
        else:
            print(f"Generation failed with status {response.status_code}: {response.text}")
            # Fallback check: sometimes the sandbox tools expect a different endpoint or auth method.
            # However, I will try to use the most common patterns first.
            sys.exit(1)
            
    except Exception as e:
        print(f"An error occurred: {e}")
        sys.exit(1)

if __name__ == "__main__":
    # prompt for a "biggest man" (distinguished senior)
    prompt = "Hyper-realistic cinematic portrait of a distinguished elderly man with a very long, thick white beard and white hair, vintage luxury barbershop background, warm golden and amber lighting, professional photography style, 8k resolution"
    generate_image(prompt, "service-senior-new.jpg")
