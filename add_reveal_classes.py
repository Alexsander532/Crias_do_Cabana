import re
import os

# Files to enhance
files = [
    'index.html',
    'um-museu-colaborativo.html',
    'o-programa-sofia.html',
    'o-projeto-artes-de-curar-rezar-brincar.html',
    'o-aglomerado-cabana-do-pai-tomas.html',
    'conte-a-sua-historia.html',
    'colecoes-artes.html',
    'guarda-de-congo-sao-benedito.html'
]

for filename in files:
    if not os.path.exists(filename):
        print(f"Skip: {filename} not found")
        continue
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # 1. Add reveal class to major sections (keep existing classes)
    content = re.sub(
        r'(<section[^>]*class="[^"]*)"',
        lambda m: m.group(0).replace('"', ' reveal"', 1) if ' reveal' not in m.group(0) else m.group(0),
        content
    )
    
    # 2. Add reveal to h1, h2, h3 headings
    content = re.sub(
        r'(<h[1-3][^>]*class="[^"]*)"',
        lambda m: m.group(0).replace('"', ' reveal reveal-fade-up"', 1) if ' reveal' not in m.group(0) else m.group(0),
        content
    )
    
    # 3. Add hover-zoom to images
    content = re.sub(
        r'(<img[^>]*(?<![/\s])>)',
        lambda m: m.group(0).replace('<img ', '<img class="hover-zoom" ', 1) if 'class="hover-zoom"' not in m.group(0) else m.group(0),
        content,
        flags=re.MULTILINE
    )
    
    # 4. Add reveal-fade-up to paragraphs in content areas
    content = re.sub(
        r'(<p[^>]*(?<!reveal[^"]*?)>)',
        lambda m: m.group(0).replace('<p ', '<p class="reveal reveal-fade-up" ', 1) if 'class="reveal' not in m.group(0) else m.group(0),
        content
    )
    
    if content != original_content:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Enhanced: {filename}")
    else:
        print(f"No changes: {filename}")

print("\nDone!")
