$(document).ready(function () {
    var searchInput = $('#search');
    var searchResults = $('#search-results');

    searchInput.on('keyup', function () {
        var searchTerm = $(this).val().trim();
        if (searchTerm !== '') {
            $.ajax({
                url: '(link unavailable)',
                data: {
                    q: searchTerm
                },
                dataType: 'json',
                success: function (response) {
                    var results = response.items;
                    searchResults.empty();
                    $.each(results, function (index, item) {
                        searchResults.append('<li>' + item.login + '</li>');
                    });
                    searchResults.show();
                }
            });
        } else {
            searchResults.hide();
        }
    });

    searchResults.on('click', 'li', function () {
        var selectedValue = $(this).text();
        searchInput.val(selectedValue);
        searchResults.hide();
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.search-bar').length) {
            searchResults.hide();
        }
    });
});