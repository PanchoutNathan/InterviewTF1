# Test technique - Repoduction d'un carousel 
## Stack 
J'ai vu que vous utilisiez React, Typescript, Apollo et Tailwind alors j'ai donc utilisé les mêmes technologies.
Sauf le SSR, mais je sais utiliser Next.js par exemple.

## Questions pré-réalisation
- **Est-ce que je recode le comportement d'un carrousel ?** Je pense que c'est totalement inutile,
  Un développeur ne doit pas réinventer une feature juste pour son plaisir à moins qu'il y ait des limitations en interne.
- Au vu des datas, on remarque que les titres sont longs, il faut donc rajouter un elipsis sur 2 lignes (grâce à un plugin
  Tailwind).
- Je vois que c'est du graphQL, je n'ai jamais fait donc faut prévoir un petit temps de lecture pour au moins savoir faire les queries- À quoi sert le bouton + de la maquette dans le cartouche d'un programme ?



## Améliorations possibles
- Une petite erreur s'est glissée dans le naming de la miniature en anglais, il est marqué "thumnail" au lieu de "thumbnail".
- Ajouter un joli loader au chargement des programmes
- Ne pas charger tous les programmes d'un coup pour éviter une baisse de performance côté client et garder une navigation
  fluide / Utiliser une liste virtuelle afin de ne pas avoir 100+ objets qui se chargent d'un coup.
- Ajouter une recherche pour trouver le programme plus vite ou savoir si un programme existe.
- Utiliser le bouton '+' dans un cartouche pour pouvoir ajouter ce programme dans ses favoris par exemple.
