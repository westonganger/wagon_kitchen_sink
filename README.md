# Wagon (Client) Site for Locomotive CMS

## Setup

Ensure Ruby and Yarn installed. Then run the following

```
bundle install
yarn install
```
## Local Dev

To start servers:

```
yarn run watch # (laravel mix / webpack)

bundle exec wagon serve
```

I also find it easier to use some sort of application manager for this, a longtime favourite is Hotel - https://github.com/typicode/hotel

## Deploy

```
be wagon deploy <environment> -v
```

To seed the database using `/data/*.yml` files simply add the `-d` option.

Warning the `-d` option will re-write seed data even if they have previously been deleted or renamed

## Guides
- Official Docs: https://doc.locomotivecms.com/v4.0/docs
- Repository: https://github.com/locomotivecms/wagon
- Outdated but gives better n00b description of things: http://doc-v2.locomotivecms.com/making-blog/1-1-create-wagon-site
- TGV, Locomotive Code Snippets, etc: https://tgv.studiowan.fr/list?type=actions
- Web App Example: https://github.com/manuchap/Tgv/

## Bootstrap Theming
- Bootstrap 4 Full Themes - Start from any pre-designed Bootstrap 4 template:
  * https://cssauthor.com/bootstrap-templates/
  * https://startbootstrap.com/themes/
  * https://themes.getbootstrap.com/ (Paid Themes)
  * https://wrapbootstrap.com/ (Paid Themes)
  * https://w3layouts.com/ (Good quality themes, but hard to tell whats Bootstrap 4 compatible)
- Bootstrap 4 Snippets:
  * https://startbootstrap.com/snippets/
  * https://bootsnipp.com/
  * https://getbootstrap.com/docs/4.3/examples/
- Bootswatch Custom Theming - choose from any base bootswatch theme on https://bootswatch.com/

## Liquid Cheatsheet

### Liquid Guides
- Liquid Docs: https://shopify.github.io/liquid/
- Locomotive Liquid Tags: https://doc.locomotivecms.com/v4.0/docs/tags

### Drops / Global Variables

https://doc.locomotivecms.com/v4.0/docs/drops

### Locomotive Liquid Filters

```
{{ <date> | adjust_date: <number>, <unit> }} 

{{ <url> | auto_discovey_link_tag: <options> }} ### for atom feeds, https://doc.locomotivecms.com/v4.0/docs/filters#section-auto_discovery_link_tag

{{ <string> | concat: <array of strings> }}

{{ <string> | dasherize }}

{{ <object> | default: <value> }}

{{ paginate | default_pagination: next: 'Next entries', previous: 'Previous entries' }}

{{ <URI> | encode }}

{{ <markdown_code> | markdown }}
{{ <string> | textile }}

{{ product.price | money }}

{{ <string> | multi_line }}

{{ <max_integer> | random }}

{{ 'http://example.com/images/banner.png' | resize: '300x50#', optimize: 50 }} ### more options, https://doc.locomotivecms.com/v4.0/docs/filters#section-resize

{% assign random_numbers = [1,2,3] | shuffle %}
{% assign random_products = contents.products.all | shuffle %} ### content types must end in `.all`

{{ <string> | str_modulo: <index>, <modulo> }}

{{ <string> | translate(: <options>) }}

{{ <string> | underscore }}

{{ <url> | flash_tag: <options> }}
{{ <path_to_a_theme_asset_or_url> | javascript_tag }}
{{ <path_to_a_theme_asset> | javascript_url }}
{{ <path_to_a_theme_asset_or_url> | stylesheet_tag(: <media>) }}
{{ <path_to_a_theme_asset> | stylesheet_url(: <media>) }}
{{ <path_to_a_theme_image> | theme_image_tag(: <options>) }}
{{ <path_to_a_theme_image> | theme_image_url }}
{{ <url> | image_tag: <options> }}

{{ <string> | parse_date }}
{{ <string> | parse_date_time }}
{{ <date> | distance_of_time_in_words: <date_or_string> }} ### localization, https://doc.locomotivecms.com/v4.0/docs/filters#section-localization
{{ <date> | format_date: <locale> }}
{{ <date> | localized_date: <format>(, <locale>) }}

{{ <date> | beginning_of_day }}
{{ <date> | beginning_of_week }}
{{ <date> | beginning_of_month }}
{{ <date> | beginning_of_year }}
{{ <date> | end_of_day }}
{{ <date> | end_of_week }}
{{ <date> | end_of_month }}
{{ <date> | end_of_year }}
```

### Locomotive Liquid Tags

```
{% link_to <object_or_page_handle> %}
{% path_to <object_or_page_handle>(, locale: [fr|de|...], with: <page_handle>) %}

{% seo %}

{% session_assign <key> = <value> %}

{% consume api from "http://ip.jsontest.com/" %} ### for caching see, https://doc.locomotivecms.com/v4.0/docs/tags#section-consume
  My ip address is: {{ api.ip }}
{% endconsume %}

config.csrf_protection = true
{% csrf_meta %}
{% csrf_param %}

{% google_analytics <your_google_analytics_id> %}

{% locale_switcher <options> %}

{% model_form <your model>, <options> %}<your html form>{% endform_form %}

{% nav <origin>(, <options>) %} ### https://doc.locomotivecms.com/v4.0/docs/tags#section-nav

{% paginate contents.projects by 10 %}
  {% for project in paginate.collection %}
    {{ project.title }}
  {% endfor %}
{% endpaginate %}

{% with_scope author: 'John Doe' %}
  {% for post in contents.posts %}
    {{ post.title }}
  {% endfor %}
{% endwith_scope %}
```

### Locomotive V3 Editable Elements

```
{% capture menu_enabled %}{% editable_control "menu", options: 'true=Yes,false=No', hint: "Tell if the menu is displayed or not", priority: 1 %}
  false
{% endeditable_control %}{% endcapture %}

{% if menu_enabled == 'true' %}
  DISPLAYED
{% endif %}

{% editable_text <name>(, <options>) %}<default value>{% endeditable_text %}

{% editable_file <name>(, <options>) %}<default value>{% endeditable_file %}

{% editable_file 'banner' %}{{ 'banner.png' | theme_image_url }}{% endeditable_file %}

{% editable_model <model_name>(, <options>) %}
...
{% endeditable_model %}
```

### JS Actions

https://doc.locomotivecms.com/v4.0/docs/introduction

```
{% authorize "<user account content type slug>", "<page handle to redirect to>" %} 
{% authorize "accounts", "sign_in" %}

redirectTo
logging

sendEmail

allEntries
findEntry
createEntry
updateEntry

getSessionProp
setSessionProp

getProp ### variables from current context
setProp

callAPI
```
