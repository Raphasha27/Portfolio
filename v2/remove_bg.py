from rembg import remove
from PIL import Image
import os

input_path = "C:\\Users\\rapha\\.gemini\\antigravity\\scratch\\Portfolio\\v2\\src\\assets\\profile_new.png"
output_path = "C:\\Users\\rapha\\.gemini\\antigravity\\scratch\\Portfolio\\v2\\src\\assets\\profile_new_transparent.png"

input_image = Image.open(input_path)
output_image = remove(input_image)
output_image.save(output_path)
print("Background removed successfully!")
