---
---
{% assign counter = 0 %}
// strip_newlines
const documents = [
  {% for chapter in site.mobile %}
    {% unless chapter.hidden == true %}


{% assign url = chapter.url | relative_url %}


{% if url contains 'chapters' %}

    {% assign old_url = url %}

    {% comment %}
        Split the URL into parts and remove the unwanted segments.
    {% endcomment %}
    {% assign parts = old_url | split: '/' %}
    {% assign chapter_name = parts[3] %}
    {% assign screen_name = parts[4] | remove: '.html' %}
    {% assign chapter_parts = chapter_name | split: '-' %}
    {% assign chapter_number = chapter_parts[0] %}
    {% comment %}
        Reassemble the URL into the new format.
    {% endcomment %}
    {% assign url = parts[1] | prepend: '/' | append: '/' | append: chapter_name | append: '/#' | append: chapter_number | append: screen_name %}
{% endif %}


    {
      "id": {{ counter }},
      "title"    : "{{ chapter.title | escape }}",
      "url"      : "{{ url }}",
      "content" : "{{chapter.content| newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | escape }}"
    } {% unless forloop.last %},{% endunless %}

    {% endunless %}
    {% assign counter = counter | plus: 1 %}
  {% endfor %}
]



var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('content')
    console.log("constructing index")
    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});


function search(term) {
    console.log('searching for: ' + term)
    document.getElementById('searchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('searchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('searchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length==0) {
            results = idx.search(term + "*");
        }
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['content'].substring(0,160)+'...';
                document.querySelectorAll('#searchresults ul')[0].innerHTML = document.querySelectorAll('#searchresults ul')[0].innerHTML + "<li class='searchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#searchresults ul')[0].innerHTML = "<li class='searchresult'>No results found.</li>";
        }
    }
    return false;
}