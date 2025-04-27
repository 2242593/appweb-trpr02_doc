# REVUE FINALE

J'ai décidé de faire une revue finale de mon code dans laquelle je vais revoir tout mon code et le commenter. Dire ce qui a été mal fait, 
dire ce que j'aurais pu améliorer, ce que je n'aime pas, etc.

## ORGANISATION DES FICHIERS

De manière globale, j'aime bien l'organisation de mes fichiers. J'ai mis la barre de navigation dans son propre composant, j'ai mis
le formulaire de création de joueurs dans son propre composant, j'ai mis le message pour avertir le joueur avant d'abandonner une partie
dans son propre composant et j'ai mis les informations des personnages(joueur et ennemis) dans leur propre composant. Cette prganisation 
de fichiers permet une grande réutilisabilité du code et réduit grandement la lourdeur dans le code. 

Cependant, il y a une chose qui me tracasse beaucoup. C'est l'organisation de mon fichier *GameView.vue*. Il est beaucoup trop
chargé, et ça le rend un peu plus difficile à lire. J'aurais beaucoup voulu le couper en différents composants, car je sens qu'il
y aurait quelques testes à faire avec certaines fonctionnalitées implémentées dans ce fichier, mais je ne savais pas trop c'est quoi
que j'aurais dû mettre où. 

## CODE

Le seul endroit qui est nécéssaire à commenter est le fichier *GameView.vue*. Premièrement, le code présent dans ce fichier n'est pas 
nécéssairement mauvais. Le vrai problème, c'est le code *HTML* et *VUE* utilisé pour afficher toutes mes données selon les conditions. 
J'ai utilisé des *v-if* et *v-else-if* pour afficher les bonnes cartes contenant des boutons d'actions dépendamment de l'état du joueur 
et de l'ennemi. Le découpage est donc pas très bon, il y a un peu trop de conditions et ça alourdie le code de manière générale. 

Il y a une dernière chose qui me fait peur, et c'est le fait que, selon moi, j'ai peut-être utilisé un peu trop de *ref*.

## FONCTIONNALITÉS DU JEU

Malheureusement, je n'ai pas eu le temps ni la force d'implémenter toutes les fonctionnalités de ce jeu. Il me manque uniquement la 
fonctionnalité pour ajouter un joueur au tableau des classements lors d'une victoire. 

Je n'ai pas non plus réussi à implémenter la fonctionnalité pour réparer un vaisseau de la manière que je voulais. Je n'ai pas 
réussi à intégrer une barre pour permettre à l'utilisateur de réparer le nombre de pourcentage qu'il souhaite selon le montant 
d'argent qu'il a sur lui. 

Pour le reste des fonctionnalités, tel que l'affichage des informations des personnages ou même pour la modification des points de vie
et des crédits d'un joueur, je suis plutôt fier de ce que j'ai fait. 

## INTERFACE UTILISATEUR

L'interface utilisateur a une très bonne base à mon avis. J'ai réussi à faire en sorte qu'avant que tout ce qui touche à la base de données
s'affiche, tel que le formulaire ou la table des classements, affiche un logo de chargement. Cela empêche les utilisateurs de se demander s'il
y a un bogue. Il est organisé, propre et symétrique. 

Cependant, je déteste le fait que l'interface utilisateur ne soit pas fini. Le menu principal est vide, la barre de navigation est trop
simple à mon goût, la page de la table des classements est trop simple. Mon site manque beaucoup de personnalité et de style... Je n'aime
vraiment pas ça.

## TESTS

Les tests ne sont pas super non plus... Je test ce qui est pour moi le plus important, tel que la barre de navigation, le message
de confirmation et la page d'affichage des informations des personnages. Cependant, je n'ai pas réussi à trouver comment faire pour
tester ce que je doit tester pour le formulaire. Je sais comment tester lorsqu'un bouton émet un événement lorsqu'on clique dessus, 
mais ce n'est pas ce qui arrive dans mon formulaire. C'est la balise *form* qui contient un événement qui appelle une fonction 
onMounted qui empêche le formulaire de s'envoyer... Je n'ai simplement pas trouvé comment faire un test avec ça. 

## CONCLUSION

Ce projet est un projet non fini manquant que quelques fonctionnalités, qui manque beaucoup de personnalité et de style, qui n'a 
pas assez de tests.