class %DIRECTIVE_NAME%Controller {
  constructor($element) {
    console.log($element);
  }
}

export function %DIRECTIVE_NAME%() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: '%DIRECTIVE_TEMPLATE_URL%',
    controller: %DIRECTIVE_NAME%Controller,
    controllerAs: '%DIRECTIVE_NAME%',
    bindToController: true
  }
}