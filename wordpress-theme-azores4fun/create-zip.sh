#!/bin/bash
# Script para criar arquivo ZIP do tema WordPress Azores4fun

echo "Criando arquivo ZIP do tema Azores4fun..."

# Criar ZIP
cd ..
zip -r azores4fun-wordpress-theme.zip wordpress-theme-azores4fun/ -x "*.git*" "*.DS_Store" "*create-zip.sh"

echo "✓ Arquivo criado: azores4fun-wordpress-theme.zip"
echo "✓ Pronto para fazer upload no WordPress!"
