# Semaine 2

Pendant la deuxième semaine, j'ai réellement commencer à écrire du code pour le travail. Je me suis principalement concentré sur
les services, les routes et la configuration des différents composants que je vais avoir de besoin. J'ai également commencé à coder 
les interfaces utilisateur de quelques pages.

## Jour 3 - 12 Avril

J'ai configuré les services pour récupérer les données dans la base de données. Je me suis occupé de la table des classements et 
des personnages. J'ai fait en sorte que, lors de la récupération d'un certain personnage, il n'y en ait qu'un seul qui soit retourné.
J'ai également vérifié le nombre total de personnages dans la base de données. Il y en a 84. Je peux donc envoyer un chiffre aléatoire
entre 1 et 84 inclusivement pour en récupérer un lors des missions.

J'ai également codé quelques interfaces pour rendre le transfert de données plus simple et rendre le code plus facile à lire.

## Jour 4 - 13 Avril

J'ai continué la configuration des services pour récupérer les données dans la base de données. Il me manquait seulement à récupérer 
les vaisseaux. Je l'ai donc fait dans le fichier pour récupérer les données des personnages, puisque les vaisseaux sont utilisés pour
les personnages. 

J'ai également configuré la page du tableau des classements. Le visuel est encore un peu rustique au moment où j'écrit cette entrée,
mais c'est seulement afin de m'assurer que je suis en mesure de récupérer les données du tableau et de les afficher. Ce qui est le cas!

## Jour 6 - 15 Avril

J'ai enfin réussi à aller chercher les données d'un personnage. Il y avait deux problèmes. Le premier étant que je n'avais pas fait 
une interface pour le vaisseau d'un ennemi. La deuxième erreur venait de la manière dont j'ai initialisé mon *ref* pour aller chercher
les données. 

Au lieu de faire ceci:
```md
<script setup>
const enemy = ref([] as unknown as Enemy[])
</script>
```

J'avais fait cela:
```md
<script setup>
const enemy = ref([] as unknown as Enemy)
</script>
```

Je n'avais pas mis de crochets([]) pour définir une liste d'ennemis. Lorsque je fait la requête pour aller chercher un personnage, 
la base de données retourne une liste avec une seule information à l'intérieur. Donc, ne pas mettre de crochets est simplement une 
erreur de type.  