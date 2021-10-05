// ---------------------------------------------------------------------------------------- Explications
// - Réalise un maximum d'exercices dans le temps imparti
// - Pour exécuter le fichier, lance la commande suivante:
//   reset ; node structures.js
// - Tip: Active ou désactive tes réponses aux exercices en changeant les valeurs dans les conditions
// - On te donne accès aux fonctions suivantes pour tout ce dojo/kata.
//   /!\ Il t'est **interdit** de toucher à ce code !

// Definir un nombre aléatoire entre 0 et 1
const random = () => {
  return Math.random();
};

// ---------------------------------------------------------------------------------------- Exercices
// Ecrire une variable contenant ton age (number) et une constante contenant ta date de naisance (string)
if (false) {
  let age = 35;
  const birthDate = `1986/05/02`;

  console.log(birthDate);
}

// Ecrire un code qui t'affiche ton prénom si ton âge est pair (... Quoi ? Pourquoi pas ?!)
if (false) {
  let age = 35;
  if (age % 2 === 0) {
    console.log('Loïc');
  }
}

// Ecrire un code qui t'affiche ton prénom si tu as moins de 27 ans, et ton nom dans le cas contraire
if (false) {
  const age = 35;
  const firstName = 'Loïc';
  const lastName = 'Brassart';

  if (age < 27) {
    console.log(firstName);
  } else {
    console.log(lastName);
  }
}

// Ecrire un code qui me copie 10 lignes de "Je ne copierai pas du code bêtement" (oui, c'est du recyclage d'exos :p)
if (false) {
  for (let i = 0; i < 10; i++) {
    console.log('Je ne copierai pas du code bêtement');
  }
}

// Ecrire une fonction getToto qui me renvoie la string "toto"
if (false) {
  function getToto() {
    return 'toto';
  }
  console.log(getToto());
}

// Ecrire une fonction getTotoArrow qui me renvoie la string "toto", en utilisant la syntaxe fléchée
if (false) {
  const getTotoArrow = () => {
    return 'toto';
  };
  console.log(getTotoArrow());
}

// Ecrire une fonction d6 qui me renvoie un nombre alétoire entre 1 et 6
if (false) {
  // for(let i=0;i<100;i++)
  console.log(Math.floor(random() * 6 + 1));
}

// Ecrire une fonction qui me renvoie la somme de deux nombres passés en paramètres
if (false) {
  function sum(a, b) {
    return a + b;
  }
  console.log(sum(3578, 98));
}

// Ecris un objet littéral (sans POO) qui te représente: nom, age, sexe, loisirs, ton langage de prédilection, une fonction pour te présenter, une fonction qui récite ton elevator speech
if (true) {
  const loic = {
    firstName: 'Loic',
    age: 35,
    sex: 'm',
    hobbies: [
      'leather crafting',
      'video game creation',
      'singing',
      'throwing axes',
    ],
    language: 'JS',
    toString: function () {
      return "Hi, I'm Loic !";
    },
    elevatorSpeech: () => {
      return "I'm a trainer and I speak a lot, blablabla";
    },
  };
  console.log(loic.age);
  console.log(loic.elevatorSpeech());
}

// Ecris un code qui te demande ton age tant que tu n'as pas plus de 18 ans. Alors, il doit afficher "Welcome to Ponyland ! \o/"
if (false) {
}

// Ecris une fonction fizzBuzz(num) qui te renvoie:
//  - "fizz" si num est un multiple de 3
//  - "buzz" si num est un multiple de 5
//  - "fizzbuzz" si num est un multiple de 3 et de 5
//  - num dans les autres cas
if (false) {
}

// Ecris une fonction square5() qui dessine un carré de 5 de côté dans ton terminal (avec des "_" et des "|", on ne demande pas du grand art)
if (false) {
}

// Ecris une fonction square(num) qui dessine un carré de num de côté dans ton terminal
if (false) {
}
