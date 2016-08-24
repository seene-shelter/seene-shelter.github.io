# seene-shelter

## Idea

One-page Web 2.0 project without with Flickr for backend and social part (followers, comments, likes).

Original JavaScript viewer with small changes can be used to show content.

## Progress

| What                           | Status  | Notes                                        |
| -------------------------------|---------|----------------------------------------------|
| Design the web app             | TODO    |
| Viewer to work separately      | DONE    | http://seene-shelter.github.io/viewer/?short_code=DiSjfC
| Viewer to accept export format | TODO    |
| Implement the web app          | TODO    |
| Get good domain name           | DONE    | github.io can host stuff for now, no need to pay or register |
| Host the web app               | DONE    | http://seene-shelter.github.io/              |
| Dropbox API                    | DONE    | [investigations](t/dropbox/readme.md) [test](http://seene-shelter.github.io/dropbox/)                       |
| Flickr API                     | 20%    | [test](http://seene-shelter.github.io/t/flickr/)!                |

## Design outline

Useful hint: "seene://capture" opens Seene app in capture mode (if it was open before; if not -- just opens the app)

User opens http://seene-shelter.github.io/

First time: presented with a dialogue, requesting permission to see his feed.
Then: sees a feed of stuff from people she follows, can like/comment (for now by going to Flickr site/mobile app).

## Viewer options

* original viewer, patched to support JPG+XMP
* https://www.clicktorelease.com/code/depth-player/ (already supportes JPG+XMP)
* new, based on same three.js
* http://depthy.me (uses self-created 3d library pixi.js, and tricky webgl filtering -- potentially best for battery)

Currently incline towards clicktorelease viewer, it supports
* taps
* mouse 
* but does NOT support: gyro (must be done to replicate "the feeling". maybe can be borrowed from original viewer OR depthy)

### Storage options

Flickr is chosen because it is 
* TODO
* fantastic API, with comments and likes

Others
* Dropbox
** sufficiently well-known, people might already have an account there
** free account of 2Gb is enough for about 2K of Seenes, older stuff can be removed or moved to separate account
** has good API
** has public links; https://www.dropbox.com/sh/1h3zy9jm4nftelm/AABAdhug5I_8NO8z5-N1lpVOa
** has comments on public links web and in mobile app (one need Dropbox account to write a comment)
** has convenient ways of uploading from mobile device (including auto-upload)
* Twitter (no; strips depth)
* Tumblr (no; strips depth)
* Google Photo (no; strips depth)
* Google Drive (no; no comments on public links; exif OK; generates thumbnails, has commends and star APIs) https://drive.google.com/drive/folders/0B8GthpIZqpZrdGtXbU1wTl9BT0E?usp=sharing
* Yandex Disk (no; no comments on public photos, only on folder itself; exif OK; generates thumbnails, has English interface; has app; integrated with Yandex Photos) http://yadi.sk/d/qxKZvTyRuKaVC
* Microsoft OneDrive (no; no comments on public links) https://1drv.ms/f/s!AuF-koJa9h5LgQp3aB5vemXNd1dE
* https://Box.com (no; no comments on public links) https://app.box.com/s/sql7s997mhogwbjufss4wd2in6ro05my
* https://iCloud.com (no; no public links and no comments)
* https://mega.nz (no; no iOS app; not investigated further)
* https://cloud.mail.ru/ (no; no comments at all; no documented API (hacks present); 15Gb)
* http://www.opendrive.com/ (no; no comments)
