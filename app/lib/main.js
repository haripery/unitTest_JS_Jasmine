/**
 * Created by hari on 6/12/17.
 */

//GLOBALVARIABLES
var sticyColor= "yellow";
var notesNumber = null;

var UiFramework = (function() {
    function input(name, isAutoFocused) {
      var element = document.createElement("input");
      element.name = name;
      element.autofocus = isAutoFocused;
      return element;
    }

    function div(id, cssClass) {
      var element = document.createElement("div");
      element.id = id;
      element.classList.add(cssClass);
      return element;
    }

    function Button(options){
    var button = $("<button>");
    button.attr("id", options.id);
    button.attr("type", "button");
    button.attr("class", options.buttonClass);
    button.text(options.label);
    return button;
}

    return {
      input: input,
      div: div
    }
  })();

var makeButton = function(options){
    var button = $("<button>");
    button.attr("id", options.id);
    button.attr("type", "button");
    button.attr("class", options.buttonClass);
    button.text(options.label);
    return button;

var makeInput = function(options){
    var input = $("<input>");
    input.attr("id", options.id);
    input.attr("type", "text");
    input.attr("placeholder", options.placeholder);
    input.attr("name",options.name);
    input.attr("class", options.inputClass);
    input.text(options.label);
    input.attr("maxlength",options.maxLength);
    return input;
};

$(document).ready(function(){
    //making Variables for Jquery selectors
    var $colorbutton = $('#colorButton');
    var $inp =$('#inp')

    //Creating DOM elements
    var pink= makeButton({id: "pink", label: "+"});
    var orange= makeButton({id: "orange", label: "+"});
    var cyan= makeButton({id: "cyan", label: "+"});

    var stickyinput = makeInput({id:"sticky",placeholder:"Add New Notes",name:"stickyinput",class:"stickyclass",maxlength:"17"});

    //Append the DOM elements to the respective IDs
    $colorbutton.append(pink);
    $colorbutton.append(orange);
    $colorbutton.append(cyan);

    $inp.append(stickyinput);


    //Select Color

    $("button").on('click',function(event){
        configureButton(this);
    });

    //Add Note
    $(".fa-plus").click(function(){
        addNotes();
    });

    //Delete Note
    $("ul").on("click", "#deletesticky", function(event){
        deleteNotes(this);
    });
    //

});


    //Configure Color Button Function
    function configureButton(buffer){
            if (buffer.id==="cyan") {
                sticyColor= "cyan";
                cyanClick();
            }
            else if (buffer.id==="orange") {
                sticyColor= "orange";
                orangeClick();
            }
            else if (buffer.id==="pink") {
                sticyColor= "pink";
                pinkClick();
            }
            else if(buffer.id==="yellow") {
                sticyColor = "yellow";
            }
    }

    //Pick Notes color Function
    function  orangeClick(){
        $("input[name=stickyinput]").css("background-color", "orange");//orange color applied to the Notes
    }
    function  pinkClick(){
        $("input[name=stickyinput]").css("background-color", "pink");//pink color applied to the Notes
    }
    function  cyanClick(){
        $("input[name=stickyinput]").css("background-color", "rgb(0,255,255)");//Cyan color applied to the Notes
    }
//Delete Notes Function
    function deleteNotes(buffer){
            $(buffer).parent().remove();
    }

    //Adding Notes Function
    function addNotes(){
        var newSticky = $("input[name='stickyinput']").val();
            notesNumber+=1;
            //create a new li and add to ul
            $("#boardNotes").append("<li class='post' id="+"notes"+notesNumber+"><span id='deletesticky'><i class='fa fa-trash-o'></i></span> "+newSticky+"  "+"</li>");
            $("#notes"+notesNumber).css("background-color",sticyColor);
            $("#sticky").val("");
            $("#sticky").css("background-color", "yellow");
            sticyColor="yellow";
    }

