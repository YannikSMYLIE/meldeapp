// CSS Inkludieren
import "./style.scss";

// App
import $ from "jquery";
import {Course} from "./classes/Course";
import {Student} from "./classes/Student";

const course = new Course();

$('#form').on('submit', function() {
    // Namen zum Kurs hinzufügen
    const value = String($('#studentNames').val());
    const lines = value.split('\n');
    lines.forEach((name) => {
        course.addStudent(name);
    });

    // Ansicht anpassen
    update();
    $('#form').fadeOut().queue(function() {
        $('#table').removeClass("d-none").hide().fadeIn();
        $(this).dequeue();
    });

    return false;
});

/**
 * Listener fürs Melden
 */
$('#table').on('click', '.student .melden', function() {
    const tr = $(this).closest(".student");
    const id = Number(tr.attr("data-id"));
    course.melden(id);
    update();
    return false;
});

/**
 * Aktualisiert die Tabelle
 */
function update() : void {
    const tbody = $('#table tbody');
    tbody.html("");

    const schueler = course.getStudents();
    schueler.forEach((student : Student) => {
        tbody.append(
            "<tr class='student' data-id='" + student.getId() + "'>" +
            "  <td>" +
            "    <a href='#' class='btn btn-primary melden'>Melden</a>" +
            "  </td>" +
            "  <td>" + student.getName() + "</td>" +
            "  <td>" + student.getMeldungen() + "</td>" +
            "</tr>"
        )
    });
}