angular.module('CardsAgainstAssembly')
  .directive('scores', scoresView);

function scoresView() {
  var directive = {};

// E is element. An HTML element, like <card></card>
// A is attribute. Like <div card="something"></div>
// C is class. Like <div class="card"></div>
// M is comment. Like <!-- directive: card -->

    directive.restrict = 'E';
    directive.templateUrl = '_scoresView.html';
    directive.replace = true;
    directive.scope = {
      participants: '='
    };

    return directive;
}