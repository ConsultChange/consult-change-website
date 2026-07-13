#!/bin/bash
# Sprzatanie repo Consult Change — usuwa pliki NIEUZYWANE przez zadna strone HTML.
# Uruchom w katalogu repo: bash cleanup.sh && git commit -m "chore: remove unused assets"
git rm -f "ChatGPT Image Sep 23, 2025, 01_43_54 PM.png" "ChatGPT Image Sep 23, 2025, 12_40_33 PM.png" "ChatGPT Image Sep 24, 2025, 12_51_01 PM.png"
git rm -f anthony-tyrrell-Bl-LiSJOnlY-unsplash.jpg austin-chan-ukzHlkoz1IE-unsplash.jpg benjamin-child-GWe0dlVD9e0-unsplash.jpg brad-starkey-5qFGBb4yUyk-unsplash.jpg dylan-mcleod-U-axb2IWo-k-unsplash.jpg jess-bailey-q10VITrVYUM-unsplash.jpg towfiqu-barbhuiya-Jxi526YIQgA-unsplash.jpg
git rm -f your-photo1.jpg your-photoAI.jpg "patryk enhanced.png" "Patryk Black and White.png"
git rm -f "Consult Change Logo Design.png" "Consult change_White.png" "Consult change_sole logo_white.png" Consult_change_White_4x_sharp_clean.png "Logo napis.png"
git rm -f vkgs-typography-local.zip vkgs-typography.zip website_file.gitignore.txt consult_change_palette.png
git rm -f favicons/.DS_Store
# OPCJONALNE — odkomentuj swiadomie:
# git rm -rf Archive/                      # stare wersje stron (masz je i tak w historii gita)
# git rm -rf Certifikaty/                  # certyfikat PDF z danymi osobowymi — nie musi byc publiczny
# git rm -f Canvas_Ai_in_change.html       # jesli nigdzie nie podlinkowany
echo "Gotowe. Sprawdz: git status"
