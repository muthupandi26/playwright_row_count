$(document).ready(function() {
    // Add row
    let count = $(".table tbody tr").length;
    console.log(count)
    $("#add-row").click(function() {
        let firstname = $("#firstname").val();
        let lastname = $("#lastname").val();
        
        let email = $("#email").val();
        $(".table tbody tr").last().after(
            '<tr>'+
                '<td><input type="checkbox" id="select-row"></td>'+
                '<td>'+firstname+'</td>'+
                '<td>'+lastname+'</td>'+
                '<td>'+email+'</td>'+
            '</tr>'
        );

        let tableSize = $(".table tbody tr").length;
        // console.log(tableSize)
        
        if(tableSize > count){
            console.log(count);
            count = tableSize;
            console.log(count)
        }
        
        document.getElementById("count_value").innerHTML = tableSize;
        
    })

    // select all checkbox
    $("#select-all").click(function() {
        let isSelected = $(this).is(":checked");
        if(isSelected){
            $(" .table tbody tr").each(function() {
                $(this).find('input[type="checkbox"]').prop('checked',true);
            })
        }
        else {
            $(".table tbody tr").each(function() {
                $(this).find('input[type="checkbox"]').prop('checked',false);
            })
        }
    });

    // Remove row
    $("#remove-row").click(function () {
        $(".table tbody tr").each(function() {
            let isChecked = $(this).find('input[type="checkbox"]').is(":checked");
            let tableSize = $(".table tbody tr").length;
            // console.log(tableSize)
            if(tableSize == 1){
                alert("All rows cannot be delete");
            }
            else if(isChecked) {
                $(this).remove();
            }
        });
        let tableSize = $(".table tbody tr").length;
        console.log(tableSize)
        document.getElementById("count_value").innerHTML = tableSize;
    });
    
})