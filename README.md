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
- Code Snippets, etc: https://tgv.studiowan.fr/list?type=actions

## Liquid Guides
- Liquid Docs: https://shopify.github.io/liquid/
- Locomotive Liquid Tags: https://doc.locomotivecms.com/v4.0/docs/tags

## Site BackerUpper Gems
- https://github.com/SuperSchek/locomotivecms-site-backupper
- https://github.com/lcx/loco-backup

## Wagon Site Templates
* Wagon Sites Manager Template: https://github.com/manuchap/My-Locomotive-Sites
* Foodee Restaurant Template: https://github.com/manuchap/Foodee
* Pluton Business Theme: https://github.com/manuchap/Pluton
* Ecwid Shop Template: https://github.com/manuchap/Ecwid
* Knackworks Website Template: https://github.com/potluckcatering/knack
* Missionary Site Template: https://github.com/bulletshot60/missionary-site-template
* The Human Kind Project (Bootstrap 3) Site Template: https://github.com/devs-for-change/human_kind_projecct
* Two New Natives Site Template: https://github.com/ianmilliken/twonewnatives
* Attache (Semantic UI) Template: https://github.com/conroywhitney/attache
* Bootstrap 3 Template: https://github.com/manuchap/bootstrap3_switcher
* Foundation 6 Template: https://github.com/dustb0wl/locomotive-foundation6

## Bootstrap Theming
- Bootstrap 4 Snippets:
  * https://startbootstrap.com/snippets/
  * https://bootsnipp.com/
  * https://getbootstrap.com/docs/4.3/examples/
- Bootstrap 4 Full Themes - Start from any pre-designed Bootstrap 4 template:
  * https://cssauthor.com/bootstrap-templates/
  * https://startbootstrap.com/themes/
  * https://themes.getbootstrap.com/ (Paid Themes)
  * https://wrapbootstrap.com/ (Paid Themes)
  * https://w3layouts.com/ (Good quality themes, but hard to tell whats Bootstrap 4 compatible)
- Bootswatch Custom Theming - choose from any base bootswatch theme on https://bootswatch.com/
