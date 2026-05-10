from PIL import Image
import numpy as np

src = r"c:\Users\nelso\OneDrive\Desktop\portfolio\v2\src\assets\profile_dark_bg.png"
dst = r"c:\Users\nelso\OneDrive\Desktop\portfolio\v2\src\assets\profile_transparent.png"

img = Image.open(src).convert("RGBA")
data = np.array(img, dtype=np.float32)

r = data[:,:,0]
g = data[:,:,1]
b = data[:,:,2]

# The background is a uniform very dark green-black (#050d12 area)
# Person wears black clothes which are also dark, but the BG is EXTRA dark
# Strategy: detect background by checking if pixel is very dark AND has slight green tint
# Background pixels tend to be: R<40, G<60, B<40 (dark greenish black)
# Person's black clothes: R<40, G<40, B<40 (neutral very dark)

# Calculate how "background-like" each pixel is
# Background: very dark with a slight green push (g slightly higher than r and b)
brightness = (r + g + b) / 3.0

# Only make pixels transparent if they are EXTREMELY dark (true background)
# threshold = 30 — only the very deepest blacks
threshold_hard = 30
threshold_soft_end = 55

alpha = np.ones(brightness.shape, dtype=np.float32) * 255

# Fully transparent for absolute blackest pixels
alpha[brightness < threshold_hard] = 0

# Soft fade zone
mask = (brightness >= threshold_hard) & (brightness < threshold_soft_end)
alpha[mask] = ((brightness[mask] - threshold_hard) / (threshold_soft_end - threshold_hard)) * 255

data[:,:,3] = alpha

result = Image.fromarray(data.astype(np.uint8), 'RGBA')
result.save(dst, 'PNG')
print("Done — transparent PNG saved.")
