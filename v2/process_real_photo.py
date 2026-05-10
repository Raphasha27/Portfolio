from PIL import Image, ImageDraw
import numpy as np

src = r"c:\Users\nelso\OneDrive\Desktop\portfolio\v2\src\assets\koketso_raw.png"
dst = r"c:\Users\nelso\OneDrive\Desktop\portfolio\v2\src\assets\koketso_transparent.png"

try:
    img = Image.open(src).convert("RGBA")
    width, height = img.size
    
    # Create a mask that is solid in the center and fades at the edges
    # This preserves the person while removing the background edges
    mask = Image.new('L', (width, height), 0)
    draw = ImageDraw.Draw(mask)
    
    # Draw a large ellipse that covers the person
    # Adjust coordinates to fit the person (usually center-top to center-bottom)
    padding_x = width * 0.05
    padding_y = height * 0.05
    draw.ellipse([padding_x, padding_y, width-padding_x, height-padding_y], fill=255)
    
    # Blur the mask significantly for soft edges
    from PIL import ImageFilter
    mask = mask.filter(ImageFilter.GaussianBlur(radius=20))
    
    # Use the mask to set the alpha channel
    data = np.array(img)
    alpha = np.array(mask)
    
    # Combine original alpha if any
    data[:,:,3] = alpha
    
    result = Image.fromarray(data, 'RGBA')
    
    # Crop to subject
    bbox = result.getbbox()
    if bbox:
        result = result.crop(bbox)
        
    result.save(dst, 'PNG')
    print(f"Success: {dst}")
except Exception as e:
    print(f"Error: {e}")
