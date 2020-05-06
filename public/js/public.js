$(function() {

    $('#create-btn').on('click', async function(e) {
        e.preventDefault();
        try {
            await $.ajax('/api/burger', {
                type: 'POST',
                data: { burger: $('#new-burger').val().trim() }
            });
            location.reload();
        }
        catch (err) {
            throw err;
        }
    });
    
    $('.devour-btn').on('click', async function(e) {
        e.preventDefault();
        try {
            await $.ajax(`api/burger`, {
                type: 'PUT',
                data: { 'id': $(this).attr('id') }
            });
            location.reload();
        }
        catch (err) {
            throw err;
        };
    });
});