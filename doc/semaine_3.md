# Semaine 3

Pendant cette semaine, j'ai travaillé sur le déroulement du jeu, sur les paramètres à passer dans les
routes afin de faire fonctionner mon application, sur le visuel et sur l'organisation des composants
et des autres fichiers.

Voici ce qu'il me restait à faire au début de cette semaine:

->Validation du formulaire;
->Organisation de fichiers;
->Restructurer le projet en différents composants;
->La vue pour le jeu;
->Le déroulement du jeu;
->Le style visuel du site;
->Les tests unitaires.

## Jour 1 - 17 Avril

J'ai travaillé sur la validation du formulaire en premier. J'ai dû utiliser ChatGPT afin de m'aider 
pour faire ce code. Je n'ai pas tout ajouté ce qu'il m'a donné. Seulement ce qui est en lien avec la 
validation. Le code qui n'avait aucun lien avec mon projet, je l'ai modifié ou tout simplement retiré.

J'ai également utilisé ChatGPT pour un problème de redirection vers la page du jeu. Il fallait simplement 
que je mette un *@submit.prevent=""* sur la balise *form* au lieu de le faire directement sur le bouton 
avec un *@click*.

## Jour 3 - 19 Avril

J'ai enfin réussi à faire passer deux paramètres pour les informations du joueur via vue-router. Pour faire court, j'ai
décidé de séparer le formulaire de création de personnages de mon *HomeView* en un composants nommé *PlayerForm.vue*.
J'ai pensé que de faire en sorte que le formulaire de création de personnage serait mieux afin d'éviter de trop
remplir le fichier *HomeView*. Donc, je peux styliser le formulaire et la page principale sans devoir me soucier
du nombre de lignes. De plus, je trouve cela beaucoup plus sécuritaire.

J'ai également ajouté un fichier *.ts* pour créer un enum pour l'expérience. 

## Jour 4 - 20 Avril

Je viens de rajouter une fonction afin d'attaquer et une fonction afin de générer un nombre aléatoire dans un interval
donné. Malheureusement, elle n'est pas superbe. 

Les conditions pour savoir si l'ennemi touche le joueur ou non sont plutôt répétitives. Dans chacune d'elles, 
je vérifie l'expérience de l'ennemi (qui affecte le pourcentage de touche), et ensuite, je vérifie si le nombre généré 
(l'intervale dépend de l'expérience) est plus petit ou égal à sept. Cela donne quatre conditions qui ne sont pas facile des
plus faciles à lire...

## Jour 6 - 22 Avril

J'ai fait quelques petites modifications dans le déroulement du jeu. J'ai modifier quelques variables. 


## Jour 7 - 23 Avril

Il ne me reste qu'à enregistrer le joueur vainceur dans la table des rankings et j'ai officiellement terminé la navigation.
Lorsque le joueur quitte la page de jeu avant d'avoir terminer ses cinq missions, une fenêtre de confirmation s'affiche. Pour 
être tout à fait honnête, j'ai copier-coller le composant vue *ConfirmModal* déjà fait dans un atelier précédent. Puisqu'il n'y
a rien qui change dans une fenêtre de confirmation (à part le style), je me suis dit que ce n'est pas si grave. 

J'ai également réussi à faire en sorte que lorsque la vie d'un ennemi atteint 0, un nouveau apparait. Je me suis également servi
de ChatGPT afin de m'aider à comprendre comment je devrais le faire. Tout ce qui a changé est que le code qui était dans le *onMounted*
a été déplacé dans une fonction *const*. 

Cette fonction est appelée dans le onMounted au chargement de la page et elle est également appelée quand un ennemi meurt. Ça, c'est 
moi qui l'ait fait.

## Jour 8 (Jour bonus 1/4) - 24 Avril

J'ai continué le déroulement du jeu et j'ai fait quelques modifications visuelles.

## Jour 11 (Jour bonus 4/4) - 27 Avril

J'ai décidé d'arrêter le code principal. Je n'avais plus de temps avant la remise. Il fallait que je fasse mes tests. C'est donc ce que 
j'ai fait. J'ai fait les tests unitaires. Par la suite, j'ai fait une grosse revue de tout mon code.

