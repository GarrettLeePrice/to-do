function Tasks(task) {
  this.taskToDo = task;
}


$(document).ready(function(){
  $("form#things-to-do").submit(function(event){
    event.preventDefault();

    var inputTask = $("input#new-thing").val();

    var newInputTask = new Tasks(inputTask);


    $("ul#list").append("<li class='removeLi'><span class='list-to-do'>" + newInputTask.taskToDo + "</span></li>");
    $(".removeLi").last().click(function(){
      $("#show-tasks").show();
      $("#show-tasks h2").text(newInputTask.taskToDo);
      $(".taskList").text(newInputTask.taskToDo);


    });

    $("input#new-thing").val("");

  });
  $("#remove").click(function(){
    // $(".removeLi").first().remove();
    $(".removeLi").hide();
  });
});
