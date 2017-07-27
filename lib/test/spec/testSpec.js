console.log(' -----------------------------');
console.log('| UNIT TEST FOR POST IT NOTES |');
console.log(' -----------------------------');

describe("Testing UI - POST IT NOTES", function() {
    beforeAll(function() {
      var body = document.getElementsByTagName("body")[0];
      var div = UiFramework.div("div1", "red");
      body.appendChild(div);
      div.appendChild(UiFramework.input("input1", true));
      div.style.display='none';
    });

    it("focuses the search input field when the page loads", function() {
      expect(document.getElementsByTagName("input")[0].autofocus).toEqual(true);
    });

    it("checks for the background color of the div which contains the input elements", function() {
      expect(window.getComputedStyle(document.getElementById("div1")).backgroundColor).toEqual("rgb(255, 0, 0)");
    });
});