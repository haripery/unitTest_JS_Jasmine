var UiFramework = (function() {
    function input(name, isAutoFocused) {
      var element = document.createElement("input");
      element.name = name;
      element.autofocus = isAutoFocused;
      return element;
    }

    function div(id, color) {
      var element = document.createElement("div");
      element.id = id;
      element.style.backgroundColor = color;
      return element;
    }

    return {
      input: input,
      div: div
    }
  })();