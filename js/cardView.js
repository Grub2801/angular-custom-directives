angular.module('CardsAgainstAssembly')
  .directive('card', cardView);

function cardView() {
  var directive = {};

// E is element. An HTML element, like <card></card>
// A is attribute. Like <div card="something"></div>
// C is class. Like <div class="card"></div>
// M is comment. Like <!-- directive: card -->

    directive.restrict = 'E';
    directive.templateUrl = '_cardView.html';
    directive.scope = {
      question: '@'
    };

    return directive;
}