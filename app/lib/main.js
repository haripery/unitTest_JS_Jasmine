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
};

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
};

$(document).ready(function(){
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
    var button1= makeButton({id: "pink2", label: "+"});
    var button2= makeButton({id: "orange2", label: "+"});
    var button3= makeButton({id: "cyan2", label: "+"});

    $('#colorButton').append(button1);
    $('#colorButton').append(button2);
    $('#colorButton').append(button3);
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

    //Delete Notes Function
    function deleteNotes(buffer){
            $(buffer).parent().remove();
    }