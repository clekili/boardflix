# Boardflix

[Heroku link][heroku]
[Trello link][trello]

[heroku]: https://boardflix.herokuapp.com/
[trello]: https://trello.com/b/qV47bwZp

## Minimum Viable Product

Boardflix is a web application inspired by Netflix and Vevo built using Ruby on Rails and React/Redux. By the end of initial development period(11-Nov-2016) it is aimed to have at minimum the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosing on Heroku
- [ ] Sign up, login, guest login
- [ ] Production README
- [ ] Videos
- [ ] Searching Videos
- [ ] Comments, ratings, view counts
- [ ] User profiles

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)
**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Videos Model, API, and components (2 days)
**Objective:** Videos can be created, updated, deleted and viewed.

### Phase 3: Categories (1 day)
**Objective:** Videos are grouped by categories

### Phase 4: Comments (2 days)
**Objective:** Comments can be create, updated, deleted and viewed.

### Phase 5: Search (1 day)
**Objective:** Be able to search videos by name

### Phase 6: User Profile (1 day)
**Objective:** Users can view and edit their profile

### Phase 7: Pagination / infinite scroll for videos(1 day)
**Objective:** Add infinite scroll to videos indexed

### Bonus Features
* [ ] tags
* [ ] user feed
* [ ] user watchlist
