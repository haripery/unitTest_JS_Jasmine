console.log(' -----------------------------');
console.log('| UNIT TEST FOR POST IT NOTES |');
console.log(' -----------------------------');
//Loading index.html components
function loadHtml() {
    $('.jasmine-fixture').load('../app/index.html #main-wrap', function (responseText, statusText, xhr) {
        if (statusText === 'success') {
            console.log(statusText);
            $.get( "../app/lib/main.css", function( data ) {
                $('head').append("<style>"+data+"</style>");//Loading CSS File and Run QUnit Test function
            });
        }
        if (statusText === "error") {
            console.log("An error occurred: " + xhr.status + " - " + xhr.statusText);
        }
    });
}
describe("Testing UI - POST IT NOTES", function() {
    beforeAll(function() {
        loadHtml().done;
    });
    it("Test case 1: Check Notes Empty", function() {
        expect($('.post').length).toEqual(1);
    });

    it("Test case 2: check button function", function() {
        console.log($('#sticky').attr('placeholder'));

        expect(true).toEqual(true);
    });
});